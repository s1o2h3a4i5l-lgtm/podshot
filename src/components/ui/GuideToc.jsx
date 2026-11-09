'use client';

import { useEffect, useRef, useState } from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// "In this guide" list for the guide's sticky sidebar. Highlights the section being read
// and scrolls to a section on click (through ScrollSmoother, which ignores normal anchors).
export default function GuideToc({ items }) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef(null);

  // On phones the list is a horizontal chip row; keep the active chip in view.
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector('.is-active');
    if (!list || !chip || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: chip.offsetLeft - 16, behavior: 'smooth' });
  }, [active]);

  useEffect(() => {
    const els = items.map((it) => document.getElementById(it.id)).filter(Boolean);
    const update = () => {
      const line = window.innerHeight * 0.4;
      let current = els[0];
      els.forEach((el) => { if (el.getBoundingClientRect().top <= line) current = el; });
      if (current) setActive(current.id);
    };
    let raf = 0;
    const onTick = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onTick, { passive: true });
    window.addEventListener('wheel', onTick, { passive: true });
    const timer = setInterval(update, 400);
    update();
    return () => {
      window.removeEventListener('scroll', onTick);
      window.removeEventListener('wheel', onTick);
      clearInterval(timer);
      cancelAnimationFrame(raf);
    };
  }, [items]);

  const go = (e, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(el, true, 'top 140px');
    else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="ps-guide-toc" aria-label="In this guide">
      <span className="ps-guide-toc-label">In this guide</span>
      <ol ref={listRef}>
        {items.map((it, i) => (
          <li key={it.id} className={it.id === active ? 'is-active' : undefined}>
            <a href={`#${it.id}`} onClick={(e) => go(e, it.id)}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <span className="t">{it.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
