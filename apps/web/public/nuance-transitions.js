// Nuance Universal Page Transition Controller
(function() {
  if (typeof window === 'undefined') return;

  function initProgress() {
    if (!document.getElementById('nuance-page-progress')) {
      const bar = document.createElement('div');
      bar.id = 'nuance-page-progress';
      document.documentElement.appendChild(bar);
    }
  }

  function startProgress() {
    const bar = document.getElementById('nuance-page-progress');
    if (bar) {
      bar.classList.remove('finishing');
      bar.classList.add('active');
    }
  }

  function finishProgress() {
    const bar = document.getElementById('nuance-page-progress');
    if (bar) {
      bar.classList.add('finishing');
      setTimeout(() => {
        bar.classList.remove('active', 'finishing');
        bar.style.width = '0%';
      }, 300);
    }
  }

  function triggerPageEnter() {
    initProgress();
    document.body.classList.remove('nuance-page-leaving');
    requestAnimationFrame(() => {
      document.body.classList.add('nuance-transition-ready');
      finishProgress();
    });
  }

  window.nuanceNavigate = function(url) {
    if (!url) return;
    startProgress();
    document.body.classList.add('nuance-page-leaving');
    setTimeout(() => {
      window.location.href = url;
    }, 280);
  };

  // Intercept all internal navigation clicks
  function setupLinkInterception() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const rawHref = link.getAttribute('href');
      if (!rawHref) return;

      // Skip non-navigational links
      if (
        rawHref.startsWith('#') ||
        rawHref.startsWith('mailto:') ||
        rawHref.startsWith('tel:') ||
        rawHref.startsWith('javascript:') ||
        link.hasAttribute('download') ||
        link.target === '_blank' ||
        e.ctrlKey || e.metaKey || e.shiftKey
      ) {
        return;
      }

      // Check if internal origin
      let isInternal = false;
      let targetPath = rawHref;

      if (rawHref.startsWith('/') || rawHref.startsWith('./')) {
        isInternal = true;
      } else {
        try {
          const parsed = new URL(rawHref, window.location.href);
          if (parsed.origin === window.location.origin) {
            isInternal = true;
            targetPath = parsed.pathname + parsed.search + parsed.hash;
          }
        } catch (_) {}
      }

      if (!isInternal) return;

      // Don't re-navigate if clicking current page exact URL
      if (link.href === window.location.href) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      window.nuanceNavigate(link.href);
    }, true);
  }

  // Handle pageshow (including back-forward cache)
  window.addEventListener('pageshow', (event) => {
    triggerPageEnter();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      triggerPageEnter();
      setupLinkInterception();
    });
  } else {
    triggerPageEnter();
    setupLinkInterception();
  }
})();
