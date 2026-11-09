import Link from 'next/link';
import FlipText from '@/components/ui/FlipText';
import { whatsappLink } from '@/data/site';
import { BASE_PATH } from '@/lib/basePath';

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
                <a className="tj_user_profile flip-text-wrap" href={whatsappLink(message)} target="_blank" rel="noreferrer">
                  <div className="avatar">
                    <img alt="" loading="lazy" width="96" height="96" src={`${BASE_PATH}/images/users/h1-hero-user-img.png`} />
                  </div>
                  <div className="name flip-text"><FlipText>{primary}</FlipText></div>
                </a>
                <Link className="tj_bordered_btn flip-text-wrap" href="/contact">
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
