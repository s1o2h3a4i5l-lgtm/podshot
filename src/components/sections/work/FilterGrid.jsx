'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import FlipText from '@/components/ui/FlipText';
import { BASE_PATH } from '@/lib/basePath';
import { IconButton, ArrowIcon } from '@/components/ui/Buttons';

const IMAGES = ['project-grig-img-1', 'project-grig-img-6', 'project-grig-img-2', 'project-grig-img-3', 'project-grig-img-4', 'project-grig-img-5', 'project-grig-img-3', 'project-grig-img-4'];

// Agina's project grid with category filters.
export default function FilterGrid({ items, filters, button = { label: 'Start a project', href: '/contact#contact-form' } }) {
  const [active, setActive] = useState('All');
  const sectionRef = useRef(null);

  useEffect(() => {
    let timer;
    const syncHash = () => {
      if (window.location.hash === '#local-seo' && filters.includes('Local SEO')) {
        setActive('Local SEO');
        timer = setTimeout(() => {
          const el = sectionRef.current;
          if (!el) return;
          const smoother = ScrollSmoother.get();
          if (smoother) smoother.scrollTo(el, true, 'top top');
          else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', syncHash);
    };
  }, [filters]);

  const shown = active === 'All' ? items : items.filter((p) => p.category === active);
  return (
    <section id="local-seo" ref={sectionRef} className="project-filter-section container-space fix tj-fade">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="project-filter-header d-flex flex-wrap flex-lg-row flex-column-reverse justify-content-between gap-4">
              <div className="tj_filter_btn_group category-wrap">
                {['All', ...filters].map((f) => (
                  <button key={f} type="button" aria-pressed={active === f} className={`tj_filter_btn category flip-text-wrap${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>
                    <span className="flip-text"><FlipText>{f}</FlipText></span>
                  </button>
                ))}
              </div>
              <div className="btn-wrap"><IconButton href={button.href}>{button.label}</IconButton></div>
            </div>
            <h2 className="visually-hidden">{active === 'All' ? 'All projects' : `${active} projects`}</h2>
            <div className="tj_project_grid tj_filter_item_wrapper">
              {shown.map((p, i) => {
                const img = <img alt={p.title} width="1190" height="720" src={p.image || `${BASE_PATH}/images/projects/${IMAGES[i % IMAGES.length]}.webp`} />;
                return (
                  <div key={p.href || p.image || p.title} className="tj_project_item tj_filter_item tj-w-50">
                    <div className="project_image">
                      {p.href ? <Link href={p.href}>{img}</Link> : <div className="project_frame">{img}</div>}
                    </div>
                    <div className="project_content">
                      <div className="project_title_wrap">
                        <h3 className="project_title tj-fz-h5">
                          {p.href ? (
                            <Link href={p.href}><span className="icon_btn"><ArrowIcon /></span><span className="text">{p.title}</span></Link>
                          ) : (
                            <span className="project_plain_title">{p.title}</span>
                          )}
                        </h3>
                        <div className="project_year">[ <span>{p.year}</span> ]</div>
                      </div>
                      {p.href ? (
                        <Link className="category flip-text-wrap" href={p.href}><span className="flip-text"><FlipText>{p.category}</FlipText></span></Link>
                      ) : (
                        <span className="category">{p.category}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
