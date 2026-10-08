import { ArrowUpRightIcon } from '../components/icons'
import Section from '../components/Section'
import { profile, socials } from '../data/portfolio'
import { socialIcons } from '../lib/socialIcons'

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Contact" meta={profile.location}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-16">
        <div>
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.04em] text-ink">
            Let&rsquo;s build something
            <span className="font-display font-normal text-muted italic">
              {' '}
              worth shipping.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            Available for freelance projects, product roles and technical
            consulting. I reply within a day or two.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            {profile.email} <ArrowUpRightIcon />
          </a>
        </div>

        <ul className="flex flex-wrap gap-3 md:justify-end">
          {socials.map((social) => {
            const Icon = socialIcons[social.icon]
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-ink hover:text-ink"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {social.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}