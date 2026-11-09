import Link from 'next/link';
import ImageTrail from '@/components/ui/ImageTrail';
import VideoPopup from '@/components/ui/VideoPopup';
import PricingCard from '@/components/ui/PricingCard';
import FlipText from '@/components/ui/FlipText';
import ServiceStack from '@/components/ui/ServiceStack';
import { MarqueeButton, UnderlineButton, SplitFlip } from '@/components/ui/Marquee';
import { site } from '@/data/site';
import { serviceHref } from '@/data/services-meta';
import { projectHref } from '@/data/projects';
import { postHref } from '@/data/blog';
import { BASE_PATH } from '@/lib/basePath';

const PLUS = `${BASE_PATH}/images/shapes/plus-shape.svg`;

export function DigitalHero({ word, text, button, location }) {
  return (
    <section className="h2-hero-section container-space">
      <ImageTrail />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h2-hero-content-wrap">
              <div className="h2-hero-content">
                <div className="hero-left tj-fade" data-delay="0.1">
                  <ul className="tj_icon_list d-md-none">
                    <li><span className="icon"><i className="tji-globe" /></span><span className="text">{location}</span></li>
                  </ul>
                  <div className="desc fs-24">{text}</div>
                  <MarqueeButton href={button.href} light>{button.label}</MarqueeButton>
                </div>
                <div className="hero-right">
                  <ul className="tj_icon_list d-md-inline-flex d-none tj-fade" data-direction="bottom" data-delay=".4">
                    <li><span className="icon"><i className="tji-globe" /></span><span className="text">{location}</span></li>
                  </ul>
                  <ul className="tj_socials tj-fade" data-direction="bottom" data-delay=".7">
                    {site.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><i className={s.icon} /></a></li>)}
                  </ul>
                </div>
              </div>
              <div className="tj_gallery d-lg-none tj-fade" data-direction="bottom" data-delay=".9">
                {[1, 2, 3, 4].map((n) => <img key={n} alt="" loading="lazy" width="219" height="251" className="gallery_img" style={{ height: 'auto' }} src={`${BASE_PATH}/images/gallery/offcanvas-gallery-img-${n}.png`} />)}
              </div>
              <h1 className="hero_title tj-char-reveal-left fade-in">{word}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="line" /><div className="line line-2" /><div className="line line-3" /><div className="line line-4" />
      {['', ' plus-shape-2', ' plus-shape-3'].map((c) => (
        <div key={c} className={`plus-shape${c}`}><img alt="" loading="lazy" width="16" height="16" style={{ height: 'auto' }} src={PLUS} /></div>
      ))}
    </section>
  );
}

