/*
 * PUREKICKZ – Einblenden beim Scrollen.
 * Elemente mit [data-pk-reveal] erscheinen einmalig, sobald sie ins Bild kommen.
 * Kinder eines [data-pk-stagger] erscheinen nacheinander.
 * Bei prefers-reduced-motion passiert nichts: alles bleibt sofort sichtbar.
 */
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const STAGGER_MS = 70;
  const root = document.documentElement;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );

  const watch = (scope) => {
    scope.querySelectorAll('[data-pk-stagger]').forEach((group) => {
      [...group.querySelectorAll(':scope > [data-pk-reveal]')].forEach((el, i) => {
        el.style.setProperty('--pk-delay', `${i * STAGGER_MS}ms`);
      });
    });
    scope.querySelectorAll('[data-pk-reveal]:not(.is-visible)').forEach((el) => {
      // Was beim Laden schon im Bild ist, bleibt einfach stehen statt kurz zu verschwinden
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('is-visible');
        return;
      }
      observer.observe(el);
    });
  };

  /* Zahlen hochzählen, sobald sie ins Bild kommen (der Endwert steht ohne JavaScript schon da) */
  const countUp = (el) => {
    const target = Number(el.dataset.pkCount);
    if (!target) return;
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) requestAnimationFrame(step);
    };
    el.textContent = '0';
    requestAnimationFrame(step);
  };

  const counter = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        counter.unobserve(entry.target);
        countUp(entry.target);
      }
    },
    { threshold: 0.6 }
  );

  root.classList.add('pk-motion');
  watch(document);
  document.querySelectorAll('[data-pk-count]').forEach((el) => counter.observe(el));

  // Theme-Editor: neu geladene Sections ebenfalls beobachten, dort aber sofort zeigen
  document.addEventListener('shopify:section:load', (event) => {
    event.target.querySelectorAll('[data-pk-reveal]').forEach((el) => el.classList.add('is-visible'));
  });
})();
