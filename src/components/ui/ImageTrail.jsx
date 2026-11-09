'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BASE_PATH } from '@/lib/basePath';

const lerp = (a, b, n) => (1 - n) * a + n * b;
const IMAGES = Array.from({ length: 10 }, (_, i) => `${BASE_PATH}/images/hero/img-${i + 1}.webp`);

// Images that follow the mouse across the Home 02 hero, ported from Agina.
export default function ImageTrail({ images = IMAGES }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll('.content__img')).map((el) => ({ el, rect: el.getBoundingClientRect() }));
    if (!items.length) return;
    let mouse = { x: 0, y: 0 };
    let last = { x: 0, y: 0 };
    const cache = { x: 0, y: 0 };
    let index = 0;
    let z = 1;
    let active = 0;
    let idle = true;
    let raf = 0;
    let started = false;
    const loop = () => {
      const dist = Math.hypot(last.x - mouse.x, last.y - mouse.y);
      cache.x = lerp(cache.x || mouse.x, mouse.x, 0.1);
      cache.y = lerp(cache.y || mouse.y, mouse.y, 0.1);
      if (dist > 80) {
        z += 1;
        index = index < items.length - 1 ? index + 1 : 0;
        const item = items[index];
        item.rect = item.el.getBoundingClientRect();
        gsap.killTweensOf(item.el);
        gsap.timeline({ onStart: () => { active += 1; idle = false; }, onComplete: () => { active -= 1; if (active === 0) idle = true; } })
          .fromTo(item.el, { opacity: 1, scale: 1, zIndex: z, x: cache.x - item.rect.width / 2, y: cache.y - item.rect.height / 2 },
            { duration: 0.4, ease: 'power1', x: mouse.x - item.rect.width / 2, y: mouse.y - item.rect.height / 2 }, 0)
          .to(item.el, { duration: 0.4, ease: 'power3', opacity: 0, scale: 0.2 }, 0.4);
        last = mouse;
      }
      if (idle && z !== 1) z = 1;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e) => {
      const r = root.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (!started) { started = true; cache.x = mouse.x; cache.y = mouse.y; raf = requestAnimationFrame(loop); }
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      items.forEach((i) => gsap.killTweensOf(i.el));
    };
  }, []);

  return (
    <div className="content d-none d-lg-block" ref={ref}>
      {images.map((src) => (
        <div key={src} className="content__img"><div className="content__img-inner" style={{ backgroundImage: `url(${src})` }} /></div>
      ))}
    </div>
  );
}
