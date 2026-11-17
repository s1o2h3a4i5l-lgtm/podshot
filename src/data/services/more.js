import { BASE_PATH } from '@/lib/basePath';

// Page content for the text-led services (no banner photo). They use `intro` (ServiceIntro) instead
// of `banner`, and mix three layouts so the pages do not all look the same:
//   Process-led   (logo, graphic design, video): what we make, then how we make it.
//   Channel-led   (email, WhatsApp, SMS, display, ASO): what is included, who it suits, how it runs.
//   Guide-led     (strategy, content writing, analytics, consulting): longer explanation in paragraphs.
// Section types are mapped to components in src/components/sections/service/Sections.jsx.

export const more = {
  // ───────────────────────────── Direct marketing ─────────────────────────────

  'email-marketing-services-in-pune': {
    seoTitle: 'Email Marketing Services in Pune',
    description: 'Newsletters, offers and automated follow-up emails for Pune businesses. PodShot plans, designs, sends and reports on your email marketing.',
    intro: {
      title: 'Email Marketing Services in Pune',
      tags: ['Newsletters', 'Automation', 'Lists'],
      text: 'The people on your email list already know you. We help you stay in touch with them in a way that brings them back to buy again.',
      lead: 'Social media reach goes up and down. Your email list is yours, and a good email still lands in front of every person on it.',
      paragraphs: [
        'Most businesses collect emails and then do nothing with them, or send the same offer to everyone once in a while. That is why open rates stay low.',
        'We plan what to send and when, write and design each email, split your list so the right people get the right message, and set up simple automations that work in the background.',
      ],
      list: ['Email plan for the month', 'Written and designed emails', 'List clean-up and segments', 'Welcome and follow-up automations', 'Sending and scheduling', 'Monthly report'],
    },
    sections: [
      {
        type: 'serviceRows', subtitle: 'What we do', title: 'Everything your email list needs', items: [
          { title: 'Newsletters', tags: ['Monthly', 'Updates'], points: ['News, tips and new arrivals', 'Written in your brand voice', 'Designed to read well on phones', 'One clear thing to click'] },
          { title: 'Offers and launches', tags: ['Sales', 'Promotions'], points: ['Festive and seasonal offers', 'New product or service launches', 'Event invites', 'Last-chance reminders'] },
          { title: 'Automations', tags: ['Set once', 'Always on'], points: ['Welcome series for new sign-ups', 'Follow-ups after an enquiry', 'Win-back emails for past customers', 'Birthday and anniversary emails'] },
          { title: 'List care', tags: ['Clean data', 'Segments'], points: ['Removing bounced and fake addresses', 'Groups by interest or purchase', 'Sign-up forms for your website', 'Unsubscribe handled properly'] },
        ]
      },
      {
        type: 'stepRow', subtitle: 'How it works', title: 'A simple monthly rhythm.', text: 'We set up the tools once, then run your emails every month. You approve everything before it goes out.', steps: [
          { title: 'Set up', text: 'We connect your list to a proper email tool and clean it up.' },
          { title: 'Plan', text: 'A short calendar of what to send this month, tied to your offers.' },
          { title: 'Write and design', text: 'Each email is written, designed and sent to you for approval.' },
          { title: 'Send and learn', text: 'We send, track opens and clicks, and use that for next month.' },
        ]
      },
      {
        type: 'results', subtitle: 'What you can expect', title: 'Emails that earn their place in the inbox.', text: 'Good email marketing is steady, not loud. These are the things we look after every month.', points: ['Higher open rates from better subject lines and timing', 'Fewer people unsubscribing, because emails are relevant', 'More repeat orders from past customers', 'A clean list you are not paying to email for nothing', 'A short report you can read in two minutes'] },
    ],
    faqs: [
      { q: 'Which email tool do you use?', a: 'We can work with the tool you already have, or set you up on one that fits your list size and budget, such as Mailchimp, Brevo or Zoho Campaigns.' },
      { q: 'I do not have an email list yet. Can you still help?', a: 'Yes. We start by adding simple sign-up forms to your website and social pages, and an offer that gives people a reason to join.' },
      { q: 'How often should we send emails?', a: 'For most small businesses, two to four emails a month is plenty. We would rather send fewer emails that people open than many that they ignore.' },
      { q: 'Will our emails go to spam?', a: 'We set up your sending domain correctly and keep your list clean, which are the two biggest reasons emails end up in spam.' },
    ],
  },

  'whatsapp-marketing-services-in-pune': {
    seoTitle: 'WhatsApp Marketing Services in Pune',
    description: 'WhatsApp broadcasts, offers and reminders for Pune businesses, sent the right way through the WhatsApp Business platform. Planned and run by PodShot.',
    intro: {
      title: 'WhatsApp Marketing Services in Pune',
      tags: ['Broadcasts', 'Offers', 'Replies'],
      text: 'Your customers open WhatsApp many times a day. We help you reach them there with messages they are glad to get.',
      lead: 'A WhatsApp message gets read. That is exactly why it needs to be useful, short and sent to people who asked for it.',
      paragraphs: [
        'We set you up on the WhatsApp Business platform, build your contact list the right way, and plan messages that feel like a helpful update, not spam.',
        'From festive offers to appointment reminders, every message has a clear purpose and an easy way to reply or book.',
      ],
      list: ['WhatsApp Business setup', 'Opt-in contact list', 'Message templates', 'Broadcast campaigns', 'Quick replies and catalogue', 'Monthly report'],
    },
    sections: [
      {
        type: 'proseRows', subtitle: 'What you can send', title: 'Messages people actually want.', text: 'WhatsApp works best when each message is short, personal and useful. These are the kinds we plan most often.', items: [
          { title: 'Offers and new arrivals', text: 'A short note with a photo or video, sent to customers who have bought from you before. Perfect for festive sales and new stock.' },
          { title: 'Reminders', text: 'Appointment, class or renewal reminders that cut down no-shows. Clinics, salons and coaching institutes use these the most.' },
          { title: 'Event and launch updates', text: 'Store openings, workshops and launches, with a map link or a button to register, so the next step takes one tap.' },
          { title: 'Follow-ups after an enquiry', text: 'A friendly message after someone calls or fills a form, with the details they asked for, while they still remember you.' },
        ]
      },
      {
        type: 'cardGrid', subtitle: 'Who it suits', title: 'Businesses that grow on WhatsApp.', items: [
          { title: 'Clinics and doctors', tags: ['Reminders', 'Follow-ups'], label: 'Fewer missed appointments' },
          { title: 'Salons and spas', tags: ['Offers', 'Bookings'], label: 'More repeat visits' },
          { title: 'Coaching institutes', tags: ['Batches', 'Updates'], label: 'More admissions' },
          { title: 'Restaurants and cafes', tags: ['Menus', 'Offers'], label: 'Fuller weekdays' },
          { title: 'Retail and fashion', tags: ['New stock', 'Sales'], label: 'More store visits' },
          { title: 'Real estate', tags: ['Site visits', 'Launches'], label: 'More site bookings' },
        ]
      },
      {
        type: 'stepRow', subtitle: 'How it works', title: 'Set up once, then message every month.', text: 'We take care of the setup and the approvals, then plan and send your campaigns with you.', steps: [
          { title: 'Setup', text: 'WhatsApp Business account, profile and catalogue.' },
          { title: 'Contacts', text: 'A clean list of customers who agreed to hear from you.' },
          { title: 'Templates', text: 'Message templates written and approved by WhatsApp.' },
          { title: 'Send and track', text: 'Campaigns sent on schedule, with replies and results tracked.' },
        ]
      },
    ],
    faqs: [
      { q: 'Is bulk WhatsApp messaging allowed?', a: 'Yes, when it is done through the official WhatsApp Business platform and sent to people who agreed to receive it. We do not use unofficial tools that get numbers blocked.' },
      { q: 'Can we reply to customers from the same number?', a: 'Yes. Replies come back to your business number, and we can set up quick replies for common questions.' },
      { q: 'Does WhatsApp charge for messages?', a: 'WhatsApp charges a small fee per conversation for business messages. We explain the costs up front so there are no surprises.' },
      { q: 'How often should we send messages?', a: 'Less than you think. One or two useful messages a month keeps people interested without making them mute you.' },
    ],
  },

  'bulk-sms-services-in-pune': {
    seoTitle: 'Bulk SMS Services in Pune',
    description: 'Promotional and transactional bulk SMS for Pune businesses, set up with DLT registration and sent on schedule. Offers, reminders and alerts by PodShot.',
    intro: {
      title: 'Bulk SMS Services in Pune',
      tags: ['Promotions', 'Alerts', 'Reminders'],
      text: 'Not every customer is on email or WhatsApp, but every customer has a phone. SMS reaches all of them.',
      lead: 'An SMS is short, simple and works on every phone. Used well, it is one of the cheapest ways to reach a lot of people at once.',
      paragraphs: [
        'In India, business SMS has to be registered on DLT before it can be sent. We handle that paperwork, set up your sender name and get your message templates approved.',
        'Then we plan and send your campaigns, from festive offers to reminders and alerts, and track what gets delivered.',
      ],
      list: ['DLT registration help', 'Sender ID setup', 'Approved message templates', 'Promotional campaigns', 'Transactional alerts', 'Delivery reports'],
    },
    sections: [
      {
        type: 'cardGrid', subtitle: 'What it is used for', title: 'Short messages, many uses.', items: [
          { title: 'Offers and sales', tags: ['Promotional'], label: 'More walk-ins' },
          { title: 'Appointment reminders', tags: ['Transactional'], label: 'Fewer no-shows' },
          { title: 'Order and delivery updates', tags: ['Transactional'], label: 'Fewer support calls' },
          { title: 'Event and launch alerts', tags: ['Promotional'], label: 'Bigger turnout' },
          { title: 'Fee and payment reminders', tags: ['Transactional'], label: 'Faster payments' },
          { title: 'Feedback requests', tags: ['Engagement'], label: 'More reviews' },
        ]
      },
      {
        type: 'results', subtitle: 'What is included', title: 'We handle the setup and the sending.', text: 'Bulk SMS has a few rules to follow in India. We take care of them so your messages actually get delivered.', points: ['Help with DLT registration and paperwork', 'Sender ID that shows your brand name', 'Message templates written and approved', 'Contact list cleaned before sending', 'Scheduled sending at the right time of day', 'Delivery reports after every campaign'] },
      {
        type: 'stepRow', subtitle: 'How it works', title: 'From registration to first send.', text: 'The first campaign takes a little setup. After that, sending a new message is quick.', steps: [
          { title: 'Register', text: 'We help you register your business and sender ID on DLT.' },
          { title: 'Write', text: 'Short, clear messages, written to fit the character limit.' },
          { title: 'Approve', text: 'Templates are submitted and approved before sending.' },
          { title: 'Send', text: 'Campaigns go out on schedule, with delivery reports.' },
        ]
      },
    ],
    faqs: [
      { q: 'What is DLT and do we need it?', a: 'DLT is the registration system for business SMS in India. Every business that sends bulk SMS needs it, and we help you through it.' },
      { q: 'What is the difference between promotional and transactional SMS?', a: 'Promotional SMS is for offers and marketing and can only go out at certain times. Transactional SMS is for reminders, OTPs and updates and can be sent any time.' },
      { q: 'Can the message show our business name?', a: 'Yes. Once your sender ID is registered, messages show a short version of your brand name instead of a number.' },
      { q: 'Should we use SMS or WhatsApp?', a: 'SMS reaches every phone and works well for short alerts. WhatsApp allows photos and replies. Many businesses use both, and we can plan them together.' },
    ],
  },

  'display-advertising-services-in-pune': {
    seoTitle: 'Display Advertising Services in Pune',
    description: 'Banner and video display ads on Google, YouTube and partner websites, designed and run by PodShot for Pune businesses, with retargeting and clear reports.',
    intro: {
      title: 'Display Advertising Services in Pune',
      tags: ['Banners', 'Retargeting', 'Reach'],
      text: 'Display ads put your brand in front of people while they read, watch and browse, on the sites and apps they already use.',
      lead: 'Most people do not buy the first time they see you. Display ads keep your brand in view until they are ready.',
      paragraphs: [
        'We design the banners and short video ads ourselves, so they look like your brand and not like a template.',
        'Then we run them on the Google Display Network and YouTube, aimed at the right audience, and show past visitors your offer again so they come back.',
      ],
      list: ['Banner and video ad design', 'Audience targeting', 'Retargeting past visitors', 'Google Display and YouTube', 'Budget management', 'Monthly report'],
    },
    sections: [
      {
        type: 'stackedCards', subtitle: 'Ad types', title: 'Ads for every stage.', text: 'Different ads do different jobs. We pick the mix that fits your goal and budget.', items: [
          { title: 'Awareness banners', icon: 'tji-globe', text: 'Clean, eye-catching banners shown to people who match your ideal customer, across news sites, blogs and apps.', tags: ['Reach', 'Brand'] },
          { title: 'Retargeting ads', icon: 'tji-arrow-up-right', text: 'Ads shown to people who already visited your website, reminding them of what they looked at.', tags: ['Return visits', 'Sales'] },
          { title: 'Video ads', icon: 'tji-play', text: 'Short videos made by our team, shown on YouTube and partner sites before or during other videos.', tags: ['YouTube', 'Story'] },
          { title: 'Responsive ads', icon: 'tji-service-3', text: 'Ads that adjust their size and layout to fit any space, so they look right on every screen.', tags: ['All sizes', 'Mobile'] },
        ]
      },
      {
        type: 'processCards', subtitle: 'Our process', title: 'How we run your display ads', steps: [
          { title: 'Goal and audience', text: 'We agree on what the ads should do and who they are for.' },
          { title: 'Design', text: 'Our team designs banners and short videos in your brand style.' },
          { title: 'Launch and improve', text: 'Campaigns go live, then we pause what is not working and put more behind what is.' },
        ]
      },
      {
        type: 'results', subtitle: 'What you get', title: 'Ads that look good and do a job.', text: 'Display ads are easy to waste money on. We keep them focused.', points: ['Ads designed by our own team, not stock templates', 'Placements checked so your brand does not show on poor sites', 'Retargeting set up for past website visitors', 'Clear reporting on views, clicks and enquiries', 'Monthly changes based on what the numbers show'] },
    ],
    faqs: [
      { q: 'How is display advertising different from Google search ads?', a: 'Search ads show when someone searches for what you sell. Display ads show while people browse other sites and apps, which makes them better for building awareness and bringing visitors back.' },
      { q: 'Do you design the ads too?', a: 'Yes. Our design and video team makes the banners and video ads, so they match your brand.' },
      { q: 'What budget do we need?', a: 'You can start small and grow. We will suggest a starting budget based on your goal and audience after a free call.' },
      { q: 'Can we choose where our ads appear?', a: 'Yes. We can target or exclude specific sites, apps and topics, and we check placements regularly.' },
    ],
  },

  'app-store-optimization-services-in-pune': {
    seoTitle: 'App Store Optimization (ASO) Services in Pune',
    description: 'App Store Optimization for Android and iOS apps. PodShot improves your store listing, keywords, screenshots and reviews so more people find and install your app.',
    intro: {
      title: 'App Store Optimization Services in Pune',
      tags: ['Play Store', 'App Store', 'Downloads'],
      text: 'A good app with a weak store listing stays hidden. We improve the listing so people can find your app and want to install it.',
      lead: 'Most app downloads start with a search inside the store. If your app does not show up there, or does not look worth installing, people pick another one.',
      paragraphs: [
        'App Store Optimization, or ASO, is SEO for app stores. It covers the words people search for, and the title, description, icon, screenshots and reviews they see when they find you.',
        'We work on both the Google Play Store and the Apple App Store, and track how your rankings and installs change month by month.',
      ],
      list: ['Keyword research', 'Title and description', 'Icon and screenshot design', 'Preview video', 'Ratings and reviews plan', 'Monthly report'],
    },
    sections: [
      {
        type: 'serviceRows', subtitle: 'What we improve', title: 'Every part of your store listing', items: [
          { title: 'Keywords', tags: ['Search', 'Rankings'], points: ['Words people actually type', 'Competitor keyword check', 'Keywords placed in the right fields', 'Tracking rankings over time'] },
          { title: 'Text', tags: ['Title', 'Description'], points: ['App name and subtitle', 'Short and full description', 'Clear benefits, not just features', 'Written for both stores'] },
          { title: 'Visuals', tags: ['Icon', 'Screenshots'], points: ['App icon that stands out', 'Screenshots that tell a story', 'Preview video', 'Designed by our own team'] },
          { title: 'Reviews', tags: ['Ratings', 'Trust'], points: ['Plan for asking happy users to rate', 'Replies to reviews', 'Spotting common complaints', 'Feedback shared with your team'] },
        ]
      },
      {
        type: 'proseRows', dark: true, subtitle: 'Why it matters', title: 'Small changes, more installs.', text: 'You do not need to rebuild your app to get more downloads. Often the listing is what holds it back.', items: [
          { title: 'People decide in seconds', text: 'Most people look at the icon, the first two screenshots and the rating, then decide. Those few things deserve the most care.' },
          { title: 'The right words bring the right users', text: 'Ranking for searches that match what your app really does brings users who stay, not ones who uninstall a day later.' },
          { title: 'Reviews build trust', text: 'A steady stream of good, recent reviews helps both your ranking and the decision to install.' },
        ]
      },
      {
        type: 'stepRow', subtitle: 'How it works', title: 'Audit, improve, measure.', text: 'ASO is ongoing. Stores and competitors change, so we keep testing and improving.', steps: [
          { title: 'Audit', text: 'We review your listing and your top competitors.' },
          { title: 'Research', text: 'We find the keywords worth targeting.' },
          { title: 'Update', text: 'New text, screenshots and visuals go live.' },
          { title: 'Measure', text: 'We track rankings and installs, then keep improving.' },
        ]
      },
    ],
    faqs: [
      { q: 'Do you work on both Android and iOS?', a: 'Yes. We optimise listings on the Google Play Store and the Apple App Store, which work a little differently.' },
      { q: 'Do you design the screenshots and icon?', a: 'Yes. Our design team makes the icon, screenshots and preview video for your listing.' },
      { q: 'How long until we see results?', a: 'Store changes can take a few weeks to show in rankings. We track progress every month and keep adjusting.' },
      { q: 'Do you build or fix apps?', a: 'No. We focus on the store listing and marketing. If your app needs development work, we can tell you what we notice.' },
    ],
  },

  // ───────────────────────────── Design and content ─────────────────────────────

  'logo-and-branding-services-in-pune': {
    seoTitle: 'Logo Design and Branding Services in Pune',
    description: 'Logo design and brand identity for Pune businesses. PodShot designs your logo, colours and fonts, and gives you the files and guidelines to use them everywhere.',
    intro: {
      title: 'Logo and Branding Services in Pune',
      tags: ['Logo', 'Identity', 'Guidelines'],
      text: 'Your logo is often the first thing people see. We design one that fits your business and a brand look that keeps it consistent everywhere.',
      lead: 'A good logo is simple, easy to remember and works just as well on a shop board as it does on a phone screen.',
      paragraphs: [
        'We start by understanding your business, your customers and the places your brand will appear. Then we explore a few directions before refining the one that feels right.',
        'You get more than a logo. You get the colours, fonts and rules that make your posts, packaging and website look like they belong together.',
      ],
      list: ['Logo design', 'Colour palette', 'Font choices', 'Logo versions for every use', 'Brand guidelines', 'All source files'],
    },
    sections: [
      {
        type: 'serviceRows', subtitle: 'What we design', title: 'Everything your brand needs to look like itself', items: [
          { title: 'Logo', tags: ['Mark', 'Wordmark'], points: ['Main logo', 'Icon-only version', 'Horizontal and stacked layouts', 'Light and dark versions'] },
          { title: 'Brand look', tags: ['Colours', 'Fonts'], points: ['Colour palette', 'Font pairing', 'Graphic elements and patterns', 'Photo and video style'] },
          { title: 'Brand guidelines', tags: ['Rules', 'PDF'], points: ['How to use the logo', 'What not to do', 'Colour and font codes', 'Examples on real items'] },
          { title: 'Starter items', tags: ['Print', 'Social'], points: ['Business card', 'Letterhead', 'Social media profile and cover', 'Email signature'] },
        ]
      },
      {
        type: 'processCards', subtitle: 'Our process', title: 'How we design your brand', steps: [
          { title: 'Discovery', text: 'We learn about your business, customers and competitors.' },
          { title: 'Sketches', text: 'We explore several rough ideas before choosing a direction.' },
          { title: 'Concepts', text: 'You see a few refined logo options, shown in real use.' },
          { title: 'Refine', text: 'We polish the chosen design based on your feedback.' },
          { title: 'Brand kit', text: 'Colours, fonts and guidelines built around the final logo.' },
          { title: 'Handover', text: 'Every file you need, ready for print and screen.' },
        ]
      },
      {
        type: 'results', subtitle: 'What you walk away with', title: 'A brand you can use from day one.', text: 'No chasing designers for missing files later. You get everything at the end.', points: ['Vector source files that scale to any size', 'PNG and JPG files for everyday use', 'Light, dark and single-colour versions', 'A brand guide anyone on your team can follow', 'Full ownership of the final design'] },
    ],
    faqs: [
      { q: 'How many logo options will we see?', a: 'We share a few refined concepts, shown on real items like a shop board, a business card and a social post, so it is easier to choose.' },
      { q: 'Can you refresh our existing logo?', a: 'Yes. Sometimes a brand only needs a modern update rather than a new logo. We will tell you honestly which one makes more sense.' },
      { q: 'Do we own the logo?', a: 'Yes. Once the project is complete, the final design and all files are yours.' },
      { q: 'Can you also design our posts and packaging?', a: 'Yes. Our graphic design and social media teams can carry the new brand into everything you put out.' },
    ],
  },

  'graphic-design-services-in-pune': {
    seoTitle: 'Graphic Design Services in Pune',
    description: 'Social media posts, flyers, brochures, packaging and ad creatives designed by PodShot in Pune, all matched to your brand.',
    intro: {
      title: 'Graphic Design Services in Pune',
      tags: ['Social', 'Print', 'Packaging'],
      text: 'From a single flyer to a month of social posts, we design everything your brand puts out so it looks like it came from the same place.',
      lead: 'People judge quality by what they see first. Clean, consistent design makes a small business look established.',
      paragraphs: [
        'Our designers work alongside our marketing and video team, so your posts, ads and print pieces all follow the same plan and the same look.',
        'You can come to us for a one-off design or a regular monthly set. Either way, every design starts with what it needs to achieve.',
      ],
      list: ['Social media creatives', 'Ad designs', 'Flyers and brochures', 'Packaging and labels', 'Presentations', 'Print-ready files'],
    },
    sections: [
      {
        type: 'stackedCards', subtitle: 'What we design', title: 'Design for screen and print.', text: 'One team, one style, across everything your customers see.', items: [
          { title: 'Social media', icon: 'tji-instagram', text: 'Posts, carousels, story frames and highlight covers that match your brand and your content plan.', tags: ['Posts', 'Carousels'] },
          { title: 'Ad creatives', icon: 'tji-google', text: 'Banners and ad images in every size Meta and Google need, made to be clear and clickable.', tags: ['Meta', 'Google'] },
          { title: 'Print', icon: 'tji-service-5', text: 'Flyers, brochures, standees, menus and shop boards, sent as print-ready files.', tags: ['Flyers', 'Brochures'] },
          { title: 'Packaging', icon: 'tji-service-6', text: 'Boxes, labels and pouches that look good on a shelf and in a photo.', tags: ['Labels', 'Boxes'] },
          { title: 'Presentations', icon: 'tji-service-4', text: 'Company profiles and pitch decks that are easy to read and look professional.', tags: ['Decks', 'Profiles'] },
        ]
      },
      {
        type: 'stepRow', subtitle: 'How it works', title: 'From brief to final file.', text: 'Clear steps, so you always know where your design is.', steps: [
          { title: 'Brief', text: 'You tell us what it is for, and we ask the right questions.' },
          { title: 'First draft', text: 'We design a first version in your brand style.' },
          { title: 'Changes', text: 'You share feedback and we refine it.' },
          { title: 'Final files', text: 'You get files ready for print, web or social.' },
        ]
      },
      {
        type: 'proseRows', subtitle: 'Why it matters', title: 'Design that does a job.', text: 'Nice-looking is not enough. Every design we make has to work for your business.', items: [
          { title: 'Consistency builds trust', text: 'When your posts, flyers and packaging share the same colours and style, people start to recognise you without reading your name.' },
          { title: 'Clear beats clever', text: 'A design that is easy to read in one second does more than one that is clever but confusing. We keep the message first.' },
          { title: 'Made with your marketing', text: 'Because our designers sit with the people running your ads and social media, designs are made for where they will actually be used.' },
        ]
      },
    ],
    faqs: [
      { q: 'Can we order just one design?', a: 'Yes. We take one-off projects like a brochure or a set of flyers, as well as monthly design work.' },
      { q: 'How many changes are included?', a: 'We agree on a fair number of revision rounds before we start, so you know what to expect.' },
      { q: 'Do you handle printing?', a: 'We prepare print-ready files and can recommend printers in Pune. We do not print in-house.' },
      { q: 'We do not have a brand style yet. Is that a problem?', a: 'Not at all. We can set up a simple brand style first, or do a full logo and branding project if you need one.' },
    ],
  },

    'stationery-design-services-in-pune': {
    seoTitle: 'Stationery & Print Design Services in Pune | Business Cards, Brochures & Hoardings',
    description: 'Corporate stationery and large-format print design in Pune. Custom brochures, luxury visiting cards, outdoor flex hoardings, letterheads, and brand collateral by PodShot.',
    banner: {
      title: 'Stationery & Print Design Services in Pune',
      tags: ['Brochures', 'Business Cards', 'Hoardings & Flex'],
      text: 'From tactile executive business cards and high-finish corporate brochures to massive highway hoardings and outdoor flex banners. We design tangible print collateral engineered to make your brand memorable in the real world.',
      listTitle: 'What we deliver',
      list: [
        'Luxury business cards & executive visiting cards',
        'Bi-fold, tri-fold & multi-page corporate brochures',
        'Large-format outdoor hoardings & flex banners',
        'Official letterheads, envelopes & corporate suites',
        'Roll-up standees & event display canopies',
        '100% press-ready CMYK + bleed vector files',
      ],
      image: `${BASE_PATH}/images/service/stationery-hoarding-billboard.webp`,
    },
    sections: [
      {
        type: 'whyChoose',
        subtitle: 'Tactile Authority',
        title: 'Print you can feel, see, and remember.',
        text: 'In a screen-saturated world, physical touch creates credibility. When a client holds a premium 400 GSM soft-touch business card or passes a high-contrast highway hoarding, your business looks established, trustworthy, and authoritative.',
        image: `${BASE_PATH}/images/service/stationery-business-cards.webp`,
        items: [
          { title: 'CMYK & Pre-Press Calibration', text: 'Every file is built with exact CMYK color profiles, 300+ DPI vector resolution, precise bleed margins, and crop marks so the final print matches the screen.' },
          { title: 'Luxury Finishes & Paper Advice', text: 'We advise you on paper GSM weights, velvet soft-touch laminations, raised spot UV gloss, metallic gold/copper foil stamping, and textured stocks.' },
          { title: 'Scale & Viewing Distance', text: 'Whether it is a 2-inch business card held in hand or a 40-foot outdoor hoarding seen at 80 km/h, typography and visual hierarchy are crafted for instant impact.' },
          { title: 'Unified Brand Cohesion', text: 'Your business cards, brochures, envelopes, and outdoor flex banners match your website and digital identity down to the exact millimeter.' },
        ],
      },
      {
        type: 'serviceRows',
        subtitle: 'What We Design',
        title: 'Full-Spectrum Stationery, Print & Outdoor Signage',
        items: [
          {
            title: 'Brochure Design',
            tags: ['Bi-Fold', 'Tri-Fold', 'Catalogs'],
            points: [
              'Corporate company profiles and investor pitch booklets',
              'Bi-fold and tri-fold promotional brochures with custom fold maps',
              'Multi-page product catalogs and technical service datasheets',
              'Structured editorial layouts, typography grids, and saddle-stitch or perfect binding specs',
            ],
          },
          {
            title: 'Business Cards & Visiting Cards',
            tags: ['Executive', 'Foil Stamping', 'Spot UV'],
            points: [
              'Standard 85×55 mm, square, and custom die-cut dimensions',
              'Velvet soft-touch matte, textured linen, cotton, and kraft stocks (350–600 GSM)',
              'Raised spot UV gloss, blind debossing, and metallic gold/silver/copper foil accents',
              'Smart dynamic QR codes linking to instant vCards, digital portfolios, or WhatsApp chats',
            ],
          },
          {
            title: 'Hoardings & Outdoor Flex',
            tags: ['Billboards', 'Highways', 'Glow Signs'],
            points: [
              'Large-scale highway hoardings and high-visibility unipole billboard ads',
              'Frontlit and backlit heavy-duty outdoor flex banners with reinforced eyelets',
              'Retail shopfront glow signboards, 3D acrylic letters, and ACP fascia boards',
              'Construction site barricade wraps and real estate project boundary graphics',
            ],
          },
          {
            title: 'Corporate Office Stationery',
            tags: ['Letterheads', 'Envelopes', 'Invoices'],
            points: [
              'Official executive letterheads and continuation sheets (Print & Word/PDF formats)',
              'Branded corporate envelopes (Window, DL, C4, and C5 sizes)',
              'Invoice books, quotation sheets, delivery challans, and receipt vouchers',
              'Custom rubber stamps, official seal vector graphics, and certificate holders',
            ],
          },
          {
            title: 'Marketing Collateral & Handouts',
            tags: ['Flyers', 'Leaflets', 'Standees'],
            points: [
              'High-volume marketing flyers, leaflets, and door-to-door promotional pamphlets',
              'Roll-up pull-up standees for office receptions, conferences, and event booths',
              'Trade show exhibition backdrops, pop-up media walls, and promotional canopies',
              'Branded pocket presentation folders with die-cut card slots for proposals',
            ],
          },
          {
            title: 'Packaging, Bags & Brand Merchandise',
            tags: ['Paper Bags', 'ID Cards', 'Corporate Gifts'],
            points: [
              'Branded luxury kraft paper bags, matte laminated shopping bags, and cotton totes',
              'Employee ID cards, visitor access cards, and woven branded lanyards',
              'Corporate gift sets, customized executive diaries, metal pens, and desk calendars',
              'Product packaging labels, barcode stickers, and shipping box branding',
            ],
          },
        ],
      },
      

      {
        type: 'stepRow',
        subtitle: 'Our Workflow',
        title: 'From Brief to Press-Ready Production',
        text: 'We bridge the gap between creative graphic design and commercial printing technicalities.',
        steps: [
          { title: '1. Specs & Dimensions', text: 'We establish exact measurements, paper GSM, fold types, and printing method (offset, digital, screen, or flex).' },
          { title: '2. Concept & 3D Mockup', text: 'We design custom layouts and present them in photorealistic 3D mockups so you can see the real-world scale and finish.' },
          { title: '3. Proofing & Revisions', text: 'We fine-tune typography, proofread text, verify safety margins, and incorporate your feedback.' },
          { title: '4. Press-Ready Delivery', text: 'You receive vector press-ready PDFs with embedded fonts, 300+ DPI images, bleeds, trim marks, and color specifications.' },
        ],
      },
      {
        type: 'proseRows',
        subtitle: 'Why It Matters',
        title: 'The Technical Side of Commercial Print Design',
        text: 'Great print design requires technical precision that screen-only designers often overlook.',
        items: [
          { title: 'Zero Color Surprises (CMYK vs RGB)', text: 'Colors designed in RGB look dull or muddy when printed in CMYK ink. We design directly in calibrated CMYK color spaces, specify Pantone spot colors where needed, and ensure ink densities stay within press limits.' },
          { title: 'Bleed, Safe Zones & Crease Lines', text: 'Commercial cutting machines have slight shifts. Without proper 3mm bleed margins and safe zones, text gets sliced or white borders appear. Every file we deliver is mathematically guarded against cutting errors.' },
          { title: 'Scale-Engineered Typography', text: 'A font that looks legible on your phone can become unreadable on a passing highway hoarding or too small on a tri-fold brochure. We engineer typography scales for the exact viewing distance of each medium.' },
        ],
      },
    ],
    faqs: [
      { q: 'Do you handle the actual printing as well as the design?', a: 'We specialize in design and pre-press production. We deliver 100% press-ready files that any commercial printer or flex vendor can produce without questions. We also recommend trusted high-end offset and digital printers in Pune and can coordinate directly with your vendor.' },
      { q: 'What files will I receive upon project completion?', a: 'You receive press-ready vector PDF files with embedded fonts, CMYK profiles, bleed marks, and trim lines, along with high-res PNG/JPEG previews and editable open source files upon request.' },
      { q: 'Can you design a complete corporate stationery package for our new brand?', a: 'Yes. We offer complete corporate identity suites including business cards, letterheads, continuation sheets, envelopes, presentation folders, ID cards, and email signatures designed in one unified style.' },
      { q: 'How do you design hoardings and flex banners to ensure they look sharp at 40 feet?', a: 'Large-format hoardings are engineered using vector graphics and high-resolution imagery scaled specifically to the viewing distance, with high-contrast text hierarchies readable in under 3 seconds from moving traffic.' },
      { q: 'Can you work with our existing brand guidelines and logo?', a: 'Yes. If you have an established logo and brand manual, we adhere strictly to your color codes, typography standards, and spacing rules across all print and outdoor collateral.' },
    ],
  },

  'video-production-services-in-pune': {
    seoTitle: 'Video Production Services in Pune',
    description: 'Brand films, product videos, explainers and social videos, scripted, shot and edited in Pune by the PodShot team.',
    intro: {
      title: 'Video Production Services in Pune',
      tags: ['Brand films', 'Product', 'Explainers'],
      text: 'We write, shoot and edit videos that explain what you do and make people want to know more.',
      lead: 'Video is the fastest way to show what your business feels like. One good video can be used for months, across your website, ads and social pages.',
      paragraphs: [
        'Our team handles every step in-house: the idea, the script, the shoot, the edit, the music and the captions. You deal with one team from start to finish.',
        'Because the same team also runs ads and social media, we plan each video for where it will be watched, whether that is a website banner, a YouTube ad or a vertical reel.',
      ],
      list: ['Idea and script', 'Shoot with crew and equipment', 'Editing and colour', 'Music and sound', 'Captions and subtitles', 'Versions for every platform'],
    },
    sections: [
      {
        type: 'cardGrid', subtitle: 'What we make', title: 'Videos for every need.', items: [
          { title: 'Brand films', tags: ['Story', 'About us'], label: 'Show who you are' },
          { title: 'Product videos', tags: ['Demo', 'Features'], label: 'Show how it works' },
          { title: 'Explainer videos', tags: ['Animated', 'Simple'], label: 'Make it easy to understand' },
          { title: 'Ad videos', tags: ['YouTube', 'Meta'], label: 'Made to sell' },
          { title: 'Testimonial videos', tags: ['Customers', 'Trust'], label: 'Let customers speak' },
          { title: 'Podcast and interviews', tags: ['Talking head', 'Studio'], label: 'Build authority' },
        ]
      },
      {
        type: 'processCards', subtitle: 'Our process', title: 'How we make your video', steps: [
          { title: 'Brief', text: 'We learn what the video is for and who will watch it.' },
          { title: 'Script', text: 'We write the script and share it for your approval.' },
          { title: 'Shoot plan', text: 'Locations, people, props and a shot list, planned in advance.' },
          { title: 'Shoot', text: 'Our crew shoots at your location or in a studio.' },
          { title: 'Edit', text: 'Editing, colour, music, sound and captions.' },
          { title: 'Deliver', text: 'Final video in every size you need.' },
        ]
      },
      {
        type: 'proseRows', subtitle: 'Why PodShot', title: 'One team, start to finish.', text: 'Most video projects slow down when work passes between a writer, a crew and an editor. Ours stays with one team.', items: [
          { title: 'Script first', text: 'Good videos are planned before the camera comes out. We spend time on the script so the shoot is quick and the message is clear.' },
          { title: 'Made for the platform', text: 'A website video, a YouTube ad and a reel need different lengths and framing. We plan for that at the shoot, not after.' },
          { title: 'More from one shoot', text: 'We capture extra footage and cut shorter clips from the main video, so one shoot gives you content for weeks.' },
        ]
      },
    ],
    faqs: [
      { q: 'Do you shoot at our location?', a: 'Yes. We shoot at your office, shop, clinic or site, or in a studio if that suits the video better.' },
      { q: 'Do you write the script too?', a: 'Yes. We write the script and plan the shots, then share them with you for approval before the shoot.' },
      { q: 'Can you make animated explainers?', a: 'Yes. For ideas that are hard to film, we can make simple animated or motion graphic videos.' },
      { q: 'Will we get short clips for social media?', a: 'Yes. We can cut vertical reels and short clips from the main video so you get more use out of one shoot.' },
    ],
  },

  'content-writing-services-in-pune': {
    seoTitle: 'Content Writing Services in Pune',
    description: 'Website copy, blogs, social captions and video scripts written by PodShot in plain, clear words that help Pune businesses rank and sell.',
    intro: {
      title: 'Content Writing Services in Pune',
      tags: ['Website copy', 'Blogs', 'Scripts'],
      text: 'Clear words sell. We write website pages, blogs, captions and scripts that sound like you and help customers decide.',
      lead: 'Customers do not read every word. They scan for the answer to one question: can this business help me? Good writing answers it fast.',
      paragraphs: [
        'We write in plain, friendly language, without filler or jargon. Every piece has a job, whether that is ranking on Google, explaining a service or getting someone to call.',
        'Our writers work with our SEO and social media teams, so your content is planned around what people search for and what they engage with.',
      ],
      list: ['Website pages', 'Blog articles', 'Social media captions', 'Video and reel scripts', 'Email copy', 'Editing and proofreading'],
    },
    sections: [
      {
        type: 'serviceRows', subtitle: 'What we write', title: 'Words for every place your customers look', items: [
          { title: 'Website copy', tags: ['Pages', 'SEO'], points: ['Home, about and service pages', 'Location and landing pages', 'Clear calls to action', 'Written to rank and to read well'] },
          { title: 'Blogs and articles', tags: ['Guides', 'Tips'], points: ['Topics people actually search', 'Helpful, practical guides', 'Internal links to your services', 'A steady monthly schedule'] },
          { title: 'Social and scripts', tags: ['Captions', 'Reels'], points: ['Captions in your brand voice', 'Hooks for reels', 'Scripts for videos and ads', 'Hashtag sets'] },
          { title: 'Editing', tags: ['Proofreading', 'Rewrites'], points: ['Fixing grammar and flow', 'Shortening long pages', 'Making copy clearer', 'Keeping a consistent tone'] },
        ]
      },
      {
        type: 'guide', subtitle: 'How we write', title: 'Good content, explained', blocks: [
          ['p', 'Content writing is not about filling a page with words. It is about giving the right person the answer they were looking for, in a way that makes them trust you.'],
          ['h3', 'We start with what people search'],
          ['p', 'Before we write, we look at what your customers type into Google and ask on social media. That tells us which topics to cover and which words to use, so your pages show up and stay relevant.'],
          ['h3', 'We write the way your customers talk'],
          ['p', 'Short sentences, simple words and real examples. If a customer would not say it, we do not write it. This keeps your brand friendly and easy to understand.'],
          ['h3', 'Every piece has one job'],
          ['ul', ['Service pages: explain the service and get an enquiry', 'Blogs: answer a question and build trust', 'Captions: start a conversation', 'Scripts: hold attention for the first few seconds']],
          ['quote', 'If a sentence does not help the reader, it does not belong on the page.'],
          ['p', 'Want your website and blogs to sound clearer and work harder? Book a free call and we will review one page for you.'],
        ]
      },
    ],
    faqs: [
      { q: 'Will the content be written for SEO?', a: 'Yes. We research keywords and structure each page for search, while keeping it natural to read.' },
      { q: 'Can you write in our brand voice?', a: 'Yes. We start by learning how you talk to customers, then keep that tone consistent across everything we write.' },
      { q: 'Do you use AI to write?', a: 'We may use AI tools for research and first ideas, but every piece is written, checked and edited by a person on our team.' },
      { q: 'Do you write in Hindi or Marathi?', a: 'Tell us what your audience needs and we will let you know what we can do for your project.' },
    ],
  },

  // ───────────────────────────── Strategy and data ─────────────────────────────

  'digital-strategy-services-in-pune': {
    seoTitle: 'Digital Strategy Services in Pune',
    description: 'A clear digital marketing plan for your business: goals, audience, channels, budget and a month-by-month roadmap, made by PodShot in Pune.',
    intro: {
      title: 'Digital Strategy Services in Pune',
      tags: ['Goals', 'Channels', 'Roadmap'],
      text: 'Before you spend on ads, posts or a new website, it helps to know which ones will actually move your business forward.',
      lead: 'Many businesses try a bit of everything online and wonder why nothing sticks. A strategy decides what to do first, what to skip and how to know it is working.',
      paragraphs: [
        'We look at your business, your customers, your competitors and what you are already doing online. Then we put together a plan that fits your goals and your budget.',
        'You get a clear document and a roadmap you can follow, whether you work with us on the next steps or not.',
      ],
      leadLabel: 'Why a strategy',
      list: ['Business and goal review', 'Audience and competitor research', 'Channel recommendations', 'Budget split', 'Month-by-month roadmap', 'Measures of success'],
    },
    sections: [
      {
        type: 'proseRows', subtitle: 'What the plan covers', title: 'Five questions, clearly answered.', text: 'A good digital strategy answers a few simple questions. Here is what yours will cover.', items: [
          { title: 'What are we trying to achieve?', text: 'We turn broad goals like "more customers" into clear targets, such as more calls from Google, more store visits or more online orders.' },
          { title: 'Who are we talking to?', text: 'We describe your best customers: what they need, where they spend time online and what makes them choose one business over another.' },
          { title: 'Where should we show up?', text: 'Search, social media, ads, WhatsApp or email. We recommend the channels that fit your customers, and explain which ones to leave for later.' },
          { title: 'What should we say?', text: 'The main message, the offers and the kind of content that will make your business stand out from the others in your area.' },
          { title: 'How will we know it is working?', text: 'A short list of numbers to watch every month, so decisions are based on results rather than guesses.' },
        ]
      },
      {
        type: 'processCards', subtitle: 'Our process', title: 'How we build your strategy', steps: [
          { title: 'Discovery call', text: 'We learn about your business, goals and what you have tried.' },
          { title: 'Research', text: 'We study your audience, competitors and current online presence.' },
          { title: 'Plan and walkthrough', text: 'We put together channels, messages, budget and timeline, then take you through it.' },
        ]
      },
      {
        type: 'guide', subtitle: 'Strategy, explained', title: 'Why a plan saves money', blocks: [
          ['p', 'Without a plan, marketing turns into a list of things to try. Each one costs time and money, and it is hard to tell which ones are working.'],
          ['h3', 'Focus beats doing everything'],
          ['p', 'A small business does not need to be on every platform. Doing two channels well almost always beats doing six channels badly. The strategy tells you which two to start with.'],
          ['h3', 'Budget goes where it counts'],
          ['p', 'When you know which channels bring customers, you can move money away from what is not working. Over a year, that adds up to a real difference.'],
          ['h3', 'Everyone works from the same page'],
          ['p', 'Your team, your designer and any agency you hire can all follow the same plan, so the message stays consistent.'],
          ['quote', 'The best marketing plan is the one you can actually follow every month.'],
          ['p', 'Not sure where to start online? Book a free call and we will tell you what we would focus on first.'],
        ]
      },
    ],
    faqs: [
      { q: 'Do we have to work with you after the strategy?', a: 'No. The plan is yours to keep and use. Many clients do ask us to carry it out, but there is no obligation.' },
      { q: 'How long does it take to make the strategy?', a: 'It depends on the size of your business and how much research is needed. We will give you a clear timeline after the first call.' },
      { q: 'Is this only for new businesses?', a: 'No. Established businesses often need a strategy most, especially if they have been trying different things without clear results.' },
      { q: 'Will the plan include a budget?', a: 'Yes. We suggest how to split your marketing budget across channels, based on what you are comfortable spending.' },
    ],
  },

  'data-analytics-services-in-pune': {
    seoTitle: 'Marketing Data Analytics Services in Pune',
    description: 'Tracking, dashboards and reports that show which marketing brings customers. PodShot sets up Google Analytics, conversion tracking and simple dashboards.',
    intro: {
      title: 'Data Analytics Services in Pune',
      tags: ['Tracking', 'Dashboards', 'Insights'],
      text: 'You cannot improve what you cannot see. We set up tracking and simple dashboards so you know exactly what your marketing is doing.',
      lead: 'Most businesses have the data already. It is just spread across Google, Meta, the website and spreadsheets, so nobody looks at it.',
      paragraphs: [
        'We connect your tools, make sure every enquiry, call and sale is tracked properly, and bring the numbers that matter into one simple dashboard.',
        'Then we help you read it. Each month you get a short summary of what changed, why it probably changed and what to do next.',
      ],
      leadLabel: 'The problem',
      list: ['Tracking audit', 'Google Analytics setup', 'Conversion and call tracking', 'One combined dashboard', 'Monthly insights report', 'Recommendations'],
    },
    sections: [
      {
        type: 'stackedCards', subtitle: 'What we set up', title: 'From scattered numbers to one clear view.', text: 'Each part makes the next one possible. Without good tracking, reports cannot be trusted.', items: [
          { title: 'Tracking audit', icon: 'tji-check', text: 'We check what is and is not being measured on your website, ads and social pages today.', tags: ['Audit', 'Gaps'] },
          { title: 'Analytics setup', icon: 'tji-service-4', text: 'Google Analytics and Tag Manager set up properly, with the events that matter to your business.', tags: ['GA4', 'Tag Manager'] },
          { title: 'Conversion tracking', icon: 'tji-growth', text: 'Form fills, calls, WhatsApp clicks and purchases tracked and linked to your ads.', tags: ['Leads', 'Sales'] },
          { title: 'Dashboards', icon: 'tji-signal', text: 'One simple dashboard that pulls your key numbers together, updated automatically.', tags: ['Looker Studio', 'Live'] },
          { title: 'Insights', icon: 'tji-chat', text: 'A monthly summary in plain words: what happened, why, and what to change.', tags: ['Monthly', 'Actions'] },
        ]
      },
      {
        type: 'guide', subtitle: 'Analytics, explained', title: 'What good tracking tells you', blocks: [
          ['p', 'Analytics is not about collecting more numbers. It is about answering a few important questions with confidence.'],
          ['h3', 'Which channel brings customers?'],
          ['p', 'Clicks and likes are easy to count. Customers are harder. With proper tracking, you can see which ads, posts and pages actually lead to an enquiry or a sale.'],
          ['h3', 'Where do people drop off?'],
          ['p', 'If many people visit a page but few get in touch, something on that page needs work. Data shows you where to look, so you fix the right thing.'],
          ['h3', 'Is it getting better?'],
          ['p', 'Comparing month to month shows whether changes are helping. That turns marketing from guesswork into steady improvement.'],
          ['quote', 'The goal is not a prettier report. It is a better decision next month.'],
          ['p', 'Not sure if your tracking is working? Book a free call and we will check the basics for you.'],
        ]
      },
      {
        type: 'results', subtitle: 'What you get', title: 'Numbers you can trust and act on.', text: 'We keep reports short and focused on decisions.', points: ['Every enquiry and call tracked to its source', 'One dashboard instead of five different tools', 'A monthly summary in plain language', 'Clear next steps, not just charts', 'Access to your data, always'] },
    ],
    faqs: [
      { q: 'Which tools do you work with?', a: 'Mainly Google Analytics, Google Tag Manager, Google Ads, Meta Ads and Looker Studio. We can connect other tools depending on what you use.' },
      { q: 'Do we own the data and dashboards?', a: 'Yes. Everything is set up in your accounts, and you keep full access.' },
      { q: 'Can you track phone calls and WhatsApp clicks?', a: 'Yes. We can track clicks on your phone number and WhatsApp button, and call tracking can be added if you need more detail.' },
      { q: 'Is this only for businesses running ads?', a: 'No. Any business with a website can benefit from knowing where visitors come from and what they do.' },
    ],
  },

  'business-consulting-services-in-pune': {
    seoTitle: 'Business Consulting Services in Pune',
    description: 'Practical business consulting for small businesses in Pune: offers, pricing, customer journey and processes, with a clear list of next steps from PodShot.',
    intro: {
      title: 'Business Consulting Services in Pune',
      tags: ['Growth', 'Offers', 'Process'],
      text: 'Sometimes marketing is not the problem. We look at the whole picture and help you fix what is holding growth back.',
      lead: 'When you are busy running a business, it is hard to step back and see it from the outside. That outside view is what we bring.',
      paragraphs: [
        'We work with owners of small and growing businesses in Pune. We look at your offers, pricing, how customers find and buy from you, and how your team handles each step.',
        'Then we give you a short, practical list of changes, in order of what will make the biggest difference first.',
      ],
      leadLabel: 'An outside view',
      list: ['Business review', 'Offer and pricing check', 'Customer journey map', 'Process review', 'Priority action plan', 'Follow-up sessions'],
    },
    sections: [
      {
        type: 'proseRows', subtitle: 'Where we help', title: 'The areas we look at.', text: 'Every business is different, but growth usually gets stuck in one of these places.', items: [
          { title: 'Your offers', text: 'Are your products and services easy to understand and easy to say yes to? Small changes to how you package an offer can change how many people buy.' },
          { title: 'Your pricing', text: 'We look at how your prices compare, how they are shown, and whether simple options like packages or plans would suit your customers better.' },
          { title: 'Your customer journey', text: 'From the first time someone hears about you to the moment they pay, we map each step and spot where people get lost or lose interest.' },
          { title: 'Your processes', text: 'How enquiries are answered, how follow-ups happen and how work is delivered. Fixing slow or missed steps often brings quick wins.' },
        ]
      },
      {
        type: 'stepRow', subtitle: 'How it works', title: 'Simple, practical and focused.', text: 'No thick reports you will never read. Just clear findings and next steps.', steps: [
          { title: 'Conversation', text: 'We understand your business, goals and frustrations.' },
          { title: 'Review', text: 'We look at your offers, numbers, marketing and processes.' },
          { title: 'Action plan', text: 'A short list of changes, ranked by impact.' },
          { title: 'Follow-up', text: 'We check in to help you put the plan into action.' },
        ]
      },
      {
        type: 'guide', subtitle: 'Consulting, explained', title: 'When an outside view helps', blocks: [
          ['p', 'Business consulting sounds big, but for a small business it usually means one thing: someone experienced looking at how you work and telling you honestly what to change.'],
          ['h3', 'Signs it might be time'],
          ['ul', ['Sales have stopped growing, even though you are busy', 'Marketing brings enquiries, but few turn into customers', 'You are not sure your prices are right', 'Too much depends on you personally', 'You want to grow but do not know what to do first']],
          ['h3', 'Why marketing and consulting go together'],
          ['p', 'Because we also run marketing for businesses, we see where good marketing fails because of something else, like a slow reply, a confusing offer or a weak follow-up. Fixing those makes every rupee spent on marketing work harder.'],
          ['quote', 'Growth is often about fixing a few small things, not doing something big.'],
          ['p', 'Want a fresh pair of eyes on your business? Book a free call and tell us what feels stuck.'],
        ]
      },
    ],
    faqs: [
      { q: 'What kind of businesses do you consult for?', a: 'Mostly small and growing local businesses such as clinics, cafes, coaching institutes, salons, retail shops and service companies.' },
      { q: 'Is this a one-time session or ongoing?', a: 'Both are possible. Many businesses start with a review and action plan, then add follow-up sessions if they want help putting it into practice.' },
      { q: 'Do you only give advice, or do you help carry it out?', a: 'We give you a clear plan, and where it involves marketing, content or your website, our team can help you carry it out.' },
      { q: 'Will our business information stay private?', a: 'Yes. Anything you share with us is kept confidential.' },
    ],
  },

  // ───────────────────────────── Development ─────────────────────────────

  "mobile-app-development-company-pune": {
  "seoTitle": "Mobile App Development Company in Pune | PodShot Studio & Creative Agency",
  "description": "Custom Android and iOS mobile app development in Pune. Scalable, high-performance, and intuitive native and cross-platform apps by PodShot.",
  "intro": {
    "title": "Mobile App Development Company in Pune",
    "tags": [
      "Android",
      "iOS",
      "Cross-Platform"
    ],
    "text": "PodShot Studio & Creative Agency provides cutting-edge mobile app development services in Pune for iOS and Android. No matter how complex your vision, our engineers design and build robust, secure, and user-friendly mobile applications that power seamless digital experiences.",
    "lead": "Over 80% of digital traffic happens on mobile devices. We build apps that load instantly, feel intuitive and keep your business one tap away from customers.",
    "paragraphs": [
      "Whether you need a native iOS app in Swift, an Android app in Kotlin, or a cross-platform solution in Flutter or React Native, our team handles the full lifecycle.",
      "From wireframes and UI/UX prototypes to backend APIs, database architecture, and App Store and Play Store launch, we ensure a reliable, scalable product."
    ],
    "list": [
      "Native iOS (Swift) & Android (Kotlin) apps",
      "Cross-platform apps (Flutter & React Native)",
      "UI/UX wireframing & interactive prototypes",
      "Secure backend API & database architecture",
      "App Store and Google Play publishing",
      "Maintenance, monitoring, and regular updates"
    ]
  },
  "sections": [
    {
      "type": "iconCards",
      "subtitle": "Mobile Excellence",
      "title": "Engineered for performance, built for scale",
      "text": "Over 80% of digital traffic in India originates on mobile devices. A custom mobile app establishes an authoritative brand presence, streamlines operational workflows, and keeps your services one tap away from customers.",
      "items": [
        {
          "icon": "tji-service-3",
          "title": "Tailored Business Logic",
          "text": "Custom applications built around your exact business model, operations, and customer workflows."
        },
        {
          "icon": "tji-virtual-labs",
          "title": "Modern Tech Stack",
          "text": "High-performance engineering with Flutter, React Native, Swift, Kotlin, Node.js, and cloud backends."
        },
        {
          "icon": "tji-creative",
          "title": "Human-Centered UI/UX",
          "text": "Intuitive screen designs and frictionless navigation that keep user retention and engagement high."
        },
        {
          "icon": "tji-growth",
          "title": "Security & Scalability",
          "text": "Enterprise encryption, secure authentication, and cloud infrastructure ready to handle millions of requests."
        }
      ]
    },
    {
      "type": "guide",
      "subtitle": "App Architecture",
      "title": "Strategic mobile engineering from concept to store launch",
      "blocks": [
        [
          "p",
          "Building a successful mobile application requires far more than clean code. It demands a thorough understanding of user psychology, mobile platform guidelines, robust API performance, and seamless offline-online synchronisation."
        ],
        [
          "h3",
          "Mobile app development specializations"
        ],
        [
          "ul",
          [
            "Customer-Facing Apps: E-commerce stores, appointment booking, clinic patient apps, fitness portals, and community platforms.",
            "Internal Business Tools: Field staff tracking, delivery management, warehouse inventory logging, and CRM mobile apps.",
            "Cross-Platform Development: Single codebase solutions using Flutter or React Native that deliver identical native performance on both Android and iPhone at reduced cost.",
            "Native Development: High-performance native iOS (Swift) and Android (Kotlin) development for compute-intensive or device-hardware heavy projects."
          ]
        ],
        [
          "h3",
          "Full lifecycle app delivery"
        ],
        [
          "p",
          "From initial wireframes and UI design to backend cloud architecture, rigorous testing, and official store publication on Google Play and Apple App Store, PodShot manages the complete engineering lifecycle."
        ]
      ]
    },
    {
      "type": "processCards",
      "subtitle": "Development Process",
      "title": "How we build world-class mobile apps",
      "steps": [
        {
          "title": "Discovery & Wireframing",
          "text": "We map out user personas, feature scopes, and design interactive Figma prototypes."
        },
        {
          "title": "UI/UX Visual Design",
          "text": "We craft beautiful, responsive screens with intuitive micro-interactions and smooth gestures."
        },
        {
          "title": "Frontend & Backend Build",
          "text": "Our engineers develop frontend views and integrate scalable REST or GraphQL APIs."
        },
        {
          "title": "Rigorous QA & Device Testing",
          "text": "We test across dozens of real Android and iOS devices for speed, responsiveness, and bugs."
        },
        {
          "title": "Store Launch & Handover",
          "text": "We handle store submissions, compliance checks, and provide documentation and maintenance."
        }
      ]
    },
    {
      "type": "cardGrid",
      "subtitle": "Who It Is For",
      "title": "Businesses we help grow",
      "items": [
        {
          "title": "Startups & Growing Brands",
          "tags": [
            "Fast Launch"
          ],
          "label": "Scale efficiently from day one"
        },
        {
          "title": "Local Businesses & Clinics",
          "tags": [
            "Local Market"
          ],
          "label": "More enquiries and local footfall"
        },
        {
          "title": "E-commerce & Retail",
          "tags": [
            "Sales Growth"
          ],
          "label": "Higher conversions and customer retention"
        },
        {
          "title": "Enterprises & B2B",
          "tags": [
            "Scale & Security"
          ],
          "label": "Robust systems and predictable ROI"
        }
      ]
    }
  ],
  "faqs": [
    {
      "q": "Should we build a Native app or a Cross-Platform app?",
      "a": "For most startups and business apps, cross-platform frameworks like Flutter or React Native offer the best balance of native performance, unified codebase, and faster time-to-market."
    },
    {
      "q": "Do you help publish the app on Google Play and Apple App Store?",
      "a": "Yes, we take care of the entire store deployment process including developer account setup, privacy policy compliance, screenshots, and review guidelines."
    },
    {
      "q": "Will I own the complete source code and intellectual property?",
      "a": "Yes. Upon project completion and final handover, 100% of the source code, repository access, and intellectual property belong exclusively to you."
    },
    {
      "q": "Do you offer ongoing post-launch maintenance?",
      "a": "Yes, we provide flexible monthly maintenance packages covering OS compatibility updates, performance monitoring, bug fixes, and feature additions."
    }
  ]
},

  "ecommerce-website-development-company-pune": {
  "seoTitle": "E-Commerce Website Development Company in Pune | PodShot Studio & Creative Agency",
  "description": "Scale your online sales with high-converting custom e-commerce stores in Pune. Shopify, WooCommerce, and custom web stores by PodShot.",
  "intro": {
    "title": "E-Commerce Website Development Company in Pune",
    "tags": [
      "Online Store",
      "Payment Gateway",
      "Catalog"
    ],
    "text": "PodShot Studio & Creative Agency transforms your online business with expert e-commerce website and app development in Pune. We build fast, secure, and visually stunning digital storefronts with frictionless checkout experiences that turn visitors into repeat buyers.",
    "lead": "An online store is not just a digital catalog; it is your 24/7 revenue engine. We build e-commerce platforms engineered to convert visitors into paying customers.",
    "paragraphs": [
      "We work across Shopify, WooCommerce, and custom web applications to build fast, secure online stores with frictionless checkout and multi-gateway payment integration.",
      "Every store is optimized for mobile shoppers, inventory management, automated shipping notifications, and high search engine visibility."
    ],
    "list": [
      "Custom e-commerce store design",
      "Shopify, WooCommerce & custom builds",
      "Secure Indian & international payment gateways",
      "Automated inventory & order tracking",
      "Mobile-first responsive checkout flows",
      "SEO-friendly product catalogs & filters"
    ]
  },
  "sections": [
    {
      "type": "iconCards",
      "subtitle": "E-Commerce Growth",
      "title": "Digital stores engineered for conversions and sales",
      "text": "Success in e-commerce requires more than just listing products online. You need lightning-fast load times, effortless navigation, trusted payment options, and frictionless checkout that minimizes cart abandonment.",
      "items": [
        {
          "icon": "tji-collaboration",
          "title": "Conversion-Focused UX",
          "text": "Designed specifically to guide buyers from product discovery to purchase with minimal friction."
        },
        {
          "icon": "tji-service-3",
          "title": "Seamless Payments",
          "text": "Integrated with Razorpay, Cashfree, Stripe, PayU, and UPI for instant, secure transactions."
        },
        {
          "icon": "tji-growth",
          "title": "Fast Mobile Performance",
          "text": "Sub-second mobile loading speeds ensuring you never lose shoppers to laggy pages."
        },
        {
          "icon": "tji-creative",
          "title": "Automated Operations",
          "text": "Real-time sync with shipping aggregators (Shiprocket), inventory systems, and WhatsApp alerts."
        }
      ]
    },
    {
      "type": "guide",
      "subtitle": "Store Architecture",
      "title": "Comprehensive e-commerce solutions for brands",
      "blocks": [
        [
          "p",
          "“We can’t just open a website and expect people to flow in. To succeed, you have to create traffic and provide a buying experience so smooth that shoppers return again and again.”"
        ],
        [
          "h3",
          "Our e-commerce development capabilities"
        ],
        [
          "ul",
          [
            "Shopify Development: Custom theme creation, app integrations, and optimized checkout experiences for modern direct-to-consumer (D2C) brands.",
            "WooCommerce Solutions: Flexible, content-rich WordPress e-commerce setups with complete data ownership and endless customization options.",
            "Custom Headless E-Commerce: High-scale Next.js and Node.js e-commerce architectures for enterprise brands requiring ultra-fast speeds and complex logic.",
            "B2B Portals: Custom wholesale pricing, bulk order forms, tiered access levels, and quotation systems."
          ]
        ],
        [
          "h3",
          "Integrated logistics and automated communication"
        ],
        [
          "p",
          "We connect your store with leading logistics partners, automated WhatsApp order confirmations, abandoned cart recovery emails, and real-time tracking dashboards."
        ]
      ]
    },
    {
      "type": "processCards",
      "subtitle": "Store Build Process",
      "title": "How we build high-converting online stores",
      "steps": [
        {
          "title": "Store Architecture",
          "text": "We plan product categories, attribute filters, inventory structures, and user journeys."
        },
        {
          "title": "Custom UI/UX Design",
          "text": "We design high-impact homepage layouts, product detail pages, and frictionless checkout flows."
        },
        {
          "title": "Development & Integration",
          "text": "We configure payment gateways, shipping APIs, tax configurations, and coupon engines."
        },
        {
          "title": "Testing & Security Audit",
          "text": "We test end-to-end checkout, payment callbacks, SSL encryption, and mobile performance."
        },
        {
          "title": "Launch & Growth Support",
          "text": "We push the store live, set up conversion tracking pixels, and train your team on managing orders."
        }
      ]
    },
    {
      "type": "cardGrid",
      "subtitle": "Who It Is For",
      "title": "Businesses we help grow",
      "items": [
        {
          "title": "Startups & Growing Brands",
          "tags": [
            "Fast Launch"
          ],
          "label": "Scale efficiently from day one"
        },
        {
          "title": "Local Businesses & Clinics",
          "tags": [
            "Local Market"
          ],
          "label": "More enquiries and local footfall"
        },
        {
          "title": "E-commerce & Retail",
          "tags": [
            "Sales Growth"
          ],
          "label": "Higher conversions and customer retention"
        },
        {
          "title": "Enterprises & B2B",
          "tags": [
            "Scale & Security"
          ],
          "label": "Robust systems and predictable ROI"
        }
      ]
    }
  ],
  "faqs": [
    {
      "q": "Which e-commerce platform should I choose: Shopify or WooCommerce?",
      "a": "Shopify is ideal for brands wanting an all-in-one, low-maintenance hosted solution. WooCommerce offers complete control, no platform transaction fees, and deep customizability on your own server."
    },
    {
      "q": "Which payment gateways can be integrated?",
      "a": "We integrate all major Indian and global gateways including Razorpay, Cashfree, PayU, Stripe, PayPal, and Cash on Delivery (COD) verification."
    },
    {
      "q": "Will the e-commerce store be optimized for mobile phones?",
      "a": "Yes. 100% of our e-commerce designs are mobile-first, recognizing that over 80% of online shopping happens on smartphones."
    },
    {
      "q": "Do you help set up shipping and courier integrations?",
      "a": "Yes, we integrate courier aggregators like Shiprocket, Delhivery, and Blue Dart for automated airway bill (AWB) generation and tracking."
    }
  ]
},

  "software-development-services-pune": {
  "seoTitle": "Software Development Company in Pune | PodShot Studio & Creative Agency",
  "description": "Custom software development services in Pune. Tailored web applications, enterprise software, and scalable digital systems by PodShot.",
  "intro": {
    "title": "Software Development Services in Pune",
    "tags": [
      "Custom Systems",
      "Web Apps",
      "Enterprise"
    ],
    "text": "PodShot Studio & Creative Agency is a top-rated custom software development company in Pune. We build secure, scalable, and intuitive software solutions and web applications tailored to solve unique operational bottlenecks and accelerate business efficiency.",
    "lead": "Off-the-shelf software rarely fits a growing business perfectly. We build bespoke web applications and SaaS platforms tailored to your exact workflows.",
    "paragraphs": [
      "Our software engineers use modern frameworks including React, Node.js, Next.js, and cloud backends to deliver fast, secure and reliable business software.",
      "We focus on clean code, automated testing, bank-grade encryption, and future-proof architectures that grow with your company."
    ],
    "list": [
      "Custom web application development",
      "Enterprise software & management tools",
      "SaaS platform architecture & development",
      "Database design & cloud API integrations",
      "Legacy software modernization & migration",
      "Ongoing code maintenance & DevOps support"
    ]
  },
  "sections": [
    {
      "type": "iconCards",
      "subtitle": "Custom Engineering",
      "title": "Software built around your business, not vice versa",
      "text": "Off-the-shelf software rarely fits your exact operational needs and often charges hefty recurring licensing fees. Custom software gives you complete ownership, automated workflows, and an unbeatable competitive edge.",
      "items": [
        {
          "icon": "tji-virtual-labs",
          "title": "Custom Business Logic",
          "text": "Engineered specifically around your exact processes, eliminating manual paperwork and spreadsheets."
        },
        {
          "icon": "tji-service-4",
          "title": "Full Code Ownership",
          "text": "Zero recurring per-user licensing fees. You own 100% of the software and intellectual property."
        },
        {
          "icon": "tji-growth",
          "title": "Scalable Architecture",
          "text": "Built on modern cloud architectures ready to support thousands of concurrent users and operations."
        },
        {
          "icon": "tji-chat",
          "title": "Enterprise Security",
          "text": "Role-based access controls, data encryption, regular backups, and complete audit logging."
        }
      ]
    },
    {
      "type": "guide",
      "subtitle": "Enterprise Software",
      "title": "Reliable, secure software systems built in Pune",
      "blocks": [
        [
          "p",
          "Modern businesses run on custom software. Whether you need an internal operations portal, a client collaboration system, a bespoke billing platform, or a software-as-a-service (SaaS) product, PodShot delivers robust, clean, and maintainable software."
        ],
        [
          "h3",
          "Our core software development specializations"
        ],
        [
          "ul",
          [
            "Enterprise Resource Planning (ERP): Centralizing operations, stock management, procurement, billing, and staff workflows.",
            "Customer Relationship Management (CRM): Custom lead pipelines, automated task assignments, call logs, and client history tracking.",
            "Web Portals & Dashboards: Real-time analytics, user management, secure file sharing, and self-service portals.",
            "API & Third-Party Integrations: Connecting disparate software systems, accounting packages (Tally/Zoho), and payment systems."
          ]
        ],
        [
          "h3",
          "Agile development with clean code standards"
        ],
        [
          "p",
          "We develop using modular, documented code following industry best practices. With comprehensive testing and continuous deployment pipelines, our software is stable, fast, and easy to maintain long-term."
        ]
      ]
    },
    {
      "type": "processCards",
      "subtitle": "Engineering Lifecycle",
      "title": "From requirements blueprint to production release",
      "steps": [
        {
          "title": "Business Discovery",
          "text": "We interview stakeholders, map existing bottlenecks, and create a comprehensive technical specification."
        },
        {
          "title": "Architecture & UX Design",
          "text": "We design database schemas, API structures, and interactive wireframes for every user role."
        },
        {
          "title": "Sprint-Based Development",
          "text": "We develop in focused 2-week agile sprints, providing regular demo releases for feedback."
        },
        {
          "title": "Quality Assurance & Security",
          "text": "We conduct rigorous stress testing, vulnerability scanning, and cross-browser quality checks."
        },
        {
          "title": "Deployment & Training",
          "text": "We deploy to cloud infrastructure (AWS/DigitalOcean), conduct staff training, and provide support."
        }
      ]
    },
    {
      "type": "cardGrid",
      "subtitle": "Who It Is For",
      "title": "Businesses we help grow",
      "items": [
        {
          "title": "Startups & Growing Brands",
          "tags": [
            "Fast Launch"
          ],
          "label": "Scale efficiently from day one"
        },
        {
          "title": "Local Businesses & Clinics",
          "tags": [
            "Local Market"
          ],
          "label": "More enquiries and local footfall"
        },
        {
          "title": "E-commerce & Retail",
          "tags": [
            "Sales Growth"
          ],
          "label": "Higher conversions and customer retention"
        },
        {
          "title": "Enterprises & B2B",
          "tags": [
            "Scale & Security"
          ],
          "label": "Robust systems and predictable ROI"
        }
      ]
    }
  ],
  "faqs": [
    {
      "q": "What technologies do you use for custom software development?",
      "a": "We primarily build with modern, battle-tested technologies including React, Next.js, Node.js, Python, PostgreSQL, MySQL, and Docker on cloud infrastructure like AWS and DigitalOcean."
    },
    {
      "q": "How long does a custom software development project take?",
      "a": "Typical business software applications take between 6 to 16 weeks depending on feature complexity, user roles, and third-party integrations."
    },
    {
      "q": "Can the software integrate with our existing accounting or billing software?",
      "a": "Yes. We frequently integrate custom systems with platforms like Tally, Zoho, payment gateways, WhatsApp API, and biometric attendance devices."
    },
    {
      "q": "Do you provide maintenance and updates after launch?",
      "a": "Yes, we provide ongoing service level agreements (SLAs) covering server monitoring, security patches, regular database backups, and new feature additions."
    }
  ]
},

  "crm-erp-development-pune": {
  "seoTitle": "CRM & ERP Development Company in Pune | PodShot Studio & Creative Agency",
  "description": "Custom CRM and ERP software development in Pune. Streamline business operations, lead management, inventory, and billing with PodShot.",
  "intro": {
    "title": "CRM/ERP Development in Pune",
    "tags": [
      "CRM Solutions",
      "ERP Systems",
      "Workflow"
    ],
    "text": "Improve your business efficiency, staff productivity, and customer retention with custom CRM and ERP development services from PodShot Studio & Creative Agency in Pune. We build unified enterprise platforms that connect sales, inventory, accounting, and operations in one central hub.",
    "lead": "Running disconnected spreadsheets slows your team down. Custom CRM and ERP software centralizes your leads, sales, inventory and finance in one dashboard.",
    "paragraphs": [
      "We design custom CRM and ERP systems that automate repetitive tasks, track customer histories, generate invoices, and give management real-time visibility.",
      "Built specifically around your team’s daily routines so adoption is quick and painless without unnecessary complexity."
    ],
    "list": [
      "Custom CRM lead & deal pipelines",
      "Enterprise ERP operations & inventory",
      "Role-based permissions & security",
      "Automated invoicing & quotation tools",
      "Interactive reporting & KPI dashboards",
      "Mobile responsive staff portals"
    ]
  },
  "sections": [
    {
      "type": "iconCards",
      "subtitle": "Operational Clarity",
      "title": "One unified system for your entire business",
      "text": "Scattered spreadsheets, disconnected tools, and manual data entry slow your team down. A centralized custom CRM/ERP eliminates data silos and empowers managers with real-time operational visibility.",
      "items": [
        {
          "icon": "tji-creative",
          "title": "Zero Per-User Monthly Fees",
          "text": "Avoid expensive per-seat subscriptions like Salesforce. Own your system and add unlimited users freely."
        },
        {
          "icon": "tji-growth",
          "title": "Automated Sales Pipeline",
          "text": "Capture leads from website, ads, and WhatsApp automatically, assign them to sales staff, and track deals."
        },
        {
          "icon": "tji-service-4",
          "title": "Inventory & Billing Sync",
          "text": "Keep warehouse inventory, customer invoices, delivery receipts, and payments synchronized."
        },
        {
          "icon": "tji-chat",
          "title": "Real-Time Executive Dashboards",
          "text": "Actionable visibility into daily sales, staff productivity, pending tasks, and profit margins."
        }
      ]
    },
    {
      "type": "guide",
      "subtitle": "Enterprise Automation",
      "title": "Custom CRM & ERP software built for Pune businesses",
      "blocks": [
        [
          "p",
          "By implementing custom CRM/ERP software, companies can seamlessly record customer interactions, analyze transactional data, streamline resource planning, and drive higher profitability. We tailor every module to your unique operational workflow."
        ],
        [
          "h3",
          "Core modules we engineer in our CRM/ERP systems"
        ],
        [
          "ul",
          [
            "Lead & Inquiry Management: Automatic lead capture from Google Ads, Meta Ads, website forms, and WhatsApp directly into an intuitive Kanban board.",
            "Sales & Quotation Engine: One-click professional PDF quotation and invoice generation with automated WhatsApp and email delivery.",
            "Inventory & Order Processing: Real-time stock alerts, vendor purchase orders, warehouse management, and delivery tracking.",
            "Task & Staff Accountability: Role-based task assignments, deadline alerts, employee performance tracking, and attendance logs.",
            "Customer Support Ticketing: Dedicated client portal for tracking complaints, service requests, and maintenance contracts."
          ]
        ],
        [
          "h3",
          "Tailored for Indian business workflows"
        ],
        [
          "p",
          "Our CRM and ERP solutions are designed with GST-compliant invoicing, multi-branch support, Indian payment gateway integrations, and WhatsApp automated notifications built right in."
        ]
      ]
    },
    {
      "type": "processCards",
      "subtitle": "Implementation Roadmap",
      "title": "From workflow mapping to company-wide adoption",
      "steps": [
        {
          "title": "Workflow & Gap Analysis",
          "text": "We map out your current team processes, pain points, spreadsheets, and reporting needs."
        },
        {
          "title": "Modular Architecture Design",
          "text": "We design custom modules and database structures tailored to your departments."
        },
        {
          "title": "Development & Data Migration",
          "text": "We build the platform and securely import your historical customer and product data."
        },
        {
          "title": "User Acceptance Testing (UAT)",
          "text": "Your team tests the platform in a staging sandbox while we fine-tune permissions."
        },
        {
          "title": "Deployment & Hands-on Training",
          "text": "We conduct team training workshops, launch the system, and provide dedicated support."
        }
      ]
    },
    {
      "type": "cardGrid",
      "subtitle": "Who It Is For",
      "title": "Businesses we help grow",
      "items": [
        {
          "title": "Startups & Growing Brands",
          "tags": [
            "Fast Launch"
          ],
          "label": "Scale efficiently from day one"
        },
        {
          "title": "Local Businesses & Clinics",
          "tags": [
            "Local Market"
          ],
          "label": "More enquiries and local footfall"
        },
        {
          "title": "E-commerce & Retail",
          "tags": [
            "Sales Growth"
          ],
          "label": "Higher conversions and customer retention"
        },
        {
          "title": "Enterprises & B2B",
          "tags": [
            "Scale & Security"
          ],
          "label": "Robust systems and predictable ROI"
        }
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why choose custom CRM/ERP over ready-made software like Zoho or Salesforce?",
      "a": "Ready-made tools require recurring monthly fees per employee that escalate as you grow, and often force you to adapt your processes to their rigid limitations. Custom CRM/ERP belongs 100% to you with no per-user fees."
    },
    {
      "q": "Can you migrate our existing customer data from Excel sheets?",
      "a": "Yes. We sanitize, structure, and import all your historical Excel/CSV data into the new system without data loss."
    },
    {
      "q": "Is the system accessible on mobile phones?",
      "a": "Yes. Our systems are fully mobile-responsive and can also be packaged as dedicated PWA or mobile apps for on-the-field staff."
    },
    {
      "q": "Can different employees have different access levels?",
      "a": "Yes. We build granular role-based access control (RBAC), ensuring sales reps only see their own leads, while managers and accountants see respective department data."
    }
  ]
},

};
