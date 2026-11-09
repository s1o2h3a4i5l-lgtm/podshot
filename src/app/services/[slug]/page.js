import { notFound } from 'next/navigation';
import { ServiceBanner } from '@/components/sections/service/ServiceSections';
import { RelatedSlider } from '@/components/sections/service/ServiceClient';
import Sections from '@/components/sections/service/Sections';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import { services, groups } from '@/data/services-meta';
import { digital, related } from '@/data/services/digital';

const content = { ...digital };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = content[slug];
  return c ? { title: c.seoTitle, description: c.description } : {};
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const meta = services.find((s) => s.slug === slug);
  const c = content[slug];
  if (!meta || !c) notFound();
  const group = groups[meta.group];
  const work = related(['Campaigns', 'Websites', 'Local SEO', 'Social media']);
  return (
    <>
      <div className="inner_top_gap" />
      <ServiceBanner back={{ label: `All ${group.name.toLowerCase()}`, href: group.href }} {...c.banner} />
      <Sections sections={c.sections} />
      <RelatedSlider subtitle="Related work" title="Recent projects" items={work} />
      <Faq title={`Questions about ${meta.name.toLowerCase()}`} items={c.faqs} border />
      <Cta message={`Hi PodShot, I am interested in ${meta.name}.`} />
    </>
  );
}
