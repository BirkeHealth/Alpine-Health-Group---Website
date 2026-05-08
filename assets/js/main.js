const menuButton = document.querySelector('[data-menu-button]');
const siteNav = document.querySelector('[data-site-nav]');
const yearTarget = document.querySelector('[data-year]');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('is-open');
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const formStatus = document.querySelector('[data-form-status]');
const urlParams = new URLSearchParams(window.location.search);

if (formStatus && urlParams.get('submitted') === '1') {
  formStatus.hidden = false;
  window.history.replaceState({}, '', `${window.location.pathname}${window.location.hash}`);
}
