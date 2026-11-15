export const pages = new Set(['/', '/product', '/sources', '/customers', '/pricing', '/changelog', '/contact', '/signup', '/login', '/console', '/app', '/dashboard']);

export function publicOrigin(value) {
  if (!value) return '';
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password ||
      url.pathname !== '/' || url.search || url.hash) {
    throw new Error('Public URLs must be HTTP(S) origins without credentials, paths or query strings.');
  }
  return url.origin;
}

export function templateLink(href) {
  if (!href.includes('chocolate-popover-456599.framer.app')) return href;
  const suffix = href.split('chocolate-popover-456599.framer.app')[1] || '/';
  const path = suffix.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
  return pages.has(path) ? path : null;
}

export function normalizeTemplateHtml(html) {
  return html.replace(/\bWarpyn\b/g, 'Nuance').replace(/href="([^"]+)"/g, (attribute, href) => {
    const target = templateLink(href);
    return target === null ? 'aria-disabled="true" title="This template page is not available"'
      : `href="${target}"`;
  });
}
