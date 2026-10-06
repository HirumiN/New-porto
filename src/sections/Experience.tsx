import Section from '../components/Section'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience" meta="2021 — Present">
      <ol className="divide-y divide-line border-t border-line">
        {experience.map((item) => (
          <li
            key={item.period}
            className="grid gap-4 py-8 md:grid-cols-[10rem_1fr_1.3fr] md:items-baseline md:gap-8"
          >
            <span className="text-xs tracking-[0.1em] text-faint">{item.period}</span>
            <div>
              <h3 className="font-medium tracking-[-0.02em] text-ink">{item.role}</h3>
              <p className="mt-1 text-sm text-muted">{item.company}</p>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-muted">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-faint" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}