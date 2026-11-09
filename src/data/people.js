import { BASE_PATH } from '@/lib/basePath';
// SAMPLE CONTENT: placeholder reviews so the layouts can be reviewed.
// Real reviews must come from real clients (Google reviews work well) before the site goes live.
export const testimonials = [
  { text: 'PodShot handles our ads and our content, so everything finally looks and sounds like one brand. Enquiries have gone up every month.', name: 'Clinic owner', role: 'Healthcare, Wakad', rating: 5, avatar: `${BASE_PATH}/images/users/user-list-img-1.png` },
  { text: 'They plan the month, shoot in one day and post on time. I stopped worrying about Instagram.', name: 'Cafe owner', role: 'Food and beverage, Hinjewadi', rating: 5, avatar: `${BASE_PATH}/images/users/user-list-img-2.png` },
  { text: 'Our new website loads fast and people actually fill the form. The team explained every step in plain words.', name: 'Director', role: 'Education, Pune', rating: 4.5, avatar: `${BASE_PATH}/images/users/user-list-img-3.png` },
  { text: 'The product shoot and the launch ads came from the same people, which saved us a lot of back and forth.', name: 'Founder', role: 'Skincare brand, Pune', rating: 5, avatar: `${BASE_PATH}/images/users/user-list-img-4.png` },
];

// SAMPLE CONTENT: team names and roles are placeholders. Agina's photos stay until real ones are shot.
export const team = [
  { name: 'Team member', role: 'Founder and strategy', image: `${BASE_PATH}/images/team/team-member-3.png` },
  { name: 'Team member', role: 'Performance marketing', image: `${BASE_PATH}/images/team/team-member-4.png` },
  { name: 'Team member', role: 'Creative director', image: `${BASE_PATH}/images/team/team-member-1.png` },
  { name: 'Team member', role: 'Video and edits', image: `${BASE_PATH}/images/team/team-member-2.png` },
];
