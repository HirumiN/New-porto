import { tech } from '../data/portfolio'

const marquee = [...tech, ...tech]

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-20 ">
      <div
        data-marquee
        className="group relative overflow-hidden border-y border-line py-8 md:py-10"
        aria-label="Technologies I use"
      >
        <div className="marquee flex w-max">
          {marquee.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex shrink-0 flex-col items-center gap-3 pr-10 md:pr-14"
            >
              <span className="grid size-11 place-items-center border border-line bg-paper font-display text-sm text-ink italic md:size-12 md:text-base">
                {item.mark}
              </span>
            </div>
          ))}
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