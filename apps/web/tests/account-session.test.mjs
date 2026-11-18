import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getSession, signIn } from '../public/account-session.mjs';

test('sign-in waits for the initial session read and retries a stale CSRF token', async t => {
  const responses = [
    Promise.withResolvers(),
    Response.json({ csrfToken: 'first' }),
    Response.json({ url: 'https://argus.example/login?error=MissingCSRF' }),
    Response.json({ csrfToken: 'second' }),
    Response.json({ url: 'https://argus.example/pricing' }),
    Response.json({ user: { id: 'signed-in-user' } }),
  ];
  const initial = responses[0];
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (path, options) => {
    calls.push([path, options]);
    const next = responses.shift();
    return next.promise ?? next;
  });
  globalThis.location = new URL('https://argus.example/login?next=/pricing');
  t.after(() => { delete globalThis.location; });

  const session = getSession();
  assert.equal(getSession(), session);
  const signingIn = signIn({ email: 'user@example.test', password: 'fixture' });
  await Promise.resolve();
  assert.deepEqual(calls.map(([path]) => path), ['/api/auth/session']);
  initial.resolve(Response.json(null));
  await signingIn;

  assert.deepEqual(calls.map(([path]) => path), [
    '/api/auth/session', '/api/auth/csrf', '/api/auth/callback/credentials',
    '/api/auth/csrf', '/api/auth/callback/credentials', '/api/auth/session',
  ]);
  assert.deepEqual(calls.filter(([path]) => path.includes('/callback')).map(([, { body }]) => body.get('csrfToken')), [
    'first', 'second',
  ]);
});
