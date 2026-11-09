// Company details used across the whole site.
export const site = {
  name: 'PodShot',
  legalName: 'Podshot Studio & Creative Agency',
  tagline: 'Digital marketing in Pune',
  logo: '/brand/podshot-logo.png',
  city: 'Wakad, Pune',
  address: ['2nd floor, above HDFC Bank, Dange Chowk,', 'Hinjewadi Road, Wakad, Pune 411033'],
  hours: 'Mon to Sat, 10:00 AM to 6:30 PM',
  phone: '+91 93717 73521',
  phoneHref: 'tel:+919371773521',
  whatsapp: 'https://wa.me/919371773521',
  email: 'info@podshot.in',
  studioSite: 'https://www.podshot.in',
  mapUrl: 'https://maps.app.goo.gl/dbZfENSCZvMybVuJA',
  socials: [
    { icon: 'tji-facebook', href: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: 'tji-instagram', href: 'https://www.instagram.com/', label: 'Instagram' },
    { icon: 'tji-linkedin', href: 'https://www.linkedin.com/', label: 'LinkedIn' },
    { icon: 'tji-youtube', href: 'https://www.youtube.com/', label: 'YouTube' },
  ],
};

export const whatsappLink = (text) => `${site.whatsapp}?text=${encodeURIComponent(text)}`;
