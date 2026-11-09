import { ContactForm, OfficeMap } from '@/components/sections/contact/ContactClient';
import { site } from '@/data/site';
import { services } from '@/data/services-meta';

export const metadata = {
  title: 'Contact Us',
  description: 'Talk to PodShot about your marketing or your next shoot. Office in Wakad, Pune. Call, email or WhatsApp us.',
};

export default function ContactPage() {
  return (
    <>
      <section className="tj-contact-banner container-space">
        <div className="inner_top_gap" />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="tj-contact-header text-center">
                <div className="section_heading tj-fade">
                  <span className="sec_subtitle tj-fade">[ <span>Contact us</span> ]</span>
                  <h1 className="sec_title fs-120 tj-reveal-line">Let&apos;s talk growth!</h1>
                </div>
                <div className="tj_scroll_down tj-fade">
                  <span className="icon"><i className="tji-arrow-down-circle" /></span>
                  <span className="text">[ <span>SCROLL DOWN</span> ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-location-section fix">
        <div className="map-area tj-fade"><OfficeMap lat={18.61065} lng={73.75700} /></div>
        <div className="container-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="contact-location-wrap ps-two-locations">
                  <div className="contact-location-item tj-fade" data-delay="0.3">
                    <div className="country-flag"><img alt="" loading="lazy" width="90" height="90" style={{ height: 'auto' }} src="/brand/podshot-logo.png" /></div>
                    <div className="tj_contact">
                      <div className="contact_info">{site.address[0]}<br />{site.address[1]}</div>
                      <div className="contact_info">{site.hours}</div>
                      <a href={site.phoneHref} className="contact_info">{site.phone}</a>
                      <a href={`mailto:${site.email}`} className="contact_info">{site.email}</a>
                    </div>
                  </div>
                  <div className="contact-location-item tj-fade" data-delay="0.5">
                    <div className="country-flag"><img alt="" loading="lazy" width="90" height="90" style={{ height: 'auto' }} src="/brand/podshot-logo.png" /></div>
                    <div className="tj_contact">
                      <div className="contact_info">Need a podcast studio?<br />Visit our sister brand.</div>
                      <div className="contact_info">PodShot Studio, Wakad and Hinjewadi</div>
                      <a href={site.studioSite} target="_blank" rel="noreferrer" className="contact_info">Visit PodShot Studio</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tj-contact-section-3 container-space fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-left">
                <div className="contact-left-content">
                  <div className="section_heading">
                    <span className="sec_subtitle tj-fade" data-direction="left">[ <span>Get in touch</span> ]</span>
                    <h2 className="sec_title fs-120 tj-reveal-line">Let&apos;s <span>grow</span> together.</h2>
                  </div>
                  <div className="tj_contact tj-fade">
                    <div className="contact_info">We have an expert team, don&apos;t hesitate to contact us. We usually reply within the hour on working days.</div>
                    <a href={site.phoneHref} className="contact_info">{site.phone}</a>
                    <a href={`mailto:${site.email}`} className="contact_info">{site.email}</a>
                  </div>
                  <ul className="tj_socials tj-fade">
                    {site.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><i className={s.icon} /></a></li>)}
                  </ul>
                </div>
                <div className="purpose-video"><video autoPlay loop muted playsInline><source src="/videos/h1-hero-2.mp4" type="video/mp4" /></video></div>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm
                services={[...services.map((s) => s.name), 'Not sure yet']}
                budgets={['Under ₹15,000', '₹15,000 to ₹30,000', '₹30,000 to ₹60,000', '₹60,000 to ₹1,00,000', 'Above ₹1,00,000']}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
