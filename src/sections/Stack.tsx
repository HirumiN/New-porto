import { tech } from '../data/portfolio'
import { logos } from '../data/logos'

const marquee = [...tech, ...tech]

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-20">
      <div className="relative border-b border-line">
        <div
          data-marquee
          className="stack-scroller overflow-hidden py-5 md:py-8"
          aria-label="Technologies I use"
        >
          <div className="marquee flex w-max items-center">
            {marquee.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex shrink-0 items-center pr-3 md:pr-14"
              >
                <span className="grid size-9 place-items-center border border-line bg-paper text-ink md:size-12">
                  {logos[item.name] ? (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="size-5 fill-current md:size-7"
                      aria-label={item.name}
                    >
                      <path d={logos[item.name]} />
                    </svg>
                  ) : (
                    <span className="font-display text-sm italic md:text-base">{item.mark}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-canvas to-transparent md:w-28"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-canvas to-transparent md:w-28"
        />
      </div>
    </section>
  )
}
