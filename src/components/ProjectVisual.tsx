import { useCallback, useRef, useState, useId } from 'react'
import type { VisualScreen } from '../data/portfolio'

type ImageStatus = 'loading' | 'loaded' | 'error'

/**
 * Gambar project dengan loader saat jaringan lambat dan placeholder
 * apabila gagal dimuat. State dikelola per gambar agar slide yang
 * berisi dua gambar (laptop + mobile) tidak saling mempengaruhi.
 */
function ImageWithLoader({
  src,
  alt,
  imgClassName,
  wrapperClassName,
  loading = 'lazy',
}: {
  src: string
  alt: string
  imgClassName: string
  wrapperClassName?: string
  loading?: 'lazy' | 'eager'
}) {
  const [status, setStatus] = useState<ImageStatus>('loading')
  const [prevSrc, setPrevSrc] = useState(src)
  if (src !== prevSrc) {
    setPrevSrc(src)
    setStatus('loading')
  }
  const imgRef = useRef<HTMLImageElement>(null)
  const setImgRef = useCallback((node: HTMLImageElement | null) => {
    imgRef.current = node
    if (node && node.complete) {
      if (node.naturalWidth > 0) setStatus('loaded')
      else setStatus('error')
    }
  }, [])

  return (
    <div
      className={`relative ${wrapperClassName ?? ''} ${
        status !== 'loaded' ? 'min-h-32' : ''
      }`}
    >
      {status !== 'error' ? (
        <img
          ref={setImgRef}
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`${imgClassName} transition-opacity duration-500 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : null}

      {status === 'loading' ? (
        <div
          className="absolute inset-0 grid place-items-center bg-shell/70 backdrop-blur-[1px]"
          aria-busy="true"
          aria-label={`Memuat ${alt}`}
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className="size-7 animate-spin rounded-full border-2 border-line border-t-ink"
              aria-hidden
            />
            <span className="text-[0.625rem] tracking-[0.2em] text-muted uppercase">
              Loading
            </span>
          </div>
        </div>
      ) : null}

      {status === 'error' ? (
        <div
          className="absolute inset-0 grid place-items-center bg-shell/50 px-4"
          role="img"
          aria-label={`${alt} — gagal dimuat`}
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <svg
              viewBox="0 0 72 52"
              className="h-11 w-14 text-faint sm:h-12 sm:w-16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              aria-hidden
            >
              <rect x="1" y="1" width="46" height="31" rx="3" />
              <path d="M16 40h16M24 32v8" strokeLinecap="round" />
              <rect x="52" y="12" width="19" height="32" rx="3.5" />
              <path d="M58.5 17.5h6" strokeLinecap="round" />
              <path d="M4 48 68 4" strokeLinecap="round" opacity="0.5" />
            </svg>
            <p className="text-[0.625rem] tracking-[0.2em] text-muted uppercase">
              Preview unavailable
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

type ProjectVisualProps = {
  title: string
  visual: {
    laptop: VisualScreen | null
    mobile: VisualScreen | null
  }
}

/** Warna bezel perangkat diturunkan dari tone layar. */
function frameColors(tone: VisualScreen['tone']) {
  return tone === 'dark'
    ? { bezel: '#0e1013', edge: 'rgba(255,255,255,0.14)' }
    : { bezel: '#dcd9d2', edge: 'rgba(17,17,17,0.16)' }
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

/** Seni abstrak yang digambar di dalam layar perangkat. */
function ScreenArt({
  title,
  screen,
  portrait,
}: {
  title: string
  screen: VisualScreen
  portrait: boolean
}) {
  const rawId = useId()
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '')
  const { variant, tone, base, accent, image } = screen

  if (image) {
    return (
      <ImageWithLoader
        src={image}
        alt={`${title} preview`}
        imgClassName="absolute inset-0 h-full w-full object-cover"
        wrapperClassName="absolute inset-0 h-full w-full"
        loading="lazy"
      />
    )
  }
  const grid = tone === 'dark' ? '#ffffff' : '#111111'

  // Layar mobile digambar dengan kanvas potret agar art tidak terpotong.
  const w = portrait ? 450 : 800
  const h = portrait ? 900 : 600
  const gradientId = `visual-bg-${uid}`
  const glowId = `visual-glow-${uid}`
  const focalScale = portrait ? 0.52 : 1

  const vLines = Array.from({ length: Math.floor(w / 100) - 1 }, (_, i) => (i + 1) * 100)
  const hLines = Array.from({ length: Math.floor(h / 100) - 1 }, (_, i) => (i + 1) * 100)

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
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

      <rect width={w} height={h} fill={`url(#${gradientId})`} />
      <rect width={w} height={h} fill={`url(#${glowId})`} />

      <g stroke={grid} strokeWidth="1" opacity="0.06">
        {vLines.map((x) => (
          <path key={x} d={`M${x} 0v${h}`} />
        ))}
        {hLines.map((y) => (
          <path key={y} d={`M0 ${y}h${w}`} />
        ))}
      </g>

      <text
        x={portrait ? 26 : 42}
        y={h - (portrait ? 36 : 34)}
        fontFamily="'Instrument Serif', Georgia, serif"
        fontStyle="italic"
        fontSize={portrait ? 240 : 300}
        fill={grid}
        opacity="0.09"
      >
        {title.charAt(0)}
      </text>

      <g transform={`translate(${w / 2} ${h / 2}) scale(${focalScale}) translate(-400 -300)`}>
        <Focal variant={variant} accent={accent} />
      </g>

      <rect
        x="0.5"
        y="0.5"
        width={w - 1}
        height={h - 1}
        fill="none"
        stroke={grid}
        strokeWidth="1"
        opacity="0.08"
      />
    </svg>
  )
}

function LaptopFrame({ title, screen }: { title: string; screen: VisualScreen }) {
  const { bezel, edge } = frameColors(screen.tone)

  if (screen.image) {
    return (
      <div className="relative w-full">
        <div className="rounded-t-[10px] p-[1.6%] pb-[1.2%]" style={{ backgroundColor: bezel }}>
          <div
            className="relative overflow-hidden rounded-t-[5px]"
            style={{ boxShadow: `inset 0 0 0 1px ${edge}` }}
          >
            <ImageWithLoader
              src={screen.image}
              alt={`${title} preview`}
              imgClassName="block w-full h-auto"
              wrapperClassName="block w-full"
              loading="lazy"
            />
          </div>
        </div>
        {/* Alas laptop */}
        <div
          className="absolute inset-x-[-2.5%] -bottom-1.25 h-2.25 rounded-b-[7px]"
          style={{ backgroundColor: bezel }}
          aria-hidden
        />
      </div>
    )
  }

  return (
    <div className="relative w-full">
      <div className="rounded-t-[10px] p-[1.6%] pb-[1.2%]" style={{ backgroundColor: bezel }}>
        <div
          className="relative aspect-16/10 overflow-hidden rounded-t-[5px]"
          style={{ boxShadow: `inset 0 0 0 1px ${edge}` }}
        >
          <ScreenArt title={title} screen={screen} portrait={false} />
        </div>
      </div>
      {/* Alas laptop */}
      <div
        className="absolute inset-x-[-2.5%] -bottom-1.25 h-2.25 rounded-b-[7px]"
        style={{ backgroundColor: bezel }}
        aria-hidden
      />
    </div>
  )
}

function PhoneFrame({ title, screen }: { title: string; screen: VisualScreen }) {
  const { bezel, edge } = frameColors(screen.tone)
  const showFrame = screen.frame !== false

  if (!showFrame) {
    return (
      <div className="h-full w-full overflow-hidden rounded-[11px]">
        <ScreenArt title={title} screen={screen} portrait />
      </div>
    )
  }

  return (
    <div className="h-full w-full rounded-[14px] p-[3%]" style={{ backgroundColor: bezel }}>
      <div
        className="relative h-full w-full overflow-hidden rounded-[11px]"
        style={{ boxShadow: `inset 0 0 0 1px ${edge}` }}
      >
        <ScreenArt title={title} screen={screen} portrait />
        {/* Notch / kamera */}
        <span
          className="absolute top-[1.8%] left-1/2 h-[1.4%] w-[24%] -translate-x-1/2 rounded-full"
          style={{ backgroundColor: bezel }}
          aria-hidden
        />
      </div>
    </div>
  )
}

function PreviewPlaceholder({ title }: { title: string }) {
  return (
    <figure
      role="img"
      aria-label={`${title} — preview belum tersedia`}
      className="relative aspect-4/3 w-full overflow-hidden border border-dashed border-line bg-shell/40 sm:aspect-16/10 lg:aspect-16/11"
    >
      <div className="absolute inset-0 grid place-items-center px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <svg
            viewBox="0 0 72 52"
            className="h-11 w-14 text-faint sm:h-12 sm:w-16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            aria-hidden
          >
            <rect x="1" y="1" width="46" height="31" rx="3" />
            <path d="M16 40h16M24 32v8" strokeLinecap="round" />
            <rect x="52" y="12" width="19" height="32" rx="3.5" />
            <path d="M58.5 17.5h6" strokeLinecap="round" />
          </svg>
          <p className="text-[0.625rem] tracking-[0.2em] text-muted uppercase">Preview coming soon</p>
        </div>
      </div>
    </figure>
  )
}

export default function ProjectVisual({ title, visual }: ProjectVisualProps) {
  const { laptop, mobile } = visual
  const primary = laptop ?? mobile

  // Keduanya null → placeholder.
  if (!primary) return <PreviewPlaceholder title={title} />

  const { tone, base, accent } = primary

  return (
    <figure
      role="img"
      aria-label={`${title} project visual`}
      className="relative aspect-4/3 w-full overflow-hidden border border-line sm:aspect-16/10 lg:aspect-16/11"
      style={{
        backgroundColor: base,
        backgroundImage: `radial-gradient(58% 58% at 72% 24%, ${accent}38, transparent 72%)`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-2 py-3 sm:px-3 sm:py-4 lg:px-4 lg:py-5">
        {laptop && mobile ? (
          /* Keduanya ada → laptop dengan mobile yang menumpang di depannya */
          <div className="relative w-full max-w-[98%]">
            <LaptopFrame title={title} screen={laptop} />
            <div className="absolute right-0 bottom-[-7%] aspect-9/19 w-[22%] min-w-17">
              <PhoneFrame title={title} screen={mobile} />
            </div>
          </div>
        ) : laptop ? (
          /* Mobile null → laptop saja */
          <div className="w-full max-w-[96%]">
            <LaptopFrame title={title} screen={laptop} />
          </div>
        ) : mobile ? (
          /* Laptop null → mobile saja */
          <div className="aspect-9/19 h-full max-w-[44%]">
            <PhoneFrame title={title} screen={mobile} />
          </div>
        ) : null}
      </div>

      <figcaption className="absolute top-5 left-5 flex items-center gap-2 text-[0.625rem] tracking-[0.2em] uppercase sm:top-6 sm:left-6">
        <span className="size-1.5 rounded-full" style={{ backgroundColor: accent }} aria-hidden />
        <span style={{ color: tone === 'dark' ? 'rgba(255,255,255,0.72)' : 'rgba(17,17,17,0.62)' }}>
          Case study
        </span>
      </figcaption>
    </figure>
  )
}
