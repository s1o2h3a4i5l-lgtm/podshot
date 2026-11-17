import { ServiceCards } from '@/components/sections/digital/DigitalSections';
import Cta from '@/components/sections/Cta';
import { IconButton } from '@/components/ui/Buttons';
import { site } from '@/data/site';
import { programs } from '@/data/programs';

export const metadata = {
  title: 'Programs — Business Software by PodShot',
  description: 'Ready-to-use software for bookings, clinics, salons, lead management and laundry businesses. Built for Indian businesses, backed by PodShot.',
};

function ProgramsHero() {
  return (
    <section className="ps-programs-hero container-space fix">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between g-5">
          <div className="col-12 col-lg-6">
            <div className="ps-programs-hero-inner">
              <span className="sec_subtitle tj-fade">[ <span>Software & Systems</span> ]</span>
              <h1 className="ps-programs-title title-anim">Programs</h1>
              <p className="ps-programs-desc fs-18 tj-fade" data-delay="0.2">
                Ready-to-use software engines that automate your daily operations so you can focus on servicing your clients.
              </p>
              <div className="ps-programs-hero-actions tj-fade" data-delay="0.3">
                <IconButton href={site.whatsapp}>Talk to our team</IconButton>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="ps-programs-card tj-fade" data-direction="left" data-delay="0.25">
              <div className="ps-programs-card-head">
                <span className="card-badge">[ <span>0{programs.length} Turnkey Systems</span> ]</span>
                <span className="card-status"><span className="pulse-dot" /> Live &amp; Ready</span>
              </div>
              <div className="ps-programs-card-list">
                {programs.map((p, idx) => (
                  <a
                    key={p.slug}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ps-programs-card-row"
                  >
                    <div className="row-left">
                      <span className="row-num">0{idx + 1}.</span>
                      <div className="row-info">
                        <h3 className="row-title">{p.title}</h3>
                        <span className="row-tags">{p.tags.join(' · ')}</span>
                      </div>
                    </div>
                    <div className="row-action">
                      <i className="tji-arrow-up-right" />
                    </div>
                  </a>
                ))}
              </div>
              <div className="ps-programs-card-foot">
                <span>WhatsApp automated</span>
                <span>·</span>
                <span>Zero setup wait</span>
                <span>·</span>
                <span>Direct support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ServiceCards
        subtitle="Our software"
        title="SOFTWARE ENGINES BUILT FOR DAILY OPERATIONS."
        text="Battle-tested in real businesses and ready to launch without months of custom development. Explore each system below or open its live landing page."
        items={programs.map((p) => ({
          title: p.title,
          text: p.blurb,
          tags: p.tags,
          icon: p.icon,
          href: p.url,
        }))}
      />
      <Cta title="Need a custom build?" message="Hi PodShot, I want to know more about your software programs." />
    </>
  );
}
