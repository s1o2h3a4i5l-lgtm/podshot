'use client';

import { useEffect, useRef } from 'react';

const IMAGES = Array.from({ length: 10 }, (_, i) => `/images/hero/img-${i + 1}.webp`);
const AUTO_SPEED = 14; // degrees per second
const DRAG = 0.35; // degrees per pixel dragged
const SPRING = 30;

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

// A 3D ring of cards that spins on its own. Drag sideways to spin it, up/down to flip it;
// on release it keeps the flick's momentum, then eases back to level and its normal speed.
export default function HeroRing({ images = IMAGES }) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const cards = [...stage.children];
    const step = 360 / cards.length;
    const auto = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : AUTO_SPEED;

    let spin = 0;
    let spinVel = auto;
    let tilt = 0;
    let tiltVel = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let lastT = 0;
    let prev = performance.now();
    let raf = 0;

    const radiusFor = (cardW) => (cardW / 2 / Math.tan(Math.PI / cards.length)) * 1.12;

    // Widest on-screen half-width of the ring (after perspective) for a given card width.
    const halfWidth = (cardW, persp) => {
      const r = radiusFor(cardW);
      let max = 0;
      for (let a = 0; a < 180; a += 2) {
        const t = (a * Math.PI) / 180;
        for (const e of [-cardW / 2, cardW / 2]) {
          const x = r * Math.sin(t) + e * Math.cos(t);
          const z = r * Math.cos(t) - e * Math.sin(t);
          max = Math.max(max, (x * persp) / (persp - z));
        }
      }
      return max;
    };

    // Size the cards so the ring's visible edges sit exactly on the box edges.
    const layout = () => {
      const w = root.clientWidth;
      const persp = w * 2.2;
      let cardW = w / 4;
      for (let i = 0; i < 4; i += 1) cardW *= (w / 2 - 2) / halfWidth(cardW, persp);
      const radius = radiusFor(cardW);
      root.style.setProperty('--ps-card-w', `${cardW}px`);
      root.style.perspective = `${persp}px`;
      cards.forEach((c, i) => { c.style.transform = `rotateY(${i * step}deg) translateZ(${radius}px)`; });
    };

    const frame = (now) => {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      if (!dragging) {
        spinVel += (auto - spinVel) * (1 - Math.exp(-dt * 1.5));
        spin += spinVel * dt;
        tiltVel += (-SPRING * tilt - 2 * Math.sqrt(SPRING) * tiltVel) * dt;
        tilt += tiltVel * dt;
      }
      stage.style.transform = `rotateX(${tilt}deg) rotateY(${spin}deg)`;
      cards.forEach((c, i) => {
        const facing = Math.cos(((spin + i * step) * Math.PI) / 180);
        c.style.opacity = (0.4 + 0.3 * (facing + 1)).toFixed(3);
      });
      raf = requestAnimationFrame(frame);
    };

    const start = () => { if (!raf) { prev = performance.now(); raf = requestAnimationFrame(frame); } };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    const onDown = (e) => {
      if (e.button !== 0) return;
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = performance.now();
      spinVel = 0;
      tiltVel = 0;
      root.setPointerCapture(e.pointerId);
      root.classList.add('is-dragging');
    };
    const onMove = (e) => {
      if (!dragging) return;
      const now = performance.now();
      const dts = Math.max((now - lastT) / 1000, 0.008);
      const dSpin = (e.clientX - lastX) * DRAG;
      const dTilt = -(e.clientY - lastY) * DRAG;
      spin += dSpin;
      tilt += dTilt;
      spinVel = dSpin / dts;
      tiltVel = dTilt / dts;
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = now;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      root.classList.remove('is-dragging');
      // Holding still before letting go means no flick.
      if (performance.now() - lastT > 80) { spinVel = 0; tiltVel = 0; }
      spinVel = clamp(spinVel, -600, 600);
      tiltVel = clamp(tiltVel, -300, 300);
      tilt = ((((tilt + 180) % 360) + 360) % 360) - 180;
    };

    layout();
    const ro = new ResizeObserver(layout);
    ro.observe(root);
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    io.observe(root);

    root.addEventListener('pointerdown', onDown);
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerup', onUp);
    root.addEventListener('pointercancel', onUp);
    root.addEventListener('lostpointercapture', onUp);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      root.removeEventListener('pointerdown', onDown);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerup', onUp);
      root.removeEventListener('pointercancel', onUp);
      root.removeEventListener('lostpointercapture', onUp);
    };
  }, []);

  return (
    <div ref={rootRef} className="ps-ring" aria-hidden="true">
      <div ref={stageRef} className="ps-ring-stage">
        {images.map((src) => (
          <div key={src} className="ps-ring-card">
            <img src={src} alt="" width="280" height="320" draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
