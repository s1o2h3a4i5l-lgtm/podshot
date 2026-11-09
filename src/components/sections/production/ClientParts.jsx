'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RoundIconButton, BoxButton } from '@/components/ui/Buttons2';
import { sendToWhatsApp } from '@/lib/whatsappForm';
import { BASE_PATH } from '@/lib/basePath';

// Home 03 big-text service list: hovering a row activates it and swaps the sticky icon.
export function StickyServiceList({ subtitle, text, button, items }) {
  const [active, setActive] = useState(0);
  return (
    <section className="h3-service-section container-space sidebar-sticky-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="section_heading">
              <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
              <div className="desc_wrapper tj-fade">
                <p className="desc">{text}</p>
                {button && <div className="tj_icon_btn_wrapper"><RoundIconButton href={button.href}>{button.label}</RoundIconButton></div>}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="h3_service_wrapper hover-active-with-img-wrap">
              <div className="h3_service_items tj-fade" data-delay=".1">
                {items.map((s, i) => (
                  <div
                    key={s.href}
                    className={`tj_service_item hover-active-with-img${active === i ? ' active' : ''}`}
                    data-cursor-text-service-2="<i class='tji-arrow-right'></i>"
                    onMouseEnter={() => setActive(i)}
                  >
                    <div className="service_icon"><i className={s.icon} /></div>
                    <Link className="service_link" href={s.href} aria-label={s.title} />
                    <div className="service_content">
                      <div className="service_count">[ <span>{String(i + 1).padStart(2, '0')}</span> ]</div>
                      <h3 className="service_title split-flip-text-2">
                        <div className="flip-layer layer1">{s.title}</div>
                        <div className="flip-layer layer2">{s.title}</div>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="service_icons hover-active-with-img-show">
                <div className="service_icon sidebar-sticky">
                  <i key={active} className={items[active].icon} style={{ opacity: 1, transform: 'scale(1)', transition: 'opacity 0.3s ease, transform 0.3s ease' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Home 03 red form band, used as a short enquiry form that opens WhatsApp.
export function FormBand({ subtitle, title, link, fields, submit, intro }) {
  return (
    <section className="tj-contact-section container-space tj-image-distortion tj-bg-image fix section-parallax-target" data-bg-image={`${BASE_PATH}/images/contact/contact-bg.png`} style={{ backgroundImage: 'url(/images/contact/contact-bg.png)' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="section_heading">
              <span className="sec_subtitle tj-fade" data-direction="left">[ <span>{subtitle}</span> ]</span>
              <h2 className="sec_title tj-split-text">{title}</h2>
              {link && <div className="tj_icon_btn_wrapper tj-fade"><RoundIconButton href={link.href}>{link.label}</RoundIconButton></div>}
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="contact-form style-2">
              <form onSubmit={(e) => { e.preventDefault(); sendToWhatsApp(e.currentTarget, intro); }}>
                {fields.map((f, i) => (
                  <div key={f.name} className={`form-input tj-fade${i === fields.length - 1 ? ' mb-0' : ''}`}>
                    <label className="cf-label" htmlFor={`band-${f.name}`}>{f.label} {f.required && <span>*</span>}</label>
                    <div className="form-input-inner">
                      {f.options ? (
                        <select id={`band-${f.name}`} name={f.name} required={f.required} defaultValue="">
                          <option value="" disabled>{f.placeholder}</option>
                          {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input id={`band-${f.name}`} type={f.type || 'text'} placeholder={f.placeholder} name={f.name} required={f.required} />
                      )}
                    </div>
                  </div>
                ))}
                <div className="submit-btn tj-fade"><BoxButton type="submit">{submit}</BoxButton></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
