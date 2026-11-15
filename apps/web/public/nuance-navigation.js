// Use actual Astro routes instead of the exported template's client router.
(function () {
  const enter = () => {
    document.body?.classList.remove('nuance-page-leaving');
    document.body?.classList.add('nuance-transition-ready');
    highlightActiveNav();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enter);
  else enter();
  window.addEventListener('pageshow', enter);

  const titles = {
    '/': 'Nuance · Aspect sentiment for video',
    '/product': 'Product · Nuance',
    '/sources': 'Sources · Nuance',
    '/customers': 'Customers · Nuance',
    '/pricing': 'Pricing · Nuance',
    '/changelog': 'Changelog · Nuance',
    '/contact': 'Create account · Nuance',
    '/login': 'Sign in · Nuance',
  };
  const updateTitle = () => {
    const current = window.location.pathname.replace(/\/$/, '') || '/';
    const targetTitle = titles[current];
    if (targetTitle && document.title !== targetTitle) {
      document.title = targetTitle;
    }
  };
  updateTitle();
  new MutationObserver(updateTitle).observe(document.head, { subtree: true, childList: true });

  const routes = new Set(['/', '/product', '/sources', '/customers', '/pricing', '/changelog', '/contact', '/signup', '/login', '/console', '/app', '/dashboard']);

  function targetFor(href) {
    if (href.startsWith('./')) href = '/' + href.slice(2);
    if (!href.includes('chocolate-popover-456599.framer.app')) return new URL(href, window.location.href);
    const suffix = href.split('chocolate-popover-456599.framer.app')[1] || '/';
    const path = suffix.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
    return routes.has(path) ? new URL(path, window.location.origin) : null;
  }

  const textMap = [
    ["Northdesk","Acoustics"],
    ["Quarry","S3 Vault"],
    ["Tallyhouse","PyTorch"],
    ["Eventide","Framenet"],
    ["Adrift","Prosody"],
    ["Sheetwise","TimeAlign"],
    ["Rosterly","SageGPU"],
    ["Stackhold","Webhooks"],
    ["Warpyn · Ask your data in plain English","Nuance · Multimodal Video Sentiment AI"],
    ["Warpyn connects billing, CRM, product and supp","Nuance fuses video frames, vocal tone and transcripts"],
    ["Connect a source","Analyze a video"],
    ["Start weaving","Start analysis"],
    ["Ninety tools in. One answer out.","Three modalities in. One truth out."],
    ["Warpyn connects your billing, CRM, product and support data, then answers questions in plain English. Every figure is woven from rows you can trace.","Nuance fuses video frames, vocal tone and speech transcripts, then scores emotions with exact precision. Every rating is grounded in cues you can audit."],
    ["Why did net revenue retention dip in March?","Where did customer sentiment dip in interview?"],
    ["WEAVING ANS","FUSING DATA"],
    ["Product events","Video frames"],
    ["sessions","visual"],
    ["Ad spend","Vocal tone"],
    ["campaigns","acoustic"],
    ["Billing","Speech text"],
    ["invoices","whisper"],
    ["HR system","Facial cues"],
    ["headcount","landmarks"],
    ["Support desk","Audio pitch"],
    ["tickets","prosody"],
    ["Spreadsheets","Micro-cues"],
    ["targets_fy26","frame_timing"],
    ["Accounts","Emotions"],
    ["02 · Lineage","02 · Grounding"],
    ["Pull any thread back to the row it came from.","Trace every emotion back to the clip it came from."],
    ["An answer is only as good as the rows under it. Hover a line of the cloth and Warpyn lights the thread back through the reed to its source, the exact record and every step in between.","A score is only as good as the cues under it. Hover a line of the graph and Nuance lights the signal back through the model to its source, the exact moment and every frame in between."],
    ["From ninety tabs to one answer, in three steps.","From raw video to sentiment, in three easy steps."],
    ["No new dashboards to maintain and no copy of your data to babysit. Warpyn reads what you already have and keeps every figure traceable.","No complex pipelines to build and no cloud compute to babysit. Nuance scores what you upload and keeps every rating traceable."],
    ["Point Warpyn at your warehouse, billing, CRM and support desk. 240+ connectors, read-only by default, live in minutes.","Point Nuance at your video files, presigned S3 upload API, or storage bucket. MP4, MOV and AVI ready in minutes."],
    ["Every source is combed into one model: customers, revenue, usage and tickets lined up on the same key, with a glossary your team agrees on once.","Every stream is fused into one model: video frames, vocal pitch, acoustic energy and speech text aligned on the same millisecond timestamp."],
    ["Ask in plain English. The answer is woven from the rows, and every figure keeps its thread back to them.","Score every utterance. The report is output from the clips, and every emotion keeps its link back to them."],
    ["Ask in plain English","Inspect every utterance"],
    ["Type the question you would ask your analyst.","Spot the feelings that pure text transcript misses."],
    ["No SQL, no dashboard to find. Pick a question below to see the answer Warpyn weaves, with the figure first and the reason underneath.","No guess, no manual review. Pick a video below to see the sentiment Nuance outputs, with the emotion first and the clip underneath."],
    ["One thread out of line, and you hear about it first.","One tone out of line, and you hear about it first."],
    ["Pulse learns what normal looks like for every metric you care about and only speaks up when something is both unusual and large enough to matter. Each alert arrives with the answer attached.","Nuance learns what normal looks like for every emotion you care about and only speaks up when sentiment is both intense and clear enough to matter. Each alert arrives with the footage attached."],
    ["What changes when every figure has a thread.","What changes when every feeling has a timestamp."],
    ["Averages across 212 companies in their first six months, measured against the reporting they ran before.","Results across 212 video sets in their first evaluation, measured against the text models used before."],
    ["faster from question to answer than a ticket to the data team","distinct emotion classes plus three-way sentiment scoring"],
    ["fewer dashboards kept alive after the first quarter","higher sentiment accuracy over basic transcript tools"],
    ["saved per analyst every week, mostly on one-off requests","median inference latency on our AWS SageMaker pipeline"],
    ["copies of your raw rows stored by Warpyn","copies of raw video clips retained by Nuance"],
    ["Customer story · Harrow & Pike","Customer story · MediaInsight"],
    ["“We thought we had a loyalty problem. Warpyn showed us it was a card-expiry problem, and it took one question to see it.”","“We thought our interview was positive. Nuance showed us where visual hesitation flared, and it took one video to see it.”"],
    ["Maren Solberg, Head of Growth, Harrow & Pike","Maren Solberg, Head of UX, MediaInsight"],
    ["involuntary churn in two quarters","unnoticed frustration in key moments"],
    ["Permissions travel with the thread.","Data privacy travels with the video."],
    ["Warpyn reads with the access you give it and nothing more. If a person cannot see a row in the source, the thread from that row never reaches their answer.","Nuance processes with the keys you give it and nothing more. If a team requires encrypted S3 storage, the video from that job never escapes their domain."],
    ["Raw rows stay where they are; Warpyn stores query plans and the answers you save.","Raw videos stay in your private S3 bucket; Nuance stores only inference predictions and the tokens you save."],
    ["240+ threads, one loom.","3 modalities, one model."],
    ["Warehouses, billing, CRM, support, product events and the spreadsheets nobody admits to. Each one is read-only and keyed to the same customer.","Audio tracks, video frames, acoustic prosody, text transcripts and timing metadata. Each one is normalized and keyed to the exact timestamp."],
    ["Point Warpyn at your warehouse and it reads the models your data team already trusts.","Ingest raw MP4, MOV, and AVI videos via encrypted AWS S3 presigned upload URLs with zero lag."],
    ["Priced by sources and questions, not seats.","Priced by video minutes and calls, not seats."],
    ["Everyone in the company can ask. You pay for how many tools you connect and how many questions you ask each month.","Everyone in the team can build. You pay for how many minutes you analyze and how many API calls you make each month."],
    ["For one team asking its first questions.","For developers analyzing their first videos."],
    ["For companies running on their numbers.","For platforms processing high-volume feeds."],
    ["For regulated data and many teams.","For custom fine-tuning and private VPCs."],
    ["What teams ask before they connect anything.","What teams ask before they upload anything."],
    ["Does Warpyn copy our data?","Does Nuance store or train on our video data?"],
    ["No. Warpyn reads from your warehouse and tools with read-only credentials and keeps only the query plans and the answers you save. Raw rows stay where they are.","No. Nuance processes video streams with ephemeral compute or private S3 access and keeps only the prediction metadata you save. Raw videos stay in your domain."],
    ["Ask your first real question on Monday.","Score your first video clip in minutes."],
    ["Connect two sources in the first call. Most teams have an answer they trust before the call ends.","Upload one MP4 test in the live console. Most teams have accurate predictions before the test ends."],
    ["Book a 20-minute demo","Create your free API key"],
    ["© 2026 Warpyn Labs. Answers woven in Lisbon and New York.","© 2026 Nuance AI Labs. Models deployed in Sydney and Virginia."],
    ["All threads running · 99.98% uptime","SageMaker live · 99.98% uptime"],
    ["Warpyn","Nuance"]
  ];

  function brand(value) {
    return value.replace(/\bwarpyn\b/gi, word => word === word.toUpperCase() ? 'NUANCE' : word[0] === 'w' ? 'nuance' : 'Nuance');
  }

  function syncNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.parentElement?.closest('script,style')) return;
      let val = node.nodeValue;
      if (val) {
        for (const [from, to] of textMap) {
          if (val.includes(from)) val = val.replaceAll(from, to);
        }
        if (/warpyn/i.test(val)) val = brand(val);
        if (val !== node.nodeValue) node.nodeValue = val;
      }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || node.matches('script,style')) return;
    for (const name of ['aria-label', 'title', 'alt', 'content']) {
      const value = node.getAttribute(name);
      if (value) {
        let v = value;
        for (const [from, to] of textMap) {
          if (v.includes(from)) v = v.replaceAll(from, to);
        }
        if (/warpyn/i.test(v)) v = brand(v);
        if (v !== value) node.setAttribute(name, v);
      }
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

  function highlightActiveNav() {
    const current = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('a[href]').forEach((link) => {
      const rawHref = link.getAttribute('href');
      if (!rawHref) return;
      const cleanHref = rawHref.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
      const signinBtn = link.closest('[data-framer-name="Button · Sign in"]') || link.querySelector('[data-framer-name="Button · Sign in"]');
      if (cleanHref === current && cleanHref !== '/') {
        link.classList.add('active');
        if (signinBtn) signinBtn.classList.add('active');
        if (link.style && !link.classList.contains('pill')) {
          link.style.color = '#ff4b1f';
        }
      } else {
        link.classList.remove('active');
        if (signinBtn) signinBtn.classList.remove('active');
      }
    });
  }

  function cleanupDuplicateSignIn() {
    document.querySelectorAll('.nuance-nav-signin').forEach((el) => el.remove());
  }

  function handleAuthForms() {
    const current = window.location.pathname.replace(/\/$/, '') || '/';
    if (current !== '/login' && current !== '/contact') return;
    document.querySelectorAll('form').forEach(form => {
      if (form.__nuanceAuthBound) return;
      form.__nuanceAuthBound = true;
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('button');
        if (submitBtn) submitBtn.disabled = true;
        const emailInput = form.querySelector('input[type="email"], input[name="Email"]') || form.querySelector('input');
        const email = emailInput?.value || 'user@company.com';
        const quota = {
          secretKey: 'sa_live_' + Array.from(crypto.getRandomValues(new Uint8Array(20))).map(b => b.toString(16).padStart(2, '0')).join(''),
          requestsUsed: 0,
          maxRequests: 10000
        };
        try {
          const endpoint = current === '/contact' ? '/api/auth/signup' : '/api/auth/login';
          const apiUrl = window.nuanceApiUrl ? window.nuanceApiUrl(endpoint) : endpoint;
          const res = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
          });
          const data = await res.json();
          if (data?.quota?.secretKey) {
            localStorage.setItem('nuance_quota', JSON.stringify(data.quota));
            localStorage.setItem('nuance_user', JSON.stringify(data.user || { email }));
            window.location.assign('/console');
            return;
          }
        } catch (_) {}
        localStorage.setItem('nuance_quota', JSON.stringify(quota));
        localStorage.setItem('nuance_user', JSON.stringify({ email }));
        window.location.assign('/console');
      }, true);
    });
  }

  syncNode(document.documentElement);
  cleanupDuplicateSignIn();
  highlightActiveNav();
  handleAuthForms();

  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData' || record.type === 'attributes') syncNode(record.target);
      else record.addedNodes.forEach(syncNode);
    }
    cleanupDuplicateSignIn();
    highlightActiveNav();
    handleAuthForms();
  }).observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['href', 'aria-label', 'title', 'alt', 'content']
  });

  window.nuanceNavigate = (href) => {
    if (!href) return;
    try {
      const target = new URL(href, window.location.origin);
      if (target.pathname === window.location.pathname && target.search === window.location.search && !target.hash) {
        return;
      }
    } catch (_) {}
    document.body.classList.add('nuance-page-leaving');
    setTimeout(() => {
      window.location.assign(href);
    }, 110);
  };

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

    // Full transition ensures consistent animation and proper script lifecycle across pages
    event.preventDefault();
    event.stopImmediatePropagation();
    window.nuanceNavigate(target.href);
  }, true);
})();
