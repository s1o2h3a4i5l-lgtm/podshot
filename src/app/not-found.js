import { IconButton } from '@/components/ui/Buttons';
import Cta from '@/components/sections/Cta';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <>
      <div className="inner_top_gap" />
      <section className="tj-error-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tj-error-wrap text-center">
                <div className="tj-error-content">
                  <div className="error-img"><img alt="404" width="1016" height="420" style={{ height: 'auto' }} src="/images/404/error.webp" /></div>
                  <h1 className="error-title tj-split-text-1">Oops! Wrong take.</h1>
                  <div className="error-desc">This page does not exist or has moved. Let&apos;s get you back on track.</div>
                  <IconButton href="/" className="error-btn">Back to the homepage</IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
