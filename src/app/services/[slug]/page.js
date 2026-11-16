import { notFound } from 'next/navigation';
import { ServiceBanner, ServiceIntro } from '@/components/sections/service/ServiceSections';
import Sections from '@/components/sections/service/Sections';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import { services, groups } from '@/data/services-meta';
import { digital } from '@/data/services/digital';
import { more } from '@/data/services/more';

const content = { ...digital, ...more };

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
  const group = groups[meta.group] || groups.digital;
  const back = { label: group.href === '/services' ? 'All services' : `All ${group.name.toLowerCase()}`, href: group.href };
  return (
    <>
      <div className="inner_top_gap" />
      {/* Text-led pages (no banner photo) use ServiceIntro; the original seven keep their photo banner. */}
      {c.intro ? <ServiceIntro back={back} {...c.intro} /> : <ServiceBanner back={back} {...c.banner} />}
      <Sections sections={c.sections} />
      <Faq title={`Questions about ${meta.name.toLowerCase()}`} items={c.faqs} border />
      <Cta message={`Hi PodShot, I am interested in ${meta.name}.`} />
    </>
  );
}
