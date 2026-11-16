import Link from 'next/link';
import FlipText from '@/components/ui/FlipText';
import { UserButton } from '@/components/ui/Buttons';
import { whatsappLink } from '@/data/site';

export default function Cta({ title = 'Let’s talk!', primary = 'Chat on WhatsApp', secondary = 'Send us a brief', message = 'Hi PodShot, I would like to talk about my brand.' }) {
  return (
    <section className="h1-cta-section container-space fix">
      <div className="bg_image" style={{ backgroundImage: 'url(/gif/h1-bg.gif)' }} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_cta_wrapper">
              <h2 className="cta_title fs-120 tj-reveal-line">{title}</h2>
              <div className="cta_buttons d-inline-flex flex-wrap tj-fade" data-direction="right">
                <UserButton href={whatsappLink(message)}>{primary}</UserButton>
                <Link className="tj_bordered_btn flip-text-wrap" href="/contact#contact-form">
                  <span className="flip-text"><FlipText>{secondary}</FlipText></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
