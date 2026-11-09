import { site } from '@/data/site';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How PodShot collects, uses and protects the information you share with us.',
};

// SAMPLE CONTENT: a plain-language starting point. Have it checked before launch.
const sections = [
  ['1. Who we are', [`${site.legalName} ("PodShot", "we") runs this website and offers digital marketing services from ${site.city}.`]],
  ['2. What we collect', ['When you fill a form, message us on WhatsApp, email or call us, we may collect your name, phone number, email address, business name and anything you choose to tell us about your project.', 'Like most websites, we may also collect basic, anonymous data such as pages visited, device type and approximate location, to understand how the site is used.']],
  ['3. How we use it', ['To reply to your enquiry and send you quotes.', 'To deliver the work you hire us for.', 'To send occasional updates or tips, only if you asked for them. You can unsubscribe any time.', 'To improve our website and services.']],
  ['4. Who we share it with', ['We never sell your information. We only share it with tools and partners we need to do our work, such as WhatsApp, email and analytics providers, or when the law requires it.']],
  ['5. How long we keep it', ['We keep your details only as long as we need them for the purposes above, or as required by law.']],
  ['6. Your choices', ['You can ask us to see, correct or delete the information we hold about you. Just email us and we will reply within a reasonable time.']],
  ['7. Contact', [`Questions about this policy? Email ${site.email} or call ${site.phone}.`]],
];

export default function PrivacyPage() {
  return (
    <section className="tj-policy-privacy container-space">
      <div className="inner_top_gap" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="section_heading">
              <span className="sec_subtitle tj-fade">[ <span>Last updated November 2026</span> ]</span>
              <h1 className="sec_title fs-120 tj-reveal-line">Privacy policy</h1>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tj-policy-privacy-body">
              {sections.map(([title, paras], i) => (
                <div key={title}>
                  {i > 0 && <hr className="tj-fade" />}
                  <h2 className="tj-fade tj-fz-h4">{title}</h2>
                  {paras.map((p) => <p key={p} className="tj-fade">{p}</p>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
