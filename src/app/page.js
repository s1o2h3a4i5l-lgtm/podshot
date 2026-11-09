import { Hero, Showreel, About, Features, Process, ProjectShowcase, ServicesList, TeamCards, ClientStrip, BlogTeaser } from '@/components/sections/home/HomeSections';
import TestimonialSlider from '@/components/sections/home/TestimonialSlider';
import Cta from '@/components/sections/Cta';
import { projects } from '@/data/projects';
import { testimonials, team } from '@/data/people';
import { posts } from '@/data/blog';
import { site } from '@/data/site';

export const metadata = {
  title: { absolute: 'PodShot | Digital Marketing in Pune' },
  description: 'We create the content and run the campaigns that grow Pune brands. SEO, social media, Google and YouTube ads and websites from one team in Wakad.',
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Digital growth for modern brands"
        location="Based in Wakad, Pune"
        text="We plan, shoot and run your marketing in one place. Better content, smarter ads and more people finding you on Google."
        primary={{ label: 'Get a free audit', href: site.whatsapp }}
        secondary={{ label: 'See our work', href: '/work' }}
      />
      <Showreel />
      <About
        subtitle="About PodShot"
        title="We make the content and run the campaigns, so your brand looks good and actually grows."
        text="Most businesses juggle a designer, a video person and an ads freelancer. We bring all of it under one roof in Wakad, with one team that knows your brand."
        button={{ label: 'More about us', href: '/about' }}
        trustedCount="50+"
        trustedText="Pune brands trust us with their marketing."
      />
      <Features
        items={[
          { value: 100, suffix: '+', label: 'Projects delivered.', lines: ['ads, shoots', 'and campaigns', 'for local brands'] },
          { value: 3, suffix: '+', label: 'Years in Pune.', lines: ['one team for', 'content and', 'marketing'] },
        ]}
      />
      <Process
        subtitle="How we work"
        title="Our simple process."
        steps={[
          { title: 'Audit and plan', text: 'We look at where your customers come from today, what your competitors do and where the quick wins are. Then we agree on clear goals.', tags: ['Free audit', 'Goals', 'Monthly plan'] },
          { title: 'Create the content', text: 'Our team writes, shoots and edits everything: reels, product photos, ads and website pages, all in your brand style.', tags: ['Scripts', 'Shoots', 'Edits'] },
          { title: 'Run, measure, improve', text: 'We publish, run the ads and track every lead. Each month you get a simple report and a plan for what to do next.', tags: ['Ads', 'Reports', 'Growth'] },
        ]}
      />
      <ProjectShowcase
        subtitle="Our work in action"
        titleLead="Real"
        title="campaigns, shoots and results"
        projects={projects.slice(0, 4)}
        button={{ label: 'See all our work', href: '/work' }}
      />
      <ServicesList
        subtitle="What we do"
        title="Everything your brand needs to grow"
        text="SEO, social media, ads and websites that bring you customers, plus the content that makes them worth watching. Pick one service or let us handle all of it."
        button={{ label: 'View all services', href: '/digital-marketing' }}
      />
      <TeamCards
        text="A small team of marketers, editors, shooters and designers who work on your brand every week."
        subtitle="Meet the team"
        title="The people behind your growth"
        button={{ label: 'More about us', href: '/about' }}
        members={team}
      />
      <TestimonialSlider subtitle="What our clients say" items={testimonials} />
      <ClientStrip subtitle="Brands we work with" />
      <BlogTeaser
        subtitle="Ideas and tips"
        title="Marketing tips for local brands"
        text="Simple, practical advice on SEO, ads, social media and content, written for business owners, not marketers."
        button={{ label: 'Read the blog', href: '/blog' }}
        posts={posts.slice(0, 3)}
      />
      <Cta />
    </>
  );
}
