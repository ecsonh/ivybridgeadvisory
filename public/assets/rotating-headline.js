/* IvyBridge homepage rotating headlines: dependency-free and accessible. */
(function () {
  'use strict';
  const headline = document.querySelector('[data-rotate-headline]');
  if (!headline) return;
  const options = (headline.getAttribute('data-rotate-values') || '').split('|').map(s => s.trim()).filter(Boolean);
  if (options.length < 2) return;
  const hero = headline.closest('.ib-site-banner');
  const controls = hero ? hero.querySelector('.ib-rotating-controls') : null;
  if (!hero || !controls) return;
  const dots = Array.from(controls.querySelectorAll('[data-rotate-to]'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let timer = null;

  function show(next, animate) {
    index = (next + options.length) % options.length;
    headline.textContent = options[index];
    headline.classList.remove('ib-headline-enter');
    if (animate && !reducedMotion.matches) {
      void headline.offsetWidth; // Restart CSS animation after a change.
      headline.classList.add('ib-headline-enter');
    }
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-pressed', String(i === index));
    });
  }

  function stop() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }
  function start() {
    stop();
    if (!document.hidden && !reducedMotion.matches) {
      timer = window.setInterval(() => show(index + 1, true), 2000);
    }
  }
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const next = Number(dot.getAttribute('data-rotate-to'));
      if (Number.isInteger(next) && next >= 0 && next < options.length) show(next, true);
      start();
    });
  });
  document.addEventListener('visibilitychange', start);
  if (typeof reducedMotion.addEventListener === 'function') reducedMotion.addEventListener('change', start);
  else if (typeof reducedMotion.addListener === 'function') reducedMotion.addListener(start);
  show(0, false);
  start();
})();
