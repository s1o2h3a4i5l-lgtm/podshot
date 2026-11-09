'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { site } from '@/data/site';

export default function Preloader() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const svg = root.querySelector('#preloaderSvg');
    const container = root.querySelector('.loading-container');
    const bottom = root.querySelector('.tj-preloader_bottom');
    let tl;
    const run = () => {
      tl = gsap.timeline();
      tl.to([container, bottom], { delay: 0.5, opacity: 0, duration: 0.4 });
      tl.to(svg, { duration: 0.4, attr: { d: 'M0 502S175 329.5 500 329.5s500 172.5 500 172.5V0H0Z' }, ease: 'power2.in' })
        .to(svg, { duration: 0.4, attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z' } });
      tl.to(root, { yPercent: -100, duration: 0.4, ease: 'power2.inOut' });
    };
    if (document.readyState === 'complete') run();
    else window.addEventListener('load', run, { once: true });
    return () => {
      window.removeEventListener('load', run);
      tl?.kill();
    };
  }, []);

  return (
    <div className="tj-preloader" ref={ref}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
      </svg>
      <div className="loading-container">
        <div className="loading-circle" />
        <div id="loading-icon">
          <img alt={site.name} width="120" height="120" style={{ height: 'auto' }} src={site.logo} />
        </div>
      </div>
      <div className="tj-preloader_bottom">
        <div className="loading_text">[ <span>Loading, one moment</span> ]</div>
        <div className="copyright_text">[ <span>©{new Date().getFullYear()}</span> ]</div>
      </div>
    </div>
  );
}