export function AboutCounters({ subtitle, title, highlight, titleEnd, person, counter, counterText, text, button, image = `${BASE_PATH}/images/about/h2-about-img.webp`, video = `${BASE_PATH}/videos/h1-hero-2.mp4` }) {
  return (
    <section className="h2-about-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h2-about-header">
              <div className="section_heading section_heading_center">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title tj-chars-up">{title} <span>{highlight}</span> {titleEnd}</h2>
              </div>
            </div>
            <div className="h2-about-content-wrap">
              <div className="tj-author-profile tj-fade">
                <div className="author-img"><img alt="" loading="lazy" width="160" height="160" src={`${BASE_PATH}/images/users/user-img-5.png`} /></div>
                <div className="author-info">
                  <h3 className="name tj-fz-h5">{person.name}</h3>
                  <span className="designation">{person.role}</span>
                </div>
              </div>
              <div className="about-content-inner">
                <div className="about-left tj-fade" data-direction="right">
                  <h2 className="counter" data-target={counter.value} data-duration="5" data-postfix={counter.suffix}>1</h2>
                  <p className="text fw-sbold">{counterText}</p>
                </div>
                <div className="image-wrapper">
                  <img alt="" loading="lazy" width="1167" height="720" src={image} />
                  <VideoPopup src={video} className="video-btn video-popup">
                    <span className="video-icon"><i className="tji-play" /></span>
                  </VideoPopup>
                </div>
                <div className="about-right tj-fade" data-direction="left">
                  <p className="desc fs-18">{text}</p>
                  <MarqueeButton href={button.href}>{button.label}</MarqueeButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MarqueeBand({ words }) {
  const row = [...words, ...words, ...words];
  return (
    <section className="h2-marquee-section fix">
      <div className="h2-marquee-slider tj-theme-bg-2">
        <div className="scroll-slider" style={{ '--duration': '80s', '--gap': '30px' }}>
          <div className="scroll-wrapper">
            {row.map((w, i) => (
              <div key={i} className="marquee-item"><h3 className="marquee-text">{w} <span>\\</span></h3></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCards({ subtitle, title, text, button, items }) {
  return (
    <section className="h2-service-section fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h2-service-heading-wrap d-flex flex-wrap align-items-end justify-content-between gap-3">
              <div className="h2-service-left order-2 order-xl-1">
                <p className="desc fs-18 tj-fade" data-delay="0.2">{text}</p>
                {button && <div className="tj-fade" data-delay="0.3"><MarqueeButton href={button.href}>{button.label}</MarqueeButton></div>}
              </div>
              <div className="section_heading order-1 order-xl-2">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title tj-chars-up">{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceStack count={items.length}>
        <div className="ps-stack-track">
          {items.map((s, i) => {
            const href = s.href || (s.slug ? serviceHref(s) : null);
            return (
              <div key={s.title || s.name} className="ps-stack-item">
                <div className="h2-service-item tj-fade">
                  <div className="h2-service-top">
                    <div className="service-sl">\{String(i + 1).padStart(2, '0')}</div>
                    <div className="service-icon"><i className={s.icon || 'tji-service-1'} /></div>
                  </div>
                  <div className="h2-service-content">
                    <h3 className="service-title tj-fz-h4">{href ? <Link href={href}>{s.title || s.name}</Link> : (s.title || s.name)}</h3>
                    <p className="service-desc">{s.text || s.blurb}</p>
                    <div className="category-wrap">{(s.tags || []).map((t) => <span key={t} className="category">{t}</span>)}</div>
                  </div>
                  {href && (
                    <div className="btn-area d-flex justify-content-end">
                      <Link className="tj_icon_btn flip-text-wrap no-border" href={href}>
                        <div className="icon_btn hover-bg"><i className="tji-arrow-right" /></div>
                        <span className="flip-text"><FlipText>Learn more</FlipText></span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ServiceStack>
    </section>
  );
}

export function ListRows({ subtitle, title, button, items, image = `${BASE_PATH}/images/award/award-trophy.gif`, titleImage = null }) {
  return (
    <section className="h2-award-section container-space fix">
      <div className="blocks-shape tj-fade" data-direction="left" />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h2-award-header d-flex flex-wrap align-items-end justify-content-between gap-3">
              <div className="section_heading">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title tj-chars-up">{title}</h2>
              </div>
              {button && <div className="sec_heading_right tj-fade" data-direction="right" data-delay="0.3"><MarqueeButton href={button.href}>{button.label}</MarqueeButton></div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="h2-award-wrapper">
              <div className="h2-award-img-wrap">
                <div className="h2-award-img tj-fade" data-direction="top" data-duration="1" data-delay="0.3">
                  <img alt="" loading="lazy" width="349" height="344" style={{ height: 'auto' }} src={image} />
                </div>
                {titleImage && (
                  <div className="award-title-img tj-fade" data-delay="0.3">
                    <img alt="" loading="lazy" width="490" height="83" style={{ height: 'auto' }} src={titleImage} />
                  </div>
                )}
              </div>
              <div className="h2-award-item-wrap tj-reveal-right-wrap">
                {items.map((it) => (
                  <div key={it.title} className="h2-award-item tj-reveal-right">
                    <div className="award-inner">
                      <h3 className="award-title tj-fz-h5">{it.title}</h3>
                      <div className="sec_subtitle">[ <span>{it.label}</span> ]</div>
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

const BLOCKS = [
  'M300 0H350V46.25H300V0Z', 'M350 0H400V46.25H350V0Z', 'M350 46H400V93H350V46Z', 'M250 46.25H300V92.5H250V46.25Z', 'M300 92.5H350V138.75H300V92.5Z',
  'M350 138.75H400V185H350V138.75Z', 'M250 138.75H300V185H250V138.75Z', 'M200 138H250V185H200V138Z', 'M200 92.5H250V138.75H200V92.5Z', 'M150 92.5H200V138.75H150V92.5Z',
  'M100 92.5H150V138.75H100V92.5Z', 'M50 92.5H100V138.75H50V92.5Z', 'M50 138H100V185H50V138Z', 'M0 92.5H50V138.75H0V92.5Z', 'M0 138H50V185H0V138Z', 'M150 46H200V93H150V46Z',
];

export function BlocksShape() {
  return (
    <div className="blocks-shape">
      <svg viewBox="0 0 400 185" fill="none" xmlns="http://www.w3.org/2000/svg">
        {BLOCKS.map((d, i) => <path key={d} d={d} fill="currentColor" className={`svg-elem-${i + 1}`} />)}
      </svg>
    </div>
  );
}

export function PortfolioList({ subtitle, title, button, items }) {
  return (
    <section className="h2-project-section tj-theme-dark fix">
      <BlocksShape />
      <div className="h2_projects_header d-flex flex-wrap align-items-end justify-content-between gap-3">
        <div className="section_heading ">
          <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
          <h2 className="sec_title fs-230 tj-text-light-1 tj-chars-up">{title}</h2>
        </div>
        {button && <div className="tj-fade" data-direction="right" data-delay="0.2"><UnderlineButton href={button.href} light>{button.label}</UnderlineButton></div>}
      </div>
      <div className="h2_projects_wrap">
        {items.map((p, i) => (
          <div key={p.slug} className="h2_projects_item active">
            <div className="project_sl">\{String(i + 1).padStart(2, '0')}</div>
            <div className="project_title_wrap">
              <h3 className="project_title split-flip-text-wrap"><Link href={projectHref(p)}><SplitFlip text={p.title} /></Link></h3>
              <div className="project_year">[ <span>{p.category} - {p.year}</span> ]</div>
            </div>
            <div className="project_content">
              <p className="project_desc">{p.summary}</p>
              <div className="project_btn_wrap"><MarqueeButton href={projectHref(p)} light>See the case study</MarqueeButton></div>
            </div>
            <div className="project_image">
              <Link href={projectHref(p)}><img alt={p.title} loading="lazy" width="1326" height="900" style={{ height: 'auto' }} src={p.image} /></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PricingSection({ subtitle, title, button, plans }) {
  return (
    <section className="h2-pricing-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h2_pricing_header d-flex flex-wrap align-items-end justify-content-between gap-3">
              <div className="section_heading">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title tj-chars-up">{title}</h2>
              </div>
              {button && <div className="sec_heading_right tj-fade" data-direction="right"><MarqueeButton href={button.href}>{button.label}</MarqueeButton></div>}
            </div>
            <div className="h2_pricing_wrap">
              {plans.map((p, i) => <PricingCard key={p.name} plan={{ direction: i ? 'right' : 'left', delay: 0.2 + i * 0.1, ...p }} blocksShape={i === plans.length - 1} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogSticky({ subtitle, title, button, posts }) {
  const [big, ...rest] = posts;
  return (
    <section className="h2-blog-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h2_blog_header d-flex flex-wrap align-items-end justify-content-between gap-3">
              <div className="section_heading">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title tj-chars-up">{title}</h2>
              </div>
              {button && <div className="sec_heading_right tj-fade" data-direction="right"><MarqueeButton href={button.href}>{button.label}</MarqueeButton></div>}
            </div>
            <div className="h2_blog_wrap tj-sticky-wrapper">
              <div className="h2_blog_left tj-sticky-left">
                <article className="tj_blog_item h2_blog_item_big tj-fade" data-direction="left">
                  <Link className="blog_image" href={postHref(big)}><img alt={big.title} loading="lazy" width="870" height="579" src={big.image} /></Link>
                  <div className="blog_content">
                    <div className="blog_meta">
                      <div className="blog_meta_item categories"><Link className="category" href={postHref(big)}>{big.category}</Link></div>
                      <div className="blog_meta_item date"><span>{big.date}</span></div>
                    </div>
                    <h2 className="blog_title"><Link className="reveal-hover-text" href={postHref(big)}>{big.title}</Link></h2>
                    <UnderlineButton href={postHref(big)} light>Read more</UnderlineButton>
                  </div>
                </article>
              </div>
              <div className="h2_blog_right tj-sticky-right">
                {rest.map((p, i) => (
                  <article key={p.slug} className="tj_blog_item h2_blog_item tj-fade" data-delay={0.2 + (i % 2) * 0.1}>
                    <Link className="blog_image" href={postHref(p)}><img alt={p.title} loading="lazy" width="870" height="579" src={p.image} /></Link>
                    <div className="blog_content">
                      <div className="blog_meta">
                        <div className="blog_meta_item categories"><Link className="category" href={postHref(p)}>{p.category}</Link></div>
                        <div className="blog_meta_item date"><span>{p.date}</span></div>
                      </div>
                      <h3 className="blog_title tj-fz-h5"><Link className="reveal-hover-text" href={postHref(p)}>{p.title}</Link></h3>
                      <UnderlineButton href={postHref(p)}>Read more</UnderlineButton>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
