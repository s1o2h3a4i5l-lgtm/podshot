import { ThreeBlocks, IconCards } from '@/components/sections/service/ServiceSections';
import { Timeline } from '@/components/sections/blog/BlogSections';
// import { TeamCards } from '@/components/sections/home/HomeSections';
import CardsTestimonials from '@/components/sections/CardsTestimonials';
import Cta from '@/components/sections/Cta';
import { testimonials /* , team */ } from '@/data/people';

export const metadata = {
  title: 'About PodShot Studio & Creative Agency',
  description: 'PodShot Studio & Creative Agency is a creative and digital marketing agency in Wakad, Pune. One team for content, campaigns and growth.',
};

export default function AboutPage() {
  return (
    <>
      <div className="inner_top_gap" />
      <section className="tj-about-section fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="section_heading d-flex flex-xl-nowrap flex-wrap justify-content-between container-space">
                <span className="sec_subtitle tj-fade">[ <span>About PodShot</span> ]</span>
                <div className="sec_right">
                  <h1 className="sec_title tj-reveal-line tj-fade">PodShot Studio &amp; Creative Agency</h1>
                  <h2 className="about_text uppercase tj-reveal-line tj-fade">
                    <span className="space">A creative</span> and digital marketing agency in Pune, <span>making content</span> and running campaigns that help local brands <span>grow.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ThreeBlocks
        subtitle="What we do"
        title="One team for your content, your campaigns and your growth."
        items={[
          { label: 'What we do', text: 'From SEO, social media, Google and YouTube ads to websites, custom software and photo or video production, we offer a full suite of digital and creative services under one roof.', value: 100, suffix: '%', counterLabel: 'Complete digital & creative solutions' },
          { label: 'How we work', text: 'Every client gets one account manager, a monthly plan and a plain-language report. You always know what we are doing and why.', value: 50, suffix: '+', counterLabel: 'Brands we work with' },
          { label: 'Where we are going', text: 'We want to be the team Pune businesses call first when they want to grow online, with work that speaks for itself.', value: 100, suffix: '+', counterLabel: 'Projects delivered' },
        ]}
      />
      <IconCards
        subtitle="Why choose us"
        title="What working with PodShot feels like."
        items={[
          { icon: 'tji-service-4', title: 'Latest equipment', text: 'Cinema cameras, pro lights and clean sound on every shoot.' },
          { icon: 'tji-collaboration', title: 'A friendly, skilled team', text: 'Marketers, editors and shooters who know your brand.' },
          { icon: 'tji-growth', title: 'Custom plans', text: 'Strategies that work for startups and small businesses.' },
          { icon: 'tji-work-life', title: 'Fast delivery', text: 'Edits and reports on time, every time.' },
        ]}
      />
      <Timeline
        subtitle="Our story"
        title="Timeline"
        text="From a small team in Wakad to a full digital marketing agency."
        items={[
          { year: '2023', title: 'It started in Wakad', text: 'PodShot opened its first space in Wakad, Pune, making content for local brands.' },
          { year: '2024', title: 'More brands, more content', text: 'We grew our content work, shooting reels and photos for a growing list of Pune brands.' },
          { year: '2025', title: 'A full marketing team', text: 'We added SEO, social media, Google and YouTube ads and websites, so clients could get content and campaigns from one team.' },
          { year: '2026', title: 'Two brands, one name', text: 'PodShot Studio now handles podcast studio rentals, and PodShot focuses on digital marketing for brands.' },
        ]}
      />
      {/* <TeamCards text="A small team of marketers, editors, shooters and designers who work on your brand every week." subtitle="Meet the team" title="The people behind your growth" members={team} /> */}
      <CardsTestimonials subtitle="Client feedback" title="What our clients say" items={testimonials} />
      <Cta />
    </>
  );
}
