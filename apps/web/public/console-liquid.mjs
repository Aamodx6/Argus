const uid = 'console-liquid';
const clamp = (n) => Math.max(0, Math.min(1, n));
const mix = (a, b, t) => a + (b - a) * t;
const smooth = (t) => { t = clamp(t); return t * t * (3 - 2 * t); };
// Invert x(t) to evaluate exactly cubic-bezier(.4, 0, .2, 1).
function liquidEase(x) {
  x = clamp(x);
  let low = 0, high = 1, t = x;
  for (let i = 0; i < 14; i++) {
    const v = 3 * (1 - t) ** 2 * t * .4 + 3 * (1 - t) * t * t * .2 + t ** 3;
    if (v < x) low = t; else high = t;
    t = (low + high) / 2;
  }
  return 3 * (1 - t) * t * t + t ** 3;
}
const resting = () => ({ scale: 1, y: 0, blur: 0, opacity: 1, gray: 0, pale: 0,
  shadow: .2, shadowBlur: 14, shadowY: 12, cover: 0, contact: 0, contactScale: 1,
  dimple: 0, displacement: 0, glint: 0 });

function sinking(ms) {
  const pose = resting();
  if (ms <= 150) {
    const p = liquidEase(ms / 150);
    return { ...pose, scale: mix(1, .96, p), y: 2 * p, shadow: mix(.2, .3, p),
      shadowBlur: mix(14, 6, p), shadowY: mix(12, 4, p), contact: .25 * p, dimple: .15 * p };
  }
  if (ms <= 1000) {
    const p = liquidEase((ms - 150) / 850);
    return { ...pose, scale: mix(.96, .5, p), y: mix(2, 8, p), blur: 5 * p,
      opacity: 1 - smooth((p - .48) / .52), gray: clamp(p * 2), pale: clamp(p * 2 - 1),
      shadow: .3 * (1 - smooth(p / .35)), shadowBlur: 6, shadowY: 4,
      cover: p, contact: mix(.25, .65, smooth(p / .22)), contactScale: mix(1, .56, p),
      dimple: .15 + .35 * Math.sin(p * Math.PI), displacement: 14 * p };
  }
  const p = clamp((ms - 1000) / 400);
  // A decaying signed refraction oscillation, not expanding waves.
  return { ...pose, scale: .5, y: 8, blur: 5, opacity: 0, gray: 1, pale: 1,
    shadow: 0, cover: 1, contact: .65 * (1 - smooth(p)), contactScale: .56 * (1 - smooth(p)),
    dimple: .15 * (1 - p), displacement: 14 * (1 - p) ** 2 * Math.cos(p * Math.PI * 5),
    glint: Math.sin(Math.PI * clamp(p / .82)) ** 2 };
}


export function createLiquidUpload(root) {
  const e = Object.fromEntries([...root.querySelectorAll('[data-liquid]')].map(node => [node.dataset.liquid, node]));
  const filters = Object.fromEntries([...root.querySelectorAll('[data-filter]')].map(node => [node.dataset.filter, node]));
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const reduced = () => document.documentElement.dataset.motion !== 'full' && preference.matches;
  function paint(p, minimal = false) {
    if (!e.button) return;
    e.button.style.transform = minimal ? 'none' : `translateY(${p.y}px) scale(${p.scale})`;
    e.button.style.opacity = String(p.opacity);
    e.button.style.filter = minimal || !p.displacement || !p.opacity ? 'none' : `url(#${uid}-refract) blur(${p.blur}px)`;
    e.gray.style.opacity = String(minimal ? 0 : p.gray);
    e.pale.style.opacity = String(minimal ? 0 : p.pale);
    e.shadow.style.opacity = String(minimal ? 0 : p.shadow);
    e.shadow.style.transform = minimal ? 'translateY(12px)' : `translateY(${p.shadowY}px) scale(${p.scale})`;
    e.shadow.style.filter = minimal ? 'none' : `blur(${p.shadowBlur}px)`;
    e.contact.style.opacity = String(minimal ? 0 : p.contact);
    e.contact.style.transform = `translateY(${p.y}px) scale(${p.contactScale})`;
    e.dimple.style.opacity = String(minimal ? 0 : p.dimple);
    e.dimple.style.transform = `scale(${1 - .7 * p.cover})`;
    e.cover.style.opacity = String(minimal ? 0 : smooth(p.cover / .16));
    const closure = root.dataset.state === 'closing' || root.dataset.state === 'rising' ? clamp(p.contactScale / .56) : 1;
    e.cover.style.transform = `translateY(${p.y}px) scale(${Math.max(.01, p.scale * closure)})`;
    const c = smooth((p.cover - .18) / .82);
    // Four filled sheets merge over the face; no hard mask or moving waterline.
    e.top.style.transform = `translate(-50%, -50%) translateY(${-78 + 70 * c}px) scaleX(${1 - .3 * c})`;
    e.bottom.style.transform = `translate(-50%, -50%) translateY(${78 - 70 * c}px) scaleX(${1 - .3 * c})`;
    e.left.style.transform = `translate(-50%, -50%) translateX(${-142 + 122 * c}px)`;
    e.right.style.transform = `translate(-50%, -50%) translateX(${142 - 122 * c}px)`;
    e.glint.style.opacity = String(minimal ? 0 : .85 * p.glint);
    e.glint.style.transform = `translateY(8px) scale(${.2 + p.glint * 1.3})`;
    filters.displacement.setAttribute('scale', String(minimal ? 0 : p.displacement));
    filters.noiseOffset.setAttribute('dx', String(p.cover * 9));
    filters.noiseOffset.setAttribute('dy', String(Math.sin(p.cover * Math.PI) * 6));
    filters.gooBlur.setAttribute('stdDeviation', String(3 + 4 * Math.sin(c * Math.PI)));
    filters.gooMatrix.setAttribute('values', `1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 ${18 + 4 * c} ${-7 - c}`);
  }
  root.dataset.reducedMotion = String(reduced());
  e.dimple.style.filter = 'url(#console-liquid-refract)';
  e.cover.style.filter = 'url(#console-liquid-goo)';
  paint(resting(), reduced());
  return {
    sink() {
      const duration = reduced() ? 200 : 900;
      root.dataset.reducedMotion = String(reduced());
      e.button.disabled = true;
      const start = performance.now();
      return new Promise(resolve => {
        function tick(now) {
          const progress = clamp((now - start) / duration);
          const time = progress * 1400;
          root.dataset.state = time < 150 ? 'pressed' : time < 1000 ? 'submerging' : 'closing';
          paint(reduced() ? {...resting(), opacity: 1 - progress} : sinking(time), reduced());
          if (progress < 1) requestAnimationFrame(tick);
          else {
            root.dataset.state = 'gone';
            resolve();
          }
        }
        requestAnimationFrame(tick);
      });
    },
    reset() {
      root.dataset.state = 'idle';
      e.button.disabled = false;
      paint(resting(), reduced());
    },
  };
}
