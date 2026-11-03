const root = document.documentElement;
const themeButton = document.getElementById('themeToggle');
const menuButton = document.getElementById('menuToggle');
const nav = document.getElementById('primaryNav');

try {
  const stored = localStorage.getItem('lep-theme');
  if (stored === 'dark' || stored === 'light') root.dataset.theme = stored;
  else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';
} catch (_) { /* The site also works when local storage is unavailable. */ }

function updateThemeLabel() {
  themeButton?.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}
updateThemeLabel();
themeButton?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  updateThemeLabel();
  try { localStorage.setItem('lep-theme', root.dataset.theme); } catch (_) {}
});

function closeMenu() {
  nav?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

document.getElementById('year').textContent = String(new Date().getFullYear());
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); } });
  }, {threshold: 0.05, rootMargin: '0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('in'));
}
