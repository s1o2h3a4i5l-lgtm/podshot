import { DigitalHero } from '@/components/sections/digital/DigitalSections';
import { ServiceRows } from '@/components/sections/service/ServiceSections';
import Cta from '@/components/sections/Cta';
import { groups, servicesIn, serviceHref } from '@/data/services-meta';
import { site } from '@/data/site';

export const metadata = {
  title: 'All Services | Digital Marketing, Design and Strategy in Pune',
  description: 'Every PodShot service in one place: digital marketing, direct marketing, design, video, content, strategy and analytics for Pune businesses.',
};

const TITLES = {
  digital: 'Get found and chosen online.',
  direct: 'Reach customers directly.',
  creative: 'Look and sound like a brand.',
  business: 'Plan, measure and grow.',
};

export default function ServicesPage() {
  return (
    <>
      <DigitalHero
        word="SERVICES"
        location="Wakad, Pune"
        text="Everything we do for Pune businesses, in one place. Pick one service or combine a few. Every plan starts with a free call."
        button={{ label: 'Book a free call', href: site.whatsapp }}
      />
      {Object.entries(groups).map(([key, g]) => (
        <ServiceRows
          key={key}
          subtitle={g.name}
          title={TITLES[key] || g.name}
          items={servicesIn(key).map((s) => ({ title: s.name, tags: s.tags, points: [s.blurb], href: serviceHref(s) }))}
        />
      ))}
      <Cta message="Hi PodShot, I would like to talk about your services." />
    </>
  );
}
