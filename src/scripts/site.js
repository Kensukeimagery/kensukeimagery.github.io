// ---------- language preference ----------
const LKEY = 'ken-lang';
const store = {
  get() { try { return localStorage.getItem(LKEY); } catch { return null; } },
  set(v) { try { localStorage.setItem(LKEY, v); } catch {} },
};
document.querySelectorAll('[data-lang]').forEach((a) =>
  a.addEventListener('click', () => store.set(a.dataset.lang)),
);
// first-time default is Thai; if the visitor chose English before, take them there
if (document.documentElement.lang === 'th' && store.get() === 'en' && !document.referrer.includes(location.host)) {
  const en = document.querySelector('[data-lang="en"]');
  if (en) location.replace(en.getAttribute('href') + location.hash);
}

// ---------- header: solid on scroll, hide on scroll down ----------
const header = document.querySelector('[data-header]');
let lastY = window.scrollY;
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 40);
  header.classList.toggle('is-hidden', y > 300 && y > lastY && !document.documentElement.classList.contains('menu-open'));
  lastY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- mobile menu ----------
const menuBtn = document.querySelector('[data-menu-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const setMenu = (open) => {
  document.documentElement.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
};
menuBtn?.addEventListener('click', () => setMenu(!document.documentElement.classList.contains('menu-open')));
mobileMenu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// ---------- live age ----------
document.querySelectorAll('[data-age]').forEach((el) => {
  const b = new Date(el.dataset.age), n = new Date();
  let a = n.getFullYear() - b.getFullYear();
  if (n.getMonth() < b.getMonth() || (n.getMonth() === b.getMonth() && n.getDate() < b.getDate())) a--;
  el.textContent = a;
});

// ---------- reveal on scroll ----------
const revealEls = document.querySelectorAll('.reveal, .reveal-img');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}

// ---------- click-to-load video embeds ----------
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-embed]');
  if (!btn) return;
  // TikTok blocks shoppable (cart) videos in embedded players on desktop — open TikTok instead
  if (btn.dataset.shop && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.open(btn.dataset.ext, '_blank', 'noopener');
    return;
  }
  const f = document.createElement('iframe');
  f.src = btn.dataset.embed;
  f.title = btn.dataset.title || 'video';
  f.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
  f.allowFullscreen = true;
  f.loading = 'lazy';
  btn.replaceWith(f);
});

// ---------- works filter ----------
const chips = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-works] > [data-cat]');
const applyFilter = (cat) => {
  chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.filter === cat)));
  cards.forEach((card) => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.hidden = !show;
    if (show) card.classList.add('is-in');
  });
};
chips.forEach((c) => c.addEventListener('click', () => applyFilter(c.dataset.filter)));
// deep link to a single work: /works/#samsonite
if (cards.length && location.hash) {
  const target = document.getElementById(location.hash.slice(1));
  if (target) {
    target.classList.add('is-in');
    target.style.borderColor = 'var(--gold)';
    setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
  }
}

// ---------- gallery tabs ----------
const tabs = document.querySelectorAll('[data-tab]');
const selectTab = (id) => {
  tabs.forEach((tb) => {
    const on = tb.dataset.tab === id;
    tb.setAttribute('aria-selected', String(on));
    const panel = document.getElementById('panel-' + tb.dataset.tab);
    if (panel) {
      panel.hidden = !on;
      if (on) panel.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
    }
  });
};
tabs.forEach((tb) => tb.addEventListener('click', () => { selectTab(tb.dataset.tab); history.replaceState(null, '', '#' + tb.dataset.tab); }));
if (tabs.length && location.hash) {
  const id = location.hash.slice(1);
  if ([...tabs].some((tb) => tb.dataset.tab === id)) selectTab(id);
}

// ---------- lightbox ----------
const lb = document.querySelector('[data-lightbox]');
if (lb) {
  const img = lb.querySelector('[data-lb-img]');
  const cap = lb.querySelector('[data-lb-cap-el]');
  const count = lb.querySelector('[data-lb-count]');
  let items = [], idx = 0, lastFocus = null;
  const show = (i) => {
    idx = (i + items.length) % items.length;
    const it = items[idx];
    img.style.opacity = 0;
    const pre = new Image();
    pre.onload = () => { img.src = it.dataset.lb; img.alt = it.dataset.lbCap || ''; img.style.opacity = 1; };
    pre.src = it.dataset.lb;
    cap.textContent = it.dataset.lbCap || '';
    count.textContent = `${idx + 1} / ${items.length}`;
  };
  const open = (el) => {
    items = [...document.querySelectorAll(`[data-lb-group="${el.dataset.lbGroup}"]`)].filter((x) => !x.closest('[hidden]'));
    lastFocus = el;
    show(items.indexOf(el));
    lb.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
    lb.querySelector('[data-lb-close]').focus();
  };
  const close = () => {
    lb.classList.remove('is-open');
    document.documentElement.style.overflow = '';
    lastFocus?.focus();
  };
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-lb]');
    if (el) open(el);
  });
  lb.querySelector('[data-lb-close]').addEventListener('click', close);
  lb.querySelector('[data-lb-prev]').addEventListener('click', () => show(idx - 1));
  lb.querySelector('[data-lb-next]').addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lightbox__stage')) close(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  let sx = null;
  lb.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    sx = null;
  });
}

// ---------- résumé print ----------
document.querySelector('[data-print]')?.addEventListener('click', () => {
  document.querySelectorAll('.reveal, .reveal-img').forEach((el) => el.classList.add('is-in'));
  window.print();
});

// ---------- slideshows (hero / page header) ----------
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-slideshow]').forEach((box) => {
  const slides = [...box.querySelectorAll('.slide')];
  const dots = [...(box.parentElement.querySelectorAll('.slide-dots span') || [])];
  if (slides.length < 2 || reduceMotion) return;
  let i = 0;
  const go = () => {
    if (document.hidden) return;
    slides[i].classList.remove('is-active'); dots[i]?.classList.remove('is-active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('is-active');
    const d = dots[i]; if (d) { d.classList.remove('is-active'); void d.offsetWidth; d.classList.add('is-active'); }
  };
  setInterval(go, Number(box.dataset.interval) || 5500);
});

// ---------- works carousel ----------
const car = document.querySelector('[data-carousel]');
if (car) {
  const step = () => (car.querySelector('.wcard')?.getBoundingClientRect().width || 300) + 20;
  document.querySelector('[data-car-prev]')?.addEventListener('click', () => car.scrollBy({ left: -step(), behavior: 'smooth' }));
  document.querySelector('[data-car-next]')?.addEventListener('click', () => car.scrollBy({ left: step(), behavior: 'smooth' }));
}

// ---------- sticky contact button (mobile) ----------
const cta = document.querySelector('[data-sticky-cta]');
const contactSec = document.getElementById('contact');
if (cta && contactSec) {
  let contactVisible = false;
  new IntersectionObserver((es) => { contactVisible = es[0].isIntersecting; upd(); }, { threshold: 0.05 }).observe(contactSec);
  const upd = () => cta.classList.toggle('is-on', window.scrollY > window.innerHeight * 0.6 && !contactVisible);
  window.addEventListener('scroll', upd, { passive: true });
  upd();
}
