import { BASE_PATH } from '@/lib/basePath';
// SAMPLE CONTENT: these case studies are written as realistic examples so the layout can be reviewed.
// Replace every project with real client work (and real numbers) before the site goes live.
export const projects = [
  {
    slug: 'skin-clinic-google-ads',
    title: 'More patient calls for a skin clinic',
    client: 'A skin and hair clinic in Wakad',
    category: 'Campaigns',
    services: ['Google Ads', 'Landing page'],
    year: '2025',
    image: `${BASE_PATH}/images/projects/h1-project-img-1.webp`,
    summary: 'Search ads and a simple landing page that turned clicks into booked consultations.',
    brief: 'The clinic was spending on ads but most clicks came from people outside Pune or looking for free advice. Calls were few and hard to track.',
    steps: [
      { title: 'Audit', text: 'We checked their old campaigns, search terms and call tracking.' },
      { title: 'Rebuild', text: 'New campaigns by treatment, with tight local targeting.' },
      { title: 'Landing page', text: 'One fast page per treatment with a clear call button.' },
      { title: 'Tune weekly', text: 'Cut weak keywords and moved budget to what worked.' },
    ],
    results: [
      { value: 2, suffix: 'x', label: 'Consultation calls', text: 'In the first three months.' },
      { value: 38, suffix: '%', label: 'Lower cost per lead', text: 'Compared with their old setup.' },
      { value: 90, suffix: '%', label: 'Calls from Pune', text: 'Up from about half before.' },
    ],
    quote: { text: 'We finally know which ads bring patients. The calls are better and we are spending less.', name: 'Clinic owner', role: 'Wakad' },
    conclusion: 'Good ads start with tracking. Once we could see which searches turned into calls, growing the clinic became a matter of putting money in the right place.',
  },
  {
    slug: 'cafe-instagram-reels',
    title: 'Reels that filled a cafe on weekends',
    client: 'A cafe in Hinjewadi',
    category: 'Social media',
    services: ['Social Media Marketing', 'Reels'],
    year: '2025',
    image: `${BASE_PATH}/images/projects/h1-project-img-2.webp`,
    summary: 'A month of planned reels and stories that gave people a reason to visit.',
    brief: 'The cafe had good food and a nice space, but the Instagram page was quiet and posts went out at random.',
    steps: [
      { title: 'Plan', text: 'A monthly calendar built around menu launches and events.' },
      { title: 'Shoot', text: 'One shoot day a month for all reels and photos.' },
      { title: 'Post', text: 'Reels at the times their audience was online.' },
      { title: 'Engage', text: 'Replies, collaborations with local food pages, and offers.' },
    ],
    results: [
      { value: 4, suffix: 'x', label: 'Reel views', text: 'Average per reel after two months.' },
      { value: 1200, suffix: '+', label: 'New followers', text: 'Mostly from Pune.' },
      { value: 30, suffix: '%', label: 'More weekend orders', text: 'As reported by the owner.' },
    ],
    quote: { text: 'People walk in and tell us they saw our reel. That never happened before.', name: 'Cafe owner', role: 'Hinjewadi' },
    conclusion: 'A simple plan and one good shoot day a month did more than daily random posting ever did.',
  },
  {
    slug: 'coaching-institute-website',
    title: 'A new website for a coaching institute',
    client: 'A coaching institute in Pune',
    category: 'Websites',
    services: ['Website Development', 'SEO'],
    year: '2026',
    image: `${BASE_PATH}/images/projects/h1-project-img-5.webp`,
    summary: 'A fast, mobile-first site with course pages and an enquiry form.',
    brief: 'The old site was slow, hard to use on phones and did not show up on Google for course searches.',
    steps: [
      { title: 'Plan', text: 'Mapped every course and the questions parents ask.' },
      { title: 'Design', text: 'A clean layout made for phones first.' },
      { title: 'Build', text: 'Fast pages, simple forms and WhatsApp buttons.' },
      { title: 'Rank', text: 'SEO basics on every page from day one.' },
    ],
    results: [
      { value: 1.2, suffix: 's', label: 'Page load time', text: 'Down from over 6 seconds.' },
      { value: 70, suffix: '%', label: 'More enquiries', text: 'In the first two months.' },
      { value: 12, suffix: '', label: 'Course pages ranking', text: 'On Google page one in Pune.' },
    ],
    quote: { text: 'Parents now find us on Google and fill the form from their phones. It just works.', name: 'Director', role: 'Coaching institute' },
    conclusion: 'A website does not need to be complicated. It needs to be fast, clear and easy to act on.',
  },
  {
    slug: 'salon-google-maps',
    title: 'Google Maps top 3 for a salon',
    client: 'A salon and spa in Wakad',
    category: 'Local SEO',
    services: ['Local SEO and Google Business Profile'],
    year: '2025',
    image: `${BASE_PATH}/images/projects/h3-project-1.webp`,
    summary: 'A cleaned-up Google profile, regular posts and a review plan.',
    brief: 'The salon was hard to find on Google Maps, even for people standing a few streets away.',
    steps: [
      { title: 'Fix', text: 'Categories, services, hours and photos corrected.' },
      { title: 'Post', text: 'Weekly posts with offers and new looks.' },
      { title: 'Reviews', text: 'A simple way for happy clients to leave reviews.' },
      { title: 'Track', text: 'Monthly reports on calls, visits and directions.' },
    ],
    results: [
      { value: 3, suffix: '', label: 'Map Pack position', text: 'For "salon in Wakad".' },
      { value: 140, suffix: '+', label: 'New reviews', text: 'In six months.' },
      { value: 2, suffix: 'x', label: 'Direction requests', text: 'Compared with before.' },
    ],
    quote: { text: 'New clients tell us they found us on Google Maps. Our bookings are steady now.', name: 'Salon owner', role: 'Wakad' },
    conclusion: 'For a local business, a well-kept Google profile is often the best marketing money can buy.',
  },
];

export const projectHref = (p) => `/work/${p.slug}`;
export const workFilters = ['Campaigns', 'Social media', 'Websites', 'Local SEO'];
