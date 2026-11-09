'use client';

import { useEffect, useRef } from 'react';

// The home showreel: plays right in the page, looping. Its sound is only on while it is open to
// (nearly) the full screen; in the small hero box, or scrolled away, it is muted.
// Browsers only allow sound after the visitor has interacted with the page, so sound switches on
// from the first click, key press, touch or scroll after the video is full screen.
export default function ShowreelVideo({ src }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    const box = v.parentElement;
    const events = ['pointerdown', 'click', 'keydown', 'touchend', 'wheel'];
    let unlocked = false;

    const isFull = () => {
      const r = box.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const visibleH = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      const visibleW = Math.min(r.right, vw) - Math.max(r.left, 0);
      return r.width >= vw * 0.7 && visibleH >= r.height * 0.85 && visibleW >= r.width * 0.95;
    };

    const apply = () => {
      const wantSound = unlocked && isFull();
      if (v.muted === wantSound) v.muted = !wantSound;
      if (wantSound) v.volume = 1;
      if (v.paused) v.play().catch(() => {});
    };

    const unlock = () => {
      unlocked = true;
      events.forEach((e) => window.removeEventListener(e, unlock));
      apply();
    };

    v.muted = true;
    v.play().catch(() => {});
    events.forEach((e) => window.addEventListener(e, unlock, { passive: true }));
    const timer = setInterval(apply, 150);
    return () => {
      clearInterval(timer);
      events.forEach((e) => window.removeEventListener(e, unlock));
    };
  }, []);

  return (
    <video ref={ref} autoPlay loop muted playsInline preload="auto" aria-label="PodShot showreel">
      <source src={src} type="video/mp4" />
    </video>
  );
}
