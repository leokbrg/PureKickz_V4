/*
 * PUREKICKZ – weiche Übergänge zwischen Sections.
 * Die Flächen wechseln ab (Weiß ↔ Grau ↔ Schwarz); statt einer harten Kante läuft die Farbe der
 * vorigen Section oben in die nächste aus. Ohne JavaScript bleibt die klare Kante – alles lesbar.
 * Bänder (PK Band) sind selbst die Naht und bekommen keinen Übergang.
 */
(() => {
  const isClear = (color) => !color || color === 'transparent' || /rgba\(.*,\s*0\)$/.test(color);

  /** Hintergrund einer Section: erste deckende Fläche, die (fast) die ganze Breite einnimmt */
  const surfaceOf = (section) => {
    const width = section.offsetWidth;
    let el = section;
    for (let depth = 0; el && depth < 4; depth++) {
      const color = getComputedStyle(el).backgroundColor;
      if (!isClear(color) && el.offsetWidth >= width * 0.9) return color;
      el = [...el.children].find((child) => child.offsetWidth >= width * 0.9 && child.offsetHeight > 0);
    }
    return getComputedStyle(document.body).backgroundColor;
  };

  const isBand = (section) => section.querySelector('[data-pk-band]') !== null;

  const blend = () => {
    const sections = [
      ...document.querySelectorAll('#MainContent > .shopify-section, footer > .shopify-section'),
    ].filter((section) => section.offsetHeight > 0);

    sections.forEach((section, i) => {
      section.classList.remove('pk-blend');
      const prev = sections[i - 1];
      if (!prev || isBand(section) || isBand(prev)) return;
      const from = surfaceOf(prev);
      if (from === surfaceOf(section)) return;
      section.style.setProperty('--pk-prev-bg', from);
      section.classList.add('pk-blend');
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', blend);
  else blend();

  // Theme-Editor: Sections werden neu geladen oder verschoben
  ['shopify:section:load', 'shopify:section:unload', 'shopify:section:reorder'].forEach((type) =>
    document.addEventListener(type, () => requestAnimationFrame(blend))
  );
})();
