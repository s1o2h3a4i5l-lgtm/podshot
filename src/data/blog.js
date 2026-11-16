import { BASE_PATH } from '@/lib/basePath';

// Blog posts moved from podshot.in and rewritten in plain language.
// Body blocks: ['p', text] paragraph, ['h2', text] heading, ['ul', [items]] list, ['quote', text] pull quote.
export const posts = [
  {
    slug: 'best-digital-marketing-company-in-wakad-pune',
    title: 'How to choose a digital marketing company in Wakad, Pune',
    category: 'Marketing',
    date: '10 Nov 2026',
    author: 'PodShot Team',
    image: `${BASE_PATH}/images/blog/h1-blog-img-1.webp`,
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
  {
    slug: 'local-seo-guide-for-pune-businesses',
    title: '5 Google Maps optimizations every Pune business must do',
    category: 'SEO',
    date: '06 Nov 2026',
    author: 'PodShot Team',
    image: `${BASE_PATH}/images/blog/h1-blog-img-2.webp`,
    excerpt: 'From category selection to review velocity, here is the exact local SEO checklist to rank in Google Maps top 3 in Pune.',
    body: [
      ['p', 'When someone in Pune searches for a clinic, restaurant, interior designer, or service "near me", Google Maps decides who gets the phone call.'],
      ['p', 'A well-optimized Google Business Profile is the highest-ROI marketing channel for local businesses because searchers have immediate purchase intent.'],
      ['h2', '1. Claim and audit your primary category'],
      ['p', 'Your primary category holds the most ranking weight on Google Maps. Setting "Dental Clinic" instead of a vague "Clinic" or "Digital Marketing Agency" instead of "Corporate Office" can double your local search impressions in days.'],
      ['h2', '2. Build steady review velocity with relevant keywords'],
      ['p', 'It is not just about having 5 stars. Google actively values review recency and the specific services your happy clients mention in their reviews.'],
      ['quote', 'Local searchers have high intent. Ranking in the top 3 on Google Maps is digital prime real estate.'],
      ['h2', '3. High-resolution geotagged photos and weekly posts'],
      ['ul', ['Upload real interior, team, and work photos every week', 'Post weekly offers and updates to signal an active business to Google', 'Respond to every review within 24 hours with helpful context']],
      ['p', 'Need help getting your business to rank in Pune local search? Talk to our local SEO team in Wakad.'],
    ],
  },
  {
    slug: 'reels-and-short-video-strategy-local-brands',
    title: 'Why short-form reels outperform static ads for Pune brands',
    category: 'Social Media',
    date: '02 Nov 2026',
    author: 'PodShot Team',
    image: `${BASE_PATH}/images/blog/h1-blog-img-3.webp`,
    excerpt: 'Why high-production reels and founder stories build 3x more trust and lower ad acquisition costs compared to generic static graphics.',
    body: [
      ['p', 'Customers scroll past static graphics in less than a second. Real video content featuring actual products, founders, and behind-the-scenes processes stops the thumb.'],
      ['p', 'Social media algorithms on Instagram and Meta now heavily prioritize video completion rates, saves, and shares over standard image likes.'],
      ['h2', 'The shift to authentic video storytelling'],
      ['p', 'A 15-second educational reel explaining a common customer problem generates 4x more engagement than a promotional flyer. It positions you as an authority rather than an aggressive salesperson.'],
      ['h2', 'Combining shoot days with paid ad funnels'],
      ['p', 'When your video production team works directly with your ad managers, winning hooks are identified in days, and fresh ad creative variations are shot in the same week.'],
      ['quote', 'People buy from people they know and trust. Video is the fastest way to build that connection at scale.'],
      ['h2', 'How a monthly shoot day works'],
      ['ul', ['1 monthly planning session to map scripts and trending hooks', '1 half-day shoot at your location or our Wakad studio', '15–20 color-graded, captioned reels scheduled across the month']],
      ['p', 'Ready to turn video into actual leads? Chat with our production and marketing team.'],
    ],
  },
];

export const postHref = (p) => `/blog/${p.slug}`;
export const blogFilters = ['Marketing', 'SEO', 'Social Media'];
