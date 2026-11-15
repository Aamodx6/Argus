import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { publicOrigin, normalizeTemplateHtml, templateLink } from '../src/lib/routes.mjs';
import { analyzeVideo } from '../public/console-api.mjs';

const file = new File(['video'], 'clip.mp4', { type: 'video/mp4' });
const key = 'a'.repeat(40);
const response = (value, status = 200) => new Response(JSON.stringify(value), { status });

test('API/site origins reject non-HTTP URLs, embedded credentials and unexpected paths', () => {
  assert.equal(publicOrigin(''), '');
  assert.equal(publicOrigin('https://api.example/'), 'https://api.example');
  for (const input of ['javascript:alert(1)', 'https://secret@api.example', 'https://api.example/path']) {
    assert.throws(() => publicOrigin(input));
  }
});

test('auth forms use POST even if the client script cannot initialize', () => {
  const source = readFileSync(new URL('../src/components/AuthPage.astro', import.meta.url), 'utf8');
  assert.match(source, /<form[^>]+method="post"/);
});

test('exported template navigation maps real pages and disables unimplemented template destinations', () => {
  assert.equal(templateLink('../../chocolate-popover-456599.framer.app/pricing/index.html'), '/pricing');
  assert.equal(templateLink('https://chocolate-popover-456599.framer.app/contact'), '/contact');
  assert.equal(templateLink('https://chocolate-popover-456599.framer.app/changelog'), '/changelog');
  assert.equal(templateLink('https://chocolate-popover-456599.framer.app/sources'), '/sources');
  assert.equal(templateLink('https://chocolate-popover-456599.framer.app/customers'), '/customers');
  assert.equal(templateLink('https://chocolate-popover-456599.framer.app/legal/privacy-policy'), null);
  const html = normalizeTemplateHtml('<a href="https://chocolate-popover-456599.framer.app/blog">Blog</a>');
  assert.match(html, /aria-disabled="true"/);
  assert.doesNotMatch(html, /href=/);
});

test('guarded upload sends the signed form and polls the configured backend to a real result', async () => {
  const calls = [];
  const job = 'b'.repeat(32);
  const replies = [response({ url: 'https://s3.example', fields: { policy: 'signed' }, upload_id: 'upload' }),
    new Response(null, { status: 204 }), response({ job_id: job }), response({ status: 'QUEUED' }),
    response({ status: 'SUCCEEDED', analysis: { utterances: [] } })];
  const result = await analyzeVideo(file, key, { baseUrl: 'https://api.example', wait: async () => {},
    fetchImpl: async (...args) => { calls.push(args); return replies.shift(); } });
  assert.deepEqual(result.analysis.utterances, []);
  assert.equal(calls[0][0], 'https://api.example/api/async-inference/uploads');
  assert.equal(calls[1][0], 'https://s3.example');
  assert.ok(calls[1][1].body instanceof FormData);
  assert.equal(calls[1][1].headers, undefined, 'S3 must not receive the product API key');
  assert.equal(calls[4][0], 'https://api.example/api/async-inference/jobs/' + job);
});

test('API failures and blocked jobs never produce sample results', async () => {
  await assert.rejects(analyzeVideo(file, key, { fetchImpl: async () => response({ error: 'Offline' }, 503) }), /Offline/);
  const replies = [response({ url: 'https://s3.example', fields: {}, upload_id: 'u' }),
    new Response(null, { status: 204 }), response({ job_id: 'b'.repeat(32) }),
    response({ status: 'BLOCKED', code: 'CONTENT_POLICY' })];
  await assert.rejects(analyzeVideo(file, key, { fetchImpl: async () => replies.shift() }), /CONTENT_POLICY/);
});

test('missing keys, oversized files and non-MP4 guarded inputs fail before any request', async () => {
  const options = { fetchImpl() { throw new Error('Unexpected network'); } };
  await assert.rejects(analyzeVideo(file, '', options), /Sign in/);
  await assert.rejects(analyzeVideo({ name: 'clip.mp4', size: 129 * 1024**2 }, key, options), /128 MiB/);
  await assert.rejects(analyzeVideo(new File(['x'], 'clip.mov'), key, options), /MP4/);
});

test('legacy mode must be explicit and sends a dotted extension to the legacy route', async () => {
  const calls = [];
  const replies = [response({ url: 'https://s3.example', key: 'video', contentType: 'video/mp4' }),
    new Response(null, { status: 204 }), response({ analysis: { utterances: [] } })];
  await analyzeVideo(file, key, { guarded: false, fetchImpl: async (...args) => { calls.push(args); return replies.shift(); } });
  assert.equal(calls[0][0], '/api/upload-url');
  assert.equal(JSON.parse(calls[0][1].body).fileType, '.mp4');
  assert.equal(calls[2][0], '/api/sentiment-inference');
});

test('active page scripts have no baked-in localhost API requests or fabricated live API keys', () => {
  const directory = new URL('../src/pages/', import.meta.url);
  for (const name of readdirSync(directory).filter(name => name.endsWith('.astro'))) {
    const source = readFileSync(new URL(name, directory), 'utf8');
    assert.equal(/http:\/\/localhost:3000/.test(source), false, name);
    assert.equal(/sa_live_[a-f0-9]{40,}/.test(source), false, name);
  }
});
