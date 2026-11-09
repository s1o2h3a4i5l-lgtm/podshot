'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TEXT_ATTRS = [
  ['data-cursor-text-service', 'service'],
  ['data-cursor-text-project', 'project'],
  ['data-cursor-text-service-2', 'service-2'],
  ['data-cursor-text-service-3', 'service-3'],
];

export default function Cursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    const label = textRef.current;
    if (!el || !label) return;
    let timer;
    let visible = false;
    let pos = { x: -window.innerWidth, y: -window.innerHeight };
    const move = (x, y, duration) => {
      gsap.to(el, { x: x ?? pos.x, y: y ?? pos.y, force3D: true, overwrite: true, ease: 'expo.out', duration: visible ? (duration ?? 0.7) : 0 });
    };
    const show = () => {
      if (visible) return;
      clearTimeout(timer);
      el.classList.add('-visible');
      timer = setTimeout(() => { visible = true; });
    };
    const hide = () => {
      clearTimeout(timer);
      el.classList.remove('-visible');
      timer = setTimeout(() => { visible = false; }, 300);
    };
    const setText = (t) => { label.innerHTML = t; el.classList.add('-text'); };
    move(pos.x, pos.y, 0);
    const onMove = (e) => { pos = { x: e.clientX, y: e.clientY }; move(); show(); };
    const onLeave = () => hide();
    const onEnter = () => show();
    const onDown = () => el.classList.add('-active');
    const onUp = () => el.classList.remove('-active');
    const onOver = (e) => {
      if (e.target?.closest('a,input,textarea,button')) { el.classList.add('-pointer'); hide(); }
      for (const [attr, cls] of TEXT_ATTRS) {
        const hit = e.target?.closest(`[${attr}]`);
        if (hit) { setText(hit.getAttribute(attr) ?? ''); el.classList.add(cls); }
      }
    };
    const onOut = (e) => {
      if (e.target?.closest('a,input,textarea,button')) { el.classList.remove('-pointer'); show(); }
      for (const [attr, cls] of TEXT_ATTRS) {
        if (e.target?.closest(`[${attr}]`)) { el.classList.remove('-text'); el.classList.remove(cls); }
      }
    };
    const b = document.body;
    b.addEventListener('mouseleave', onLeave);
    b.addEventListener('mouseenter', onEnter);
    b.addEventListener('mousemove', onMove);
    b.addEventListener('mousedown', onDown);
    b.addEventListener('mouseup', onUp);
    b.addEventListener('mouseover', onOver);
    b.addEventListener('mouseout', onOut);
    return () => {
      clearTimeout(timer);
      b.removeEventListener('mouseleave', onLeave);
      b.removeEventListener('mouseenter', onEnter);
      b.removeEventListener('mousemove', onMove);
      b.removeEventListener('mousedown', onDown);
      b.removeEventListener('mouseup', onUp);
      b.removeEventListener('mouseover', onOver);
      b.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <div className="cb-cursor" ref={cursorRef}>
      <div className="cb-cursor-text" ref={textRef} />
    </div>
  );
}
