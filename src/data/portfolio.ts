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

export type Project = {
  index: string
  title: string
  category: string
  description: string
  /** URL studi kasus/repo, atau null kalau tidak ada. */
  link: string | null
  year: string
  visual: {
    variant: number
    tone: 'dark' | 'light'
    base: string
    accent: string
  }
}

export const projects: readonly Project[] = [
  {
    index: '01',
    title: 'Nova Analytics',
    category: 'Analytics platform',
    description:
      'Real-time product analytics dashboard with streaming charts, cohort views and shareable links. Built for teams that watch the numbers move live.',
    link: null,
    year: '2026',
    visual: { variant: 1, tone: 'dark', base: '#14171a', accent: '#9fb6c9' },
  },
  {
    index: '02',
    title: 'Lumen UI',
    category: 'Design system',
    description:
      'Accessible React component library — 40+ primitives with copy-paste Tailwind recipes, docs and visual tests.',
    link: null,
    year: '2025',
    visual: { variant: 2, tone: 'light', base: '#e9e7e1', accent: '#a2603c' },
  },
  {
    index: '03',
    title: 'TokoPOS',
    category: 'Commerce',
    description:
      'Offline-first point of sale for small retail, with background sync and multi-outlet stock in one view.',
    link: null,
    year: '2025',
    visual: { variant: 3, tone: 'dark', base: '#1b1917', accent: '#d3a469' },
  },
  {
    index: '04',
    title: 'Fieldnote',
    category: 'Productivity',
    description:
      'Writing app with local-first sync, version history and a distraction-free editor that never loses a word.',
    link: null,
    year: '2024',
    visual: { variant: 4, tone: 'light', base: '#e7e8e6', accent: '#55687f' },
  },
  {
    index: '05',
    title: 'Atlas Docs',
    category: 'Developer tools',
    description:
      'Documentation platform with instant full-text search, versioned pages and a zero-config MDX authoring flow.',
    link: null,
    year: '2024',
    visual: { variant: 5, tone: 'dark', base: '#111318', accent: '#8b96ad' },
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  /** URL website perusahaan, atau null kalau tidak ada. */
  link: string | null
  points: readonly string[]
}

export const experience: readonly Experience[] = [
  {
    company: 'Freelance',
    role: 'Software Engineer',
    period: 'Present',
    link: null,
    points: [
      'Developed and maintained web applications for various clients, ensuring high performance, responsiveness, and user-friendly interfaces.',
    ],
  },
  {
    company: 'PT Liveboard Cruise Indonesia',
    role: 'Frontend Developer',
    period: '2025',
    link: 'https://www.liveaboard-indonesia.co.id/',
    points: [
      'Developed a full-stack warehouse application for managing and tracking goods delivery, optimizing inventory operations and streamlining shipment workflows.',
    ],
  },
  {
    company: 'TimApp',
    role: 'Front-end Developer',
    period: '2025',
    link: 'https://timapp.id/',
    points: [
      'As a Frontend Developer, I was responsible for implementing user-facing features, maintaining code quality, and ensuring seamless user experiences across devices.',
    ],
  },
]

export const education = [
  {
    kind: 'education',
    title: 'D4 Teknologi Rekayasa Multimedia',
    place: 'Politeknik Elektronika Negeri Surabaya',
    period: '2022 — 2026',
    points: [
      'IPK 3.7/4.0 — Mempelajari berbagai bidang Software Engineering.',
      'Tugas Akhir: Implementing Retrieval-Augmented Generation (RAG) in a Web-Based AI Assistant for Dynamic Student Career Development.',
    ],
  },
  {
    kind: 'campus',
    title: 'Project Manager',
    place: 'Game Developer — komunitas jejepangan di PENS',
    period: '2023 — 2024',
    points: [
      'Mengoordinasikan proses pengembangan game bersama tim, mulai dari perencanaan hingga implementasi.',
      'Memantau kualitas game melalui pengujian fitur dan evaluasi hasil pengembangan sebelum finalisasi.',
    ],
  },
] as const
