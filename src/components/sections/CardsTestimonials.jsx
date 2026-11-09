'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import Rating from '@/components/ui/Rating';
import { ArrowIcon } from '@/components/ui/Buttons';

// Agina About page testimonial cards: a looping slider of quote cards, alternating light and dark.
export default function CardsTestimonials({ subtitle, title, items }) {
  const swiper = useRef(null);
  const slides = items.length < 5 ? [...items, ...items] : items;
  return (
    <section className="about-testimonial-section container-space tj-theme-bg-2 fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="section_heading text-center">
              <span className="sec_subtitle tj-fade" data-direction="left">[ <span>{subtitle}</span> ]</span>
              <h2 className="sec_title tj-reveal-line">{title}</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="tj_swiper_nav_wrapper tj-fade" data-direction="right">
              <button className="tj_swiper_nav prev h3-slider-prev" type="button" aria-label="Previous" onClick={() => swiper.current?.slidePrev()}><ArrowIcon icon="tji-arrow-left" /></button>
              <button className="tj_swiper_nav h3-slider-next" type="button" aria-label="Next" onClick={() => swiper.current?.slideNext()}><ArrowIcon /></button>
            </div>
            <div className="about_testimonial_slider_wrapper tj-fade">
              <Swiper
                className="about_testimonial_slider"
                modules={[Autoplay, Keyboard]}
                onSwiper={(s) => { swiper.current = s; }}
                slidesPerView={1}
                spaceBetween={30}
                loop
                loopAdditionalSlides={2}
                speed={1500}
                autoplay={{ delay: 4000 }}
                keyboard={{ enabled: true }}
                breakpoints={{ 992: { slidesPerView: 2 }, 1200: { slidesPerView: 2 }, 1400: { slidesPerView: 3 } }}
              >
                {slides.map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className={`tj_testimonial_item about_testimonial_item${i % 2 ? ' tj-theme-bg-dark' : ''}`}>
                      <div className="testimonial_top">
                        <div className="tj-author-profile">
                          <div className="author-img"><img alt="" loading="lazy" width="160" height="160" src={t.avatar} /></div>
                          <div className="author-info">
                            <h3 className="name tj-fz-h5">{t.name}</h3>
                            <span className="designation">{t.role}</span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial_content">
                        <div className="review_text"><span>&quot;{t.text}&quot;</span></div>
                        <Rating value={t.rating} />
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
