'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import FlipText from '@/components/ui/FlipText';
import { sendToWhatsApp } from '@/lib/whatsappForm';

// Agina styles its selects with the "nice-select" markup; this recreates it with a hidden real input.
function NiceSelect({ name, options }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options[0]);
  const ref = useRef(null);
  useEffect(() => {
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);
  return (
    <div className="tj-select-box">
      <div className="tj-select">
        <input type="hidden" name={name} value={value} />
        <div ref={ref} className={`nice-select${open ? ' open' : ''}`} tabIndex={0} role="listbox" aria-label={name}
          onClick={() => setOpen((v) => !v)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen((v) => !v); } }}>
          <span className="current">{value}</span>
          <ul className="list">
            {options.map((o) => (
              <li key={o} role="option" aria-selected={o === value} className={`option${o === value ? ' selected focus' : ''}`} onClick={() => setValue(o)}>{o}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ContactForm({ services, budgets }) {
  return (
    <div className="contact-form style-3 tj-fade">
      <form onSubmit={(e) => { e.preventDefault(); sendToWhatsApp(e.currentTarget, 'Hi PodShot, I filled the form on your website.'); }}>
        <div className="form-input"><label className="cf-label" htmlFor="cf-name">Your full name <span>*</span></label><input id="cf-name" type="text" required name="Name" /></div>
        <div className="form-input"><label className="cf-label" htmlFor="cf-email">Your email address <span>*</span></label><input id="cf-email" type="email" required name="Email" /></div>
        <div className="form-input"><label className="cf-label" htmlFor="cf-phone">Your phone number <span>*</span></label><input id="cf-phone" type="tel" required name="Phone" /></div>
        <div className="form-input"><label className="cf-label" htmlFor="cf-brand">Your company or brand</label><input id="cf-brand" type="text" name="Brand" /></div>
        <div className="form-input"><label className="cf-label">Service you need <span>*</span></label><NiceSelect name="Service" options={services} /></div>
        <div className="form-input"><label className="cf-label">Monthly budget</label><NiceSelect name="Budget" options={budgets} /></div>
        <div className="form-input"><label className="cf-label" htmlFor="cf-msg">Tell us about your business <span>*</span></label><textarea id="cf-msg" name="Message" required /></div>
        <div className="submit-area tj-fade">
          <label htmlFor="agree"><input id="agree" type="checkbox" required /> I agree with the <Link href="/privacy-policy">privacy policy</Link></label>
          <div className="submit-btn">
            <button type="submit" className="tj_icon_btn flip-text-wrap">
              <span className="icon_btn scale"><span><i className="tji-arrow-right" /><i className="tji-arrow-right" /></span></span>
              <span className="flip-text"><FlipText>Send on WhatsApp</FlipText></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// Dark map (OpenStreetMap tiles darkened with CSS) with a custom marker, as in Agina's contact page.
export function OfficeMap({ lat, lng, zoom = 15 }) {
  const ref = useRef(null);
  useEffect(() => {
    let map;
    let cancelled = false;
    import('leaflet').then((L) => {
      if (cancelled || !ref.current) return;
      map = L.map(ref.current, { center: [lat, lng], zoom, zoomControl: false, scrollWheelZoom: false });
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors', className: 'ps-dark-tiles' }).addTo(map);
      const icon = L.divIcon({ className: 'custom-marker tji-location', iconSize: [60, 60] });
      L.marker([lat, lng], { icon, title: 'PodShot office', alt: 'PodShot office' }).addTo(map);
    });
    return () => { cancelled = true; map?.remove(); };
  }, [lat, lng, zoom]);
  return <div id="map" ref={ref} />;
}
