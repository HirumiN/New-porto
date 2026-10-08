import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  meta?: string
  className?: string
  headerMb?: string
  children: ReactNode
}

export default function Section({
  id,
  title,
  meta,
  className = '',
  headerMb = 'mb-4',
  children,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-10 md:py-10 ${className}`}>
      <div className={`${headerMb} flex items-end justify-between gap-3 border-b border-line pb-3 md:mb-12 md:gap-6 md:pb-5`}>
        <h2 className="flex items-baseline gap-3 text-xl font-medium tracking-[0.1em] text-muted uppercase md:tracking-[0.18em]">
          {title}
        </h2>
        {meta ? <span className="text-xs text-faint">{meta}</span> : null}
      </div>
      {children}
    </section>
  )
}