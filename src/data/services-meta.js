// The single list of services. Menus, hubs, the homepage list, the footer and the contact form all read from here.
// To add a service: add an entry here, then add its page content in src/data/services/.
export const groups = {
  digital: { name: 'Digital Marketing', short: 'Marketing', href: '/digital-marketing' },
};

export const services = [
  { slug: 'social-media-marketing-agency-in-pune', name: 'Social Media Marketing', short: 'Social Media', group: 'digital', flagship: true, icon: 'tji-service-1', tags: ['Strategy', 'Reels', 'Growth'], blurb: 'Posts and reels people stop for, plus the planning that keeps your pages growing.' },
  { slug: 'seo-company-in-pune', name: 'SEO', short: 'SEO', group: 'digital', flagship: true, icon: 'tji-service-2', tags: ['Rankings', 'Content', 'Technical'], blurb: 'Show up on Google when people in Pune search for what you sell.' },
  { slug: 'local-seo-services-in-pune-gmb', name: 'Local SEO and Google Business Profile', short: 'Local SEO / GMB', group: 'digital', icon: 'tji-location', tags: ['Maps', 'Reviews', 'Calls'], blurb: 'Rank in the Google Maps top 3 and get more calls, visits and directions.' },
  { slug: 'google-ads-agency-in-pune', name: 'Google Ads', short: 'Google Ads', group: 'digital', icon: 'tji-google', tags: ['Search', 'Leads', 'ROI'], blurb: 'Ads that reach people who are ready to buy, with every rupee tracked.' },
  { slug: 'best-youtube-advertising-agency-in-pune', name: 'YouTube Ads', short: 'YouTube Ads', group: 'digital', icon: 'tji-youtube', tags: ['Video', 'Reach', 'Retargeting'], blurb: 'We shoot the video ad and run it, so the story and the targeting work together.' },
  { slug: 'top-ai-agency-in-pune', name: 'AI Content Creation', short: 'AI Content', group: 'digital', icon: 'tji-virtual-labs', tags: ['AI images', 'AI video', 'Editing'], blurb: 'AI images and videos, finished by human editors so they look real and on brand.' },
  { slug: 'website-development-company-in-pune', name: 'Website Development', short: 'Websites', group: 'digital', flagship: true, icon: 'tji-service-3', tags: ['Design', 'Build', 'SEO ready'], blurb: 'Fast, mobile-first websites that turn visitors into enquiries.' },
];

export const servicesIn = (group) => services.filter((s) => s.group === group);
export const serviceHref = (s) => `/services/${s.slug}`;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Marketing', href: groups.digital.href, submenu: [{ label: 'All marketing services', href: groups.digital.href }, ...servicesIn('digital').map((s) => ({ label: s.short, href: serviceHref(s) }))] },
  { label: 'Work', href: '/work' },
  { label: 'Packages', href: '/packages' },
  { label: 'Company', href: '/about', submenu: [{ label: 'About us', href: '/about' }, { label: 'Blog', href: '/blog' }, { label: 'FAQ', href: '/faq' }, { label: 'Become a creator', href: '/creators' }] },
  { label: 'Contact', href: '/contact' },
];
