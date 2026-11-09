'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import HoverImage from '@/components/ui/HoverImage';
import FlipText from '@/components/ui/FlipText';
import { ArrowIcon } from '@/components/ui/Buttons';

export function RelatedSlider({ subtitle, title, items }) {
  const swiper = useRef(null);
  return (
    <section className="related-project-section container-space tj-theme-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="related-project-header d-flex flex-wrap align-items-end justify-content-between gap-3">
              <div className="section_heading">
                <span className="sec_subtitle tj-fade" data-direction="right">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title tj-reveal-line tj-text-light-1">{title}</h2>
              </div>
              <div className="tj_swiper_nav_wrapper tj-fade" data-direction="right">
                <button className="tj_swiper_nav prev h3-slider-prev" type="button" aria-label="Previous" onClick={() => swiper.current?.slidePrev()}><ArrowIcon icon="tji-arrow-left" /></button>
                <button className="tj_swiper_nav h3-slider-next" type="button" aria-label="Next" onClick={() => swiper.current?.slideNext()}><ArrowIcon /></button>
              </div>
            </div>
            <div className="related-project-slider-wrapper tj-fade">
              <Swiper
                className="related_project_slider overflow-hidden"
                modules={[Autoplay, Keyboard]}
                onSwiper={(s) => { swiper.current = s; }}
                slidesPerView={1}
                spaceBetween={30}
                loop={items.length > 3}
                speed={1500}
                autoplay={{ delay: 4000 }}
                keyboard={{ enabled: true }}
                breakpoints={{ 576: { slidesPerView: 2 }, 992: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
              >
                {items.map((p) => (
                  <SwiperSlide key={p.title}>
                    <div className="tj_project_item tj--hover-item">
                      <div className="project_image">
                        <HoverImage src={p.image} href={p.href} alt={p.title} width="870" height="765" />
                        <Link className="category flip-text-wrap" href={p.href}><span className="flip-text"><FlipText>{p.category}</FlipText></span></Link>
                      </div>
                      <div className="project_content">
                        <h3 className="project_title tj-fz-h5">
                          <Link href={p.href}><span className="icon_btn"><ArrowIcon /></span><span className="text">{p.title}</span></Link>
                        </h3>
                        <div className="project_year">[ <span>{p.year}</span> ]</div>
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

// Percentage circles from Agina's team detail page; the ring fills when it scrolls into view.
export function PercentCircles({ subtitle, title, text, items }) {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.circle-big').forEach((c) => {
          const p = Number(c.dataset.percent || 0);
          c.querySelector('.progress').style.strokeDashoffset = `${330 - (330 * p) / 100}px`;
        });
        io.disconnect();
      });
    }, { threshold: 0.3 });
    io.observe(root);
    return () => io.disconnect();
  }, []);
  return (
    <section className="tj-team-details container-space ps-percent-section">
      <div className="container-fluid">
        <div className="section_heading">
          <span className="sec_subtitle tj-fade" data-direction="right">[ <span>{subtitle}</span> ]</span>
          <h2 className="sec_title tj-reveal-line">{title}</h2>
          {text && <p className="desc fs-18 tj-fade ps-percent-text">{text}</p>}
        </div>
        <div className="tj-member-skill-area" ref={ref}>
          <div className="skill-wrap">
            {items.map((it, i) => (
              <div key={it.label} className="skill-item tj-fade" data-delay={0.3 + i * 0.1}>
                <div className="skill-info">
                  <div className="circle-big" data-percent={it.value}>
                    <span>{it.value}%</span>
                    <svg><circle className="bg" cx="60" cy="60" r="56" /><circle className="progress" cx="60" cy="60" r="55" /></svg>
                  </div>
                  <h3 className="title tj-fz-h5">{it.label}</h3>
                  <span className="text">{it.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
