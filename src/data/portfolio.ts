export const profile = {
  name: 'Hirumi',
  role: 'Software Engineer',
  eyebrow: 'Software Engineer · Tulungagung',
  tagline: 'Building thoughtful, fast products for the web.',
  description:
    'I design and build digital products end to end — from first wireframe to production deploy. Focused on clean interfaces, accessible interactions and interfaces that feel effortless.',
  email: 'hilminurullah3@gmail.com',
  location: 'Tulungagung, Indonesia',
  availability: 'Available for freelance & full-time',
  yearsExperience: '2+',
  projectsShipped: '20+',
} as const

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const

export const socials = [
  { label: 'GitHub', href: 'https://github.com/HirumiN', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:hilminurullah3@gmail.com', icon: 'mail' },
] as const

export const tech = [
  { name: 'React', mark: 'Re' },
  { name: 'TypeScript', mark: 'Ts' },
  { name: 'Tailwind CSS', mark: 'Tw' },
  { name: 'Vite', mark: 'Vi' },
  { name: 'Next.js', mark: 'Nx' },
  { name: 'Node.js', mark: 'No' },
  { name: 'PostgreSQL', mark: 'Pg' },
  { name: 'GraphQL', mark: 'Gq' },
  { name: 'Figma', mark: 'Fi' },
  { name: 'Vercel', mark: 'Vc' },
  { name: 'Laravel', mark: 'La' },
  { name: 'Linux', mark: 'Li' },
  { name: 'Docker', mark: 'Do' },
  { name: 'Postman', mark: 'Pm' },
  { name: 'Vue.js', mark: 'Vu' },
  { name: 'Python', mark: 'Py' },
] as const

export const projects = [
  {
    index: '01',
    title: 'Nova Analytics',
    category: 'Analytics platform',
    description:
      'Real-time product analytics dashboard with streaming charts, cohort views and shareable links. Built for teams that watch the numbers move live.',
    href: 'https://github.com',
    year: '2026',
    visual: { variant: 1, tone: 'dark', base: '#14171a', accent: '#9fb6c9' },
  },
  {
    index: '02',
    title: 'Lumen UI',
    category: 'Design system',
    description:
      'Accessible React component library — 40+ primitives with copy-paste Tailwind recipes, docs and visual tests.',
    href: 'https://github.com',
    year: '2025',
    visual: { variant: 2, tone: 'light', base: '#e9e7e1', accent: '#a2603c' },
  },
  {
    index: '03',
    title: 'TokoPOS',
    category: 'Commerce',
    description:
      'Offline-first point of sale for small retail, with background sync and multi-outlet stock in one view.',
    href: 'https://github.com',
    year: '2025',
    visual: { variant: 3, tone: 'dark', base: '#1b1917', accent: '#d3a469' },
  },
  {
    index: '04',
    title: 'Fieldnote',
    category: 'Productivity',
    description:
      'Writing app with local-first sync, version history and a distraction-free editor that never loses a word.',
    href: 'https://github.com',
    year: '2024',
    visual: { variant: 4, tone: 'light', base: '#e7e8e6', accent: '#55687f' },
  },
  {
    index: '05',
    title: 'Atlas Docs',
    category: 'Developer tools',
    description:
      'Documentation platform with instant full-text search, versioned pages and a zero-config MDX authoring flow.',
    href: 'https://github.com',
    year: '2024',
    visual: { variant: 5, tone: 'dark', base: '#111318', accent: '#8b96ad' },
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

export const education = [
  {
    title: 'S1 Teknik Informatika',
    place: 'Universitas Nusantara',
    period: '2021 — 2025',
    points: [
      'IPK 3.7/4.0 — fokus pada rekayasa perangkat lunak dan desain antarmuka.',
      'Tugas akhir: sistem deteksi anomali pembelajaran untuk LMS kampus.',
    ],
  },
  {
    title: 'Ketua',
    place: 'DevCommunity — komunitas developer kampus',
    period: '2023 — 2024',
    points: [
      'Menggelar 12+ workshop dan hackathon kampus dengan 400+ peserta.',
      'Menjalankan program mentoring untuk 60 mahasiswa baru tiap angkatan.',
    ],
  },
] as const
