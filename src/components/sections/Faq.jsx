'use client';

import { useState } from 'react';
import { BoxButton } from '@/components/ui/Buttons2';
import { site } from '@/data/site';

function Accordion({ items, id }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion tj-faq tj-fade" id={id}>
      {items.map((f, i) => (
        <div key={f.q} className={`accordion-item${open === i ? ' active' : ''}`}>
          <button className={`faq-title${open === i ? '' : ' collapsed'}`} type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="faq-sln">Q.</span> {f.q}
          </button>
          <div className={`collapse${open === i ? ' show' : ''}`}>
            <div className="accordion-body faq-text"><p>{f.a}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Agina Home 03 FAQ: sticky help card on the left, accordion on the right.
export default function Faq({ subtitle = 'Common questions', title, items, card, id = 'faq', border = false }) {
  const help = card || { text: 'Still have a question? Message us and a real person will reply, usually within the hour.', button: 'Ask on WhatsApp', href: site.whatsapp };
  const heading = (
    <>
      <span className="sec_subtitle tj-fade" data-direction="right">[ <span>{subtitle}</span> ]</span>
      <h2 className="sec_title tj-split-text">{title}</h2>
    </>
  );
  return (
    <section className={`tj-faq-section container-space sidebar-sticky-container tj-theme-bg${border ? ' tj-border-top' : ''}`}>
      <div className="container-fluid">
        <div className="row flex-column flex-lg-row">
          <div className="col-12 col-lg-4">
            <div className="section_heading d-block d-lg-none">{heading}</div>
            <div className="faq-card sidebar-sticky">
              <div className="tj-author-profile">
                <div className="author-img"><img alt="" loading="lazy" width="160" height="160" style={{ height: 'auto' }} src="/images/users/user-img-5.png" /></div>
                <div className="author-info">
                  <h3 className="name tj-fz-h5">PodShot Team</h3>
                  <span className="designation">Here to help</span>
                </div>
              </div>
              <p className="desc fs-18">{help.text}</p>
              <div className="faq-action"><BoxButton href={help.href}>{help.button}</BoxButton></div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="tj-faq-wrapper">
              <div className="section_heading d-none d-lg-block">{heading}</div>
              <Accordion items={items} id={id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Accordion };
