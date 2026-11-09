'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Keyboard, Controller } from 'swiper/modules';
import Rating from '@/components/ui/Rating';
import { ArrowIcon } from '@/components/ui/Buttons';

export default function TestimonialSlider({ subtitle, items }) {
  const main = useRef(null);
  const authors = useRef(null);
  const link = () => {
    if (main.current && authors.current) main.current.controller.control = authors.current;
  };

  return (
    <section className="h1-testimonial-section container-space tj-theme-bg-2 fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_testimonial_wrapper">
              <div className="section_heading text-center">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
              </div>
              <div className="h1_testimonial_slider_wrap tj-fade">
                <Swiper
                  className="h1_testimonial_slider"
                  modules={[Autoplay, EffectFade, Keyboard, Controller]}
                  slidesPerView={1}
                  spaceBetween={0}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  speed={1500}
                  loop
                  autoplay={{ delay: 5000 }}
                  keyboard={{ enabled: true }}
                  onSwiper={(s) => { main.current = s; link(); }}
                >
                  {items.map((t, i) => (
                    <SwiperSlide key={i} className="tj_testimonial_item">
                      <div className="testimonial_content">
                        <Rating value={t.rating} />
                        <div className="review_text"><div>“<span>{t.text}</span>”</div></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  className="h1_testimonial_author_slider"
                  modules={[EffectFade, Controller]}
                  slidesPerView={1}
                  spaceBetween={30}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  speed={1500}
                  loop
                  allowTouchMove={false}
                  onSwiper={(s) => { authors.current = s; link(); }}
                >
                  {items.map((t, i) => (
                    <SwiperSlide key={i}>
                      <div className="tj-author-profile author">
                        <div className="author-img"><img alt="" loading="lazy" width="160" height="160" src={t.avatar} /></div>
                        <div className="author-info">
                          <h3 className="name"><span>{t.name}</span></h3>
                          <span className="designation"><span>{t.role}</span></span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="testimonial_navigations">
                  <button className="tj_swiper_nav prev h1-slider-prev" type="button" aria-label="Previous review" onClick={() => main.current?.slidePrev()}>
                    <ArrowIcon icon="tji-arrow-left" />
                  </button>
                  <button className="tj_swiper_nav h1-slider-next" type="button" aria-label="Next review" onClick={() => main.current?.slideNext()}>
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
