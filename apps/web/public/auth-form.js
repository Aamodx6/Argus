(function () {
  const form = document.querySelector('form[data-auth-mode]');
  if (!form) return;
  const signup = form.dataset.authMode === 'signup';
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector('[data-auth-status]');
  const idleLabel = button.innerHTML;
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
      const response = await fetch(window.nuanceApiUrl(signup ? '/api/auth/signup' : '/api/auth/login'), {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || 'Authentication failed.');
      if (!signup) {
        if (!result.quota?.secretKey) throw new Error('The API key is unavailable. Please contact support.');
        localStorage.setItem('nuance_quota', JSON.stringify(result.quota));
        localStorage.setItem('nuance_user', JSON.stringify(result.user));
      }
      status.dataset.state = 'success';
      status.textContent = signup ? 'Account created. Redirecting to sign in…' : 'Signed in. Opening your workspace…';
      window.location.assign(signup ? '/login' : '/console');
    } catch (error) {
      status.textContent = error.message || 'Could not connect to the authentication service.';
    } finally {
      button.disabled = false;
      button.innerHTML = idleLabel;
    }
  });
})();
