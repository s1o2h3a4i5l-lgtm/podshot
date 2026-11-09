import { notFound } from 'next/navigation';
import { CaseBanner, ClientStory, Conclusion } from '@/components/sections/work/WorkSections';
import { StepRow, Stats } from '@/components/sections/service/ServiceSections';
import Cta from '@/components/sections/Cta';
import { projects, projectHref } from '@/data/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return (
    <>
      <div className="inner_top_gap" />
      <CaseBanner project={p} />
      <StepRow subtitle="What we did" title="Our approach." text={p.summary} steps={p.steps} />
      <Stats subtitle="Results and impact" title="The numbers after the work." text="Every project is measured on what matters to the business, not on vanity numbers." button={{ label: 'Get results like these', href: '/contact' }} items={p.results} />
      <ClientStory quote={p.quote} />
      <Conclusion text={p.conclusion} prev={projectHref(prev)} next={projectHref(next)} />
      <Cta title="Want this for you?" message={`Hi PodShot, I read the "${p.title}" case study and would like similar results.`} />
    </>
  );
}
