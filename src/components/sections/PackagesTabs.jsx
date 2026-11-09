'use client';

import { useEffect, useRef, useState } from 'react';
import PricingCard from '@/components/ui/PricingCard';

// Agina pricing banner with a switch between plan groups.
export default function PackagesTabs({ subtitle, title, groups }) {
  const [tab, setTab] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const place = () => {
      const bg = el.querySelector('.tj-active-bg');
      const on = el.querySelector('.nav-link.active');
      if (!bg || !on) return;
      const a = on.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      Object.assign(bg.style, { left: `${a.left - b.left - 1}px`, width: `${a.width}px`, height: `${a.height}px` });
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [tab]);
  const plans = groups[tab].plans;
  return (
    <section className="service-banner pricing-banner fix">
      <div className="container-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="section_heading d-flex flex-xl-nowrap flex-wrap justify-content-between">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <div className="sec_right"><h1 className="sec_title tj-reveal-line">{title}</h1></div>
              </div>
              <div className="ps-package-switch">
                {groups.length > 1 && (
                  <div className="pricing_switcher tj-active-bg-container" ref={ref}>
                    {groups.map((g, i) => (
                      <button key={g.name} type="button" aria-pressed={tab === i} className={`nav-link${tab === i ? ' active' : ''}`} onClick={() => setTab(i)}>{g.name}</button>
                    ))}
                    <div className="tj-active-bg" />
                  </div>
                )}
                <p className="desc fs-18">{groups[tab].note}</p>
              </div>
              <h2 className="visually-hidden">{groups[tab].name} plans</h2>
              <div className={`h2_pricing_wrap pricing_wrap_2${plans.length < 3 ? ' ps-two-plans' : ''}`} key={tab}>
                {plans.map((p, i) => <PricingCard key={p.name} plan={{ delay: 0.2 + i * 0.2, ...p }} blocksShape={i === plans.length - 1} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
