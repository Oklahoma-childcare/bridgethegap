export const routes = ['/', '/the-lab', '/age-groups', '/saturdays', '/our-story', '/contact'] as const;
export type Route = typeof routes[number];

export const pageMeta: Record<Route, { title: string; description: string }> = {
  '/': {
    title: 'Bridge The Gap STEM Program | Saturday Childcare in Hugo, OK',
    description: 'Bridge The Gap STEM Program in Hugo, Oklahoma. Saturday child care from 9 AM to 2 PM for preschool and school-age children. Call (405) 283-6650.',
  },
  '/the-lab': {
    title: 'A Curious Approach to STEM | Bridge The Gap, Hugo',
    description: 'Explore the ideas behind science, technology, engineering, and math learning at Bridge The Gap STEM Program in Hugo, Oklahoma.',
  },
  '/age-groups': {
    title: 'Preschool & School-Age Children | Bridge The Gap STEM',
    description: 'Bridge The Gap STEM Program is licensed for preschool children ages 2–4 and school-age children 5 and older in Hugo, OK.',
  },
  '/saturdays': {
    title: 'Saturday Hours & Parent FAQs | Bridge The Gap STEM',
    description: 'Plan a Saturday visit to Bridge The Gap STEM Program in Hugo. Open Saturdays 9 AM–2 PM. Explore common family questions and contact information.',
  },
  '/our-story': {
    title: 'About Bridge The Gap STEM Program | Hugo, Oklahoma',
    description: 'Meet Bridge The Gap STEM Program in Hugo, Oklahoma. Find licensing, director information, and the Saturday learning program details.',
  },
  '/contact': {
    title: 'Contact Bridge The Gap STEM Program | Hugo, OK',
    description: 'Call (405) 283-6650 or email bbillsbtgp@yahoo.com. Bridge The Gap STEM Program is at 623 S. Broadway St., Hugo, Oklahoma 74743.',
  },
};
