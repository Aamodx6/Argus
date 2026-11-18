import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';
import { test } from 'node:test';

const filename = new URL('../src/app/api/quota/route.ts', import.meta.url);
function route(lookup, source = filename, { method = 'GET', consoleJobs } = {}) {
  const output = ts.transpileModule(readFileSync(source, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports = {};
  const require = createRequire(filename);
  vm.runInNewContext(output, { exports, Request, Response, URL, process: { env: {} }, require: name =>
    name === '~/lib/guardrails' ? { registerGuardedKey() { throw new Error('Unexpected key registration'); } } :
    name === '~/server/console-jobs' ? consoleJobs :
    name === '~/server/db' ? { db: { apiQuota: { findUnique: lookup,
      findFirst() { throw new Error('Must never return another user quota'); } } } } : require(name) });
  return exports[method];
}
const key = 'sa_live_' + 'a'.repeat(48);

test('quota rejects anonymous, malformed and query-string keys before touching the database', async () => {
  const get = route(() => { throw new Error('Unexpected database call'); });
  for (const [url, auth] of [['http://local/api/quota', undefined],
    ['http://local/api/quota?secretKey=' + key, undefined], ['http://local/api/quota', 'Bearer bad']]) {
    const res = await get(new Request(url, { headers: auth ? { authorization: auth } : {} }));
    assert.equal(res.status, 401);
    assert.equal(res.headers.get('cache-control'), 'no-store');
  }
});

test('async routing validates operation and authentication before reporting missing deployment configuration', async () => {
  const get = route(() => {}, new URL('../src/app/api/async-inference/[[...operation]]/route.ts', import.meta.url));
  const context = operation => ({ params: Promise.resolve({ operation }) });
  const anonymous = new Request('http://local/api/async-inference/quota');
  assert.equal((await get(anonymous, context(['unknown']))).status, 404);
  assert.equal((await get(anonymous, context(['jobs', 'not-a-valid-id']))).status, 404);
  assert.equal((await get(anonymous, context(['quota']))).status, 401);
  const authenticated = new Request(anonymous.url, { headers: { authorization: 'Bearer ' + key } });
  assert.equal((await get(authenticated, context(['quota']))).status, 503);
});

test('invalid quota keys never fall through to an unrelated user', async () => {
  let called = 0;
  const get = route(async input => { called++; assert.equal(input.where.secretKey, key); return null; });
  const res = await get(new Request('http://local/api/quota', { headers: { authorization: 'Bearer ' + key } }));
  assert.equal(res.status, 401);
  assert.equal(called, 1);
  assert.equal((await res.json()).quota, undefined);
});

test('valid quota returns only the matching record and database failure returns 503', async () => {
  const get = route(async () => ({ secretKey: key, requestsUsed: 2, maxRequests: 10,
    lastResetDate: '2026-11-01', user: { id: 'owner' } }));
  const request = () => new Request('http://local/api/quota', { headers: { authorization: 'Bearer ' + key } });
  const res = await get(request());
  assert.equal(res.status, 200);
  assert.equal((await res.json()).user.id, 'owner');
  const failed = route(async () => { throw new Error('Database offline'); });
  assert.equal((await failed(request())).status, 503);
});

test('console API key disclosure requires a session and only returns the signed-in user’s key', async () => {
  const source = new URL('../src/app/api/console/api-key/route.ts', import.meta.url);
  let userId;
  let lookups = 0;
  const post = route(undefined, source, {
    method: 'POST',
    consoleJobs: {
      consoleUserId: async () => userId,
      consoleApiKey: async id => {
        lookups++;
        assert.equal(id, 'owner');
        return key;
      },
    },
  });
  const request = headers => new Request('http://local/api/console/api-key?userId=other', {
    method: 'POST', headers, body: JSON.stringify({ userId: 'other' }),
  });
  assert.equal((await post(request({ Authorization: 'Bearer ' + key }))).status, 403);
  const consoleHeaders = { 'X-Argus-Console': '1' };
  assert.equal((await post(request(consoleHeaders))).status, 401);
  assert.equal(lookups, 0);
  userId = 'owner';
  const result = await post(request(consoleHeaders));
  assert.equal(result.status, 200);
  assert.equal(result.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await result.json(), { apiKey: key });
  assert.equal(lookups, 1);
});
