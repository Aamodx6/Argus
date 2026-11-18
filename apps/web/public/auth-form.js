import { getSession, signIn, signInDestination } from './account-session.mjs';

(function () {
  const form = document.querySelector('form[data-auth-mode]');
  if (!form) return;
  const signup = form.dataset.authMode === 'signup';
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector('[data-auth-status]');
  const idleLabel = button.innerHTML;
  void getSession().then(session => { if (session) location.replace(signInDestination()); }).catch(() => {});
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;
    const values = Object.fromEntries(new FormData(form));
    status.textContent = '';
    status.dataset.state = 'error';
    if (signup && values.password !== values.confirmPassword) {
      status.textContent = 'Passwords do not match.';
      return;
    }
    button.disabled = true;
    button.textContent = signup ? 'Creating workspace…' : 'Signing in…';
    try {
      if (signup) {
        const response = await fetch('/api/auth/signup', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values),
        });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.error || 'Authentication failed.');
      } else {
        await signIn(values);
      }
      status.dataset.state = 'success';
      const destination = signInDestination();
      status.textContent = signup ? 'Account created. Redirecting to sign in…' :
        destination === '/pricing' ? 'Signed in. Returning to pricing…' : 'Signed in. Opening your workspace…';
      window.location.assign(signup ? '/login' : destination);
    } catch (error) {
      status.textContent = error.message || 'Could not connect to the authentication service.';
    } finally {
      button.disabled = false;
      button.innerHTML = idleLabel;
    }
  });
})();
