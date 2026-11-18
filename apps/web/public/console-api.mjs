async function read(response) {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw Object.assign(new Error(payload.code || payload.error || 'Video analysis is unavailable.'), {
      status: response.status, payload,
    });
  }
  return payload;
}

async function sendToS3(signed, file, signal, fetchImpl) {
  if (!signed.url || !signed.upload_id || (!signed.fields && !signed.headers)) {
    throw new Error('Invalid upload response.');
  }
  let body = file;
  if (signed.fields) {
    body = new FormData();
    for (const [name, value] of Object.entries(signed.fields)) body.append(name, value);
    body.append('file', file);
  }
  const upload = await fetchImpl(signed.url, {
    method: signed.fields ? 'POST' : 'PUT', body, signal, headers: signed.fields ? undefined : signed.headers,
  });
  if (!upload.ok) throw new Error('Video upload to S3 failed.');
}

export async function consoleRequest(path, { body, signal } = {}) {
  const response = await fetch(path, {
    method: body === undefined ? 'GET' : 'POST',
    body: body === undefined ? undefined : JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', 'X-Argus-Console': '1' },
    cache: 'no-store', signal,
  });
  return read(response);
}

const jobs = '/api/async-inference/jobs';
const legacyId = /^c[a-z0-9]{24}$/;
export const legacyJob = id => legacyId.test(id);

export async function uploadConsoleVideo(file, signal, onUpload, guarded) {
  if (!guarded) {
    const meta = await consoleRequest('/api/upload-url', {
      body: { fileType: '.mp4', size: file.size }, signal,
    });
    if (!meta.url || !legacyJob(meta.analysisId)) throw new Error('Invalid upload response.');
    onUpload();
    const uploaded = await fetch(meta.url, {
      method: 'PUT', headers: { 'Content-Type': meta.contentType }, body: file, signal,
    });
    if (!uploaded.ok) throw new Error('Video upload to S3 failed.');
    return meta.analysisId;
  }
  const signed = await consoleRequest('/api/async-inference/uploads', { body: {}, signal });
  if (!/^[a-f0-9]{32}$/.test(signed.upload_id)) throw new Error('Invalid upload identifier.');
  onUpload();
  await sendToS3(signed, file, signal, fetch);
  return signed.upload_id;
}

export async function submitConsoleJob(entry, signal) {
  const legacy = legacyJob(entry.id);
  const result = await consoleRequest(legacy ? '/api/sentiment-inference' : jobs, {
    body: { upload_id: entry.id, title: entry.title, spaceId: entry.space, spaceName: entry.spaceName }, signal,
  });
  if (!legacy && result.job_id !== entry.id) throw new Error('Invalid job response.');
  return result;
}

export function getConsoleJob(id, signal) {
  const path = legacyJob(id) ? '/api/console/analyses/' : jobs + '/';
  return consoleRequest(path + id, { signal }).catch(error => {
    if (error.status === 422 && error.payload?.status === 'BLOCKED') return error.payload;
    throw error;
  });
}

export async function analyzeVideo(file, apiKey, { baseUrl = '', guarded = true, signal,
  onProgress = () => {}, fetchImpl = fetch, wait = (ms) => new Promise(resolve => setTimeout(resolve, ms)) } = {}) {
  if (!apiKey) throw new Error('Sign in before uploading a video.');
  if (file.size > 128 * 1024 * 1024) throw new Error('The video exceeds 128 MiB.');
  if (!(guarded ? /\.mp4$/i : /\.(mp4|mov|avi)$/i).test(file.name)) {
    throw new Error(guarded ? 'Guarded uploads require an MP4 file.' : 'Upload an MP4, MOV or AVI file.');
  }
  const headers = { Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json' };
  const api = (path, options = {}) => fetchImpl(baseUrl + path, { headers, signal, cache: 'no-store', ...options });
  onProgress('Requesting upload permission...', 15);
  if (!guarded) {
    const meta = await read(await api('/api/upload-url', {
      method: 'POST', body: JSON.stringify({ fileType: '.' + file.name.split('.').pop().toLowerCase() }),
    }));
    if (!meta.url || !meta.key) throw new Error('Invalid upload response.');
    onProgress('Uploading video...', 40);
    const upload = await fetchImpl(meta.url, { method: 'PUT', signal, headers: { 'Content-Type': meta.contentType }, body: file });
    if (!upload.ok) throw new Error('Video upload failed.');
    onProgress('Analyzing video...', 75);
    return read(await api('/api/sentiment-inference', { method: 'POST', body: JSON.stringify({ key: meta.key }) }));
  }
  const signed = await read(await api('/api/async-inference/uploads', { method: 'POST', body: '{}' }));
  onProgress('Uploading video...', 40);
  await sendToS3(signed, file, signal, fetchImpl);
  const submitted = await read(await api('/api/async-inference/jobs', {
    method: 'POST', body: JSON.stringify({ upload_id: signed.upload_id }),
  }));
  if (!/^[a-f0-9]{32}$/.test(submitted.job_id)) throw new Error('Invalid job response.');
  onProgress('Waiting for safety checks and analysis...', 75);
  for (let attempt = 0; attempt < 480; attempt++) {
    signal?.throwIfAborted();
    const result = await read(await api('/api/async-inference/jobs/' + submitted.job_id));
    if (result.status === 'SUCCEEDED' && Array.isArray(result.analysis?.utterances)) {
      return { analysis: result.analysis, account_policy: result.account_policy };
    }
    if (result.status === 'REVIEW') throw new Error('Video requires review. Reference ' + submitted.job_id);
    if (['FAILED', 'BLOCKED'].includes(result.status)) throw new Error(result.code || 'Analysis could not complete.');
    await wait(3000);
  }
  throw new Error('Analysis is still queued. Reference ' + submitted.job_id);
}
