import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Phone and tablet versions of Agina effects that are built around desktop-only layouts.
// Everything is created inside the matchMedia context, so crossing a breakpoint or leaving
// the page reverts the tweens, pins and inline styles.
export default function mobileEffects() {
  const mm = gsap.matchMedia();
  const timers = [];

  // Run after Agina has set up ScrollSmoother and its own triggers (same timing as sectionHold).
  const later = (ctx, fn) => {
    const run = () => timers.push(setTimeout(() => { ctx.add(fn); ScrollTrigger.refresh(); }, 1000));
    if (document.readyState === 'complete') run();
    else window.addEventListener('load', run, { once: true });
  };

  // Agina grows the about image to full width while pinned on desktop. On small screens it is
  // already full width, so it opens up from a framed inset as it scrolls in instead.
  mm.add('(max-width: 991px)', (ctx) => later(ctx, () => {
    const reveal = (el, from, extra = {}) => gsap.fromTo(el, { clipPath: from }, {
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 95%', end: 'center 55%', scrub: 0.6, ...extra },
    });


    // FAQ and "why choose us": desktop pins the side column next to the list. On phones that
    // column sits above the list, so pin a slim title bar instead while its own list scrolls by.
    const stickyTitle = (section, title, list) => {
      if (!title || !list) return;
      title.classList.add('ps-sticky-title');
      ScrollTrigger.create({
        trigger: title,
        start: 'top top+=12',
        endTrigger: list,
        end: () => `bottom top+=${title.offsetHeight + 100}`,
        pin: true,
        pinSpacing: false,
        onToggle: (st) => title.classList.toggle('is-stuck', st.isActive),
      });
      section.dataset.psSticky = '1';
    };
    document.querySelectorAll('.tj-faq-section').forEach((s) => stickyTitle(s, s.querySelector('.section_heading.d-lg-none .sec_title'), s.querySelector('.tj-faq-wrapper')));
    document.querySelectorAll('.why-choose-section').forEach((s) => stickyTitle(s, s.querySelector('.section_heading .sec_title'), s.querySelector('.why-choose-item-wrap')));

    // Guide: desktop pins the whole sidebar beside the article. In one column that would cover the
    // text, so only the contents chips stay pinned at the top while the guide is on screen.
    document.querySelectorAll('.ps-guide').forEach((guide) => {
      const toc = guide.querySelector('.ps-guide-toc');
      const body = guide.querySelector('.ps-guide-body');
      if (!toc || !body) return;
      ScrollTrigger.create({
        trigger: toc,
        start: 'top top+=12',
        endTrigger: body,
        end: 'bottom top+=90',
        pin: true,
        pinSpacing: false,
      });
    });

    // Home services list: turn the numbered services into a picker-wheel dial, like a phone's
    // timer scroll wheel. Five sit in view at once (two dimmed, shrunk ones on each side of the
    // full-size centre one); scrolling rotates the drum and the new centre item zooms up to size.
    // Only the numbered items are affected; the heading and paragraph above scroll normally.
    document.querySelectorAll('.h1_services_wrapper .h1_services_items').forEach((box) => {
      const items = [...box.querySelectorAll('.tj_service_item')];
      const n = items.length;
      const wrap = box.closest('.h1_services_wrapper');
      if (n < 2 || !wrap) return;

      box.classList.add('ps-dial');
      items.forEach((el) => {
        el.classList.add('ps-dial-item');
        // Agina's own fade-in reveal would otherwise fire for every item at once, since they all
        // share the same position once stacked, and win the fight over their opacity.
        el.classList.remove('tj-fade');
        ScrollTrigger.getAll().forEach((st) => { if (st.trigger === el) st.kill(); });
      });

      // Style for a slot at distance d (0 = centre, negative = above, positive = below).
      const SLOTS = [
        { scale: 1, opacity: 1 }, // 0
        { scale: 0.7, opacity: 0.45 }, // 1
        { scale: 0.5, opacity: 0.2 }, // 2
      ];
      const HIDDEN = { scale: 0.4, opacity: 0 };
      const styleFor = (d) => SLOTS[Math.abs(d)] || HIDDEN;
      const GAP = 20;

      const hs = items.map((el) => el.offsetHeight);
      const sorted = [...hs].sort((a, b) => a - b);
      const typicalH = sorted[Math.floor(sorted.length / 2)];
      const maxH = sorted[sorted.length - 1];
      // Room for a tall centre item plus two scaled rings of typical items each side.
      box.style.height = `${maxH + 2 * typicalH * (SLOTS[1].scale + SLOTS[2].scale) + 4 * GAP}px`;

      // Centre-to-centre offset of every item from the current one, built from the actual scaled
      // heights of the items in between, so neighbours never overlap whatever their title length.
      const offsets = (cur) => {
        const out = new Array(n).fill(0);
        for (const dir of [1, -1]) {
          let y = 0;
          for (let d = 1; cur + dir * d >= 0 && cur + dir * d < n; d += 1) {
            const a = cur + dir * (d - 1);
            const b = cur + dir * d;
            y += (hs[a] * styleFor(d - 1).scale) / 2 + (hs[b] * styleFor(d).scale) / 2 + GAP;
            out[b] = dir * y;
          }
        }
        return out;
      };

      // Agina's own fade-in for .tj-fade uses autoAlpha, which leaves visibility:hidden baked into
      // the inline style even after that tween is killed; put it back since we hide via opacity alone.
      gsap.set(items, { position: 'absolute', top: '50%', left: 0, width: '100%', yPercent: -50, visibility: 'visible', transformOrigin: '50% 50%' });

      let current = 0;
      const place = (animate) => {
        const off = offsets(current);
        items.forEach((el, idx) => {
          const d = idx - current;
          const s = styleFor(d);
          const vars = {
            y: off[idx],
            scale: s.scale,
            opacity: s.opacity,
            zIndex: 100 - Math.abs(d),
            pointerEvents: d === 0 ? 'auto' : 'none',
          };
          if (animate) gsap.to(el, { ...vars, duration: 0.4, ease: 'back.out(1.6)' });
          else gsap.set(el, vars);
        });
      };
      place(false);

      // The drum fades and settles in while the section scrolls into view, instead of appearing
      // already in place the moment it's technically on screen.
      gsap.fromTo(box, { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, ease: 'power1.out',
        scrollTrigger: { trigger: wrap, start: 'top 90%', end: 'top top', scrub: 0.3 },
      });

      ScrollTrigger.create({
        trigger: wrap,
        start: () => `top top+=${Math.max(20, (window.innerHeight - wrap.offsetHeight) / 2)}`,
        end: () => `+=${window.innerHeight * 0.6 * (n - 1)}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const next = Math.round(self.progress * (n - 1));
          if (next === current) return;
          current = next;
          place(true);
        },
      });
    });

    document.querySelectorAll('.h2-about-content-wrap .image-wrapper').forEach((el) => {
      const btn = el.querySelector('.video-btn');
      if (btn) gsap.set(btn, { opacity: 0, scale: 0.7 });
      reveal(el, 'inset(0% 16% 0% 16%)', {
        onUpdate: (st) => {
          if (!btn) return;
          const open = st.progress > 0.6;
          gsap.to(btn, { opacity: open ? 1 : 0, scale: open ? 1 : 0.7, duration: 0.3, overwrite: true });
        },
      });
    });
  }));

  // Website page project showcase: desktop pins it and swaps one project at a time. Below 1200px
  // Agina shows a plain list, so pin the list and stack the projects: each one slides up over the
  // last, and the earlier ones step back with a strip still showing above.
  mm.add('(max-width: 1199px)', (ctx) => later(ctx, () => {
    const box = document.querySelector('.perspective-showcase-images');
    if (!box) return;
    const items = [...box.querySelectorAll('.perspective-showcase-item')];
    const n = items.length;
    if (n < 2) return;
    const STEP = 14;
    const SHOWN = 3;

    gsap.set(box, { position: 'relative', height: Math.max(...items.map((el) => el.offsetHeight)), clipPath: `inset(-${STEP * SHOWN + 10}px -30px 0 -30px)` });
    gsap.set(items, {
      position: 'absolute', top: 0, left: 0, width: '100%', zIndex: (i) => i + 1,
      yPercent: (i) => (i ? 110 : 0), transformOrigin: '50% 0%', filter: 'brightness(1)',
      backgroundColor: 'var(--tj-color-theme-bg)',
    });

    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut', duration: 1 },
      scrollTrigger: {
        trigger: box,
        start: 'center center',
        end: () => `+=${(n - 1) * window.innerHeight * 0.6}`,
        scrub: 0.8,
        pin: true,
        // The box's parent is a flex container, where GSAP turns pin spacing off by default.
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });
    for (let i = 1; i < n; i += 1) {
      tl.to(items[i], { yPercent: 0 }, i - 1);
      for (let j = 0; j < i; j += 1) {
        const d = Math.min(i - j, SHOWN);
        tl.to(items[j], { y: -STEP * d, scale: 1 - 0.04 * d, filter: `brightness(${1 - 0.15 * d})`, opacity: i - j > SHOWN ? 0 : 1 }, i - 1);
      }
    }
  }));

  return () => {
    timers.forEach(clearTimeout);
    mm.revert();
  };
}
