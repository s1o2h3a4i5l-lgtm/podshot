'use client';

import { useState } from 'react';
import Link from 'next/link';
import FlipText from '@/components/ui/FlipText';
import { IconButton, ArrowIcon } from '@/components/ui/Buttons';

const WIDTHS = ['tj-w-100', 'tj-w-66', 'tj-w-34', 'tj-w-50', 'tj-w-50', 'tj-w-25', 'tj-w-25', 'tj-w-50'];
const IMAGES = ['project-grig-img-1', 'project-grig-img-6', 'project-grig-img-2', 'project-grig-img-3', 'project-grig-img-4', 'project-grig-img-5', 'project-grig-img-3', 'project-grig-img-4'];

// Agina's project grid with category filters.
export default function FilterGrid({ items, filters, button = { label: 'Start a project', href: '/contact' } }) {
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? items : items.filter((p) => p.category === active);
  return (
    <section className="project-filter-section container-space fix tj-fade">
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
              {shown.map((p, i) => (
                <div key={p.href} className={`tj_project_item tj_filter_item ${active === 'All' ? WIDTHS[i % WIDTHS.length] : 'tj-w-50'}`}>
                  <div className="project_image">
                    <Link href={p.href}><img alt={p.title} width="1190" height="720" src={p.image || `/images/projects/${IMAGES[i % IMAGES.length]}.webp`} /></Link>
                  </div>
                  <div className="project_content">
                    <div className="project_title_wrap">
                      <h3 className="project_title tj-fz-h5">
                        <Link href={p.href}><span className="icon_btn"><ArrowIcon /></span><span className="text">{p.title}</span></Link>
                      </h3>
                      <div className="project_year">[ <span>{p.year}</span> ]</div>
                    </div>
                    <Link className="category flip-text-wrap" href={p.href}><span className="flip-text"><FlipText>{p.category}</FlipText></span></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
