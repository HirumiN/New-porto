import Section from '../components/Section'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <Section
      id="education"
      title="Education & Leadership"
      meta="2021 — 2025"
      className="mt-8 md:mt-0"
      headerMb="mb-2"
    >
      <ol className="divide-y divide-line md:border-t md:border-line">
        {education.map((item) => (
          <li
            key={item.period}
            className="grid gap-2 py-4 md:grid-cols-[10rem_1fr_1.3fr] md:items-baseline md:gap-8 md:py-8"
          >
            <span className="text-xs tracking-widest text-faint">{item.period}</span>
            <div>
              <h3 className="font-medium tracking-[-0.02em] text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.place}</p>
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
