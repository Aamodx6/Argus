async function read(response) {
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.code || payload.error || 'Video analysis is unavailable.');
  return payload;
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
  if (!signed.url || !signed.fields || !signed.upload_id) throw new Error('Invalid upload response.');
  const form = new FormData();
  for (const [name, value] of Object.entries(signed.fields)) form.append(name, value);
  form.append('file', file);
  onProgress('Uploading video...', 40);
  const upload = await fetchImpl(signed.url, { method: 'POST', body: form, signal });
  if (!upload.ok) throw new Error('Video upload failed.');
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
