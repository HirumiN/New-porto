export const profile = {
  name: 'Hirumi',
  role: 'Software Engineer',
  eyebrow: 'Software Engineer · Jakarta',
  tagline: 'Building thoughtful, fast products for the web.',
  description:
    'I design and build digital products end to end — from first wireframe to production deploy. Focused on clean interfaces, accessible interactions and interfaces that feel effortless.',
  email: 'hirumi@example.com',
  location: 'Jakarta, Indonesia',
  availability: 'Available for freelance & full-time',
  yearsExperience: '4+',
  projectsShipped: '20+',
} as const

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:hirumi@example.com', icon: 'mail' },
] as const

export const projects = [
  {
    index: '01',
    title: 'Nova Analytics',
    description:
      'Real-time product analytics dashboard with streaming charts, cohort views and shareable links.',
    tags: ['React', 'TypeScript', 'WebSockets'],
    href: 'https://github.com',
    year: '2026',
  },
  {
    index: '02',
    title: 'Lumen UI',
    description:
      'Accessible React component library, 40+ primitives with copy-paste Tailwind recipes.',
    tags: ['React', 'Tailwind CSS', 'Radix'],
    href: 'https://github.com',
    year: '2025',
  },
  {
    index: '03',
    title: 'TokoPOS',
    description:
      'Offline-first point of sale for small retail, with local sync and multi-outlet stock.',
    tags: ['React', 'IndexedDB', 'Node.js'],
    href: 'https://github.com',
    year: '2025',
  },
  {
    index: '04',
    title: 'Fieldnote',
    description:
      'Writing app with local-first sync, version history and a distraction-free editor.',
    tags: ['React', 'CRDT', 'Postgres'],
    href: 'https://github.com',
    year: '2024',
  },
] as const

export const services = [
  {
    index: '01',
    title: 'Product Engineering',
    description:
      'Web apps built from scratch with React and TypeScript, shipped to production and documented.',
  },
  {
    index: '02',
    title: 'Interface Design',
    description:
      'Minimal, editorial interfaces built in Figma — design systems, prototypes and motion specs.',
  },
  {
    index: '03',
    title: 'Performance & SEO',
    description:
      'Audits and rebuilds that cut load time, improve Core Web Vitals and raise conversion.',
  },
  {
    index: '04',
    title: 'Frontend Consulting',
    description:
      'Code reviews, architecture guidance and team enablement for growing frontend teams.',
  },
] as const

export const experience = [
  {
    company: 'Independent',
    role: 'Software Engineer',
    period: '2024 — Present',
    points: [
      'Delivered product builds and internal tooling for 8+ clients across retail, fintech and education.',
      'Reduced median page load from 3.1s to 0.9s on a legacy commerce storefront.',
    ],
  },
  {
    company: 'Studio Nine',
    role: 'Frontend Developer',
    period: '2022 — 2024',
    points: [
      'Built the design system adopted by five product teams.',
      'Introduced visual regression testing and component review into the CI pipeline.',
    ],
  },
  {
    company: 'First Step',
    role: 'Junior Developer',
    period: '2021 — 2022',
    points: [
      'Maintained client marketing sites and learned the craft of shipping small, often.',
    ],
  },
] as const