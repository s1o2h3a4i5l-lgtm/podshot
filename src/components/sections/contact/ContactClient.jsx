'use client';

import { useEffect, useRef, useState } from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
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
  useEffect(() => {
    let timer;
    let attempts = 0;
    const maxAttempts = 20;

    const scrollToForm = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash;
      if (hash === '#contact-form' || hash === '#form') {
        const el = document.getElementById('contact-form') || document.querySelector(hash);
        if (!el) return;

        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.scrollTo(el, true, 'top 80px');
          return;
        }

        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });

        if (attempts < maxAttempts) {
          attempts++;
          timer = setTimeout(scrollToForm, 100);
        }
      }
    };

    // Run after DOM and GSAP settle
    timer = setTimeout(scrollToForm, 120);
    window.addEventListener('hashchange', scrollToForm);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', scrollToForm);
    };
  }, []);

  return (
    <div className="contact-form style-3 tj-fade">
      <form onSubmit={(e) => { e.preventDefault(); sendToWhatsApp(e.currentTarget, 'Hi PodShot, I filled the form on your website.'); }}>
        <div className="form-input"><label className="cf-label" htmlFor="cf-name">Your full name <span>*</span></label><input id="cf-name" type="text" required name="Name" /></div>
        <div className="form-input"><label className="cf-label" htmlFor="cf-email">Your email address <span>*</span></label><input id="cf-email" type="email" required name="Email" /></div>
        <div className="form-input"><label className="cf-label" htmlFor="cf-phone">Your phone number <span>*</span></label><input id="cf-phone" type="tel" required name="Phone" /></div>
        <div className="form-input"><label className="cf-label" htmlFor="cf-brand">Your company or brand</label><input id="cf-brand" type="text" name="Brand" /></div>
        <div className="form-input"><label className="cf-label">Service you need <span>*</span></label><NiceSelect name="Service" options={services} /></div>
        <div className="form-input"><label className="cf-label">Monthly budget</label><NiceSelect name="Budget" options={budgets} /></div>
        <div className="form-input"><label className="cf-label" htmlFor="cf-msg">Tell us about your business</label><textarea id="cf-msg" name="Message" /></div>
        <div className="submit-area tj-fade">
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
export function OfficeMap({ lat, lng, zoom = 15, href }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let map = null;
    let cancelled = false;
    const container = containerRef.current;
    if (!container) return;

    // Create an unmanaged child div so Leaflet never mutates React's container DOM directly
    const mapDiv = document.createElement('div');
    mapDiv.style.width = '100%';
    mapDiv.style.height = '100%';
    container.appendChild(mapDiv);

    import('leaflet')
      .then((L) => {
        if (cancelled) {
          try { mapDiv.remove(); } catch (_) {}
          return;
        }
        try {
          map = L.map(mapDiv, { center: [lat, lng], zoom, zoomControl: false, scrollWheelZoom: false });
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors',
            className: 'ps-dark-tiles',
          }).addTo(map);
          const icon = L.divIcon({ className: 'custom-marker tji-location', iconSize: [60, 60] });
          const marker = L.marker([lat, lng], {
            icon,
            title: 'PodShot office — Open in Google Maps',
            alt: 'PodShot office',
          }).addTo(map);

          if (href) {
            const open = (e) => {
              L.DomEvent.stopPropagation(e);
              window.open(href, '_blank', 'noopener,noreferrer');
            };
            map.on('click', open);
            marker.on('click', open);
          }
        } catch (_) {}
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      try {
        if (map) {
          map.off();
          map.remove();
          map = null;
        }
      } catch (_) {}
      try {
        mapDiv.remove();
      } catch (_) {}
    };
  }, [lat, lng, zoom, href]);

  return (
    <div className="ps-map-wrap">
      <div id="map" ref={containerRef} style={href ? { cursor: 'pointer' } : undefined} />
      {href && (
        <a href={href} target="_blank" rel="noreferrer" className="ps-map-link">
          Open in Google Maps <i className="tji-arrow-up-right" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
