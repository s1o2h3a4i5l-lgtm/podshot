export const faqGroups = {
  general: {
    title: 'Working with us',
    items: [
      { q: 'What does PodShot do?', a: 'We are a digital marketing and content production team in Wakad, Pune. We run SEO, social media, Google and YouTube ads, Google Business Profiles and websites, and we shoot the photos and videos that go into them.' },
      { q: 'Do you only work with businesses in Pune?', a: 'Most of our clients are in Pune, Wakad and Hinjewadi, but we run marketing for brands across India. Shoots usually happen in and around Pune.' },
      { q: 'How do we get started?', a: 'Message us on WhatsApp or fill the contact form. We start with a free audit of your current marketing, then suggest a plan that fits your goals and budget.' },
      { q: 'Will I have one person to talk to?', a: 'Yes. Every client gets one account manager who knows your brand and answers your questions. You are never passed around.' },
      { q: 'How do you report results?', a: 'You get a simple monthly report in plain language: what we did, what worked, the numbers that matter for your business, and the plan for next month.' },
    ],
  },
  marketing: {
    title: 'Marketing',
    items: [
      { q: 'How soon will I see results?', a: 'Ads can bring enquiries in the first few weeks. SEO and social media take longer, usually two to four months for steady growth. We show progress in every monthly report.' },
      { q: 'Is ad spend included in your fees?', a: 'No. You pay Google or Meta directly for ad spend. Our fee covers planning, setting up, writing, designing and managing the campaigns.' },
      { q: 'Do you work with doctors and clinics?', a: 'Yes, clinics are one of our main areas. We follow the rules for medical advertising and keep content educational and trustworthy.' },
      { q: 'Can you manage our social media fully?', a: 'Yes. We plan the content, shoot it, write captions, post, reply to comments and report every month.' },
    ],
  },
  packages: {
    title: 'Packages',
    items: [
      { q: 'Is there a minimum contract?', a: 'Monthly marketing plans start with three months, because good results need a little time. Shoots and one-off projects have no contract.' },
      { q: 'Can I change my plan later?', a: 'Yes. You can move up or down a plan at the start of any month.' },
      { q: 'How do payments work?', a: 'Monthly plans are paid at the start of each month. For shoots and projects we take 50% to book and the rest on delivery.' },
      { q: 'Do you offer custom packages?', a: 'Yes. If none of the plans fit, tell us what you need and we will put together a custom quote.' },
    ],
  },
};

export const allFaqs = Object.values(faqGroups).flatMap((g) => g.items);
