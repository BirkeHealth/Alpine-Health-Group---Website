const menuButton = document.querySelector('[data-menu-button]');
const siteNav = document.querySelector('[data-site-nav]');
const yearTarget = document.querySelector('[data-year]');
const formSubmittedParam = 'submitted';
const formSubmittedValue = '1';

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
const formNextTarget = document.querySelector('[data-form-next]');
const urlParams = new URLSearchParams(window.location.search);

if (formNextTarget) {
  const nextUrlParams = new URLSearchParams(window.location.search);
  nextUrlParams.set(formSubmittedParam, formSubmittedValue);
  formNextTarget.value = `${window.location.origin}${window.location.pathname}?${nextUrlParams.toString()}`;
}

if (formStatus && urlParams.get(formSubmittedParam) === formSubmittedValue) {
  formStatus.classList.remove('is-hidden');
  window.history.replaceState({}, '', `${window.location.pathname}${window.location.hash}`);
}
