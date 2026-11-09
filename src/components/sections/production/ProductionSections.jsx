import Link from 'next/link';
import FlipText from '@/components/ui/FlipText';
import { BoxButton, RoundIconButton } from '@/components/ui/Buttons2';
import { IconButton } from '@/components/ui/Buttons';
import VideoPopup from '@/components/ui/VideoPopup';

const USERS = ['/images/users/user-list-img-1.png', '/images/users/user-list-img-2.png', '/images/users/user-list-img-3.png', '/images/users/user-list-img-4.png'];
const PURPOSE = ['/images/purpose/purpose-2.webp', '/images/purpose/purpose-3.webp', '/images/purpose/purpose-4.webp'];

function Tags({ tags }) {
  return (
    <div className="category-wrap">
      <span className="category"><i className="tji-star-2 tj-spinner" /></span>
      {tags.map((t) => <span key={t} className="category flip-text-wrap"><span className="flip-text"><FlipText>{t}</FlipText></span></span>)}
    </div>
  );
}

export function UsersTrust({ count, text, className = 'trusted_text tj-fz-h5 fw-sbold' }) {
  return (
    <div className="trusted_features">
      <ul className="tj_users_list">
        {USERS.map((u) => <li key={u}><img alt="" loading="lazy" width="160" height="160" style={{ height: 'auto' }} src={u} /></li>)}
      </ul>
      <div className={className}><span>{count}</span> {text}</div>
    </div>
  );
}

