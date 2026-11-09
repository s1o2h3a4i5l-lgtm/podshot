'use client';

import { useEffect, useRef, useState } from 'react';
import FlipText from './FlipText';
import { Anchor } from './Buttons';

// Agina's pricing card. Each plan can carry two prices with a switch (Monthly / Quarterly, Single / Bundle, ...).
export default function PricingCard({ plan, blocksShape = false }) {
  const [alt, setAlt] = useState(false);
  const switchRef = useRef(null);
  const price = alt && plan.altPrice ? plan.altPrice : plan.price;

  useEffect(() => {
    const el = switchRef.current;
    if (!el) return;
    const place = () => {
      const bg = el.querySelector('.tj-active-bg');
      const on = el.querySelector('.nav-link.active');
      if (!bg || !on) return;
      const a = on.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      bg.style.left = `${a.left - b.left - 1}px`;
      bg.style.width = `${a.width}px`;
      bg.style.height = `${a.height}px`;
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [alt]);

  return (
    <div className={`tj_pricing_item${plan.popular ? ' pricing_popular' : ''} tj-fade${plan.dark ? ' tj-theme-dark' : ''}`} data-direction={plan.direction} data-delay={plan.delay}>
      {plan.popular && <div className="pricing_badge">{plan.badge || 'Most popular'}</div>}
      <div className="pricing_header">
        <h3 className="package_name tj-fz-h5">{plan.name}</h3>
        <div className="package_desc fs-18">{plan.desc}</div>
        <div className="package_price">
          <div className="package_start">{plan.priceLabel || 'Starts from'}</div>
          <div className="package_price_inner">
            <span className="currency">₹</span>
            <span className="price">{price}</span>
            <span className="period">{alt && plan.altPeriod ? plan.altPeriod : plan.period}</span>
          </div>
        </div>
        {plan.altPrice && (
          <div className="pricing_switcher tj-active-bg-container" ref={switchRef}>
            <button type="button" className={`nav-link monthly${alt ? '' : ' active'}`} onClick={() => setAlt(false)}>{plan.labels?.[0] || 'Monthly'}</button>
            <button type="button" className={`nav-link yearly${alt ? ' active' : ''}`} onClick={() => setAlt(true)}>{plan.labels?.[1] || 'Quarterly'}</button>
            <div className="tj-active-bg" />
          </div>
        )}
      </div>
      <Anchor href={plan.href} className="tj_icon_btn flip-text-wrap pricing_btn">
        <span className="flip-text"><FlipText>{plan.button || 'Choose this plan'}</FlipText></span>
        <div className="icon_btn hover-bg"><i className="tji-arrow-right" /></div>
      </Anchor>
      <ul className="pricing_features">
        {plan.features.map((f) => (
          <li key={f.label}>
            {f.label}
            {f.tip && <span title={f.tip} aria-label={f.tip}><i className="tji-question-mark" /></span>}
          </li>
        ))}
      </ul>
      {blocksShape && <div className="blocks-shape" />}
    </div>
  );
}
