import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import { ArrowUpRightIcon } from './icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Keep the bar pinned while the menu is open so the overlay stays put.
      setHidden(!open && window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [open])

  // Lock background scrolling while the full-screen menu is open.
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  // Close on Escape.
  useEffect(() => {
    if (!open) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full px-6 transition-all duration-500 ease-out sm:px-10 lg:px-[6vw] ${
          hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex items-center justify-between gap-6 py-4 sm:py-5">
          <a
            href="#top"
            onClick={closeMenu}
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
              className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-hover sm:block"
            >
              Let&rsquo;s Talk <ArrowUpRightIcon />
            </a>
            <button
              type="button"
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-line bg-canvas text-ink transition-colors hover:border-ink md:hidden"
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
      </nav>

      {/* Full-screen mobile menu. Fixed to the viewport so it never overlaps
          the hero in document flow, and stacked under the navbar (z-40 < z-50)
          so the close button stays clickable. */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-canvas transition-opacity duration-300 ease-out md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pt-20 pb-8 sm:px-10">
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  style={{ transitionDelay: open ? `${index * 40}ms` : '0ms' }}
                  className={`block py-5 text-lg text-muted transition-all duration-300 ease-out hover:text-ink ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={closeMenu}
            style={{ transitionDelay: open ? `${navLinks.length * 40}ms` : '0ms' }}
            className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-hover ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            Let&rsquo;s Talk <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </>
  )
}
