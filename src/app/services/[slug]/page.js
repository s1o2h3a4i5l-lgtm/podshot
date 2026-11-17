import { notFound } from 'next/navigation';
import { ServiceBanner, ServiceIntro } from '@/components/sections/service/ServiceSections';
import Sections from '@/components/sections/service/Sections';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import { services } from '@/data/services-meta';
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
  return (
    <>
      <div className="inner_top_gap" />
      {/* Text-led pages (no banner photo) use ServiceIntro; the original seven keep their photo banner. */}
      {c.intro ? <ServiceIntro {...c.intro} /> : <ServiceBanner {...c.banner} />}
      <Sections sections={c.sections} />
      <Faq title={`Questions about ${meta.name.toLowerCase()}`} items={c.faqs} border />
      <Cta message={`Hi PodShot, I am interested in ${meta.name}.`} />
    </>
  );
}
