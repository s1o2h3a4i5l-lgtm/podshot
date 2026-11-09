'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import FlipText from '@/components/ui/FlipText';
import { UnderlineButton } from '@/components/ui/Marquee';
import { ArrowIcon } from '@/components/ui/Buttons';
import { postHref } from '@/data/blog';
import { BASE_PATH } from '@/lib/basePath';

function PostCard({ p, big = false, light = false, className = '', direction }) {
  const Title = big ? 'h2' : 'h3';
  return (
    <article className={`tj_blog_item tj_blog_item_standard ${className}`.trim()} data-direction={direction}>
      <Link className="blog_image" href={postHref(p)}><img alt={p.title} loading={big ? undefined : 'lazy'} width={big ? 1740 : 870} height={big ? 1158 : 579} src={p.image} /></Link>
      <div className="blog_content">
        <div className="blog_meta">
          <div className="blog_meta_item categories"><Link className="category" href={postHref(p)}>{p.category}</Link></div>
          <div className="blog_meta_item date"><span>{p.date}</span></div>
        </div>
        <Title className="blog_title"><Link className="reveal-hover-text" href={postHref(p)}>{p.title}</Link></Title>
        <div className="blog_desc"><p>{p.excerpt}</p></div>
        <UnderlineButton href={postHref(p)} light={light}>Read more</UnderlineButton>
      </div>
    </article>
  );
}

export function BlogFeatured({ subtitle, title, posts }) {
  const [first, ...rest] = posts;
  return (
    <section className="tj_blog_featured container-space">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="section_heading">
              <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
              <h1 className="sec_title tj-reveal-line">{title}</h1>
            </div>
            <div className="tj_blog_featured_wrapper">
              <PostCard p={first} big light className="tj-fade" direction="left" />
              {rest.slice(0, 2).map((p) => <PostCard key={p.slug} p={p} className="tj-fade" direction="right" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogGrid({ title, posts, filters }) {
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? posts : posts.filter((p) => p.category === active);
  return (
    <section className="tj_blog_grid_area container-space tj_filter section-divider fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="tj_blog_grid_header d-flex flex-wrap align-items-center  justify-content-between gap-4">
              <div className="section_heading"><h2 className="sec_title tj-reveal-line">{title}</h2></div>
              <div className="tj_filter_btn_group category-wrap">
                {['All', ...filters].map((f) => (
                  <button key={f} type="button" className={`tj_filter_btn category flip-text-wrap${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>
                    <span className="flip-text"><FlipText>{f}</FlipText></span>
                  </button>
                ))}
              </div>
            </div>
            <div className="tj_blog_grid tj_filter_item_wrapper">
              {shown.map((p) => <PostCard key={p.slug} p={p} className="tj_filter_item" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Timeline({ subtitle, title, text, items, image = `${BASE_PATH}/images/timeline/timeline-img.png` }) {
  const swiper = useRef(null);
  return (
    <section className="tj-timeline-section container-space tj-theme-dark fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section_heading">
              <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
              <h2 className="sec_title fs-230 tj-reveal-line">{title}</h2>
            </div>
            <div className="timeline-content-area">
              <div className="timeline-img tj-fade"><img alt="" loading="lazy" width="450" height="450" style={{ height: 'auto' }} src={image} /></div>
              <h2 className="timeline-content tj-fade" data-delay="0.7">{text}</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="timeline-slider-wrapper tj-fade">
              <div className="tj_swiper_nav_wrapper tj-fade" data-direction="right">
                <button className="tj_swiper_nav prev timeline-prev" type="button" aria-label="Previous" onClick={() => swiper.current?.slidePrev()}><ArrowIcon icon="tji-arrow-left" /></button>
                <button className="tj_swiper_nav timeline-next" type="button" aria-label="Next" onClick={() => swiper.current?.slideNext()}><ArrowIcon /></button>
              </div>
              <Swiper
                className="timeline-slider"
                modules={[Autoplay, Keyboard]}
                onSwiper={(s) => { swiper.current = s; }}
                slidesPerView={1}
                spaceBetween={30}
                loop
                speed={1500}
                autoplay={{ delay: 4000 }}
                keyboard={{ enabled: true }}
                breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3, centeredSlides: true }, 1400: { slidesPerView: 3, spaceBetween: 60, centeredSlides: true } }}
              >
                {[...items, ...items].map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="timeline-item">
                      <div className="timeline-year">{t.year}<span /></div>
                      <div className="timeline-inner">
                        <h3 className="timeline-title">{t.title}</h3>
                        <div className="timeline-text"><p>{t.text}</p></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
