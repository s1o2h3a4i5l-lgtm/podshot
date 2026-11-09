import { Spline_Sans, Bricolage_Grotesque } from 'next/font/google';
import '@/styles/agina/bootstrap.css';
import '@/styles/agina/vendors.css';
import '@/styles/agina/agina-main.css';
import './globals.css';
import Preloader from '@/components/shell/Preloader';
import Cursor from '@/components/shell/Cursor';
import Header from '@/components/shell/Header';
import Footer from '@/components/shell/Footer';
import Effects from '@/components/shell/Effects';
import { site } from '@/data/site';

const body = Spline_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const heading = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://www.podshot.in'),
  title: { default: 'PodShot | Digital Marketing in Pune', template: '%s | PodShot' },
  description: 'PodShot is a digital marketing agency in Wakad, Pune. SEO, social media, ads and websites, done by one team.',
  icons: { icon: site.logo },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body>
        <Preloader />
        <Cursor />
        <Header />
        <div className="has-smooth" id="has_smooth">
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </div>
        <Effects />
      </body>
    </html>
  );
}
