import { ArrowUpRightIcon } from '../components/icons'
import Section from '../components/Section'
import { projects } from '../data/portfolio'

export default function Work() {
  return (
    <Section id="work" index="01" title="Selected work" meta={`${projects.length} projects`}>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-10 bg-paper p-8 transition-colors hover:bg-shell md:p-10"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.16em] text-faint uppercase">
                  {project.index}
                </span>
                <span className="text-xs text-faint">{project.year}</span>
              </div>
              <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em] text-ink">
                {project.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            <div className="flex items-end justify-between gap-4">
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span
                aria-hidden
                className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-sm text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white"
              >
                <ArrowUpRightIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}