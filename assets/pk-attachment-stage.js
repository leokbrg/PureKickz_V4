/*
 * PUREKICKZ Aufsatz-Bühne.
 * Während die Section durchscrollt, bleibt die Bühne stehen und wechselt Aufsatz für Aufsatz.
 * Der Magenta-Ring wird auf den Kopf im Foto gesetzt; dafür wird die object-fit-cover-Abbildung
 * (Desktop links unten, Handy mittig unten) nachgerechnet.
 * Bei prefers-reduced-motion bleibt die ruhige Liste stehen.
 */
(() => {
  if (customElements.get('pk-attachment-stage')) return;

  const DESKTOP = window.matchMedia('(min-width: 990px)');
  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)');
  const RING_AIR = 1.4; // Ring etwas größer als der Kopf, wie eine Umlaufbahn

  class PkAttachmentStage extends HTMLElement {
    connectedCallback() {
      this.count = Number(this.dataset.count) || 0;
      if (!this.count || REDUCE.matches) return;

      this.track = this.querySelector('.pk-stage__track');
      this.scene = this.querySelector('.pk-stage__scene');
      this.ring = this.querySelector('.pk-stage__ring');
      this.shots = [...this.querySelectorAll('.pk-stage__shot')];
      this.panels = [...this.querySelectorAll('.pk-stage__panel')];
      this.chips = [...this.querySelectorAll('.pk-stage__chip')];
      this.counter = this.querySelector('.pk-stage__counter-now');
      this.active = -1;
      this.ticking = false;

      this.classList.add('is-enhanced');

      this.onScroll = () => {
        if (this.ticking) return;
        this.ticking = true;
        requestAnimationFrame(() => {
          this.ticking = false;
          this.update();
        });
      };
      this.onResize = () => this.placeRing();

      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onResize, { passive: true });
      DESKTOP.addEventListener('change', this.onResize);

      this.chips.forEach((chip, i) => {
        chip.addEventListener('click', () => this.goTo(i));
        chip.addEventListener('keydown', (event) => this.onKey(event, i));
      });

      // Bilder können nach dem ersten Zeichnen laden – dann Ring neu setzen
      this.shots.forEach((shot) => shot.querySelector('img')?.addEventListener('load', this.onResize));

      // Theme-Editor: ausgewählten Block anzeigen
      this.onBlockSelect = (event) => {
        const index = this.panels.findIndex((panel) => panel.contains(event.target) || panel === event.target);
        if (index > -1) this.setActive(index);
      };
      document.addEventListener('shopify:block:select', this.onBlockSelect);

      this.setActive(0);
      this.update();
    }

    disconnectedCallback() {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onResize);
      DESKTOP.removeEventListener('change', this.onResize);
      document.removeEventListener('shopify:block:select', this.onBlockSelect);
    }

    /** Fortschritt durch die Section (0…1) → aktiver Aufsatz */
    progress() {
      const rect = this.track.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      if (distance <= 0) return 0;
      return Math.min(Math.max(-rect.top / distance, 0), 1);
    }

    update() {
      const p = this.progress();
      this.setActive(Math.min(this.count - 1, Math.floor(p * this.count)));
    }

    setActive(index) {
      if (index === this.active) return;
      this.active = index;
      this.shots.forEach((el, i) => (i === index ? el.setAttribute('data-active', 'true') : el.removeAttribute('data-active')));
      this.panels.forEach((el, i) => (i === index ? el.setAttribute('data-active', 'true') : el.removeAttribute('data-active')));
      this.chips.forEach((chip, i) => {
        chip.setAttribute('aria-selected', String(i === index));
        chip.tabIndex = i === index ? 0 : -1;
      });
      if (this.counter) this.counter.textContent = String(index + 1).padStart(2, '0');
      this.placeRing();
    }

    /** Ring auf den Kopf im sichtbaren Foto setzen (object-fit: cover) */
    placeRing() {
      const chip = this.chips[this.active];
      const shot = this.shots[this.active];
      if (!chip || !shot || !this.ring) return;

      const desktop = DESKTOP.matches;
      const iw = Number(desktop ? shot.dataset.dw : shot.dataset.mw);
      const ih = Number(desktop ? shot.dataset.dh : shot.dataset.mh);
      const x = Number(desktop ? chip.dataset.dx : chip.dataset.mx) / 100;
      const y = Number(desktop ? chip.dataset.dy : chip.dataset.my) / 100;
      const d = Number(desktop ? chip.dataset.dd : chip.dataset.md) / 100;
      if (!iw || !ih) {
        this.ring.style.setProperty('--ring-o', '0');
        return;
      }

      const cw = this.scene.clientWidth;
      const ch = this.scene.clientHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const rw = iw * scale;
      const rh = ih * scale;
      const offsetY = ch - rh; // unten ausgerichtet
      const offsetX = desktop ? 0 : (cw - rw) * 0.5; // Desktop links, Handy mittig ausgerichtet

      this.ring.style.setProperty('--ring-x', `${offsetX + x * rw}px`);
      this.ring.style.setProperty('--ring-y', `${offsetY + y * rh}px`);
      this.ring.style.setProperty('--ring-d', `${d * rw * RING_AIR}px`);
      this.ring.style.setProperty('--ring-o', '1');
    }

    /** Zu einem Aufsatz springen: an die passende Stelle der Section scrollen */
    goTo(index) {
      const rect = this.track.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const target = window.scrollY + rect.top + distance * ((index + 0.5) / this.count);
      this.setActive(index);
      window.scrollTo({ top: target, behavior: 'smooth' });
    }

    onKey(event, index) {
      const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (!(event.key in keys)) return;
      event.preventDefault();
      const next = (index + keys[event.key] + this.count) % this.count;
      this.chips[next].focus();
      this.goTo(next);
    }
  }

  customElements.define('pk-attachment-stage', PkAttachmentStage);
})();
