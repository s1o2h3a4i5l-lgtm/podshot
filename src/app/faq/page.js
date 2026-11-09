import { PageBanner } from '@/components/sections/work/WorkSections';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import { faqGroups } from '@/data/faqs';

export const metadata = {
  title: 'FAQs | Wakad, Pune',
  description: 'Answers to common questions about working with PodShot: marketing, shoots, packages, timelines and payments.',
};

export default function FaqPage() {
  return (
    <>
      <div className="inner_top_gap" />
      <PageBanner subtitle="FAQ" title="Simple answers to the questions clients ask us most." />
      {Object.entries(faqGroups).map(([key, g], i) => (
        <Faq key={key} id={`faq-${key}`} subtitle={g.title} title={g.title} items={g.items} border={i > 0} />
      ))}
      <Cta title="Still unsure?" message="Hi PodShot, I have a question that is not on your FAQ page." />
    </>
  );
}
