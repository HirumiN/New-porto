import { useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import { ArrowUpRightIcon } from './icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative pt-6 sm:pt-8">
      <div className="flex items-center justify-between gap-6 border-b border-line pb-5 sm:pb-6">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-1 text-lg font-semibold tracking-[-0.03em]"
        >
          {profile.name}
          <span className="text-muted">/</span>
          <span className="font-display text-lg font-normal italic text-muted">
            portfolio
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="transition-colors hover:text-ink" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85 sm:block"
          >
            Let&rsquo;s Talk <ArrowUpRightIcon />
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink md:hidden"
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 8h16M4 16h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-out md:hidden ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 py-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted transition-colors hover:text-ink"
            >
              Let&rsquo;s Talk <ArrowUpRightIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}