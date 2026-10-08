import Section from '../components/Section'
import { services } from '../data/portfolio'

export default function Services() {
  return (
    <Section id="services" index="03" title="Services" meta="What I do">
      <div className="divide-y divide-line border-t border-line">
        {services.map((service) => (
          <div
            key={service.index}
            className="grid gap-4 py-8 md:grid-cols-[4rem_1fr_1.2fr] md:items-baseline md:gap-8"
          >
            <span className="text-xs tracking-[0.16em] text-faint uppercase">
              {service.index}
            </span>
            <h3 className="text-xl font-medium tracking-[-0.03em] text-ink">
              {service.title}
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}