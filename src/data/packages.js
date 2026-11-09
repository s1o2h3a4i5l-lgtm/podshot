import { whatsappLink } from './site';

const book = (name) => whatsappLink(`Hi PodShot, I am interested in the ${name}. Can we talk?`);

// SAMPLE CONTENT: marketing package names, prices and inclusions are placeholders. Set real ones before launch.
export const marketingPlans = [
  {
    name: 'Starter plan',
    desc: 'For local businesses getting serious about social media and Google.',
    price: '15,000', period: '/MO', altPrice: '42,000', altPeriod: '/3 MO', labels: ['Monthly', 'Quarterly'],
    href: book('Starter marketing plan'), button: 'Choose Starter',
    features: [
      { label: '12 posts a month, including 4 reels' },
      { label: 'Google Business Profile upkeep', tip: 'Weekly posts, photo updates and review replies.' },
      { label: 'Captions, hashtags and scheduling' },
      { label: 'Monthly performance report' },
      { label: 'WhatsApp support on working days' },
    ],
  },
  {
    name: 'Growth plan',
    desc: 'Content plus ads, for brands that want steady enquiries.',
    price: '30,000', period: '/MO', altPrice: '84,000', altPeriod: '/3 MO', labels: ['Monthly', 'Quarterly'],
    popular: true, dark: true, href: book('Growth marketing plan'), button: 'Choose Growth',
    features: [
      { label: '16 posts a month, including 8 reels' },
      { label: 'One shoot day every month' },
      { label: 'Google or Meta ads management', tip: 'Ad spend is paid by you directly to Google or Meta.' },
      { label: 'SEO for up to 10 keywords' },
      { label: 'Monthly strategy call and report' },
    ],
  },
  {
    name: 'Scale plan',
    desc: 'Full marketing team for brands ready to grow fast.',
    price: '55,000', period: '/MO', altPrice: '1,55,000', altPeriod: '/3 MO', labels: ['Monthly', 'Quarterly'],
    href: book('Scale marketing plan'), button: 'Choose Scale',
    features: [
      { label: 'Social media, reels and community care' },
      { label: 'Two shoot days every month' },
      { label: 'Google and Meta ads, tested weekly' },
      { label: 'SEO for up to 25 keywords plus 2 blogs' },
      { label: 'One landing page a quarter', tip: 'Built for your ad campaigns.' },
      { label: 'Weekly check-in call' },
    ],
  },
];
