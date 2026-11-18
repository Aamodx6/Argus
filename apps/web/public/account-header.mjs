import { getAccountPlan, getSession } from './account-session.mjs';

const root = document.documentElement;
const names = { STARTER: 'Starter', PROFESSIONAL: 'Pro', BUSINESS: 'Business' };
let tier;
let latestRequest = 0;
let expiryTimer;

function paintBrand() {
  const planName = names[tier];
  for (const label of document.querySelectorAll('[data-argus-brand], [data-framer-name="Logo"] p, [data-framer-name="Logo"] span')) {
    if (![...label.childNodes].some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() === 'Argus')) continue;
    let badge = label.querySelector(':scope > .argus-plan-badge');
    if (planName) {
      if (!badge) {
        badge = document.createElement('small');
        badge.className = 'argus-plan-badge';
        badge.setAttribute('aria-hidden', 'true');
        label.append(badge);
      }
      if (badge.textContent !== planName) badge.textContent = planName;
    } else badge?.remove();
    const logo = label.closest('a');
    const accessibleName = planName ? `Argus home · ${planName} plan` : 'Argus home';
    if (logo && logo.getAttribute('aria-label') !== accessibleName) logo.setAttribute('aria-label', accessibleName);
  }
}

function applyPlan(accountPlan) {
  clearTimeout(expiryTimer);
  const expiresAt = Date.parse(accountPlan?.expiresAt);
  const remaining = expiresAt - Date.now();
  tier = remaining > 0 && Object.hasOwn(names, accountPlan?.plan) ? accountPlan.plan : undefined;
  root.dataset.accountPlan = tier || 'STARTER';
  paintBrand();
  if (tier) {
    expiryTimer = setTimeout(() => {
      if (Date.now() >= expiresAt) applyPlan(null);
      void updateAccountHeader();
    }, Math.min(remaining, 2_147_000_000));
  }
}

export async function updateAccountHeader(session) {
  const request = ++latestRequest;
  try {
    const current = session === undefined ? await getSession() : session;
    if (request !== latestRequest) return;
    root.dataset.accountState = current ? 'signed-in' : 'signed-out';
    const plan = current ? await getAccountPlan().catch(() => null) : null;
    if (request !== latestRequest) return;
    if (!current || plan) applyPlan(plan);
  } catch {
    if (request === latestRequest && (!root.dataset.accountState || root.dataset.accountState === 'checking')) {
      root.dataset.accountState = 'unknown';
    }
  }
}

let paintScheduled = false;
new MutationObserver(() => {
  if (!tier || paintScheduled) return;
  paintScheduled = true;
  requestAnimationFrame(() => { paintScheduled = false; paintBrand(); });
}).observe(document.body, { childList: true, subtree: true });

window.addEventListener('pageshow', event => {
  if (event.persisted) void updateAccountHeader();
});
window.addEventListener('argus:plan-change', () => void updateAccountHeader());
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) void updateAccountHeader();
});

if (!document.getElementById('argus-flow')) void updateAccountHeader();
