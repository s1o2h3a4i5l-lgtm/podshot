import { ThreeBlocks, IconCards } from '@/components/sections/service/ServiceSections';
import { Timeline } from '@/components/sections/blog/BlogSections';
import { TeamCards } from '@/components/sections/home/HomeSections';
import CardsTestimonials from '@/components/sections/CardsTestimonials';
import Cta from '@/components/sections/Cta';
import { team, testimonials } from '@/data/people';
import { BASE_PATH } from '@/lib/basePath';

export const metadata = {
  title: 'About PodShot',
  description: 'PodShot is a creative and digital marketing agency in Wakad, Pune. One team for content, campaigns and growth.',
};

const GALLERY = [1, 2, 3, 4].map((n) => `${BASE_PATH}/images/about/about-gallery-${n}.webp`);

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
                  <h1 className="sec_title fs-230 tj-reveal-line tj-fade">PodShot</h1>
                  <h2 className="about_text uppercase tj-reveal-line tj-fade">
                    <span className="space">A creative</span> and digital marketing agency in Pune, <span>making content</span> and running campaigns that help local brands <span>grow.</span>
                  </h2>
                </div>
              </div>
              <div className="about_gallery_wrap">
                {GALLERY.map((src, i) => (
                  <div key={src} className={`about_gallery_item${i === 1 ? ' active' : ''}`}><img alt="" loading="lazy" width="612" height="588" src={src} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ThreeBlocks
        subtitle="Who we are"
        title="One team for your content, your campaigns and your growth."
        items={[
          { label: 'What we do', text: 'We run SEO, social media, Google and YouTube ads, Google Business Profiles and websites, and we shoot the photos and videos that go into all of them.', value: 7, suffix: '', counterLabel: 'Services under one roof' },
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
          { icon: 'tji-growth', title: 'Fair packages', text: 'Plans that work for startups and small businesses.' },
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
      <TeamCards text="A small team of marketers, editors, shooters and designers who work on your brand every week." subtitle="Meet the team" title="The people behind your growth" members={team} />
      <CardsTestimonials subtitle="Client feedback" title="What our clients say" items={testimonials} />
      <Cta />
    </>
  );
}