// Home 03's two-screen hero: a portrait intro that opens into three reasons with a video.
export function WindowHero({ title, tags, text, button, trust, reasons, video = '/videos/h1-hero-2.mp4' }) {
  return (
    <section className="window-shape-section">
      <div className="window-shape-wrapper">
        <div className="h3-hero-section window-shape-screen window-shape-screen-1">
          <div className="tj-bg-image tj-bg-image-absolute" style={{ backgroundImage: 'url(/images/hero/h3-hero-bg.webp)' }} />
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="hero_content">
                  <div className="hero_content_left hero_content_default container-space">
                    <h1 className="hero_title tj-split-text">{title}</h1>
                    <div className="tj-fade d-none d-lg-block" data-delay=".7" data-direction="left"><Tags tags={tags} /></div>
                  </div>
                  <div className="hero_content_right hero_content_default container-space">
                    <div className="tj-fade" data-delay=".6">
                      <div className="desc_wrapper">
                        <p className="desc">{text}</p>
                        <div className="tj_icon_btn_wrapper"><RoundIconButton href={button.href}>{button.label}</RoundIconButton></div>
                      </div>
                    </div>
                    <div className="tj-fade d-block d-lg-none" data-delay=".7" data-direction="left"><Tags tags={tags} /></div>
                    <div className="tj-fade" data-delay="1" data-direction="right"><UsersTrust count={trust.count} text={trust.text} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="window-shape-img">
          <img alt="" loading="lazy" width="60" height="57" style={{ height: 'auto' }} src="/images/shapes/window-shape.svg" />
        </div>
        <div className="purpose section-gap tj-progress-wrapper container-space window-shape-screen window-shape-screen-2 fix">
          <div className="purpose-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="section_heading">
                    <span className="sec_subtitle">[ <span>{reasons.subtitle}</span> ]</span>
                    <h2 className="sec_title">{reasons.title}</h2>
                    <div className="purpose-cta"><BoxButton href={reasons.button.href}>{reasons.button.label}</BoxButton></div>
                    <div className="purpose-video">
                      <video autoPlay loop muted playsInline><source src={video} type="video/mp4" /></video>
                      <p className="purpose-video-title">{reasons.videoTitle}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 col-xxl-4">
                  <div className="purpose-mockup-wrapper">
                    <div className="purpose-mockup">
                      <div className="purpose-mockup-items">
                        {PURPOSE.map((p) => <img key={p} alt="" loading="lazy" width="580" height="680" className="purpose-mockup-item" src={p} />)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-xxl-4">
                  <div className="purpose-item-wrapper">
                    {reasons.items.map((r, i) => (
                      <div key={r.title} className={`purpose-item tj-progress-item${i === 0 ? ' active' : ''}`}>
                        <div className="purpose-img d-block d-lg-none"><img alt="" loading="lazy" width="580" height="680" style={{ height: 'auto' }} src={PURPOSE[i % 3]} /></div>
                        <div className="purpose-title"><span className="purpose-sln">{String(i + 1).padStart(2, '0')}.</span> {r.title}</div>
                        <div className="purpose-desc">
                          <p className="desc">{r.text}</p>
                          {r.href && <RoundIconButton href={r.href}>Learn more</RoundIconButton>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectGallery({ subtitle, button, items }) {
  const cursor = " Explore <br /> more<i class='tji-arrow-up-right'></i>";
  return (
    <section className="h3-project-section container-space section-divider">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h3_projects_wrapper">
              <div className="section_heading">
                <div className="section_heading_inner">
                  <span className="sec_subtitle">[ <span>{subtitle}</span> ]</span>
                  {button && <RoundIconButton href={button.href}>{button.label}</RoundIconButton>}
                </div>
              </div>
            </div>
            <div className="h3_projects_wrap">
              <div className="h3_projects_items tj-project-gallery">
                {items.map((p) => (
                  <div key={p.title} className="tj_project_item tj-project-gallery-item" data-cursor-text-project={cursor}>
                    <div className="tj_project_item-inner tj-project-gallery-item-inner tj-image-distortion tj-bg-image fix" data-bg-image={p.image} style={{ backgroundImage: `url(${p.image})` }}>
                      {p.href && <Link className="h3_projects_link" href={p.href} aria-label={p.title} />}
                      <div className="project_content">
                        <h3 className="project_title tj-fz-h4">{p.href ? <Link href={p.href}>{p.title}</Link> : p.title}</h3>
                        <div className="project_year">[ <span>{p.label}</span> ]</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DarkCallout({ subtitle, title, text, button, video, trust, image = '/images/service/service-img-2.webp' }) {
  return (
    <section className="service-work-section container-space tj-theme-dark fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="service-work-wrap">
              <div className="service-work-left">
                {trust && (
                  <div className="tj-fade work_client_card trusted_features" data-delay="0.5">
                    <ul className="tj_users_list">
                      {USERS.map((u) => <li key={u}><img alt="" loading="lazy" width="160" height="160" style={{ height: 'auto' }} src={u} /></li>)}
                    </ul>
                    <div className="trusted_text ff-heading fs-22 fw-sbold"><span>{trust.count}</span> {trust.text}</div>
                  </div>
                )}
                <div className="service-work-img">
                  <img data-move="2" alt="" loading="lazy" width="525" height="903" className="parallax-image" style={{ height: 'auto' }} src={image} />
                </div>
              </div>
              <div className="service-work-right">
                <div className="section_heading">
                  <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                  <h2 className="sec_title tj-reveal-line tj-text-light-1">{title}</h2>
                </div>
                <div className="service-work-content tj-fade" data-delay="0.3">
                  <p className="desc fs-18 tj-text-light-2">{text}</p>
                  {video ? (
                    <VideoPopup src={video} className="tj_icon_btn flip-text-wrap">
                      <div className="icon_btn scale"><span><i className="tji-play" /><i className="tji-play" /></span></div>
                      <span className="flip-text"><FlipText>{button.label}</FlipText></span>
                    </VideoPopup>
                  ) : (
                    <IconButton href={button.href}>{button.label}</IconButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PinnedPortraits({ subtitle, title, button, items }) {
  return (
    <section className="h3-team-section team_pin_area_container container-space">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h3_team_wrapper tj-fade">
              <div className="team_section_header team_pin_area">
                <div className="section_heading">
                  <span className="sec_subtitle">[ <span>{subtitle}</span> ]</span>
                  <h2 className="sec_title">{title}</h2>
                  {button && <div className="team-action"><BoxButton href={button.href}>{button.label}</BoxButton></div>}
                </div>
              </div>
              <div className="team_items_wrapper">
                <div className="team_items">
                  {items.map((m, i) => (
                    <div key={i} className="tj_team_member">
                      <div className="member_image"><img alt={m.title} loading="eager" width="641" height="729" style={{ height: 'auto' }} src={m.image} /></div>
                      <div className="member_info">
                        <h3 className="name tj-fz-h5">{m.href ? <Link href={m.href}>{m.title}</Link> : m.title}</h3>
                        <span className="designation">{m.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
