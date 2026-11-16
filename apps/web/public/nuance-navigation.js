// Use actual Astro routes instead of the exported template's client router.
(function () {
  const enter = () => {
    document.body?.classList.remove('nuance-page-leaving');
    document.body?.classList.add('nuance-transition-ready');
    removeFooterStatus();
    highlightActiveNav();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enter);
  else enter();
  window.addEventListener('pageshow', enter);

  const titles = {
    '/': 'Argus · Aspect sentiment for video',
    '/product': 'Product · Argus',
    '/sources': 'Sources · Argus',
    '/customers': 'Customers · Argus',
    '/pricing': 'Pricing · Argus',
    '/changelog': 'Changelog · Argus',
    '/contact': 'Create account · Argus',
    '/login': 'Sign in · Argus',
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
    ["Teams that stopped guessing.", "Teams that decode every cue."],
    ["Six companies, six questions they could not answer before, and what they changed once they could.", "Six teams, six emotions they could not detect on text alone, and what they built once they could."],
    ["companies asking every week", "brands scoring video weekly"],
    ["questions answered a day", "video hours scored daily"],
    ["of answers accepted first time", "of acoustic cues verified live"],
    ["saved on month-end close at Kitefin", "saved on user interviews at Kitefin"],
    ["Six questions worth asking.", "Six moments worth decoding."],
    ["How Harrow & Pike found the churn hiding in failed cards", "How Harrow & Pike found the drop-offs in user hesitation"],
    ["A coffee subscription with 40,000 members traced a third of its churn to expired cards, then fixed it with one retry rule.", "A consumer video brand with 40,000 users detected micro-hesitation during onboarding, then streamlined the checkout flows."],
    ["Subscription retail", "Consumer Video"],
    ["Kitefin closes the month four days sooner", "Kitefin scores user interviews 4x faster."],
    ["A payments startup put billing, ledger and bank data behind one question and cut its close from nine working days to five.", "A fintech app aligned video frames, acoustic prosody and transcripts in Argus and cut its research review sprint in half."],
    ["faster month-end close", "faster interview audit"],
    ["Oakmere Health fills 18% more afternoon appointments", "Oakmere Health flags patient hesitation in telehealth"],
    ["Fourteen clinics used one shared glossary to compare bookings, no-shows and staffing, and found their empty afternoons.", "Fourteen clinics paired vocal pitch and facial micro-cues to spot patient anxiety, cutting intake drop-offs by a fifth."],
    ["afternoon utilisation", "intake completion rate"],
    ["Clinic network", "Telehealth"],
    ["Lumbra lifts on-time delivery from 38% to 91%", "Lumbra lifts cohort retention from 38% to 91%"],
    ["A B2B logistics company linked carrier events to contracts and renegotiated with the two carriers that caused most late deliveries.", "A fleet operator scored video training engagement across driver cohorts to resolve confusion and eliminate simulation drop-offs."],
    ["on-time rate for top 50 accounts", "completion rate for top 50 teams"],
    ["Tessel Games finds $3.1M in lapsed studio licences", "Tessel Games finds 3x churn cues in tutorial levels"],
    ["A game-engine company matched licence renewals to studio activity and recovered revenue from studios still shipping on expired plans.", "A game studio matched player face cams to audio prosody during playtests and cut drop-offs from gamers struggling on early levels."],
    ["recovered annual revenue", "tutorial completion rate"],
    ["Brightwater keeps 96% of families from term to term", "Brightwater keeps 96% of students from term to term"],
    ["A network of private schools combined attendance, support tickets and payments to spot families at risk of leaving.", "An online academy combined video attention, vocal pacing and quizzes to spot remote learners at risk of leaving."],
    ["“Finance used to spend the first week of every month reconciling three systems. Now we ask, check the thread, and move on.”", "“Research teams used to spend two weeks every month re-watching user interviews. Now we score, inspect the cues, and ship.”"],
    ["Idris Laval, Finance Lead", "Idris Laval, Product Lead"],
    ["Also weaving with Warpyn", "Also scoring with Argus"],
    ["Your question could be the seventh story.", "Your research could be the seventh story."],
    ["Bring the one number your team argues about. We will weave it on the first call.", "Bring the one video your team debates about. We will score it on the first call."],
    ["Northdesk","Acoustics"],
    ["Quarry","S3 Vault"],
    ["Tallyhouse","PyTorch"],
    ["Eventide","Framenet"],
    ["Adrift","Prosody"],
    ["Sheetwise","TimeAlign"],
    ["Rosterly","SageGPU"],
    ["Stackhold","Webhooks"],
    ["Warpyn · Ask your data in plain English","Argus · Multimodal Video Sentiment AI"],
    ["Warpyn connects billing, CRM, product and supp","Argus fuses video frames, vocal tone and transcripts"],
    ["Connect a source","Analyse a video"],
    ["Analyze a video","Analyse a video"],
    ["Start weaving","Start analysis"],
    ["Ninety tools in. One answer out.","Three modalities in. One truth out."],
    ["Warpyn connects your billing, CRM, product and support data, then answers questions in plain English. Every figure is woven from rows you can trace.","Argus fuses video frames, vocal tone and speech transcripts, then scores emotions with exact precision. Every rating is grounded in cues you can audit."],
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
    ["An answer is only as good as the rows under it. Hover a line of the cloth and Warpyn lights the thread back through the reed to its source, the exact record and every step in between.","A score is only as good as the cues under it. Hover a line of the graph and Argus lights the signal back through the model to its source, the exact moment and every frame in between."],
    ["From ninety tabs to one answer, in three steps.","From raw video to sentiment, in three easy steps."],
    ["No new dashboards to maintain and no copy of your data to babysit. Warpyn reads what you already have and keeps every figure traceable.","No complex pipelines to build and no cloud compute to babysit. Argus scores what you upload and keeps every rating traceable."],
    ["Point Warpyn at your warehouse, billing, CRM and support desk. 240+ connectors, read-only by default, live in minutes.","Point Argus at your video files, presigned S3 upload API, or storage bucket. MP4, MOV and AVI ready in minutes."],
    ["Every source is combed into one model: customers, revenue, usage and tickets lined up on the same key, with a glossary your team agrees on once.","Every stream is fused into one model: video frames, vocal pitch, acoustic energy and speech text aligned on the same millisecond timestamp."],
    ["Ask in plain English. The answer is woven from the rows, and every figure keeps its thread back to them.","Score every utterance. The report is output from the clips, and every emotion keeps its link back to them."],
    ["Ask in plain English","Inspect every utterance"],
    ["Type the question you would ask your analyst.","Spot the feelings that pure text transcript misses."],
    ["No SQL, no dashboard to find. Pick a question below to see the answer Warpyn weaves, with the figure first and the reason underneath.","No guess, no manual review. Pick a video below to see the sentiment Argus outputs, with the emotion first and the clip underneath."],
    ["One thread out of line, and you hear about it first.","One tone out of line, and you hear about it first."],
    ["Pulse learns what normal looks like for every metric you care about and only speaks up when something is both unusual and large enough to matter. Each alert arrives with the answer attached.","Argus learns what normal looks like for every emotion you care about and only speaks up when sentiment is both intense and clear enough to matter. Each alert arrives with the footage attached."],
    ["What changes when every figure has a thread.","What changes when every feeling has a timestamp."],
    ["Averages across 212 companies in their first six months, measured against the reporting they ran before.","Results across 212 video sets in their first evaluation, measured against the text models used before."],
    ["faster from question to answer than a ticket to the data team","distinct emotion classes plus three-way sentiment scoring"],
    ["fewer dashboards kept alive after the first quarter","higher sentiment accuracy over basic transcript tools"],
    ["saved per analyst every week, mostly on one-off requests","median inference latency on our AWS SageMaker pipeline"],
    ["copies of your raw rows stored by Warpyn","copies of raw video clips retained by Argus"],
    ["Customer story · Harrow & Pike","Customer story · MediaInsight"],
    ["“We thought we had a loyalty problem. Warpyn showed us it was a card-expiry problem, and it took one question to see it.”","“We thought our interview was positive. Argus showed us where visual hesitation flared, and it took one video to see it.”"],
    ["Maren Solberg, Head of Growth, Harrow & Pike","Maren Solberg, Head of UX, MediaInsight"],
    ["involuntary churn in two quarters","unnoticed frustration in key moments"],
    ["Permissions travel with the thread.","Data privacy travels with the video."],
    ["Warpyn reads with the access you give it and nothing more. If a person cannot see a row in the source, the thread from that row never reaches their answer.","Argus processes with the keys you give it and nothing more. If a team requires encrypted S3 storage, the video from that job never escapes their domain."],
    ["Raw rows stay where they are; Warpyn stores query plans and the answers you save.","Raw videos stay in your private S3 bucket; Argus stores only inference predictions and the tokens you save."],
    ["240+ threads, one loom.","3 modalities, one model."],
    ["Warehouses, billing, CRM, support, product events and the spreadsheets nobody admits to. Each one is read-only and keyed to the same customer.","Audio tracks, video frames, acoustic prosody, text transcripts and timing metadata. Each one is normalized and keyed to the exact timestamp."],
    ["Point Warpyn at your warehouse and it reads the models your data team already trusts.","Ingest raw MP4, MOV, and AVI videos via encrypted AWS S3 presigned upload URLs with zero lag."],
    ["Priced by sources and questions, not seats.","Priced by video minutes and calls, not seats."],
    ["Everyone in the company can ask. You pay for how many tools you connect and how many questions you ask each month.","Everyone in the team can build. You pay for how many minutes you analyze and how many API calls you make each month."],
    ["For one team asking its first questions.","For developers analyzing their first videos."],
    ["For companies running on their numbers.","For platforms processing high-volume feeds."],
    ["For regulated data and many teams.","For custom fine-tuning and private VPCs."],
    ["What teams ask before they connect anything.","What teams ask before they upload anything."],
    ["Does Warpyn copy our data?","Does Argus store or train on our video data?"],
    ["No. Warpyn reads from your warehouse and tools with read-only credentials and keeps only the query plans and the answers you save. Raw rows stay where they are.","No. Argus processes video streams with ephemeral compute or private S3 access and keeps only the prediction metadata you save. Raw videos stay in your domain."],
    ["Ask your first real question on Monday.","Score your first video clip in minutes."],
    ["Connect two sources in the first call. Most teams have an answer they trust before the call ends.","Upload one MP4 test in the live console. Most teams have accurate predictions before the test ends."],
    ["Book a 20-minute demo","Create your free API key"],
    ["© 2026 Warpyn Labs. Answers woven in Lisbon and New York.","© 2026 Argus AI Labs. Models deployed in Sydney and Virginia."],
    ["All threads running · 99.98% uptime",""],
    ["One loom for every question your company asks.","One model for every feeling your audience shows."],
    ["Connect the tools you already run, agree what your numbers mean once, then ask in plain English. Every answer arrives with the thread that made it.","Ingest the video you already record, score what your speakers feel live, then audit each emotion. Every rating arrives with the moment that made it."],
    ["Read-only connectors for the whole stack.","Zero-copy pipelines for the whole footage."],
    ["240+ sources, from your warehouse and production replica to billing, CRM, support and the spreadsheets finance swears by. Each connector asks for the narrowest scope the tool allows.","All formats, from your storage bucket and raw camera footage to Zoom, Meet, podcasts and the MP4 clips research swears by. Each pipeline runs with the narrowest scope you permit."],
    ["OAuth or a service account; most teams connect four sources in the first call.","Presigned URL or S3 bucket; most teams upload four test clips in the first run."],
    ["Nothing copied","Nothing retained"],
    ["Warpyn queries in place and stores query plans and saved answers only.","Argus processes in place and stores inference graphs and emotion cues only."],
    ["Schema-aware","Stream-aware"],
    ["Column descriptions and your dbt docs are read so answers use your names.","Speaker labels and your audio tracks are read so ratings match your names."],
    ["Agree what revenue means, once.","Agree what sentiment means, once."],
    ["The glossary holds about thirty definitions: revenue, active account, churn, expansion. Each is plain English with the SQL underneath, owned by a named person. Change one and every answer that depends on it re-weaves.","The taxonomy holds thirty definitions: joy, hesitation, friction, delight. Each is plain English with the weights underneath, owned by your team. Change one and every score that depends on it re-scores."],
    ["One customer key","One timeline key"],
    ["Every source is matched to the same account, with a review queue for anything uncertain.","Every stream is matched to the same timestamp, with a queue for anything subtle."],
    ["Owned definitions","Audited detectors"],
    ["Each term has an owner and a history, so nobody argues about which ‘active’ was used.","Each score has a reason and a history, so nobody argues about which ‘feeling’ was used."],
    ["Visible in answers","Visible in ratings"],
    ["Every figure lists the definitions it used, right under the number.","Every rating lists the visual cues it used, right under the score."],
    ["Ask the way you would ask a colleague.","Inspect the way you would inspect a cut."],
    ["Type a question, get the figure first and the reason underneath. Follow up in the same thread: by region, since March, excluding trials. Save anything worth asking again and have it delivered on Monday at 08:00.","Upload a clip, get the emotion first and the reason underneath. Follow up in the same timeline: by speaker, past second 40, excluding pauses. Save anything worth seeing again and have it exported in your JSON."],
    ["Plain English","Three signals"],
    ["No SQL, no dashboard to find, no ticket to the data team.","No guess, no frame to review, no manual tag for the team."],
    ["Follow-ups","Micro-cues"],
    ["Each answer keeps its context, so the next question can be three words long.","Each rating keeps its footage, so the next evaluation takes three seconds flat."],
    ["Scheduled answers","Automated reports"],
    ["Email or Slack, with a note when the figure moves more than usual.","Webhooks or API, with a note when the sentiment moves more than usual."],
    ["One thread out of line, and you hear about it first.","One cue out of line, and you hear about it first."],
    ["Pulse learns what normal looks like for every metric you care about and only speaks up when something is both unusual and large enough to matter. Each alert arrives with the answer attached.","Argus learns what normal looks like for every speaker you care about and only flags up when emotion is both intense and sharp enough to matter. Each alert arrives with the footage attached."],
    ["Warpyn","Argus"],
    ["Nuance","Argus"]
  ];

  function brand(value) {
    return value.replace(/\b(warpyn|nuance)\b/gi, word => word === word.toUpperCase() ? 'ARGUS' : word[0] === word[0].toLowerCase() ? 'argus' : 'Argus');
  }

  function syncNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.parentElement?.closest('script,style')) return;
      let val = node.nodeValue;
      if (val) {
        for (const [from, to] of textMap) {
          if (val.includes(from)) val = val.replaceAll(from, to);
        }
        if (/(warpyn|nuance)/i.test(val)) val = brand(val);
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
        if (/(warpyn|nuance)/i.test(v)) v = brand(v);
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

      const isLogin = cleanHref === '/login';
      const isContact = cleanHref === '/contact' || cleanHref === '/signup';

      const signinBtn = link.closest('[data-framer-name="Button · Sign in"]') ||
                        link.querySelector('[data-framer-name="Button · Sign in"]') ||
                        link.closest('.nuance-nav-signin') ||
                        (isLogin && link.classList.contains('pill') ? link : null);

      const connectBtn = link.closest('[data-framer-name="Button · Connect"]') ||
                         link.querySelector('[data-framer-name="Button · Connect"]') ||
                         (isContact && link.classList.contains('pill') ? link : null);

      // Sign in and Analyse a video sections stay normal without orange styling
      if (signinBtn || connectBtn) {
        link.classList.remove('active');
        link.removeAttribute('data-framer-page-link-current');
        if (link.style) {
          link.style.color = '';
        }
        link.querySelectorAll('*').forEach((el) => {
          el.classList.remove('active');
          el.removeAttribute('data-framer-page-link-current');
          if (el.style) el.style.color = '';
        });
        if (signinBtn) {
          signinBtn.classList.remove('active');
          signinBtn.removeAttribute('data-framer-page-link-current');
          if (signinBtn.style) signinBtn.style.color = '';
          signinBtn.querySelectorAll('*').forEach((el) => {
            el.classList.remove('active');
            el.removeAttribute('data-framer-page-link-current');
            if (el.style) el.style.color = '';
          });
        }
        if (connectBtn) {
          connectBtn.classList.remove('active');
          connectBtn.removeAttribute('data-framer-page-link-current');
          connectBtn.removeAttribute('data-active');
          if (connectBtn.style) connectBtn.style.color = '';
          connectBtn.querySelectorAll('*').forEach((el) => {
            el.classList.remove('active');
            el.removeAttribute('data-framer-page-link-current');
            el.removeAttribute('data-active');
            if (el.style) el.style.color = '';
          });
        }
        return;
      }

      const isCurrentActive = cleanHref !== '/' && cleanHref === current;

      if (isCurrentActive) {
        link.classList.add('active');
        link.setAttribute('data-framer-page-link-current', 'true');
        link.querySelectorAll('p, span').forEach((el) => el.classList.add('active'));
        if (link.style) {
          link.style.color = '#ff4b1f';
        }
      } else {
        link.classList.remove('active');
        link.removeAttribute('data-framer-page-link-current');
        link.querySelectorAll('p, span').forEach((el) => el.classList.remove('active'));
        if (link.style) {
          link.style.color = '';
        }
      }
    });
  }

  function cleanupDuplicateSignIn() {
    document.querySelectorAll('.nuance-nav-signin').forEach((el) => el.remove());
  }

  function removeFooterStatus() {
    document.querySelectorAll('[data-framer-name="Status"], .framer-1wek95h, .footer-status, .footer-pill-tag').forEach((el) => el.remove());
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
            localStorage.setItem('argus_quota', JSON.stringify(data.quota));
            localStorage.setItem('argus_user', JSON.stringify(data.user || { email }));
            localStorage.setItem('nuance_quota', JSON.stringify(data.quota));
            localStorage.setItem('nuance_user', JSON.stringify(data.user || { email }));
            window.location.assign('/console');
            return;
          }
        } catch (_) {}
        localStorage.setItem('argus_quota', JSON.stringify(quota));
        localStorage.setItem('argus_user', JSON.stringify({ email }));
        localStorage.setItem('nuance_quota', JSON.stringify(quota));
        localStorage.setItem('nuance_user', JSON.stringify({ email }));
        window.location.assign('/console');
      }, true);
    });
  }

  syncNode(document.documentElement);
  removeFooterStatus();
  cleanupDuplicateSignIn();
  highlightActiveNav();
  handleAuthForms();

  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData' || record.type === 'attributes') syncNode(record.target);
      else record.addedNodes.forEach(syncNode);
    }
    removeFooterStatus();
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
