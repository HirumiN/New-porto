import { useState } from 'react'
import { profile, socials } from '../data/portfolio'
import { ArrowUpRightIcon } from '../components/icons'
import { socialIcons } from '../lib/socialIcons'

const heroSocials = socials.filter((social) => social.icon !== 'mail')

const fadeOut =
  '[mask-image:linear-gradient(to_bottom,#000_58%,rgba(0,0,0,0.55)_82%,transparent_99%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_58%,rgba(0,0,0,0.55)_82%,transparent_99%)]'

function PortraitPlaceholder() {
  return (
    <svg
      viewBox="0 0 520 780"
      className={`absolute inset-0 h-full w-full ${fadeOut}`}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="portrait-halo" cx="50%" cy="34%" r="56%">
          <stop offset="0%" stopColor="#0b0b0b" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0b0b0b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="520" height="780" fill="url(#portrait-halo)" />
      <path
        d="M56 780c0-176 88-262 172-286h56c84 24 172 110 172 286Z"
        fill="#e6e6e1"
      />
      <rect x="228" y="344" width="64" height="164" rx="30" fill="#dadad4" />
      <ellipse cx="260" cy="250" rx="103" ry="123" fill="#deded8" />
      <path
        d="M260 116c-59 0-104 45-104 108 0 26 5 46 5 46 4-33 12-57 30-73 27-23 97-27 138-6 22 12 30 40 32 79 0 0 5-20 5-46 0-63-47-108-106-108Z"
        fill="#cfcfca"
      />
    </svg>
  )
}

export default function Hero() {
  const [portrait, setPortrait] = useState<'loading' | 'ready' | 'failed'>('loading')

  return (
    <section
      id="top"
      className="scroll-mt-20 pt-9 pb-16 sm:pt-11 lg:grid lg:min-h-[84svh] lg:grid-cols-[52fr_48fr] lg:items-stretch lg:gap-8 lg:pt-6 lg:pb-0 xl:gap-14"
    >
      <div className="flex flex-col justify-center">
        <p className="flex items-center gap-2.5 text-[0.6875rem] tracking-[0.18em] text-muted uppercase">
          <span className="size-1.5 rounded-full bg-ink" />
          {profile.availability}
        </p>

        <h1 className="mt-6 text-[clamp(3.25rem,8vw,6.5rem)] leading-[0.9] font-semibold tracking-[-0.05em] text-ink">
          {profile.name}
          <span className="mt-1.5 block font-display text-[0.4em] leading-[1.1] font-normal tracking-[-0.01em] text-muted italic">
            {profile.role.toLowerCase()}
          </span>
        </h1>

        <p className="mt-8 max-w-[34rem] text-[0.95rem] leading-[1.75] text-muted">
          {profile.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            Let&rsquo;s collaborate <ArrowUpRightIcon />
          </a>
          <a
            href="#work"
            className="rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            View work
          </a>
        </div>
      </div>

      <div className="hidden lg:flex lg:h-full lg:gap-8">
        <div className="relative min-h-[480px] flex-1">
          {portrait === 'failed' ? (
            <PortraitPlaceholder />
          ) : (
            <img
              src="/portrait.png"
              alt={`${profile.name}, ${profile.role}`}
              onLoad={() => setPortrait('ready')}
              onError={() => setPortrait('failed')}
              className={`absolute inset-0 h-full w-full object-cover object-[50%_14%] grayscale mix-blend-multiply transition-opacity duration-700 ${fadeOut} ${
                portrait === 'ready' ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>

        <ul className="flex shrink-0 flex-col justify-center gap-2.5">
          {heroSocials.map((social) => {
            const Icon = socialIcons[social.icon]
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
                >
                  <Icon />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}