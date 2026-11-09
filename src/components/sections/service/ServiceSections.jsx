import { Fragment } from 'react';
import Link from 'next/link';
import { IconButton, UserButton } from '@/components/ui/Buttons';
import FlipText from '@/components/ui/FlipText';
import { site } from '@/data/site';
import { BASE_PATH } from '@/lib/basePath';

const Sub = ({ children, direction = 'right' }) => <span className="sec_subtitle tj-fade" data-direction={direction}>[ <span>{children}</span> ]</span>;

export function ServiceBanner({ title, tags, text, image = `${BASE_PATH}/images/service/service-details.webp`, listTitle = 'What you get', list, back = { label: 'All services', href: '/digital-marketing' }, primary = { label: 'Get a free quote', href: '/contact' }, secondary = { label: 'See our work', href: '/work' } }) {
  return (
    <section className="service-details-banner fix">
      <div className="container-space">
        <div className="container-fluid">
          <div className="service_details_header row">
            <div className="col-lg-8">
              <div className="service_details_header_left tj-fade">
                <Link className="tj_icon_btn text-underline-btn back_btn flip-text-wrap" href={back.href}>
                  <div className="icon_btn"><span><i className="tji-arrow-left" /><i className="tji-arrow-left" /></span></div>
                  <span className="underline-text flip-text"><FlipText>{back.label}</FlipText></span>
                </Link>
                <h1 className="tj_blog_details_title title-anim">{title}</h1>
                <div className="categories">{tags.map((t) => <span key={t} className="category">{t}</span>)}</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_details_header_right tj-fade" data-delay="0.3">
                <p className="desc fs-18">{text}</p>
                <div className="btn-wrap">
                  <IconButton href={primary.href}>{primary.label}</IconButton>
                  <Link className="tj_text_btn" href={secondary.href}>{secondary.label}</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="service_details_intro row">
            <div className="col-lg-8">
              <div className="service_details_img tj-fade" data-delay="0.3">
                <img data-move="1.8" alt="" width="1190" height="890" className="parallax-image" style={{ height: 'auto' }} src={image} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_details_intro_content tj-fade" data-delay="0.5">
                <div className="sec_subtitle tj-fade" data-direction="right">[ <span>{listTitle}</span> ]</div>
                <ul>{list.map((l) => <li key={l}>{l}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose({ subtitle, title, text, items, image = `${BASE_PATH}/images/service/choose-img.webp` }) {
  return (
    <section className="why-choose-section container-space sidebar-sticky-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="sidebar-sticky">
              <div className="section_heading"><Sub>{subtitle}</Sub><h2 className="sec_title tj-reveal-line">{title}</h2></div>
              <div className="why-choose-content-wrap">
                <div className="why-choose-img"><img alt="" loading="lazy" width="413" height="446" style={{ height: 'auto' }} src={image} /></div>
                <div className="why-choose-content"><p className="desc fs-18 m-0">{text}</p></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="why-choose-item-wrap">
              {items.map((it, i) => (
                <div key={it.title} className="why-choose-item">
                  <div className="choose-count">[ <span>{String(i + 1).padStart(2, '0')}</span> ]</div>
                  <h3 className="choose-title tj-fz-h4">{it.title}</h3>
                  <p className="choose-desc">{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats({ subtitle, title, text, button = { label: 'Book a free call', href: site.whatsapp }, items }) {
  return (
    <section className="tj-identity-section container-space">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="section_heading"><Sub>{subtitle}</Sub><h2 className="sec_title tj-reveal-line">{title}</h2></div>
            <div className="tj-identity-wrapper">
              <div className="book-content">
                <div className="desc fs-22 fw-sbold ff-heading">{text}</div>
                <UserButton href={button.href}>{button.label}</UserButton>
              </div>
              <div className="identity-item-wrap">
                {items.map((it, i) => (
                  <div key={it.label} className="identity-item tj-fade" data-direction="right" data-delay={0.3 + i * 0.2} data-offset="200">
                    <div className="tj_counter">
                      <div className="counter_number">
                        <span className="counter" data-target={it.value}>{it.value}</span>
                        <span className="suffix">{it.suffix}</span>
                      </div>
                      <div className="counter_label">{it.label}</div>
                    </div>
                    <p className="desc">{it.text}</p>
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

export function ProcessCards({ subtitle, title, steps, button = { label: 'Start your project', href: '/contact' } }) {
  return (
    <section className="working-process-section container-space tj-theme-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="working-process-header d-flex align-items-end justify-content-between">
              <div className="section_heading"><Sub>{subtitle}</Sub><h2 className="sec_title tj-reveal-line tj-text-light-1">{title}</h2></div>
              <div className="working-process-header-right tj-fade d-lg-block d-none"><IconButton href={button.href}>{button.label}</IconButton></div>
            </div>
            <div className={`tj-process-items-wrapper tj-fade${steps.length > 3 ? ' ps-process-many' : ''}`} data-delay="0.5">
              {steps.map((s, i) => (
                <Fragment key={s.title}>
                  <hr />
                  <div className="tj-process-item-3">
                    <div className="process-no tj-text-light-1">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="process-title tj-text-light-1 tj-fz-h4">{s.title}</h3>
                    <div className="process-desc tj-text-light-2 fs-18">{s.text}</div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IconCards({ subtitle, title, items, image = `${BASE_PATH}/images/feature/career-feature.webp` }) {
  return (
    <section className="career_features">
      <div className="container-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6">
              <div className="career_features_heading_wrap">
                <div className="section_heading">
                  <span className="sec_subtitle">[ <span>{subtitle}</span> ]</span>
                  <h2 className="sec_title tj-reveal-line">{title}</h2>
                </div>
                <div className="career_features_banner d-md-block d-none">
                  <img data-move="1" alt="" loading="lazy" width="413" height="570" className="parallax-image" style={{ height: 'auto' }} src={image} />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="career_features_box_wrapper">
                {items.map((it) => (
                  <div key={it.title} className="career_features_box">
                    <div className="career_features_content">
                      <div className="career_features_icon"><i className={it.icon || 'tji-creative'} /></div>
                      <h3 className="career_features_title tj-fz-h4">{it.title}</h3>
                      <p className="career_features_desc">{it.text}</p>
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

// No data-speed here: Agina's lag parallax on this section bleeds into whatever
// transparent-background section follows it (Guide, Faq) when reused mid-page like this.
export function CardGrid({ subtitle, title, items }) {
  return (
    <section className="career-opening-section container-space tj-theme-dark fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="section_heading d-flex flex-wrap justify-content-between">
              <span className="sec_subtitle">[ <span>{subtitle}</span> ]</span>
              <h2 className="sec_title tj-reveal-line tj-text-light-1">{title}</h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-30">
          {items.map((it) => (
            <div key={it.title} className="col-xl-4 col-md-6">
              <div className="career-opening-item">
                <div className="career-content">
                  <h3 className="career-title tj-fz-h4">{it.href ? <Link href={it.href}>{it.title}</Link> : it.title}</h3>
                  <div className="category-wrap">{(it.tags || []).map((t) => <span key={t} className="category">{t}</span>)}</div>
                </div>
                <div className="career-bottom">
                  {it.href ? (
                    <Link className="tj_icon_btn" href={it.href} aria-label={it.title}><span className="icon_btn"><span><i className="tji-arrow-right" /><i className="tji-arrow-right" /></span></span></Link>
                  ) : (
                    <span className="tj_icon_btn"><span className="icon_btn"><span><i className="tji-check" /><i className="tji-check" /></span></span></span>
                  )}
                  <div className="salary-range">{it.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StepRow({ subtitle, title, text, steps }) {
  return (
    <section className="project-details-section ps-step-row container-space">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="project-details-left"><div className="section_heading"><Sub>{subtitle}</Sub><h2 className="sec_title tj-reveal-line">{title}</h2></div></div>
          </div>
          <div className="col-lg-6">
            <div className="project-details-right"><p className="desc fs-18 tj-fade" data-delay="0.3">{text}</p></div>
          </div>
        </div>
        <div className="tj-process-items-wrapper-2 row row-gap-30">
          {steps.map((s, i) => (
            <div key={s.title} className="col-xl-3 col-md-6">
              <div className="tj-process-item-3 tj-fade" data-delay={0.3 + i * 0.1}>
                <div className="process-no">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="process-title tj-fz-h4">{s.title}</h3>
                <div className="process-desc fs-18">{s.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResultsChecklist({ subtitle, title, text, points }) {
  return (
    <section className="result-impact-section container-space tj-theme-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="project-details-left"><div className="section_heading"><Sub>{subtitle}</Sub><h2 className="sec_title tj-reveal-line">{title}</h2></div></div>
          </div>
          <div className="col-lg-6">
            <div className="project-details-right">
              <p className="desc fs-18 tj-fade" data-delay="0.3">{text}</p>
              <ul className="tj_icon_list tj-fade" data-delay="0.5">
                {points.map((p) => <li key={p}><span className="icon"><i className="tji-check" /></span><span className="text">{p}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ThreeBlocks({ subtitle, title, items, image = `${BASE_PATH}/images/about/about-img-4.webp` }) {
  return (
    <section className="tj-future-goal-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="section_heading d-flex flex-wrap align-items-start justify-content-between">
              <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
              <h2 className="sec_title tj-reveal-line">{title}</h2>
            </div>
            <div className="future-goal-wrap">
              <div className="future-goal-content-wrap">
                {items.map((it, i) => (
                  <div key={it.label} className="future-goal-item tj-fade">
                    <div className="subtitle"><span>{String(i + 1).padStart(2, '0')}.</span> {it.label}</div>
                    <div className="future-goal-content">
                      <p className="desc">{it.text}</p>
                      <div className="tj_counter">
                        <div className="counter_number">
                          <span className="counter" data-target={it.value}>{it.value}</span>
                          <span className="suffix">{it.suffix}</span>
                        </div>
                        <div className="counter_label">{it.counterLabel}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="future-goal-img-wrap">
                <div className="future-goal-img"><img data-move="2" alt="" loading="lazy" width="885" height="1263" className="parallax-image" src={image} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceRows({ subtitle, title, items }) {
  return (
    <section className="tj-services-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="tj_services_wrapper">
              <div className="section_heading">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title tj-reveal-line">{title}</h2>
              </div>
              <div className="tj_services_items">
                {items.map((it, i) => (
                  <div key={it.title} className="tj_service_item tj_service_item_2 tj-fade" data-cursor-text-service-3={it.href ? "<i class='tji-arrow-right'></i>" : undefined}>
                    {it.href && <Link className="service_link" href={it.href} aria-label={it.title} />}
                    <div className="service_content">
                      <div className="service_count">[ <span>{String(i + 1).padStart(2, '0')}</span> ]</div>
                      <div className="service_title_wrap">
                        <h3 className="service_title reveal-hover-text">{it.title}</h3>
                        <div className="service_categories">{(it.tags || []).map((t) => <span key={t} className="category">{t}</span>)}</div>
                      </div>
                      <div className="service_list"><ul className="tj_list">{it.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
                      {it.href ? (
                        <Link className="tj_icon_btn" href={it.href} aria-label={it.title}><span className="icon_btn"><span><i className="tji-arrow-right" /><i className="tji-arrow-right" /></span></span></Link>
                      ) : <span />}
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

const STRIP = [
  [`${BASE_PATH}/images/careers/careers-gallery-1.webp`, 386, 412], [`${BASE_PATH}/images/careers/careers-gallery-2.webp`, 612, 588],
  [`${BASE_PATH}/images/careers/careers-gallery-3.webp`, 386, 412], [`${BASE_PATH}/images/careers/careers-gallery-4.webp`, 550, 588],
];

export function ImageStrip() {
  return (
    <section className="career-gallery-section tj-theme-bg fix position-relative z-1">
      <div className="career-gallery-slider">
        <div className="scroll-slider" style={{ '--duration': '30s', '--gap': '30px' }}>
          {[0, 1].map((k) => (
            <div key={k} className="scroll-wrapper">
              {STRIP.map(([src, w, h]) => <div key={src} className="career-gallery-item"><img alt="" loading="lazy" width={w} height={h} src={src} /></div>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = Array.from({ length: 12 }, (_, i) => `${BASE_PATH}/images/projects/gallery-project-${i + 1}.webp`);

export function GalleryShowcase({ titles, word = 'PodShot' }) {
  const items = [...GALLERY, ...GALLERY].map((src, i) => ({ src, title: titles[i % titles.length] }));
  return (
    <section className="gallery-showcase-section fix tj-theme-dark">
      <div className="gallery-showcase-wrapper">
        <div className="gallery-project-wrap">
          {items.map((it, i) => (
            <div key={i} className="gallery-project-item">
              <img alt="" loading="lazy" width="312" height="332" src={it.src} />
              <h3 className="title">{it.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <h2 className="showcase-title">{word}<sup>®</sup></h2>
    </section>
  );
}

const PERSPECTIVE = [`${BASE_PATH}/images/projects/h1-project-img-1.webp`, `${BASE_PATH}/images/projects/h1-project-img-2.webp`, `${BASE_PATH}/images/projects/h1-project-img-3.webp`, `${BASE_PATH}/images/projects/h1-project-img-4.webp`, `${BASE_PATH}/images/projects/h1-project-img-5.webp`, `${BASE_PATH}/images/projects/skew-project-5.png`, `${BASE_PATH}/images/projects/skew-project-6.png`, `${BASE_PATH}/images/projects/skew-project-8.png`];

export function PerspectiveShowcase({ items }) {
  const list = items.map((it, i) => ({ ...it, image: it.image || PERSPECTIVE[i % PERSPECTIVE.length] }));
  const Sec = ({ children }) => <span className="sec_subtitle">[ <span>{children}</span> ]</span>;
  const Title = ({ it }) => (it.href ? <Link href={it.href}>{it.title}</Link> : <span>{it.title}</span>);
  return (
    <section className="perspective-showcase-section container-space">
      <h2 className="visually-hidden">Selected projects</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="perspective-showcase-wrapper">
              <div className="perspective-showcase-wrap">
                <div className="perspective-showcase-no-wrap d-none d-xl-flex">
                  <div className="perspective-showcase-no">
                    <span className="current-item-no">01</span>
                    <span className="total-item-no">/{String(list.length).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className="perspective-showcase-subtitle d-xl-block d-none">{list.map((it, i) => <Sec key={i}>{it.category}</Sec>)}</div>
                <div className="perspective-showcase-images d-xl-block d-non">
                  {list.map((it, i) => (
                    <div key={i} className="perspective-showcase-item works-item">
                      <div className="perspective-showcase-img">
                        {it.href ? <Link href={it.href}><img alt={it.title} loading="lazy" width="1326" height="900" src={it.image} /></Link> : <img alt={it.title} loading="lazy" width="1326" height="900" src={it.image} />}
                      </div>
                      <div className="perspective-showcase-content d-xl-none">
                        <div className="d-flex justify-content-between">
                          <h3 className="title"><Title it={it} /></h3>
                          <Sec>{it.category}</Sec>
                        </div>
                        <Sec>{it.year}</Sec>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="perspective-showcase-year d-xl-block d-none">{list.map((it, i) => <Sec key={i}>{it.year}</Sec>)}</div>
                <div className="perspective-showcase-title-wrap d-xl-flex d-none">
                  <div className="perspective-title-wrap">
                    {list.map((it, i) => <h3 key={i} className="perspective-title"><Title it={it} /></h3>)}
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

const SKEW = Array.from({ length: 8 }, (_, i) => `/images/projects/skew-project-${i + 1}.png`);

export function SkewShowcase({ items }) {
  return (
    <section className="skew-showcase-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="skew-project-area-wrapper">
              <div className="skew-project-area">
                <div className="skew-project-wrap">
                  {items.map((it, i) => (
                    <div key={i} className="skew-project-item">
                      <img alt={it.title} loading="lazy" width="664" height="547" src={it.image || SKEW[i % SKEW.length]} />
                      <h5 className="title">{it.href ? <Link href={it.href}>{it.title}</Link> : it.title}</h5>
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
