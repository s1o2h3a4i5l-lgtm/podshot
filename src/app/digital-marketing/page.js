import { DigitalHero, AboutCounters, MarqueeBand, ServiceCards, ListRows, PortfolioList, PricingSection, BlogSticky } from '@/components/sections/digital/DigitalSections';
import CardsTestimonials from '@/components/sections/CardsTestimonials';
import Cta from '@/components/sections/Cta';
import { servicesIn } from '@/data/services-meta';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/people';
import { marketingPlans } from '@/data/packages';
import { posts } from '@/data/blog';
import { site } from '@/data/site';

export const metadata = {
  title: 'Digital Marketing Agency in Pune',
  description: 'SEO, social media, Google Business Profile, Google Ads, YouTube Ads, AI content and websites for Pune businesses. One team that also shoots your content.',
};

export default function DigitalMarketingPage() {
  const marketingPosts = posts.filter((p) => p.category === 'Marketing').concat(posts.filter((p) => p.category !== 'Marketing')).slice(0, 4);
  return (
    <>
      <DigitalHero
        word="DIGITAL"
        location="Wakad, Pune"
        text="Marketing that brings Pune businesses real customers. SEO, ads, social media and websites, run by the same team that makes your content."
        button={{ label: 'Get a free audit', href: site.whatsapp }}
      />
      <AboutCounters
        subtitle="Why PodShot"
        title="We shoot the content and run the ads,"
        highlight="[under one roof]"
        titleEnd="so your marketing gets better every month."
        person={{ name: 'PodShot Team', role: 'Wakad, Pune' }}
        counter={{ value: 3, suffix: '+' }}
        counterText="Years helping Pune brands grow online."
        text="Most agencies either make content or run campaigns. We do both. When an ad works, our editors make more like it the same week. When it does not, we change it fast."
        button={{ label: 'How we work', href: '/about' }}
      />
      <MarqueeBand words={['Social', 'SEO', 'Google Ads', 'YouTube', 'AI content', 'Websites', 'Local SEO']} />
      <ServiceCards
        subtitle="Our marketing services"
        title="Seven ways we help you get found and chosen."
        text="Pick one service or combine them. Every plan starts with a free audit, so we only suggest what your business actually needs."
        button={{ label: 'See packages', href: '/packages' }}
        items={servicesIn('digital')}
      />
      <ListRows
        subtitle="Where we work"
        title="Platforms we run for you."
        button={{ label: 'Book a free audit', href: site.whatsapp }}
        items={[
          { title: 'Google Search', label: 'SEO and search ads' },
          { title: 'Google Maps', label: 'Business profile and reviews' },
          { title: 'Instagram and Facebook', label: 'Content and Meta ads' },
          { title: 'YouTube', label: 'Video ads and Shorts' },
          { title: 'Your website', label: 'Design, speed and leads' },
          { title: 'WhatsApp', label: 'Enquiries and follow-ups' },
        ]}
      />
      <PortfolioList subtitle="Recent results" title="Our work" button={{ label: 'See all work', href: '/work' }} items={projects.filter((p) => ['Campaigns', 'Social media', 'Websites', 'Local SEO'].includes(p.category)).slice(0, 4)} />
      <PricingSection subtitle="Simple packages" title="Plans for every stage of growth" button={{ label: 'All packages', href: '/packages' }} plans={marketingPlans.slice(0, 2)} />
      <CardsTestimonials subtitle="Client feedback" title="What business owners tell us" items={testimonials} />
      <BlogSticky subtitle="From the blog" title="Marketing tips you can use today" button={{ label: 'Read the blog', href: '/blog' }} posts={marketingPosts} />
      <Cta title="Let’s grow!" message="Hi PodShot, I would like a free marketing audit." />
    </>
  );
}
