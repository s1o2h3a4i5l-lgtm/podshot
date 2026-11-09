'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LEAD = 0.35; // timeline pause before the first card moves, and after the last

// Pins a full-screen stage and, on scroll, slides each card in from the right edge of the
// screen to land on top of the one before it. Covered cards step left into a fanned pile.
// Phones and tablets get a tighter fan so the front card keeps most of the width.
export default function ServiceStack({ count, children }) {
  const rootRef = useRef(null);
  const numRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add({ isDesktop: '(min-width: 992px)', isTablet: '(min-width: 576px) and (max-width: 991px)', isPhone: '(max-width: 575px)' }, (ctx) => {
      const { isDesktop, isTablet } = ctx.conditions;
      const STEP = isDesktop ? 44 : isTablet ? 22 : 12; // px of each covered card left showing
      const MAX_SHOWN = isDesktop ? 4 : 3; // covered cards deeper than this fade out
      const root = rootRef.current;
      const track = root.querySelector('.ps-stack-track');
      const items = [...track.querySelectorAll('.ps-stack-item')];
      const n = items.length;
      if (n < 2) return undefined;

      root.style.setProperty('--ps-fan', `${Math.min(n - 1, MAX_SHOWN) * STEP}px`);
      const offRight = () => window.innerWidth - track.getBoundingClientRect().left + 60;

      // Filter needs an explicit start: tweening from "none" passes through black.
      gsap.set(items, { zIndex: (i) => i + 1, transformOrigin: '0% 50%', filter: 'brightness(1)' });

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut', duration: 1 },
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: () => `+=${(n - 1 + LEAD * 2) * window.innerHeight * 0.75}`,
          scrub: 0.8,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: () => {
            const shown = gsap.utils.clamp(0, n - 1, Math.floor(tl.time() - LEAD + 0.5)) + 1;
            numRef.current.textContent = String(shown).padStart(2, '0');
            barRef.current.style.transform = `scaleX(${shown / n})`;
          },
        },
      });

      for (let i = 1; i < n; i += 1) {
        const at = LEAD + i - 1;
        tl.fromTo(items[i], { x: offRight }, { x: 0 }, at);
        for (let j = 0; j < i; j += 1) {
          const depth = i - j;
          const d = Math.min(depth, MAX_SHOWN);
          tl.to(items[j], {
            x: -STEP * d,
            scale: 1 - 0.035 * d,
            opacity: depth > MAX_SHOWN ? 0 : 1,
            filter: `brightness(${1 - 0.1 * d})`,
          }, at);
        }
      }
      tl.to({}, { duration: LEAD });

      return () => { tl.scrollTrigger?.kill(); tl.kill(); gsap.set(items, { clearProps: 'all' }); };
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef} className="ps-stack">
      {children}
      <div className="ps-stack-meta" aria-hidden="true">
        <span className="ps-stack-num"><span ref={numRef}>01</span> / {String(count).padStart(2, '0')}</span>
        <span className="ps-stack-bar"><span ref={barRef} style={{ transform: `scaleX(${1 / count})` }} /></span>
      </div>
    </div>
  );
}
