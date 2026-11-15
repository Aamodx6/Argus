// Use actual Astro routes instead of the exported template's client router.
(function () {
  const enter = () => document.body?.classList.add('nuance-transition-ready');
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enter);
  else enter();
  window.addEventListener('pageshow', enter);
  const titles = { '/': 'Nuance · Aspect sentiment for video', '/product': 'Product · Nuance', '/sources': 'Sources · Nuance', '/customers': 'Customers · Nuance',
    '/pricing': 'Pricing · Nuance', '/changelog': 'Changelog · Nuance', '/contact': 'Create account · Nuance', '/login': 'Sign in · Nuance' };
  const title = titles[window.location.pathname.replace(/\/$/, '') || '/'];
  if (title) {
    const updateTitle = () => { if (document.title !== title) document.title = title; };
    updateTitle();
    new MutationObserver(updateTitle).observe(document.head, { subtree: true, childList: true });
  }
  const routes = new Set(['/', '/product', '/sources', '/customers', '/pricing', '/changelog', '/contact', '/signup', '/login', '/console', '/app', '/dashboard']);
  function targetFor(href) {
    if (href.startsWith('./')) href = '/' + href.slice(2);
    if (!href.includes('chocolate-popover-456599.framer.app')) return new URL(href, window.location.href);
    const suffix = href.split('chocolate-popover-456599.framer.app')[1] || '/';
    const path = suffix.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
    return routes.has(path) ? new URL(path, window.location.origin) : null;
  }
  function brand(value) {
    return value.replace(/\bwarpyn\b/gi, word => word === word.toUpperCase() ? 'NUANCE' : word[0] === 'w' ? 'nuance' : 'Nuance');
  }
  function syncNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.parentElement?.closest('script,style') && /warpyn/i.test(node.nodeValue)) node.nodeValue = brand(node.nodeValue);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || node.matches('script,style')) return;
    for (const name of ['aria-label', 'title', 'alt', 'content']) {
      const value = node.getAttribute(name);
      if (value && /warpyn/i.test(value)) node.setAttribute(name, brand(value));
    }
    if (node.matches('a[href]')) {
      const href = node.getAttribute('href');
      if (!/^(#|mailto:|tel:)/.test(href)) {
        try {
          const target = targetFor(href);
          if (target && target.origin === window.location.origin && routes.has(target.pathname.replace(/\/$/, '') || '/')) {
            const local = target.pathname + target.search + target.hash;
            if (href !== local) node.setAttribute('href', local);
          }
        } catch { /* Leave unrelated external links alone. */ }
      }
    }
    for (const child of node.childNodes) syncNode(child);
  }
  function restoreSignIn() {
    document.querySelectorAll('nav[name="Navigation"]').forEach((nav, index) => {
      const actions = nav.querySelector('[data-framer-name="Right"]') || nav.querySelector('[data-framer-name="Row"]');
      if (!actions || actions.querySelector('.nuance-nav-signin')) return;
      const signIn = document.createElement('a');
      signIn.id = 'nuance-nav-signin-btn' + (index ? '-' + index : '');
      signIn.className = 'nuance-nav-signin';
      signIn.href = '/login';
      signIn.textContent = 'Sign in';
      actions.prepend(signIn);
    });
  }
  syncNode(document.documentElement);
  restoreSignIn();
  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData' || record.type === 'attributes') syncNode(record.target);
      else record.addedNodes.forEach(syncNode);
    }
    restoreSignIn();
  }).observe(document.documentElement, { subtree: true, childList: true, characterData: true,
    attributes: true, attributeFilter: ['href', 'aria-label', 'title', 'alt', 'content'] });
  window.nuanceNavigate = (href) => window.location.assign(href);
  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || link.getAttribute('aria-disabled') === 'true') {
      if (link.getAttribute('aria-disabled') === 'true') {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
      return;
    }
    if (/^(#|mailto:|tel:)/.test(href)) return;
    let target;
    try { target = targetFor(href); } catch { return; }
    if (!target) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    if (target.origin !== window.location.origin || !routes.has(target.pathname.replace(/\/$/, '') || '/')) return;
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey ||
        link.hasAttribute('download') || link.target === '_blank') return;
    // Full navigation ensures Astro auth form and console scripts initialize on every page.
    event.preventDefault();
    event.stopImmediatePropagation();
    window.nuanceNavigate(target.href);
  }, true);
})();
