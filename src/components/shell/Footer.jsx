'use client';

import Link from 'next/link';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import FlipText from '@/components/ui/FlipText';
import { site } from '@/data/site';
import { groups, services, serviceHref } from '@/data/services-meta';

const company = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Our work', href: '/work' },
  { label: 'Packages', href: '/packages' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const featured = services.filter((s) => s.flagship);
const serviceLinks = [
  { label: groups.digital.name, href: groups.digital.href },
  ...featured.map((s) => ({ label: s.short, href: serviceHref(s) })),
];

function FooterLinks({ title, links, delay }) {
  return (
    <div className="tj_footer_widget widget-nav-menu tj-fade" data-delay={delay}>
      <h3 className="widget_title">[ <span>{title}</span> ]</h3>
      <ul>
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="flip-text-wrap"><span className="flip-text"><FlipText>{l.label}</FlipText></span></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const subscribe = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Add me to the PodShot newsletter')}&body=${encodeURIComponent(`Please add ${email} to your newsletter.`)}`;
  };
  const toTop = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(0, true);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="h1-footer-area footer-1 tj-theme-dark">
      <div className="h1_footer_widgets container-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="h1_footer_widgets_wrap">
                <div className="tj_footer_widget footer_info tj-fade" data-delay=".5">
                  <div className="footer_logo">
                    <Link className="logo podshot-logo" href="/"><img alt={site.name} loading="lazy" width="500" height="500" src={site.logo} /></Link>
                  </div>
                  <div className="subscription_wrap">
                    <div className="footer_desc">One useful marketing tip in your inbox each month. No spam.</div>
                    <div className="footer_subscription">
                      <form onSubmit={subscribe}>
                        <input type="email" id="footer-email" placeholder="Your email*" name="email" required />
                        <button type="submit" className="icon_btn" aria-label="Subscribe">
                          <span><i className="tji-arrow-right" /><i className="tji-arrow-right" /></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <hr className="tj-fade" data-delay=".5" />
                <FooterLinks title="Company" links={company} delay=".6" />
                <hr className="tj-fade" data-delay=".6" />
                <FooterLinks title="Services" links={serviceLinks} delay=".7" />
                <hr className="tj-fade" data-delay=".7" />
                <div className="tj_footer_widget footer_contact tj-fade" data-delay=".8">
                  <div className="tj_footer_contact">
                    <a href={site.phoneHref} className="contact_link tj-random-char-blink">{site.phone}</a>
                    <a href={`mailto:${site.email}`} className="contact_link tj-random-char-blink">{site.email}</a>
                  </div>
                  <ul className="tj_socials">
                    {site.socials.map((s) => (
                      <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><i className={s.icon} /></a></li>
                    ))}
                  </ul>
                  <div className="tj_contact">
                    <div className="sec_subtitle contact_title">[ <span>Office</span> ]</div>
                    <div className="contact_info">{site.address.join(' ')}</div>
                    <a className="tj_text_btn footer-studio-link" href={site.studioSite} target="_blank" rel="noreferrer">
                      Looking for a podcast studio? Visit PodShot Studio <i className="tji-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h1_footer_bottom container-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="h1_footer_bottom_wrap">
                <nav className="tj_footer_nav">
                  <ul>
                    <li><Link href="/privacy-policy">Privacy policy</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                  </ul>
                </nav>
                <div className="tj_copyright">
                  © <span>{new Date().getFullYear()}</span> <Link href="/">PodShot.</Link> All rights reserved.
                </div>
                <button id="back_to_top" type="button" className="tj_back_to_top" onClick={toTop}>
                  Back to top
                  <span><i className="tji-arrow-up" /><i className="tji-arrow-up" /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
