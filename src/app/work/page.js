import { PageBanner } from '@/components/sections/work/WorkSections';
import FilterGrid from '@/components/sections/work/FilterGrid';
import { ClientStrip } from '@/components/sections/home/HomeSections';
import Cta from '@/components/sections/Cta';
import { projects, localSeoItems, projectHref, workFilters } from '@/data/projects';

export const metadata = {
  title: 'Our Work: Software, Local SEO & Clients',
  description: 'Software products, local SEO growth case studies and clients we work with at PodShot in Pune.',
};

export default function WorkPage() {
  const workItems = [
    ...projects.map((p) => ({
      title: p.title,
      category: p.category,
      year: p.year,
      image: p.image,
      href: projectHref(p),
    })),
    ...localSeoItems,
  ];
  return (
    <>
      <div className="inner_top_gap" />
      <PageBanner subtitle="Our work" title="Custom software, local SEO results and the clients we partner with." />
      <FilterGrid filters={workFilters} items={workItems} />
      <ClientStrip subtitle="Clients we work with" />
      <Cta title="Your project next?" message="Hi PodShot, I saw your work and would like to talk about my project." />
    </>
  );
}
