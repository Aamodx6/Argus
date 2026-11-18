let sessionRequest;

async function readSession() {
  const response = await fetch('/api/auth/session', { credentials: 'same-origin', cache: 'no-store' });
  if (response.status === 401) return null;
  if (!response.ok) throw new Error('Could not check your session. Try again.');
  const session = await response.json();
  if (session?.message || session?.error) throw new Error('Could not check your session. Try again.');
  return session?.user?.id ? session : null;
}

export function getSession() {
  sessionRequest ??= readSession().finally(() => { sessionRequest = undefined; });
  return sessionRequest;
}

export function signInDestination() {
  return new URLSearchParams(location.search).get('next') === '/pricing' ? '/pricing' : '/console';
}

async function submitCredentials({ email, password }) {
  const csrf = await fetch('/api/auth/csrf', { credentials: 'same-origin', cache: 'no-store' });
  if (!csrf.ok) throw new Error('Could not connect to the authentication service.');
  const { csrfToken } = await csrf.json();
  const response = await fetch('/api/auth/callback/credentials', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'X-Auth-Return-Redirect': '1' },
    body: new URLSearchParams({ email, password, csrfToken, callbackUrl: location.origin + signInDestination() }),
  });
  const result = await response.json();
  const error = result.url && new URL(result.url, location.origin).searchParams.get('error');
  if (error === 'CredentialsSignin' || error === 'AccessDenied') throw new Error('Invalid email or password.');
  if (error === 'MissingCSRF') return false;
  if (!response.ok || !result.url || error) throw new Error('Sign-in is temporarily unavailable.');
  return true;
}

export async function signIn(credentials) {
  // A concurrent session check can set the initial CSRF cookie too.
  await sessionRequest?.catch(() => {});
  if (!(await submitCredentials(credentials)) && !(await submitCredentials(credentials))) {
    throw new Error('Could not start a secure sign-in session. Try again.');
  }
  if (!(await getSession())) throw new Error('Could not save your sign-in session. Check that cookies are enabled.');
}

export async function getAccountPlan() {
  const response = await fetch('/api/account/plan', { credentials: 'same-origin', cache: 'no-store' });
  if (!response.ok) throw new Error('Could not load your plan.');
  return response.json();
}
