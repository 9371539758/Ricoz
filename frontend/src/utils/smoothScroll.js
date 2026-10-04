export function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const navbarHeight = 80;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
}