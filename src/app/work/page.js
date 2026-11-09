import { PageBanner } from '@/components/sections/work/WorkSections';
import FilterGrid from '@/components/sections/work/FilterGrid';
import Cta from '@/components/sections/Cta';
import { projects, projectHref, workFilters } from '@/data/projects';

export const metadata = {
  title: 'Our Work: Campaigns, Shoots and Results',
  description: 'Case studies from PodShot: Google Ads, social media, websites, local SEO, product shoots and ad films for brands in Pune.',
};

export default function WorkPage() {
  return (
    <>
      <div className="inner_top_gap" />
      <PageBanner subtitle="Our work" title="Campaigns, content and the results they brought for Pune brands." />
      <FilterGrid filters={workFilters} items={projects.map((p) => ({ title: p.title, category: p.category, year: p.year, href: projectHref(p) }))} />
      <Cta title="Your project next?" message="Hi PodShot, I saw your work and would like to talk about my project." />
    </>
  );
}
