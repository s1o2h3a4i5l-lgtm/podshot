// The single list of services. Menus, hubs, the homepage list, the footer and the contact form all read from here.
// To add a service: add an entry here, then add its page content in src/data/services/.
// `home: false` keeps a group off the homepage services list (it still shows in the menu, the
// /services hub and the contact form).
export const groups = {
  digital: { name: 'Digital Marketing', short: 'Digital Marketing', href: '/digital-marketing' },
  direct: { name: 'Direct Marketing', short: 'Direct', href: '/services', home: false },
  creative: { name: 'Design and Content', short: 'Design', href: '/services', home: false },
  business: { name: 'Strategy and Data', short: 'Strategy', href: '/services', home: false },
};

export const services = [
  { slug: 'social-media-marketing-agency-in-pune', name: 'Social Media Marketing', short: 'Social Media', group: 'digital', flagship: true, icon: 'tji-service-1', tags: ['Strategy', 'Reels', 'Growth'], blurb: 'Posts and reels people stop for, plus the planning that keeps your pages growing.' },
  { slug: 'seo-company-in-pune', name: 'SEO', short: 'SEO', group: 'digital', flagship: true, icon: 'tji-service-2', tags: ['Rankings', 'Content', 'Technical'], blurb: 'Show up on Google when people in Pune search for what you sell.' },
  { slug: 'local-seo-services-in-pune-gmb', name: 'Local SEO', short: 'Local SEO', group: 'digital', icon: 'tji-location', tags: ['Maps', 'Reviews', 'Calls'], blurb: 'Rank in the Google Maps top 3 and get more calls, visits and directions.' },
  { slug: 'google-ads-agency-in-pune', name: 'Google Ads', short: 'Google Ads', group: 'digital', icon: 'tji-google', tags: ['Search', 'Leads', 'ROI'], blurb: 'Ads that reach people who are ready to buy, with every rupee tracked.' },
  { slug: 'best-youtube-advertising-agency-in-pune', name: 'YouTube Ads', short: 'YouTube Ads', group: 'digital', icon: 'tji-youtube', tags: ['Video', 'Reach', 'Retargeting'], blurb: 'We shoot the video ad and run it, so the story and the targeting work together.' },
  { slug: 'top-ai-agency-in-pune', name: 'AI Content Creation', short: 'AI Content', group: 'digital', icon: 'tji-virtual-labs', tags: ['AI images', 'AI video', 'Editing'], blurb: 'AI images and videos, finished by human editors so they look real and on brand.' },
  { slug: 'website-development-company-in-pune', name: 'Website Development', short: 'Websites', group: 'digital', flagship: true, icon: 'tji-service-3', tags: ['Design', 'Build', 'SEO ready'], blurb: 'Fast, mobile-first websites that turn visitors into enquiries.' },

  { slug: 'email-marketing-services-in-pune', name: 'Email Marketing', short: 'Email Marketing', group: 'direct', icon: 'tji-chat', tags: ['Newsletters', 'Automation', 'Lists'], blurb: 'Emails your customers actually open, plus automated follow-ups that bring them back.' },
  { slug: 'whatsapp-marketing-services-in-pune', name: 'WhatsApp Marketing', short: 'WhatsApp', group: 'direct', icon: 'tji-whatsapp', tags: ['Broadcasts', 'Offers', 'Replies'], blurb: 'Offers, updates and reminders sent straight to the app your customers check most.' },
  { slug: 'bulk-sms-services-in-pune', name: 'Bulk SMS', short: 'Bulk SMS', group: 'direct', icon: 'tji-signal', tags: ['Promotions', 'Alerts', 'Reminders'], blurb: 'Short text messages that reach every phone, for offers, reminders and alerts.' },
  { slug: 'display-advertising-services-in-pune', name: 'Display Advertising', short: 'Display Ads', group: 'direct', icon: 'tji-globe', tags: ['Banners', 'Retargeting', 'Reach'], blurb: 'Banner and video ads across websites, apps and YouTube, aimed at the right people.' },
  { slug: 'app-store-optimization-services-in-pune', name: 'App Store Optimization', short: 'App Store (ASO)', group: 'direct', icon: 'tji-apple', tags: ['Play Store', 'App Store', 'Downloads'], blurb: 'Help people find your app in the Play Store and App Store, and choose to install it.' },

  { slug: 'logo-and-branding-services-in-pune', name: 'Logo and Branding', short: 'Logo and Branding', group: 'creative', icon: 'tji-star', tags: ['Logo', 'Identity', 'Guidelines'], blurb: 'A logo and brand look that people remember, with the files to use it everywhere.' },
  { slug: 'graphic-design-services-in-pune', name: 'Graphic Design', short: 'Graphic Design', group: 'creative', icon: 'tji-creative', tags: ['Social', 'Print', 'Packaging'], blurb: 'Posts, flyers, brochures and packaging designed to match your brand.' },
  { slug: 'video-production-services-in-pune', name: 'Video Production', short: 'Video Production', group: 'creative', icon: 'tji-play', tags: ['Brand films', 'Product', 'Explainers'], blurb: 'Brand films, product videos and explainers, scripted, shot and edited by one team.' },
  { slug: 'content-writing-services-in-pune', name: 'Content Writing', short: 'Content Writing', group: 'creative', icon: 'tji-quote', tags: ['Website copy', 'Blogs', 'Scripts'], blurb: 'Website pages, blogs and scripts written in plain words that sell.' },

  { slug: 'digital-strategy-services-in-pune', name: 'Digital Strategy', short: 'Digital Strategy', group: 'business', icon: 'tji-growth', tags: ['Goals', 'Channels', 'Roadmap'], blurb: 'A clear plan for where to spend your marketing time and money, and why.' },
  { slug: 'data-analytics-services-in-pune', name: 'Data Analytics', short: 'Data Analytics', group: 'business', icon: 'tji-service-4', tags: ['Tracking', 'Dashboards', 'Insights'], blurb: 'Tracking and dashboards that show what is working, in numbers you can act on.' },
  { slug: 'business-consulting-services-in-pune', name: 'Business Consulting', short: 'Business Consulting', group: 'business', icon: 'tji-collaboration', tags: ['Growth', 'Offers', 'Process'], blurb: 'An outside view on your offers, pricing and processes, with practical next steps.' },
];

export const servicesIn = (group) => services.filter((s) => s.group === group);
export const serviceHref = (s) => `/services/${s.slug}`;

const MORE = ['direct', 'creative', 'business'];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Digital Marketing', href: groups.digital.href, submenu: [...servicesIn('digital').map((s) => ({ label: s.short, href: serviceHref(s) })), { label: 'All digital marketing', href: groups.digital.href }] },
  { label: 'More Services', href: '/services', submenu: [...MORE.flatMap((g) => servicesIn(g)).map((s) => ({ label: s.short, href: serviceHref(s) })), { label: 'All services', href: '/services' }] },
  { label: 'Programs', href: '/programs' },
  { label: 'Work', href: '/work' },
  { label: 'Company', href: '/about', submenu: [{ label: 'About us', href: '/about' }, { label: 'Blog', href: '/blog' }, { label: 'FAQ', href: '/faq' }] },
  { label: 'Contact', href: '/contact' },
];
