import Link from 'next/link';
import FlipText from '@/components/ui/FlipText';
import { IconButton, BorderedButton, UserButton, ArrowIcon } from '@/components/ui/Buttons';
import HoverImage from '@/components/ui/HoverImage';
import ShowreelVideo from '@/components/ui/ShowreelVideo';
import HeroRing from '@/components/ui/HeroRing';
import { groups, servicesIn, serviceHref } from '@/data/services-meta';
import { projectHref } from '@/data/projects';
import { postHref } from '@/data/blog';
import { BASE_PATH } from '@/lib/basePath';

const CURSOR_EXPLORE = "Explore <br/> more<i class='tji-arrow-up-right'></i>";

export function Hero({ title, location, text, primary, secondary }) {
  return (
    <section className="h1-hero-section container-space h1HeroAnimation" data-speed="1.4">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_hero_content_wrap">
              <div className="hero_top_content d-flex flex-wrap align-items-start justify-content-between">
                <div className="h1_hero_shape_animation">
                  <HeroRing />
                </div>
                <h1 className="hero_title uppercase fs-120"><i className="tji-arrow-big-right" />{title}</h1>
              </div>
              <div className="hero_bottom_content">
                <div className="bottom_left_content">
                  <ul className="tj_icon_list">
                    <li><span className="icon"><i className="tji-globe" /></span><span className="text">{location}</span></li>
                  </ul>
                  <div className="desc fs-18">{text}</div>
                  <div className="hero_buttons d-inline-flex flex-wrap">
                    <UserButton href={primary.href}>{primary.label}</UserButton>
                    <BorderedButton href={secondary.href}>{secondary.label}</BorderedButton>
                  </div>
                </div>
                <div className="tj_scroll_down">
                  <span className="icon"><i className="tji-arrow-down-circle" /></span>
                  <span className="text">[ <span> SCROLL DOWN </span> ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Showreel({ video = `${BASE_PATH}/videos/podshot-showreel.mp4` }) {
  return (
    <div className="h1-video-section container-space h1HeroAnimation">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_hero_video_wrap">
              <div className="h1_hero_video">
                <ShowreelVideo src={video} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About({ subtitle, title, text, button, trustedCount, trustedText, image = `${BASE_PATH}/images/about/h1-about-img.jpg` }) {
  const users = [`${BASE_PATH}/images/users/user-list-img-1.png`, `${BASE_PATH}/images/users/user-list-img-2.png`, `${BASE_PATH}/images/users/user-list-img-3.png`, `${BASE_PATH}/images/users/user-list-img-4.png`];
  return (
    <section className="h1-about-section container-space fix" id="h1-about">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_about_content_wrap">
              <div className="section_heading d-flex flex-wrap align-items-start gap-3 justify-content-between">
                <span className="sec_subtitle tj-fade" data-direction="left" data-delay=".2">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title title-highlight">{title}</h2>
              </div>
              <div className="about_bottom_content tj-fade">
                <div className="desc_wrap tj-fade" data-direction="right" data-delay="0.15">
                  <div className="desc fs-18">{text}</div>
                  <IconButton href={button.href} className="about_btn d-none d-md-inline-flex">{button.label}</IconButton>
                </div>
                <div className="trusted_features">
                  <ul className="tj_users_list">
                    {users.map((u, i) => (
                      <li key={u} className="tj-fade" data-direction="left" data-delay={0.1 + i * 0.05}>
                        <img alt="" loading="lazy" width="160" height="160" style={{ height: 'auto' }} src={u} />
                      </li>
                    ))}
                  </ul>
                  <div className="trusted_text fs-22 fw-sbold tj-fade" data-direction="right" data-delay="0.2">
                    <span>{trustedCount}</span> {trustedText}
                  </div>
                  <div className="tj-fade d-md-none">
                    <IconButton href={button.href} className="about_btn">{button.label}</IconButton>
                  </div>
                </div>
              </div>
              <div className="about_img" data-speed="2">
                <img alt="" loading="lazy" width="344" height="414" style={{ height: 'auto' }} src={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features({ items, image = `${BASE_PATH}/images/feature/h1-feature-img.webp` }) {
  return (
    <section className="h1-features-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_features_wrap ">
              {items.map((it, i) => (
                <div key={it.label} className="tj_feature_item tj-fade" data-direction={i === 0 ? 'left' : undefined}>
                  <div className="tj_counter">
                    <div className="counter_number">
                      <span className="counter" data-target={it.value}>0</span>
                      <span className="suffix">{it.suffix}</span>
                    </div>
                    <div className="counter_label">{it.label}</div>
                  </div>
                  <div className="feature_text fs-24 fw-sbold uppercase">
                    {it.lines.map((l, j) => <span key={l}>{l}{j < it.lines.length - 1 && <br />}</span>)}
                  </div>
                </div>
              ))}
              <div className="tj_feature_item image tj-fade" data-direction="right">
                <img data-move="1.5" alt="" loading="lazy" width="1770" height="1556" className="parallax-image" style={{ height: 'auto' }} src={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROCESS_IMAGES = [`${BASE_PATH}/images/process/h1-process-img-1.webp`, `${BASE_PATH}/images/process/h1-process-img-2.webp`, `${BASE_PATH}/images/process/h1-process-img-3.webp`];

// Agina's pinned process: three steps scroll past while their images slide in.
export function Process({ subtitle, title, steps, images = PROCESS_IMAGES }) {
  const heading = (
    <>
      <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
      <div className="section_heading_inner"><h2 className="sec_title tj-reveal-line">{title}</h2></div>
    </>
  );
  return (
    <section className="h1-process-section container-space fix section-divider">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_process_wrapper">
              <div className="section_heading d-block d-xl-none">{heading}</div>
              <div className="h1_process_wrap">
                <div className="process_section_left d-none d-xl-flex">
                  <div className="section_heading ">{heading}</div>
                  <div className="h1_process_no tj-fade">
                    {steps.map((_, i) => <span key={i}>{String(i + 1).padStart(2, '0')}.</span>)}
                  </div>
                </div>
                <div className="h1_process_images tj-fade">
                  {steps.map((s, i) => (
                    <div key={s.title} className={`tj_process_img panel${i ? ' x-100' : ''}`}>
                      <img alt="" loading="lazy" width="963" height="1125" src={s.image || images[i % images.length]} />
                    </div>
                  ))}
                </div>
                <div className="h1_process_items tj-fade">
                  {steps.map((s, i) => (
                    <div key={s.title} className="tj_process_item_2">
                      <div className="process_top">
                        <div className="process_wrap d-lg-none">
                          <div className="process_no">{String(i + 1).padStart(2, '0')}.</div>
                          <div className="process_img"><img alt="" loading="lazy" width="963" height="1125" style={{ height: 'auto' }} src={s.image || images[i % images.length]} /></div>
                        </div>
                        <h3 className="process_title tj-fz-h4">{s.title}</h3>
                        <div className="process_desc">{s.text}</div>
                      </div>
                      <div className="process_bottom">
                        <div className="step_tags">
                          <div className="sec_subtitle">[ <span>Steps</span> ]</div>
                          <div className="tags">
                            {s.tags.map((t) => (
                              <div key={t} className="category flip-text-wrap"><span className="flip-text"><FlipText>{t}</FlipText></span></div>
                            ))}
                          </div>
                        </div>
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

export function ProjectShowcase({ subtitle, titleLead, title, projects, button }) {
  return (
    <section className="h1-project-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_projects_wrapper">
              <div className="section_heading ">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title tj-reveal-line"><span className="space">{titleLead}</span> {title}</h2>
              </div>
            </div>
            <div className="h1_projects_wrap tj-fade">
              <div className="h1_projects_items">
                {projects.map((p) => (
                  <div key={p.slug} className="tj_project_item tj--hover-item">
                    <div className="project_image">
                      <HoverImage src={p.image} href={projectHref(p)} alt={p.title} width="1326" height="900" />
                      <Link className="category flip-text-wrap" href={projectHref(p)}><span className="flip-text"><FlipText>{p.category}</FlipText></span></Link>
                    </div>
                    <div className="project_content">
                      <h3 className="project_title tj-fz-h5">
                        <Link href={projectHref(p)}>
                          <span className="icon_btn"><ArrowIcon /></span>
                          <span className="text">{p.title}</span>
                        </Link>
                      </h3>
                      <div className="project_year">[ <span>{p.year}</span> ]</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="projects-progress"><span /></div>
              <div className="projects_more_button text-center text-lg-end tj-fade">
                <IconButton href={button.href} className="view-more-btn">{button.label}</IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesList({ subtitle, title, text, button }) {
  let n = 0;
  return (
    <section className="h1-services-section container-space tj-theme-dark fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_services_wrapper">
              <div className="section_heading text-center">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title tj-text-light-1 tj-reveal-line">{title}</h2>
              </div>
              <div className="section_heading_bottom d-flex flex-wrap align-items-center justify-content-between">
                <div className="tj-fade d-none d-lg-inline-flex" data-direction="left">
                  <IconButton href={button.href} className="view-more-btn">{button.label}</IconButton>
                </div>
                <div className="service_desc fs-18 tj-text-light-2 tj-fade" data-direction="right">{text}</div>
              </div>
              {Object.entries(groups).map(([key, g]) => (
                <div key={key} className="ps-service-group">
                  <div className="ps-service-group-head tj-fade">
                    <Link href={g.href} className="sec_subtitle">[ <span>{g.name}</span> ]</Link>
                  </div>
                  <div className="h1_services_items">
                    {servicesIn(key).map((s) => {
                      n += 1;
                      return (
                        <div key={s.slug} className="tj_service_item tj-fade" data-cursor-text-service={CURSOR_EXPLORE}>
                          <Link className="service_link" href={serviceHref(s)} aria-label={s.name} />
                          <div className="service_content">
                            <div className="service_count">[ <span>{String(n).padStart(2, '0')}</span> ]</div>
                            <h3 className="service_title reveal-hover-text">{s.name}</h3>
                            <div className="service_categories">
                              {s.tags.map((t) => <span key={t} className="category">{t}</span>)}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              <div className="text-center mt-5 d-lg-none tj-fade">
                <IconButton href={button.href} className="view-more-btn">{button.label}</IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamCards({ text, subtitle, title, button, members }) {
  return (
    <section className="h1-team-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_team_wrapper">
              <div className="team_section_header">
                <div className="team_desc fs-18 tj-fade" data-direction="left">{text}</div>
                <div className="section_heading">
                  <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                  <h2 className="sec_title tj-reveal-line">{title}</h2>
                  {button && <div className="tj-fade d-none d-lg-inline-flex"><IconButton href={button.href} className="view-all-btn">{button.label}</IconButton></div>}
                </div>
              </div>
              <div className="team_items">
                {members.map((m, i) => (
                  <div key={m.role + i} className="tj_team_member tj-fade" data-direction="left" data-delay={0.5 + i * 0.2}>
                    <div className="member_image tj-glitch-hover">
                      <img alt={m.name} loading="lazy" width="642" height="729" style={{ height: 'auto' }} src={m.image} />
                      <div className="bg_image" style={{ backgroundImage: 'url(/gif/h1-bg.gif)' }} />
                      <div className="tj-glitch">
                        {[0, 1, 2, 3].map((k) => <div key={k} className="tj-glitch-item" style={{ backgroundImage: `url(${m.image})` }} />)}
                      </div>
                    </div>
                    <div className="member_info">
                      <h3 className="name tj-fz-h5">{m.href ? <Link href={m.href}>{m.name}</Link> : <span>{m.name}</span>}</h3>
                      <span className="designation">{m.role}</span>
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

export function ClientStrip({ subtitle }) {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8];
  const row = [...logos, ...logos, ...logos, ...logos];
  return (
    <div className="h1-client-section tj-theme-bg-2 fix">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col">
            <div className="h1_client_wrapper">
              <div className="section_heading text-center">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
              </div>
              <div className="h1_client_slider_wrap tj-fade">
                <div className="scroll-slider" data-scroll-speed="40" style={{ '--duration': '40s', '--gap': '30px' }}>
                  <div className="scroll-wrapper">
                    {row.map((n, i) => (
                      <div key={i} className="tj_client_item">
                        <span>
                          <img alt="Client logo" loading="lazy" width="205" height="72" className="front" style={{ height: 'auto' }} src={`${BASE_PATH}/images/clients/client-black-img-${n}.png`} />
                          <img alt="" loading="lazy" width="205" height="72" className="back" style={{ height: 'auto' }} src={`${BASE_PATH}/images/clients/client-white-img-${n}.png`} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BLOG_AUTHOR_IMAGES = [`${BASE_PATH}/images/users/h1-blog-user-1.png`, `${BASE_PATH}/images/users/h1-blog-user-2.png`, `${BASE_PATH}/images/users/h1-blog-user-3.png`];

export function BlogTeaser({ subtitle, title, text, button, posts }) {
  return (
    <section className="h1-blog-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_blog_wrapper">
              <div className="blog_section_header">
                <div className="section_heading">
                  <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                  <h2 className="sec_title tj-reveal-line">{title}</h2>
                  <div className="tj-fade d-none d-lg-inline-block"><IconButton href={button.href} className="view-more-btn">{button.label}</IconButton></div>
                </div>
                <div className="blog_desc fs-18 tj-fade" data-direction="right">{text}</div>
              </div>
              <div className="h1_blog_grid">
                {posts.map((p, i) => (
                  <article key={p.slug} className="tj_blog_item tj-fade" data-direction="left" data-delay={0.5 + i * 0.2}>
                    <Link className="blog_image" href={postHref(p)}>
                      <img alt={p.title} loading="lazy" width="870" height="579" src={p.image} />
                    </Link>
                    <div className="blog_content">
                      <div className="blog_meta">
                        <div className="blog_meta_item author">
                          <img alt="" loading="lazy" width="184" height="184" className="author_img" src={BLOG_AUTHOR_IMAGES[i % 3]} />
                          <span>By <Link href={postHref(p)}>{p.author}</Link></span>
                        </div>
                        <div className="blog_meta_item date"><span>{p.date}</span></div>
                      </div>
                      <h3 className="blog_title tj-fz-h4"><Link className="reveal-hover-text" href={postHref(p)}>{p.title}</Link></h3>
                      <BorderedButton href={postHref(p)} className="blog_btn">Read more</BorderedButton>
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

