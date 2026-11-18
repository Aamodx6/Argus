import { consoleRequest } from './console-api.mjs';
import { sentimentApiExample } from './sentiment-api-example.mjs';
import { sentimentApiCurlExample } from './sentiment-api-curl.mjs';

export function initializeSentimentApi() {
  const element = id => document.getElementById('sentiment-' + id);
  const dialog = element('api');
  const key = element('key');
  const reveal = element('reveal');
  const copyKey = element('copy-key');
  const keyStatus = element('key-status');
  const example = element('example');
  const language = element('language');
  const copyExample = element('copy-example');
  const exampleStatus = element('example-status');
  const mode = element('api-mode');
  let session;
  let guarded;

  function renderExample() {
    const useCurl = language.value === 'curl';
    element('node-instructions').hidden = useCurl;
    element('curl-instructions').hidden = !useCurl;
    exampleStatus.textContent = '';
    copyExample.disabled = typeof guarded !== 'boolean';
    const buildExample = useCurl ? sentimentApiCurlExample : sentimentApiExample;
    example.textContent = copyExample.disabled ? '' : buildExample(location.origin, guarded);
    example.parentElement.scrollTo(0, 0);
  }

  language.addEventListener('change', renderExample);

  function hideKey() {
    key.textContent = '';
    key.hidden = true;
    reveal.textContent = 'Show key';
    copyKey.disabled = true;
    keyStatus.textContent = '';
  }

  document.getElementById('open-sentiment-api').addEventListener('click', async () => {
    session?.abort();
    session = new AbortController();
    const { signal } = session;
    hideKey();
    reveal.disabled = false;
    guarded = undefined;
    renderExample();
    mode.textContent = 'Loading API configuration…';
    dialog.showModal();

    try {
      const config = await consoleRequest('/api/console/config', { signal });
      if (signal.aborted || !dialog.open) return;
      if (typeof config.guarded !== 'boolean') throw new Error('Invalid configuration');
      guarded = config.guarded;
      mode.textContent = guarded ? 'MP4 upload with asynchronous results.' : 'MP4, MOV or AVI upload with synchronous results.';
      renderExample();
    } catch {
      if (!signal.aborted && dialog.open) mode.textContent = 'API configuration unavailable. Reopen this panel to retry.';
    }
  });

  element('close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    if (dialog.open) return;
    session?.abort();
    hideKey();
  });
  window.addEventListener('pagehide', () => {
    session?.abort();
    hideKey();
  });

  reveal.addEventListener('click', async () => {
    if (!key.hidden) {
      hideKey();
      return;
    }
    const { signal } = session;
    reveal.disabled = true;
    keyStatus.textContent = 'Loading API key…';
    try {
      const { apiKey } = await consoleRequest('/api/console/api-key', { body: {}, signal });
      if (signal.aborted || !dialog.open) return;
      if (typeof apiKey !== 'string' || !apiKey) throw new Error('API key unavailable.');
      key.textContent = apiKey;
      key.hidden = false;
      reveal.textContent = 'Hide key';
      copyKey.disabled = false;
      keyStatus.textContent = '';
    } catch (error) {
      if (!signal.aborted && dialog.open) {
        keyStatus.textContent = error.payload?.error || 'Could not load your API key. Try again.';
      }
    } finally {
      if (!signal.aborted) reveal.disabled = false;
    }
  });

  async function copy(source, status, message) {
    const { signal } = session;
    try {
      await navigator.clipboard.writeText(source.textContent);
      if (dialog.open && !signal.aborted && !source.hidden) status.textContent = message;
    } catch {
      if (dialog.open && !signal.aborted && !source.hidden) {
        status.textContent = 'Clipboard unavailable. Select the text and copy it manually.';
      }
    }
  }

  copyKey.addEventListener('click', () => void copy(key, keyStatus, 'API key copied.'));
  copyExample.addEventListener('click', () => void copy(example, exampleStatus, 'Code copied.'));
}
