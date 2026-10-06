import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: string
  title: string
  meta?: string
  children: ReactNode
}

export default function Section({ id, index, title, meta, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-14 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-6 border-b border-line pb-5 md:mb-12">
        <h2 className="flex items-baseline gap-3 text-sm font-medium tracking-[0.18em] text-muted uppercase">
          <span className="text-faint">{index}</span>
          {title}
        </h2>
        {meta ? <span className="text-xs text-faint">{meta}</span> : null}
      </div>
      {children}
    </section>
  )
}