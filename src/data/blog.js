import { BASE_PATH } from '@/lib/basePath';
// Blog posts moved from podshot.in and rewritten in plain language.
// Body blocks: ['p', text] paragraph, ['h2', text] heading, ['ul', [items]] list, ['quote', text] pull quote.
export const posts = [
  {
    slug: 'best-digital-marketing-company-in-wakad-pune',
    title: 'How to choose a digital marketing company in Wakad, Pune',
    category: 'Marketing',
    date: '20 Jan 2026',
    author: 'PodShot Team',
    image: `${BASE_PATH}/images/blog/h1-blog-img-2.webp`,
    excerpt: 'Wakad is busy and competitive online. Here is what a good marketing partner should do for a local business, and what to watch out for.',
    body: [
      ['p', 'Wakad has grown fast. Startups, IT firms, clinics, cafes and service businesses all compete for the same local customers, and most of that competition happens on Google and Instagram.'],
      ['p', 'Posting now and then is not enough anymore. You need a partner who understands how people in your area search and buy.'],
      ['h2', 'What a good agency does'],
      ['ul', ['Starts with your goals and your customers, not with posts or ads', 'Does SEO properly, with no shortcuts', 'Runs ads that bring leads and sales, not just likes', 'Makes content that actually looks good', 'Shows you clear reports in plain language']],
      ['h2', 'Why content and marketing belong together'],
      ['p', 'Most agencies either make content or run campaigns. When one team does both, the ads improve faster, because the people who see the results can shoot new videos the same week.'],
      ['h2', 'Services that matter most for local businesses'],
      ['ul', ['SEO and Google Business Profile, so people nearby find you', 'Google and Meta ads that are tracked down to each lead', 'Social media with a monthly plan, not random posts', 'Reels, product shoots and short videos made for each platform']],
      ['quote', 'Traffic is nice. Enquiries pay the bills. A good agency focuses on the second.'],
      ['h2', 'Questions to ask before you sign'],
      ['ul', ['How will you measure results for my business?', 'Who will I talk to every week?', 'Can I see work you did for businesses like mine?', 'What happens in the first 30 days?']],
      ['p', 'If you are looking for a team in Wakad that can handle your marketing and your content together, we would be happy to talk.'],
    ],
  },
];

export const postHref = (p) => `/blog/${p.slug}`;
export const blogFilters = ['Marketing'];
