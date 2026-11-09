'use client';

import { useState } from 'react';
import Link from 'next/link';
import FlipText from '@/components/ui/FlipText';
import { nav } from '@/data/services-meta';
import { site } from '@/data/site';

function Logo() {
  return (
    <Link className="logo podshot-logo" href="/">
      <img alt={site.name} width="500" height="500" src={site.logo} />
    </Link>
  );
}

function DesktopNav({ onDropdownToggle }) {
  const [open, setOpen] = useState(null);
  const [height, setHeight] = useState(0);
  return (
    <div className="site_navigation d-none d-lg-inline-flex">
      <nav id="mobile-menu">
        <ul>
          {nav.map((item, i) =>
            item.submenu ? (
              <li
                key={item.label}
                className="has-dropdown"
                onMouseEnter={(e) => {
                  const sub = e.currentTarget.querySelector('.sub-menu');
                  setHeight(sub ? sub.scrollHeight : 0);
                  setOpen(i);
                  onDropdownToggle(true);
                }}
                onMouseLeave={() => { setOpen(null); onDropdownToggle(false); }}
              >
                <Link href={item.href}>{item.label}</Link>
                <ul
                  className="sub-menu"
                  style={{
                    display: 'flex', overflow: 'hidden', transition: 'height 0.3s ease, opacity 0.25s ease',
                    height: open === i ? `${height}px` : 0, opacity: open === i ? 1 : 0, pointerEvents: open === i ? 'auto' : 'none',
                  }}
                >
                  {item.submenu.map((s) => (
                    <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
            ),
          )}
        </ul>
      </nav>
    </div>
  );
}

function MobileItem({ item, isLast, onNavigate }) {
  const [open, setOpen] = useState(false);
  if (!item.submenu) {
    return <li className={isLast ? 'mean-last' : undefined}><Link href={item.href} onClick={onNavigate}>{item.label}</Link></li>;
  }
  return (
    <li className={`has-dropdown${open ? ' dropdown-opened' : ''}`}>
      <Link href={item.href} onClick={onNavigate}>{item.label}</Link>
      <ul className="sub-menu" style={{ display: open ? 'block' : 'none' }}>
        {item.submenu.map((s) => <li key={s.href}><Link href={s.href} onClick={onNavigate}>{s.label}</Link></li>)}
      </ul>
      <button
        type="button"
        className={`mean-expand${open ? ' mean-clicked' : ''}`}
        style={{ fontSize: '18px' }}
        aria-label={`Toggle ${item.label} submenu`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <i className="tji-dropdown" />
      </button>
    </li>
  );
}

function Offcanvas({ open, onClose }) {
  return (
    <>
      <div className={`tj-offcanvas-overlay${open ? ' opened' : ''}`} onClick={onClose} />
      <div className={`tj-offcanvas${open ? ' opened' : ''}`}>
        <div className="offcanvas_bg" />
        <div className="offcanvas_wrapper">
          <div className="offcanvas_top d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="offcanvas_logo"><Logo /></div>
            <button className="offcanvas_close" onClick={onClose}>
              <span className="close-text">Close</span>
              <span className="tj_sidebar_toggle">{Array.from({ length: 9 }, (_, i) => <span key={i} />)}</span>
            </button>
          </div>
          <div className="offcanvas_action d-none d-lg-block">
            <h5 className="greetings">
              Glad you&apos;re here! <img alt="" loading="lazy" width="28" height="28" src="/images/icons/start.svg" />
            </h5>
            <Link className="tj_text_btn" href="/about" onClick={onClose}>
              Get to know us <i className="tji-arrow-right" />
            </Link>
          </div>
          <div className="offcanvas_gallery tj_gallery d-none d-lg-block">
            {[1, 2, 3, 4].map((n) => (
              <img key={n} alt="" loading="lazy" width="219" height="251" className="gallery_img" style={{ height: 'auto' }} src={`/images/gallery/offcanvas-gallery-img-${n}.png`} />
            ))}
          </div>
          <div className="offcanvas_menu mobile_menu mean-container d-lg-none">
            <div className="mean-bar">
              <nav className="mean-nav">
                <ul>
                  {nav.map((item, i) => <MobileItem key={item.label} item={item} isLast={i === nav.length - 1} onNavigate={onClose} />)}
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas_contact tj_contact address">
            <div className="sec_subtitle contact_title">[ <span>Location</span> ]</div>
            <div className="contact_info">{site.address[0]}<br />{site.address[1]}</div>
          </div>
          <div className="offcanvas_contact tj_contact contact">
            <div className="sec_subtitle contact_title">[ <span>Contact</span> ]</div>
            <a href={site.phoneHref} className="contact_info">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="contact_info">{site.email}</a>
          </div>
          <ul className="offcanvas_socials tj_socials">
            {site.socials.map((s) => (
              <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><i className={s.icon} /></a></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div className={`tj_navigation_wrap_overlay${dropdown ? ' active' : ''}`} />
      <header className="tj-header header-1 header-absolute">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="tj-header_wrap">
                <div className="site_logo"><Logo /></div>
                <DesktopNav onDropdownToggle={setDropdown} />
                <div className="tj-header_right">
                  <Link href="/contact" className="tj_btn flip-text-wrap d-none d-md-inline-flex">
                    <span className="flip-text"><FlipText>Get a free audit</FlipText></span>
                  </Link>
                  <button className="tj_sidebar_toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
                    {Array.from({ length: 9 }, (_, i) => <span key={i} />)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
