import Link from 'next/link';
import FlipText from '@/components/ui/FlipText';
import Rating from '@/components/ui/Rating';
import { IconButton } from '@/components/ui/Buttons';
import { site } from '@/data/site';

export function PageBanner({ subtitle, title, className = 'service-banner fix', children }) {
  return (
    <section className={className}>
      <div className="container-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="section_heading d-flex flex-xl-nowrap flex-wrap justify-content-between">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <div className="sec_right"><h1 className="sec_title tj-reveal-line tj-fade">{title}</h1></div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseBanner({ project }) {
  const facts = [['Client', project.client], ['Services', project.services.join(', ')], ['Category', project.category], ['Year', project.year], ['Status', 'Completed']];
  return (
    <section className="service-details-banner fix">
      <div className="container-space">
        <div className="container-fluid">
          <div className="service_details_header row">
            <div className="col-lg-8">
              <div className="service_details_header_left tj-fade">
                <Link className="tj_icon_btn text-underline-btn back_btn flip-text-wrap" href="/work">
                  <div className="icon_btn"><span><i className="tji-arrow-left" /><i className="tji-arrow-left" /></span></div>
                  <span className="underline-text flip-text"><FlipText>Back to our work</FlipText></span>
                </Link>
                <h1 className="tj_blog_details_title title-anim">{project.title}</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_details_header_right tj-fade" data-delay="0.3">
                <p className="desc fs-18">{project.brief}</p>
                <div className="btn-wrap">
                  <IconButton href="/contact">Get similar results</IconButton>
                  <a className="tj_text_btn" href={site.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
          <div className="service_details_intro row">
            <div className="col-lg-8">
              <div className="service_details_img tj-fade" data-delay="0.3">
                <img data-move="1.8" alt={project.title} width="1190" height="892" className="parallax-image" style={{ height: 'auto' }} src="/images/projects/project-details.webp" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_details_intro_content project_information tj-fade" data-delay="0.5">
                <ul>{facts.map(([k, v]) => <li key={k}><span className="project_label">[ {k} ]</span> {v}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClientStory({ quote, rating = 5 }) {
  const row = Array.from({ length: 5 });
  return (
    <section className="project-testimonial-section tj-theme-bg-2 fix" data-speed=".75">
      <div className="project-testimonial-marquee">
        <div className="scroll-slider" style={{ '--duration': '40s', '--gap': '60px' }}>
          {[0, 1, 2].map((k) => (
            <div key={k} className="scroll-wrapper">
              {row.map((_, i) => <div key={i} className="marquee-item"><h3 className="marquee-text">Client story <span><i className="tji-star-2" /></span></h3></div>)}
            </div>
          ))}
        </div>
      </div>
      <div className="container-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="project-testimonial-wrap tj-fade" data-delay="0.3">
                <div className="tj_testimonial_item project_testimonial_item">
                  <div className="author-img"><img alt="" loading="lazy" width="333" height="333" style={{ height: 'auto' }} src="/images/users/project-owner.png" /></div>
                  <div className="testimonial_content_wrapper">
                    <div className="testimonial_content">
                      <Rating value={rating} />
                      <div className="review_text">“<span><b>{quote.text}</b></span>”</div>
                    </div>
                    <div className="testimonial_bottom">
                      <div className="tj-author-profile">
                        <div className="author-info">
                          <h3 className="name tj-fz-h5">{quote.name}</h3>
                          <span className="designation">{quote.role}</span>
                        </div>
                      </div>
                    </div>
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

export function Conclusion({ text, prev, next }) {
  return (
    <section className="final-conclusion-section container-space tj-theme-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="project-details-left">
              <div className="section_heading">
                <span className="sec_subtitle tj-fade" data-direction="right">[ <span>What we learned</span> ]</span>
                <h2 className="sec_title tj-reveal-line">Final thoughts</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-details-right"><p className="desc fs-18 tj-fade" data-delay="0.3">{text}</p></div>
          </div>
        </div>
        <div className="row flex-column flex-lg-row ">
          <div className="col-12">
            <div className="tj_item_nav_wrapper tj-fade">
              <div className="tj_item_nav previous">
                <Link className="tj_icon_btn text-underline-btn flip-text-wrap" href={prev}>
                  <div className="icon_btn"><span><i className="tji-arrow-left" /><i className="tji-arrow-left" /></span></div>
                  <span className="underline-text flip-text"><FlipText>Previous</FlipText></span>
                </Link>
              </div>
              <div className="tj_item_nav_all">
                <Link className="flip-text-wrap sec_subtitle" href="/work">[ <span className="flip-text"><FlipText>View all work</FlipText></span> ]</Link>
              </div>
              <div className="tj_item_nav next">
                <Link className="tj_icon_btn text-underline-btn flip-text-wrap" href={next}>
                  <span className="underline-text flip-text"><FlipText>Next</FlipText></span>
                  <div className="icon_btn"><span><i className="tji-arrow-right" /><i className="tji-arrow-right" /></span></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
