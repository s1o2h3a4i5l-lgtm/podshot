import { projects, projectHref } from '../projects';
import { BASE_PATH } from '@/lib/basePath';

const related = (cats) => projects.filter((p) => cats.includes(p.category)).concat(projects).slice(0, 4)
  .map((p) => ({ title: p.title, category: p.category, year: p.year, image: p.image, href: projectHref(p) }));

// Page content for the 7 digital marketing services. H1s are kept from podshot.in for search.
export const digital = {
  'social-media-marketing-agency-in-pune': {
    seoTitle: 'Social Media Marketing Agency in Pune',
    description: 'Podshot plans, shoots and posts content that grows your brand on Instagram, Facebook and YouTube. Social media marketing agency in Wakad, Pune.',
    banner: {
      title: 'Social Media Marketing Agency in Pune',
      tags: ['Strategy', 'Reels', 'Management'],
      text: 'Content that people stop for, plus the planning that keeps your pages growing. We plan, shoot, post and reply, so you can run your business.',
      list: ['Monthly content plan', 'Reels and short videos', 'Posts and carousels', 'Captions and hashtags', 'Comments and messages', 'Monthly report'],
      image: `${BASE_PATH}/images/service/service-details.webp`,
    },
    sections: [
      { type: 'whyChoose', subtitle: 'Why PodShot', title: 'Posts that look good and actually bring business', text: 'Random posting does not grow a brand. We start with who your customers are, what they watch and what makes them trust you, then build every post around that.', items: [
        { title: 'Content made in-house', text: 'Our own team shoots your reels and photos, so the quality stays high every month.' },
        { title: 'Plans, not guesses', text: 'Every month starts with a calendar built on your goals, trends and what worked last month.' },
        { title: 'Stories people relate to', text: 'We write hooks and scripts the way your customers talk, not like an ad.' },
        { title: 'Clear numbers', text: 'A simple monthly report shows reach, followers, messages and leads, in plain words.' },
      ] },
      { type: 'serviceRows', subtitle: 'What we do', title: 'Everything your social media needs', items: [
        { title: 'Strategy', tags: ['Plan', 'Audience'], points: ['Audience research', 'Trend and competitor check', 'Content pillars', 'Brand tone'] },
        { title: 'Content creation', tags: ['Reels', 'Posts'], points: ['Reels and short videos', 'Carousels and static posts', 'Story-led videos', 'Colour grading and edits'] },
        { title: 'Page management', tags: ['Posting', 'Replies'], points: ['Scheduling and posting', 'Captions and hashtags', 'Comment and DM replies', 'Profile clean-up'] },
        { title: 'UGC and short form', tags: ['UGC', 'Trust'], points: ['Creator-style videos', 'Testimonial clips', 'Product demos', 'Behind the scenes'] },
        { title: 'Paid social', tags: ['Meta ads'], points: ['Boosts that make sense', 'Lead form ads', 'Retargeting', 'Monthly optimisation'] },
      ] },
      { type: 'pinnedReels', subtitle: 'Reels we make', title: 'Short videos, real results', button: { label: 'See packages', href: '/packages' }, items: [
        { title: 'Clinic myth buster', label: 'Educational reel', image: `${BASE_PATH}/images/team/team-member-4.png` },
        { title: 'New menu launch', label: 'Cafe reel', image: `${BASE_PATH}/images/team/team-member-1.png` },
        { title: 'Founder story', label: 'Personal brand', image: `${BASE_PATH}/images/team/team-member-2.png` },
        { title: 'Before and after', label: 'Salon reel', image: `${BASE_PATH}/images/team/team-member-3.png` },
      ] },
      { type: 'stepRow', subtitle: 'How it works', title: 'One simple monthly rhythm.', text: 'Once a month we plan, shoot and schedule. During the month we post, reply and watch the numbers. Then we use what we learned to make next month better.', steps: [
        { title: 'Strategy call', text: 'We learn your goals, customers and offers.' },
        { title: 'Content plan', text: 'Ideas, scripts and a posting calendar for the month.' },
        { title: 'Shoot and edit', text: 'One shoot day gives us the whole month of content.' },
        { title: 'Post and improve', text: 'We post, reply, track and adjust every week.' },
      ] },
      { type: 'cardGrid', subtitle: 'Who we work with', title: 'Industries we help grow.', items: [
        { title: 'Doctors and clinics', tags: ['Educational', 'Trust'], label: 'More patient enquiries' },
        { title: 'Startups and small companies', tags: ['Launch', 'Brand'], label: 'A brand people notice' },
        { title: 'Skincare and wellness', tags: ['Reels', 'UGC'], label: 'More online orders' },
        { title: 'Real estate', tags: ['Walkthroughs', 'Ads'], label: 'More site visits' },
        { title: 'Restaurants and cafes', tags: ['Food reels', 'Offers'], label: 'Fuller tables' },
        { title: 'Coaches and personal brands', tags: ['Talking head', 'Story'], label: 'More followers who buy' },
      ] },
      { type: 'guide', title: 'Social media marketing in Pune, explained', blocks: [
        ['p', 'Your customers already spend hours on Instagram and YouTube every day. Social media marketing is how you show up there with something worth watching, often enough that people remember you.'],
        ['h3', 'Why Pune brands choose PodShot'],
        ['ul', ['Young team with fresh ideas', 'Our own production team for reels and photos', 'A real strategy behind every post', 'We know how people in Pune, Wakad and Hinjewadi behave online', 'Fast replies and steady output']],
        ['h3', 'What a good month looks like'],
        ['ol', ['Plan: a calendar of posts and reels tied to your offers.', 'Shoot: one day of filming for the whole month.', 'Post: content goes out at the times your audience is online.', 'Learn: we check what worked and do more of it.']],
        ['quote', 'We do not just post for you. We build a page people want to follow.'],
        ['p', 'Ready to grow your brand with better content? Book a free strategy call and we will show you what we would change first.'],
      ] },
    ],
    faqs: [
      { q: 'What makes PodShot different from other social media agencies?', a: 'We plan the strategy, shoot the content and manage the page, all with one team. You never have to coordinate a designer, a video person and a social media manager.' },
      { q: 'Do you make reels and UGC content?', a: 'Yes. From scripted reels to natural creator-style videos, made for Instagram and YouTube Shorts.' },
      { q: 'Can you handle our social media completely?', a: 'Yes. We take care of strategy, posting, replies, editing and reporting.' },
      { q: 'Do you work with doctors and clinics?', a: 'Yes. Educational content for doctors and clinics is one of our strongest areas.' },
      { q: 'Do you run Facebook and Instagram ads?', a: 'Yes, we run Meta ads alongside your content so the two support each other.' },
    ],
  },

  'seo-company-in-pune': {
    seoTitle: 'SEO Company in Pune | SEO Services',
    description: 'Get found on Google. Podshot is an SEO company in Pune that improves rankings, traffic and enquiries with technical SEO, local SEO and content.',
    banner: {
      title: 'Best SEO Company in Pune',
      tags: ['Rankings', 'Content', 'Technical'],
      text: 'Get found. Get clicked. Get customers. People search before they buy, and we make sure they find you, not your competitor.',
      list: ['Keyword research', 'On-page SEO', 'Technical fixes', 'Local SEO', 'SEO content', 'Monthly reports'],
      image: `${BASE_PATH}/images/service/service-img.webp`,
    },
    sections: [
      { type: 'stats', subtitle: 'Results that matter', title: 'More visitors who are ready to buy, not just more traffic.', text: 'SEO should bring enquiries. We track the numbers that show it is working.', items: [
        { value: 3, suffix: 'x', label: 'Organic traffic', text: 'Typical growth for local businesses within a year of steady work.' },
        { value: 60, suffix: '%', label: 'More enquiries', text: 'From Google search, when rankings and pages improve together.' },
        { value: 100, suffix: '%', label: 'Clear reporting', text: 'You see rankings, traffic and leads every single month.' },
      ] },
      { type: 'iconCards', subtitle: 'Why PodShot', title: 'SEO that is clear, honest and built to last.', items: [
        { icon: 'tji-growth', title: 'The right keywords', text: 'We target searches from people who are ready to buy, not just browse.' },
        { icon: 'tji-check', title: 'No shortcuts', text: 'Clean methods that Google rewards over time, with no risky tricks.' },
        { icon: 'tji-creative', title: 'Content we can make', text: 'Our team writes and shoots the content your pages need to rank.' },
        { icon: 'tji-chat', title: 'Plain language', text: 'We explain what we are doing and why, every month.' },
      ] },
      { type: 'stackedCards', subtitle: 'What is included', title: 'The six parts of good SEO.', text: 'Each part supports the others. Skipping one is why many SEO projects stall.', items: [
        { title: 'On-page SEO', icon: 'tji-service-2', text: 'Titles, headings, internal links, images, speed and schema, so Google understands every page.', tags: ['Meta tags', 'Structure'] },
        { title: 'Off-page SEO', icon: 'tji-service-5', text: 'Quality backlinks, local listings and brand mentions that build trust with Google.', tags: ['Backlinks', 'Citations'] },
        { title: 'Local SEO', icon: 'tji-location', text: 'Google Business Profile, local keywords and reviews, so nearby customers find you first.', tags: ['Maps', 'Reviews'] },
        { title: 'SEO content', icon: 'tji-creative', text: 'Blogs, service pages, location pages and landing pages written to rank and convert.', tags: ['Blogs', 'Pages'] },
        { title: 'Technical SEO', icon: 'tji-service-3', text: 'Core Web Vitals, mobile issues, broken links, indexing and HTTPS, fixed properly.', tags: ['Speed', 'Indexing'] },
        { title: 'Reporting', icon: 'tji-growth', text: 'Rankings, traffic, content results, backlinks and next month plan, every month.', tags: ['Monthly', 'Clear'] },
      ] },
      { type: 'processCards', subtitle: 'Our SEO process', title: 'How we get you ranking', steps: [
        { title: 'Discovery', text: 'We study your market, goals and competitors.' },
        { title: 'Technical fixes', text: 'We fix what holds your website back.' },
        { title: 'On-page work', text: 'Every key page gets the right structure and keywords.' },
        { title: 'Content', text: 'Regular SEO content that answers what people search.' },
        { title: 'Local and authority', text: 'Listings, links and reviews in Pune, Wakad and Hinjewadi.' },
        { title: 'Track and adjust', text: 'Monthly reviews based on real data.' },
      ] },
      { type: 'cardGrid', subtitle: 'Who we work with', title: 'Businesses we help rank.', items: [
        { title: 'Doctors and clinics', tags: ['Medical SEO'], label: 'More patient calls' },
        { title: 'Startups and tech founders', tags: ['Organic growth'], label: 'Traffic that scales' },
        { title: 'Local businesses', tags: ['Local SEO'], label: 'More walk-ins' },
        { title: 'Home services', tags: ['Near me searches'], label: 'More bookings' },
        { title: 'Coaching and training', tags: ['Course pages'], label: 'More admissions' },
        { title: 'Real estate and interiors', tags: ['Project pages'], label: 'More site visits' },
      ] },
      { type: 'portfolioList', subtitle: 'SEO results', title: 'Case studies', button: { label: 'All our work', href: '/work' }, items: projects.filter((p) => ['Websites', 'Local SEO'].includes(p.category)) },
      { type: 'guide', title: 'SEO for Pune businesses, explained', blocks: [
        ['p', 'Before people buy, they search. If you are not on the first page of Google for what you sell, those customers go to someone else. SEO fixes that, steadily and for the long term.'],
        ['h3', 'What we optimise on your website'],
        ['ul', ['Titles and meta descriptions', 'Heading structure', 'Internal links', 'Image sizes and alt text', 'Page speed', 'Schema markup']],
        ['h3', 'Why Pune, Wakad and Hinjewadi brands work with us'],
        ['ul', ['A simple, transparent method', 'A young team that mixes technical and creative SEO', 'Real knowledge of the local market', 'Content made by our own production team', 'Regular, honest updates']],
        ['quote', 'Good SEO is not a trick. It is a better website that more people can find.'],
        ['p', 'Want to rank higher and grow faster? Book a free SEO consultation and we will show you the biggest gaps on your site.'],
      ] },
    ],
    faqs: [
      { q: 'What makes PodShot a different SEO company?', a: 'We do technical SEO, content and local SEO in one place, and our own team creates the content your pages need.' },
      { q: 'Do you work with doctors and clinics?', a: 'Yes. Medical SEO is one of our strongest areas.' },
      { q: 'Can you help my startup get organic traffic?', a: 'Yes. We build SEO plans that grow with your startup.' },
      { q: 'Do you offer local SEO?', a: 'Yes. Our local SEO work helps you rank on Google Maps and in local searches.' },
      { q: 'Do you work with small businesses?', a: 'Yes. Most of our SEO clients are small and medium local businesses.' },
    ],
  },

  'local-seo-services-in-pune-gmb': {
    seoTitle: 'Local SEO Services in Pune & GMB Optimization',
    description: 'Rank higher on Google Maps and get more calls, directions and walk-ins. Local SEO and Google Business Profile optimization in Pune by Podshot.',
    banner: {
      title: 'Local SEO Services in Pune & GMB Optimization',
      tags: ['Google Maps', 'Reviews', 'Calls'],
      text: 'Everyone searches "near me". We make sure your business shows up in the top 3 on Google Maps, with the reviews and photos that make people choose you.',
      list: ['Profile setup and fixes', 'Weekly posts', 'Review plan', 'Local citations', 'Maps ranking work', 'Monthly report'],
      image: `${BASE_PATH}/images/service/service-details.webp`,
    },
    sections: [
      { type: 'iconCards', subtitle: 'Why PodShot', title: 'Ranking on Maps is a plan, not luck.', items: [
        { icon: 'tji-location', title: 'Profile done right', text: 'Categories, services, hours, photos and description, all optimised.' },
        { icon: 'tji-star', title: 'More good reviews', text: 'A simple system that makes it easy for happy customers to review you.' },
        { icon: 'tji-growth', title: 'Steady activity', text: 'Weekly posts and updates, because Google rewards active profiles.' },
        { icon: 'tji-chat', title: 'Clear tracking', text: 'Calls, directions and profile views, reported every month.' },
      ] },
      { type: 'listRows', subtitle: 'What is included', title: 'Our Google Business Profile services.', items: [
        { title: 'Complete profile setup', label: 'Categories, services, photos' },
        { title: 'Keyword-rich posts', label: 'Offers, events, updates' },
        { title: 'Local SEO by industry', label: 'Clinics, salons, cafes, shops' },
        { title: 'Reviews and reputation', label: 'Get and reply to reviews' },
        { title: 'Maps ranking growth', label: 'Aim for the top 3' },
        { title: 'NAP and citations', label: 'Same details everywhere' },
        { title: 'Monthly reporting', label: 'Calls, visits, directions' },
      ] },
      { type: 'stats', subtitle: 'What changes', title: 'More people finding you nearby, and choosing you.', text: 'A well-kept profile is often the best marketing a local business can buy.', items: [
        { value: 3, suffix: '', label: 'Map Pack goal', text: 'We work to get you into the top 3 for your main local searches.' },
        { value: 2, suffix: 'x', label: 'Direction requests', text: 'Typical growth once the profile and reviews improve.' },
        { value: 50, suffix: '+', label: 'New reviews', text: 'Many clients collect this many within a few months.' },
      ] },
      { type: 'processCards', subtitle: 'Our local SEO process', title: 'Five steps to the top 3', steps: [
        { title: 'Audit', text: 'We check your profile and your local competitors.' },
        { title: 'Fix the profile', text: 'Categories, details, services, keywords and branding.' },
        { title: 'Content and reviews', text: 'Posts, photos and a review plan.' },
        { title: 'Build authority', text: 'Citations and local signals that Google trusts.' },
        { title: 'Review monthly', text: 'We track results and adjust the plan.' },
      ] },
      { type: 'cardGrid', subtitle: 'Who it is for', title: 'Businesses that win with local SEO.', items: [
        { title: 'Doctors and clinics', tags: ['Near me'], label: 'More patient enquiries' },
        { title: 'Restaurants and cafes', tags: ['Food searches'], label: 'More footfall' },
        { title: 'Salons and spas', tags: ['Reviews'], label: 'More bookings' },
        { title: 'Startups', tags: ['Local presence'], label: 'Found from day one' },
        { title: 'Local services', tags: ['Calls'], label: 'More calls' },
        { title: 'Retail stores', tags: ['Walk-ins'], label: 'More visits' },
      ] },
      { type: 'guide', title: 'Local SEO and Google Business Profile, explained', blocks: [
        ['p', 'When someone searches "dermatologist near me" or "salon in Wakad", Google shows three businesses on a map first. Being one of those three can change your month.'],
        ['h3', 'What Google looks at'],
        ['ul', ['How well your profile matches the search', 'How active your profile is', 'How many good reviews you have', 'How close you are to the person searching', 'Whether your details match across the web']],
        ['h3', 'Searches we help you win'],
        ['ul', ['"Dermatologist near me"', '"Restaurants in Hinjewadi"', '"Salons in Wakad"', '"Startup services in Pune"']],
        ['quote', 'If your customers search nearby, we help them find you first.'],
      ] },
    ],
    faqs: [
      { q: 'What makes PodShot good at local SEO?', a: 'We combine profile work, content, reviews and citations, and we report the results every month.' },
      { q: 'Do you offer Google Business Profile optimisation?', a: 'Yes. Setup, fixes, posts, photos and review management are all included.' },
      { q: 'Can you improve my Google Maps ranking?', a: 'Yes. We work on every signal Google uses to rank local businesses.' },
      { q: 'Is this good for doctors and restaurants?', a: 'Yes. Clinics, restaurants, salons and local shops see the biggest gains.' },
      { q: 'How long does it take?', a: 'Most profiles improve in the first month. Strong Map Pack positions usually take two to four months.' },
    ],
  },

  'google-ads-agency-in-pune': {
    seoTitle: 'Google Ads Agency in Pune | Google Ads Services',
    description: 'High-intent leads from Google Search, Display, YouTube and Performance Max. Podshot is a Google Ads agency in Pune that tracks every rupee.',
    banner: {
      title: 'Google Ads Agency in Pune',
      tags: ['Search', 'Leads', 'ROI'],
      text: 'Get quality leads, real customers and clear numbers. Google Ads is not about spending more, it is about spending smart.',
      list: ['Account setup', 'Search ads', 'Display ads', 'YouTube ads', 'Performance Max', 'Retargeting'],
      image: `${BASE_PATH}/images/service/service-img.webp`,
    },
    sections: [
      { type: 'stats', subtitle: 'Performance snapshot', title: 'What well-run Google Ads do for local businesses.', text: 'These are patterns we see often. Your results depend on your market and budget.', items: [
        { value: 3, suffix: 'x', label: 'Clinic enquiries', text: 'Clinics often see two to three times more enquiries with well-managed campaigns.' },
        { value: 40, suffix: '%', label: 'Lower cost per lead', text: 'Common after we clean up keywords and targeting.' },
        { value: 100, suffix: '%', label: 'Tracked spend', text: 'Every call and form is tracked back to the ad that brought it.' },
      ] },
      { type: 'threeBlocks', subtitle: 'Choosing an agency', title: 'What makes a good Google Ads partner.', items: [
        { label: 'Clear budgets', text: 'You should know where every rupee goes and what it brought back.', value: 100, suffix: '%', counterLabel: 'Spend visible to you' },
        { label: 'Proper tracking', text: 'Calls, forms and WhatsApp clicks tracked, so decisions are based on real leads.', value: 3, suffix: '', counterLabel: 'Ways leads are tracked' },
        { label: 'Constant testing', text: 'New ad copy and landing pages tested every month, and only winners kept.', value: 4, suffix: '+', counterLabel: 'Tests a month' },
      ] },
      { type: 'serviceRows', subtitle: 'Our Google Ads services', title: 'Every campaign type, set up properly.', items: [
        { title: 'Setup and strategy', tags: ['Research'], points: ['Keyword research', 'Competitor check', 'Audience setup', 'Conversion tracking'] },
        { title: 'Search ads', tags: ['High intent'], points: ['Intent-based keyword groups', 'Ad copy that gets clicks', 'Negative keywords', 'Smart bidding'] },
        { title: 'Display ads', tags: ['Awareness'], points: ['Brand recall', 'Remarketing support', 'Banner design'] },
        { title: 'YouTube and video ads', tags: ['Video'], points: ['Ads shot by our team', 'Awareness campaigns', 'Skippable and bumper ads'] },
        { title: 'Performance Max', tags: ['AI campaigns'], points: ['Asset groups', 'Audience signals', 'Creative variations'] },
        { title: 'Retargeting', tags: ['Second chance'], points: ['Website visitors', 'Form leads', 'Social viewers', 'Past customers'] },
      ] },
      { type: 'percentCircles', subtitle: 'Your ad budget', title: 'How a typical monthly budget is split.', text: 'Every account is different. This is a common starting split for a local service business.', items: [
        { value: 60, label: 'Search ads', text: 'People actively looking for what you sell.' },
        { value: 20, label: 'Retargeting', text: 'Bringing back people who visited but did not enquire.' },
        { value: 15, label: 'YouTube and Display', text: 'Building awareness in your area.' },
        { value: 5, label: 'Testing', text: 'Trying new ideas before scaling them.' },
      ] },
      { type: 'processCards', subtitle: 'How we manage Google Ads', title: 'Our five-step process', steps: [
        { title: 'Discovery call', text: 'Goals, audience and competition.' },
        { title: 'Strategy and creative', text: 'Keywords, ad copy and landing page ideas.' },
        { title: 'Setup and launch', text: 'Clean structure, targeting and tracking.' },
        { title: 'Daily and weekly tuning', text: 'Bids, negatives, tests and search terms.' },
        { title: 'Reports and next steps', text: 'Clear numbers and a plan for next month.' },
      ] },
      { type: 'guide', title: 'Google Ads for Pune businesses, explained', blocks: [
        ['p', 'Google Ads puts your business at the top of search results the moment someone looks for what you sell. Done well, it is the fastest way to get new enquiries.'],
        ['h3', 'How we make your budget work harder'],
        ['ul', ['Smart bidding', 'Daily checks', 'Cutting wasted clicks', 'Better Quality Scores', 'Bids by device and location', 'Regular A/B tests']],
        ['quote', 'The right keywords, the right ads and a good landing page bring real customers.'],
      ] },
    ],
    faqs: [
      { q: 'How much should I spend on Google Ads?', a: 'It depends on your industry and area. Many local businesses start with ₹15,000 to ₹30,000 a month in ad spend, then grow it once the campaigns are working.' },
      { q: 'Is ad spend included in your fee?', a: 'No. You pay Google directly for ads. Our fee covers setup, management and reporting.' },
      { q: 'How soon will I get leads?', a: 'Search campaigns usually bring enquiries in the first two weeks. We improve the cost per lead over the following months.' },
      { q: 'Do you make the landing pages too?', a: 'Yes. Our web team builds fast landing pages made for your campaigns.' },
      { q: 'Can you fix my existing account?', a: 'Yes. We start with an audit of your current account and fix what is wasting money.' },
    ],
  },

  'best-youtube-advertising-agency-in-pune': {
    seoTitle: 'Best YouTube Advertising Agency in Pune',
    description: 'We script, shoot and run YouTube ads that reach the right people in Pune. Video production and YouTube advertising from one team.',
    banner: {
      title: 'Best YouTube Advertising Agency in Pune',
      tags: ['Video ads', 'Reach', 'Retargeting'],
      text: 'Reach more people, build trust and sell with video. We write the ad, shoot it and run it, so the story and the targeting work together.',
      list: ['Video strategy', 'Scripts and hooks', 'Ad shoot and edit', 'Campaign setup', 'Retargeting', 'A/B testing'],
      image: `${BASE_PATH}/images/service/service-details.webp`,
    },
    sections: [
      { type: 'threeBlocks', subtitle: 'Why YouTube', title: 'Why YouTube ads work so well.', items: [
        { label: 'Huge reach', text: 'YouTube is the second biggest search engine in India and the biggest video platform.', value: 2, suffix: 'nd', counterLabel: 'Largest search engine' },
        { label: 'Precise targeting', text: 'Reach people by interest, age, location and what they search for.', value: 10, suffix: '+', counterLabel: 'Targeting options' },
        { label: 'Trust through video', text: 'Seeing your face and your work builds trust faster than any text ad.', value: 3, suffix: 'x', counterLabel: 'More memorable than text' },
      ] },
      { type: 'stats', subtitle: 'Performance snapshot', title: 'What we often see from YouTube campaigns.', text: 'Results depend on your industry and budget, but these patterns show up again and again.', items: [
        { value: 500, suffix: 'K+', label: 'Views per campaign', text: 'Common for local brands with a steady budget.' },
        { value: 2, suffix: 'x', label: 'Brand searches', text: 'More people search your name after seeing your ads.' },
        { value: 30, suffix: '%', label: 'Cheaper retargeting', text: 'Video viewers often convert at a lower cost later.' },
      ] },
      { type: 'stickyProcess', subtitle: 'How we make YouTube ads', title: 'From script to scale.', steps: [
        { title: 'Script and storyboard', text: 'Short, clear scripts with a strong hook in the first five seconds.', tags: ['Hooks', 'Script', 'Storyboard'] },
        { title: 'Shoot and edit', text: 'Our crew shoots and edits the ad, in every length and size you need.', tags: ['Shoot', 'Edit', 'Cut downs'] },
        { title: 'Target, test and scale', text: 'We target the right people, test versions and put more budget behind the winner.', tags: ['Targeting', 'A/B tests', 'Scale'] },
      ] },
      { type: 'mediaCallout', subtitle: 'See an example', title: 'A YouTube ad made and run by PodShot.', text: 'Watch a sample ad. The same team that filmed it also set up the campaign that ran it.', button: { label: 'Play sample ad' }, video: `${BASE_PATH}/videos/h1-hero-2.mp4` },
      { type: 'listRows', subtitle: 'What is included', title: 'Our YouTube advertising services.', items: [
        { title: 'Video strategy and planning', label: 'Audience, message, budget' },
        { title: 'Creative video production', label: 'Shot by our own crew' },
        { title: 'Ads setup and management', label: 'Targeting and placements' },
        { title: 'Retargeting and funnels', label: 'Bring viewers back' },
        { title: 'A/B testing', label: 'Hooks, calls to action, cuts' },
      ] },
      { type: 'guide', title: 'YouTube advertising in Pune, explained', blocks: [
        ['p', 'Video ads let people see and hear your business before they ever call you. That builds trust that text ads cannot.'],
        ['h3', 'Ads we make for local businesses'],
        ['ul', ['Explainer videos for doctors and clinics', 'Promo videos for restaurants', 'Offer ads for salons', 'Explainers for startups', 'Client testimonial videos']],
        ['h3', 'Why brands across Pune choose us'],
        ['ul', ['Video production and ads from one team', 'Creative people and numbers people working together', 'Faster delivery than most agencies', 'Clear reporting']],
        ['quote', 'A great ad shown to the wrong people does nothing. We get both right.'],
      ] },
    ],
    faqs: [
      { q: 'Do you make the video ads too?', a: 'Yes. We write, shoot and edit the ads in-house, then run them.' },
      { q: 'How long should a YouTube ad be?', a: 'We usually make a 30 to 45 second version plus 15 and 6 second cuts, and let the results show which works best.' },
      { q: 'What budget do I need?', a: 'Many local campaigns start with ₹20,000 to ₹40,000 a month in ad spend.' },
      { q: 'Can you target people only in Pune?', a: 'Yes. We can target by city, area or even a few kilometres around your location.' },
      { q: 'Will I see the results?', a: 'Yes. You get a monthly report with views, clicks, leads and cost per lead.' },
    ],
  },

  'top-ai-agency-in-pune': {
    seoTitle: 'Top AI Agency in Pune | AI Images and Video',
    description: 'AI images, AI videos and AI-assisted campaigns, finished by human editors. Podshot is an AI content agency in Pune.',
    banner: {
      title: 'Top AI Agency in Pune',
      tags: ['AI images', 'AI video', 'Editing'],
      text: 'AI-made images and videos for your ads, socials and website, finished by our human editors so they look real and on brand.',
      list: ['AI product images', 'AI lifestyle scenes', 'AI spokesperson videos', 'AI reels', 'Storyboards and concepts', 'Human finishing'],
      image: `${BASE_PATH}/images/service/service-img.webp`,
    },
    sections: [
      { type: 'threeBlocks', subtitle: 'Why AI content', title: 'Why AI content matters for brands now.', items: [
        { label: 'Lower cost', text: 'Many visuals can be made without a full shoot, which cuts the cost of each creative.', value: 60, suffix: '%', counterLabel: 'Typical cost saving' },
        { label: 'More options', text: 'Test many versions of an ad instead of one or two.', value: 10, suffix: 'x', counterLabel: 'More variations' },
        { label: 'Faster delivery', text: 'Jump on trends in days, not weeks.', value: 3, suffix: ' days', counterLabel: 'Typical turnaround' },
      ] },
      { type: 'iconCards', subtitle: 'What we make', title: 'Our AI visual content services.', items: [
        { icon: 'tji-creative', title: 'AI images', text: 'Product shots, lifestyle scenes, food visuals, interiors and campaign images.' },
        { icon: 'tji-play', title: 'AI videos', text: 'Spokesperson videos, explainers, reels, product demos and animated ads.' },
        { icon: 'tji-virtual-labs', title: 'Storyboards and ideas', text: 'Concept visuals, moodboards and ad ideas before anything is made.' },
        { icon: 'tji-check', title: 'Human finishing', text: 'Our editors fix skin, light, texture, colour and branding on every piece.' },
      ] },
      { type: 'guide', subtitle: 'Side by side', title: 'Traditional content vs AI content', blocks: [
        ['table', { head: ['', 'Traditional shoot', 'AI content'], rows: [
          ['Cost', 'Higher, crew and location', 'Lower for most visuals'],
          ['Speed', 'One to two weeks', 'A few days'],
          ['Variations', 'A handful', 'As many as you need'],
          ['Best for', 'Real people and real places', 'Ideas, tests and quick campaigns'],
        ] }],
        ['p', 'We often use both: a real shoot for your hero content, and AI for extra versions and quick ideas.'],
      ] },
      { type: 'galleryShowcase', word: 'AI by PodShot', titles: ['Product', 'Lifestyle', 'Food', 'Interior', 'Fashion', 'Beauty', 'Concept', 'Campaign', 'Storyboard', 'Moodboard', 'Explainer', 'Reel'] },
      { type: 'cardGrid', subtitle: 'Who it is for', title: 'Industries that benefit most.', items: [
        { title: 'Doctors and clinics', tags: ['Explainers', 'Education'], label: 'Clear patient content' },
        { title: 'Restaurants and cafes', tags: ['Food visuals', 'Menus'], label: 'Fresh visuals weekly' },
        { title: 'Salons and beauty', tags: ['Makeovers', 'Campaigns'], label: 'Eye-catching posts' },
        { title: 'Startups', tags: ['Demos', 'Pitch decks'], label: 'Launch faster' },
      ] },
    ],
    faqs: [
      { q: 'Why choose PodShot for AI content?', a: 'We combine AI tools with real production and editing skills, so the results look professional and on brand.' },
      { q: 'Do you make AI videos?', a: 'Yes. Spokesperson videos, reels, explainers and talking-head videos.' },
      { q: 'Do AI visuals look real?', a: 'With our human editing, they look polished and professional.' },
      { q: 'Who benefits most from AI content?', a: 'Doctors, restaurants, salons, startups, coaches and local businesses.' },
      { q: 'Can AI visuals be used in ads?', a: 'Yes. They make it easy to test many ad versions quickly.' },
    ],
  },

  'website-development-company-in-pune': {
    seoTitle: 'Website Development Company in Pune',
    description: 'Fast, mobile-first websites that turn visitors into enquiries. Website design and development in Pune by Podshot.',
    banner: {
      title: 'Website Development Company in Pune',
      tags: ['Design', 'Build', 'SEO ready'],
      text: 'Modern, fast websites built to grow your business. Your site should look good, load quickly and make it easy for people to contact you.',
      list: ['Custom design', 'Business websites', 'E-commerce stores', 'Landing pages', 'Redesigns', 'Maintenance'],
      image: `${BASE_PATH}/images/service/service-details.webp`,
    },
    sections: [
      { type: 'perspectiveShowcase', items: [
        { title: 'Coaching institute', category: 'Education', year: '2026', href: '/work/coaching-institute-website' },
        { title: 'Skin clinic', category: 'Healthcare', year: '2025', href: '/work/skin-clinic-google-ads' },
        { title: 'Skincare store', category: 'E-commerce', year: '2026', href: '/work/skincare-product-launch' },
        { title: 'Housing project', category: 'Real estate', year: '2025', href: '/work/housing-project-ad-film' },
        { title: 'Cafe menu site', category: 'Food', year: '2025' },
        { title: 'Salon booking', category: 'Beauty', year: '2025' },
      ] },
      { type: 'serviceRows', subtitle: 'What we build', title: 'Website design and development services.', items: [
        { title: 'Custom design', tags: ['UI/UX'], points: ['Modern and on brand', 'Easy to navigate', 'Made for enquiries'] },
        { title: 'Business websites', tags: ['Services'], points: ['Clinics and services', 'Restaurants', 'Coaches and personal brands', 'Real estate projects'] },
        { title: 'E-commerce', tags: ['Online stores'], points: ['Product pages', 'Fast checkout', 'Payment gateways', 'Product filters'] },
        { title: 'Landing pages', tags: ['Ads'], points: ['For Google, YouTube and Meta ads', 'Lower bounce rate', 'Better leads'] },
        { title: 'Redesigns', tags: ['Refresh'], points: ['New design', 'Speed fixes', 'SEO structure', 'Better conversions'] },
        { title: 'Maintenance', tags: ['Care'], points: ['Content changes', 'Security updates', 'Backups', 'New pages'] },
      ] },
      { type: 'threeBlocks', subtitle: 'Why it matters', title: 'A good website pays for itself.', items: [
        { label: 'Trust', text: 'A clean, fast site makes your business look established and reliable.', value: 75, suffix: '%', counterLabel: 'Judge a business by its site' },
        { label: 'Leads', text: 'Clear buttons, short forms and WhatsApp links turn visitors into enquiries.', value: 2, suffix: 'x', counterLabel: 'More enquiries is common' },
        { label: 'Rankings', text: 'Fast, well-built pages rank better on Google.', value: 3, suffix: 's', counterLabel: 'Target load time' },
      ] },
      { type: 'processCards', subtitle: 'Our process', title: 'How we build your website', steps: [
        { title: 'Discovery', text: 'Your brand, goals, features and customers.' },
        { title: 'Design', text: 'Wireframes and visual design for every key page.' },
        { title: 'Development', text: 'Clean, fast code for front end and back end.' },
        { title: 'Content and integrations', text: 'Pages, forms, payments, booking and SEO.' },
        { title: 'Testing and launch', text: 'Mobile, speed and bug checks, then go live.' },
        { title: 'Maintenance', text: 'Updates, improvements and analytics checks.' },
      ] },
      { type: 'iconCards', subtitle: 'Why PodShot', title: 'Websites that look premium and work hard.', items: [
        { icon: 'tji-service-3', title: 'Mobile first', text: 'Designed for phones first, because that is where most of your visitors are.' },
        { icon: 'tji-growth', title: 'SEO ready', text: 'Clean structure, headings and speed, so Google can rank you.' },
        { icon: 'tji-creative', title: 'Real visuals', text: 'Our production team can shoot the photos and videos your site needs.' },
        { icon: 'tji-chat', title: 'Fast replies', text: 'Quick communication from start to launch and after.' },
      ] },
      { type: 'stats', subtitle: 'What clients get', title: 'Sites that load fast and bring enquiries.', text: 'We measure every website on speed, ranking and leads.', items: [
        { value: 90, suffix: '+', label: 'Speed score', text: 'Our target on Google PageSpeed for mobile.' },
        { value: 30, suffix: '+', label: 'Sites launched', text: 'For clinics, cafes, startups and local brands.' },
        { value: 70, suffix: '%', label: 'More enquiries', text: 'Seen on recent redesigns.' },
      ] },
    ],
    faqs: [
      { q: 'What makes PodShot a good website development company?', a: 'We combine design, development, branding and SEO in one team, and we can shoot your photos and videos too.' },
      { q: 'Do you build websites for small businesses?', a: 'Yes. Doctors, restaurants, salons, real estate and startups work with us.' },
      { q: 'Can you redesign my old website?', a: 'Yes. Redesigns are modern, fast and built to bring more enquiries.' },
      { q: 'Are your websites SEO friendly?', a: 'Yes. Every site is built with clean structure and good on-page SEO from day one.' },
      { q: 'Will my site work well on phones?', a: 'Yes. Every design is mobile first and fully responsive.' },
    ],
  },
};

export { related };
