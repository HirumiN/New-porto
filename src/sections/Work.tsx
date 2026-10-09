import { useEffect, useRef, useState } from 'react'
import Swiper from 'swiper'
import { A11y, Keyboard, Navigation } from 'swiper/modules'
import 'swiper/css'
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from '../components/icons'
import ProjectVisual from '../components/ProjectVisual'
import Section from '../components/Section'
import { projects } from '../data/portfolio'

const total = projects.length

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return

    const swiper = new Swiper(containerRef.current, {
      modules: [Navigation, Keyboard, A11y],
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: total > 1,
      grabCursor: true,
      watchOverflow: true,
      autoHeight: window.matchMedia('(max-width: 767px)').matches,
      keyboard: { enabled: true },
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      },
      a11y: {
        prevSlideMessage: 'Previous project',
        nextSlideMessage: 'Next project',
        containerRoleDescriptionMessage: 'Project carousel',
      },
      on: {
        slideChange: (swiperInstance) => setActive(swiperInstance.realIndex),
      },
    })

    setActive(swiper.realIndex)

    return () => {
      swiper.destroy(true, false)
    }
  }, [])

  const progress = ((active + 1) / total) * 100

  return (
    <Section id="work" title="Selected work" >
      <div className="relative">
        <div ref={containerRef} className="swiper work-swiper">
          <div className="swiper-wrapper">
            {projects.map((project) => (
              <div className="swiper-slide" key={project.title}>
                <article className="grid h-full gap-7 md:gap-9 lg:grid-cols-[57fr_43fr] lg:gap-14">
                  <ProjectVisual title={project.title} visual={project.visual} />

                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4 border-b border-line pb-4 text-[0.6875rem] tracking-[0.18em] uppercase">
                      <span className="text-muted">{project.category}</span>
                      <span className="text-faint">{project.year}</span>
                    </div>

                    <h3 className="mt-6 text-[clamp(1.9rem,3.1vw,2.85rem)] leading-[1.04] font-medium tracking-[-0.04em] text-ink md:mt-8">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-md text-[0.9375rem] leading-[1.75] text-muted">
                      {project.description}
                    </p>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-5 inline-flex w-fit items-center gap-2 border-b border-line pb-1 text-sm font-medium text-ink transition-colors hover:border-ink md:mt-8 md:pb-1.5"
                    >
                      View case study
                      <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          ref={prevRef}
          aria-label="Previous project"
          className="work-nav group absolute inset-y-0 left-0 z-10 grid w-11 place-items-center text-muted transition-colors hover:bg-ink/6 hover:text-ink md:w-14"
        >
          <ArrowLeftIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
        </button>
        <button
          type="button"
          ref={nextRef}
          aria-label="Next project"
          className="work-nav group absolute inset-y-0 right-0 z-10 grid w-11 place-items-center text-muted transition-colors hover:bg-ink/6 hover:text-ink md:w-14"
        >
          <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      <div
        aria-hidden
        className="mt-0.5 h-px w-full overflow-hidden bg-line md:mt-1 md:h-0.5"
      >
        <span
          className="block h-full bg-ink transition-[width] duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </Section>
  )
}
