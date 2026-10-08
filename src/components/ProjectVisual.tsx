type Visual = {
  variant: number
  tone: 'dark' | 'light'
  base: string
  accent: string
}

type ProjectVisualProps = {
  title: string
  visual: Visual
}

function Focal({ variant, accent }: { variant: number; accent: string }) {
  switch (variant) {
    case 1:
      return (
        <g fill="none" stroke={accent} strokeLinecap="round">
          <circle cx="545" cy="300" r="212" strokeWidth="1" opacity="0.35" />
          <circle cx="545" cy="300" r="156" strokeWidth="1" opacity="0.5" />
          <circle cx="545" cy="300" r="100" strokeWidth="1.5" opacity="0.7" />
          <circle cx="545" cy="300" r="44" strokeWidth="1.5" opacity="0.9" />
          <circle cx="545" cy="300" r="9" fill={accent} stroke="none" />
          <path d="M96 300h336M545 84v432" strokeWidth="1" opacity="0.22" />
        </g>
      )
    case 2:
      return (
        <g fill="none" stroke={accent}>
          <rect x="104" y="78" width="404" height="404" strokeWidth="1.5" opacity="0.85" />
          <rect x="226" y="150" width="404" height="404" strokeWidth="1" opacity="0.4" />
          <rect x="472" y="404" width="72" height="72" fill={accent} stroke="none" opacity="0.9" />
          <path d="M104 482h626" strokeWidth="1" opacity="0.25" />
        </g>
      )
    case 3:
      return (
        <g fill="none" stroke={accent} strokeWidth="1.5">
          <rect x="96" y="118" width="608" height="54" rx="4" opacity="0.35" />
          <rect x="96" y="198" width="468" height="54" rx="4" opacity="0.55" />
          <rect x="96" y="278" width="608" height="54" rx="4" opacity="0.35" />
          <rect x="96" y="358" width="332" height="54" rx="4" fill={accent} stroke="none" opacity="0.9" />
          <rect x="96" y="438" width="504" height="54" rx="4" opacity="0.35" />
        </g>
      )
    case 4:
      return (
        <g fill="none" stroke={accent}>
          <path d="M-40 596 840 -40" strokeWidth="72" opacity="0.28" />
          <path d="M-40 596 840 -40" strokeWidth="1.5" opacity="0.9" />
          <path d="M120 -40 840 476" strokeWidth="1" opacity="0.35" />
          <circle cx="566" cy="176" r="88" strokeWidth="1" opacity="0.5" />
          <circle cx="566" cy="176" r="7" fill={accent} stroke="none" />
        </g>
      )
    default:
      return (
        <g>
          <circle cx="400" cy="290" r="230" fill={accent} opacity="0.16" />
          <g stroke={accent} strokeWidth="1" opacity="0.5">
            <path d="M148 46v508M274 46v508M400 46v508M526 46v508M652 46v508" />
            <path d="M96 118h608M96 462h608" opacity="0.6" />
          </g>
          <rect x="376" y="266" width="48" height="48" fill={accent} opacity="0.95" />
        </g>
      )
  }
}

export default function ProjectVisual({ title, visual }: ProjectVisualProps) {
  const { variant, tone, base, accent } = visual
  const grid = tone === 'dark' ? '#ffffff' : '#0b0b0b'
  const monogram = title.charAt(0)
  const gradientId = `visual-bg-${variant}`
  const glowId = `visual-glow-${variant}`

  return (
    <figure
      role="img"
      aria-label={`${title} project visual`}
      className="relative aspect-4/3 w-full overflow-hidden border border-line sm:aspect-16/10 lg:aspect-16/11"
      style={{ backgroundColor: base }}
    >
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={base} />
            <stop offset="100%" stopColor={accent} stopOpacity={tone === 'dark' ? 0.28 : 0.35} />
          </linearGradient>
          <radialGradient id={glowId} cx="70%" cy="26%" r="62%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.42" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="800" height="600" fill={`url(#${gradientId})`} />
        <rect width="800" height="600" fill={`url(#${glowId})`} />

        <g stroke={grid} strokeWidth="1" opacity="0.06">
          <path d="M100 0v600M200 0v600M300 0v600M400 0v600M500 0v600M600 0v600M700 0v600" />
          <path d="M0 100h800M0 200h800M0 300h800M0 400h800M0 500h800" />
        </g>

        <text
          x="42"
          y="566"
          fontFamily="'Instrument Serif', Georgia, serif"
          fontStyle="italic"
          fontSize="300"
          fill={grid}
          opacity="0.09"
        >
          {monogram}
        </text>

        <Focal variant={variant} accent={accent} />

        <rect
          x="0.5"
          y="0.5"
          width="799"
          height="599"
          fill="none"
          stroke={grid}
          strokeWidth="1"
          opacity="0.08"
        />
      </svg>

      <figcaption className="absolute top-5 left-5 flex items-center gap-2 text-[0.625rem] tracking-[0.2em] uppercase sm:top-6 sm:left-6">
        <span
          className="size-1.5 rounded-full"
          style={{ backgroundColor: accent }}
          aria-hidden
        />
        <span style={{ color: tone === 'dark' ? 'rgba(255,255,255,0.72)' : 'rgba(11,11,11,0.62)' }}>
          Case study
        </span>
      </figcaption>
    </figure>
  )
}
