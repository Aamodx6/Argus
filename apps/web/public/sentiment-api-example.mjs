const setup = `import { openAsBlob } from 'node:fs';
import { extname } from 'node:path';

const apiKey = process.env.ARGUS_API_KEY;
const input = process.argv[2];
if (!apiKey) throw new Error('Set ARGUS_API_KEY in your environment.');
if (!input) throw new Error('Pass a video file path.');

async function request(path, body) {
  const response = await fetch(baseUrl + path, {
    method: body === undefined ? 'GET' : 'POST',
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = data.code || data.error || response.statusText;
    throw new Error(path + ' (' + response.status + '): ' + detail);
  }
  return data;
}

async function openVideo(types) {
  const type = types[extname(input).toLowerCase()];
  if (!type) throw new Error('Choose a ' + Object.keys(types).join(', ') + ' video.');
  const file = await openAsBlob(input, { type });
  if (!file.size || file.size > 128 * 1024 ** 2) {
    throw new Error('Choose a video between 1 byte and 128 MiB.');
  }
  return file;
}

async function upload(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error('Video upload failed (' + response.status + ').');
}`;

const synchronous = `const file = await openVideo({
  '.mp4': 'video/mp4',
  '.mov': 'video/quicktime',
  '.avi': 'video/x-msvideo',
});
const { url, key, contentType } = await request('/api/upload-url', {
  fileType: extname(input).toLowerCase(),
});
await upload(url, { method: 'PUT', headers: { 'Content-Type': contentType }, body: file });
const { analysis } = await request('/api/sentiment-inference', { key });
console.log(JSON.stringify(analysis, null, 2));`;

const asynchronous = `const jobs = '/api/async-inference/jobs';

async function submit() {
  const file = await openVideo({ '.mp4': 'video/mp4' });
  const { url, fields, headers, upload_id } = await request('/api/async-inference/uploads', {});
  if (fields) {
    const form = new FormData();
    for (const [name, value] of Object.entries(fields)) form.append(name, value);
    form.append('file', file, 'video.mp4');
    await upload(url, { method: 'POST', body: form });
  } else {
    await upload(url, { method: 'PUT', headers, body: file });
  }
  const { job_id } = await request(jobs, { upload_id });
  return job_id;
}

async function waitForResult(jobId) {
  const path = jobs + '/' + jobId;
  const deadline = Date.now() + 5 * 60_000;
  while (Date.now() < deadline) {
    const result = await request(path);
    if (result.status === 'SUCCEEDED') return result.analysis;
    if (result.status === 'FAILED') throw new Error(result.code || 'Analysis failed.');
    if (result.status === 'REVIEW') throw new Error('Video is awaiting review.');
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  throw new Error('Analysis is still processing.');
}

const jobId = input === '--job' ? process.argv[3] : await submit();
if (!/^[a-f0-9]{32}$/.test(jobId ?? '')) throw new Error('Invalid job ID.');
console.error('Check this job again with: node argus-sentiment.mjs --job ' + jobId);
console.log(JSON.stringify(await waitForResult(jobId), null, 2));`;

export function sentimentApiExample(origin, guarded) {
  return `const baseUrl = ${JSON.stringify(origin)};\n\n${setup}\n\n${guarded ? asynchronous : synchronous}\n`;
}
