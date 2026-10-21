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

export type VisualScreen = {
  variant: number
  tone: 'dark' | 'light'
  base: string
  accent: string
  /** Path gambar riil (mis. /img/warehouse-web.jpeg). Bila ada, menggantikan art abstrak. */
  image?: string
  /** Tampilkan bezel/bingkai perangkat. Default true. */
  frame?: boolean
}

export type Project = {
  index: string
  title: string
  category: string
  description: string
  /** URL studi kasus/repo, atau null kalau tidak ada. */
  link: string | null
  year: string
  /**
   * Tampilan visual per perangkat.
   * - laptop & mobile terisi → tampilkan keduanya
   * - salah satu null → tampilkan sisanya saja
   * - keduanya null → tampilkan placeholder
   */
  visual: {
    laptop: VisualScreen | null
    mobile: VisualScreen | null
  }
}

export const projects: readonly Project[] = [
  {
    index: '01',
    title: 'Warehouse',
    category: 'Warehouse Management System',
    description:
      'Full-stack warehouse application for managing and tracking goods delivery, optimizing inventory operations and streamlining shipment workflows.',
    link: null,
    year: '2025',
    visual: {
      laptop: {
        variant: 1,
        tone: 'light',
        base: '#ffedd5',
        accent: '#ea580c',
        image: '/img/warehouse-web.jpeg',
      },
      mobile: {
        variant: 1,
        tone: 'light',
        base: '#ffedd5',
        accent: '#ea580c',
        image: '/img/warehouse-mobile.jpeg',
      },
    },
  },
  {
    index: '02',
    title: 'Labtrack',
    category: 'Learning Management System',
    description:
      'LabTrack is a digital solution that replaces paper-based lab skill tracking with a streamlined, transparent, and accountable workflow from student evidence submission to lecturer approval and skill certification.',
    link: null,
    year: '2026',
    visual: {
      laptop: {
        variant: 2,
        tone: 'light',
        base: '#e8f3ee',
        accent: '#1f8a5b',
        image: '/img/labtrack-web.png',
      },
      mobile: {
        variant: 2,
        tone: 'light',
        base: '#e8f3ee',
        accent: '#1f8a5b',
        image: '/img/labtrack-mobile.png',
      },
    },
  },
  {
    index: '03',
    title: 'Website AI-Career',
    category: 'Research',
    description:
      'An interactive, AI-powered consultation platform designed to help students plan their academic, career, and entrepreneurial roadmaps with customized step-by-step guidance.',
    link: 'https://github.com/HirumiN/Rekomendasi-Karir',
    year: '2026',
    visual: {
      laptop: {
        variant: 3,
        tone: 'light',
        base: '#ecfdf5',
        accent: '#059669',
        image: '/img/AIcareer-web.png',
      },
      mobile: null,
    },
  },
  {
    index: '04',
    title: 'E-Asrama',
    category: 'Student Housing Management Software',
    description:
      'Dormitory management system for room allocation, occupancy tracking and resident services in one place.',
    link: 'https://github.com/HirumiN/izin-asrama',
    year: '2026',
    visual: {
      laptop: {
        variant: 4,
        tone: 'light',
        base: '#e8f1fa',
        accent: '#3b82f6',
        image: '/img/asrama-web.png',
      },
      mobile: {
        variant: 4,
        tone: 'light',
        base: '#e8f1fa',
        accent: '#3b82f6',
        image: '/img/asrama-mobile.png',
      },
    },
  },
  {
    index: '05',
    title: 'HeartString',
    category: 'Visual Novel Game',
    description:
      'Interactive visual novel game with multiple endings and several heroines, where player choices shape the story.',
    link: 'https://astreda.itch.io/heartstring',
    year: '2025',
    visual: {
      laptop: {
        variant: 1,
        tone: 'light',
        base: '#fde7f0',
        accent: '#ec4899',
        image: '/img/HeartString-web.png',
      },
      mobile: null,
    },
  },
  {
    index: '07',
    title: 'Kosan',
    category: 'Boarding House Management',
    description:
      'Boarding house management app for room availability, billing and tenant information.',
    link: null,
    year: '2025',
    visual: {
      laptop: null,
      mobile: {
        variant: 1,
        tone: 'light',
        base: '#ccfbf1',
        accent: '#0d9488',
        image: '/img/kosan.png',
        frame: false,
      },
    },
  },
  {
    index: '08',
    title: 'Sales Web',
    category: 'Sales Platform',
    description:
      'Web-based sales platform for tracking leads, deals and revenue in one dashboard.',
    link: null,
    year: '2025',
    visual: {
      laptop: {
        variant: 1,
        tone: 'dark',
        base: '#1e3a8a',
        accent: '#60a5fa',
        image: '/img/sales-web.png',
      },
      mobile: null,
    },
  },
  {
    index: '09',
    title: 'Xora',
    category: 'Landing Page',
    description:
      'Modern, responsive landing page for the Xora product with animated sections and clear conversion flow.',
    link: null,
    year: '2025',
    visual: {
      laptop: {
        variant: 1,
        tone: 'light',
        base: '#eef2ff',
        accent: '#4f46e5',
        image: '/img/Xora.png',
      },
      mobile: null,
    },
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
