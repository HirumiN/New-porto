import { useCallback, useEffect, useRef, useState } from 'react'

type Animation =
  | 'fade'
  | 'slide-left'
  | 'slide-right'
  | 'slide-up'
  | 'slide-down'
  | 'blur'
  | 'scale-up'
  | 'scale-down'
  | 'clip'
  | 'glitch'
  | 'letters'
  | 'words'
  | 'scramble'
  | 'typewriter'

type Phrase = { text: string; serif: boolean }

type Item = Phrase & { animation: Animation }

const phrases: Phrase[] = [
  { text: 'I build things for the web.', serif: false },
  { text: 'Turning ideas into interfaces.', serif: false },
  { text: 'Code should feel invisible.', serif: true },
  { text: 'Simple is harder.', serif: true },
  { text: 'Built to ship.', serif: false },
  { text: 'Design. Build. Iterate.', serif: false },
  { text: 'Making the web feel better.', serif: false },
  { text: 'From idea to production.', serif: true },
  { text: 'Less noise. More signal.', serif: true },
  { text: 'Interfaces with intention.', serif: false },
  { text: 'Built with curiosity.', serif: false },
  { text: 'Ship it.', serif: true },
]

const animations: readonly Animation[] = [
  'fade',
  'slide-left',
  'slide-right',
  'slide-up',
  'slide-down',
  'blur',
  'scale-up',
  'scale-down',
  'clip',
  'glitch',
  'letters',
  'words',
  'scramble',
  'typewriter',
]

const simpleEnter: readonly Animation[] = [
  'fade',
  'slide-left',
  'slide-right',
  'slide-up',
  'slide-down',
  'blur',
  'scale-up',
  'scale-down',
  'clip',
  'glitch',
]

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+=<>'

function randomIndex(length: number) {
  return Math.floor(Math.random() * length)
}

function pickInitial(): Item {
  const phrase = phrases[randomIndex(phrases.length)]
  return { ...phrase, animation: animations[randomIndex(animations.length)] }
}

function pickNext(previous: Item): Item {
  let phrase = phrases[randomIndex(phrases.length)]
  while (phrase.text === previous.text) {
    phrase = phrases[randomIndex(phrases.length)]
  }
  let animation = animations[randomIndex(animations.length)]
  while (animation === previous.animation) {
    animation = animations[randomIndex(animations.length)]
  }
  return { ...phrase, animation }
}

function scramble(text: string) {
  return text
    .split('')
    .map((char) => (char === ' ' ? char : GLYPHS[randomIndex(GLYPHS.length)]))
    .join('')
}

function Typewriter({ text }: { text: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setCount((current) => (current >= text.length ? current : current + 1))
    }, 70)
    return () => window.clearInterval(id)
  }, [text])

  return (
    <span className="inline-block">
      {text.slice(0, count)}
      <span className="phrase-caret ml-1 inline-block h-[0.85em] w-[0.08em] translate-y-[0.06em] bg-ink align-middle" />
    </span>
  )
}

function Scramble({ text }: { text: string }) {
  const [value, setValue] = useState(() => scramble(text))

  useEffect(() => {
    let frame = 0
    const total = 16
    const id = window.setInterval(() => {
      frame += 1
      const shown = Math.floor((text.length * frame) / total)
      setValue(
        text
          .split('')
          .map((char, index) => {
            if (index < shown || char === ' ') return char
            return GLYPHS[randomIndex(GLYPHS.length)]
          })
          .join(''),
      )
      if (frame >= total) window.clearInterval(id)
    }, 42)
    return () => window.clearInterval(id)
  }, [text])

  return <span aria-hidden>{value}</span>
}

function PhraseContent({ item }: { item: Item }) {
  const { text, animation } = item

  if (animation === 'typewriter') {
    return <Typewriter text={text} />
  }
  if (animation === 'scramble') {
    return <Scramble text={text} />
  }
  if (animation === 'letters') {
    return (
      <span className="inline-block">
        {text.split('').map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="phrase-char"
            style={{ animationDelay: `${index * 45}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    )
  }
  if (animation === 'words') {
    return (
      <span className="inline-flex flex-wrap justify-center gap-x-[0.3em]">
        {text.split(' ').map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="phrase-word"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            {word}
          </span>
        ))}
      </span>
    )
  }
  return <span>{text}</span>
}

export default function Services() {
  const [item, setItem] = useState<Item>(pickInitial)
  const [phase, setPhase] = useState<'in' | 'out'>('in')
  const [sequence, setSequence] = useState(0)
  const hoverRef = useRef(false)
  const itemRef = useRef(item)
  const timerRef = useRef<number | null>(null)

  const runCycle = useCallback(
    function run() {
      if (hoverRef.current) return
      setPhase('out')
      timerRef.current = window.setTimeout(() => {
        const next = pickNext(itemRef.current)
        itemRef.current = next
        setItem(next)
        setSequence((current) => current + 1)
        setPhase('in')
        const delay = 2000 + Math.floor(Math.random() * 2000)
        timerRef.current = window.setTimeout(run, delay)
      }, 240)
    },
    [],
  )

  useEffect(() => {
    const delay = 2000 + Math.floor(Math.random() * 2000)
    timerRef.current = window.setTimeout(runCycle, delay)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [runCycle])

  const handleEnter = () => {
    hoverRef.current = true
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = null
    setPhase('in')
  }

  const handleLeave = () => {
    hoverRef.current = false
    const delay = 900 + Math.floor(Math.random() * 900)
    timerRef.current = window.setTimeout(runCycle, delay)
  }

  const type = item.serif
    ? 'font-display font-normal italic tracking-[-0.02em]'
    : 'font-semibold tracking-[-0.05em]'

  const enter =
    phase === 'out' ? 'phrase-exit' : simpleEnter.includes(item.animation) ? `anim-${item.animation}` : ''

  return (
    <section
      id="services"
      data-phrase-section
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="flex scroll-mt-20 min-h-[55svh] items-center justify-center overflow-hidden border-b border-line px-6 py-24 sm:px-10 lg:min-h-[62svh]"
    >
      <div
        key={sequence}
        className={`text-[clamp(2.5rem,6vw,7rem)] leading-[1.05] text-center whitespace-normal text-ink [text-wrap:balance] ${type} ${enter}`}
      >
        <p className="sr-only">{item.text}</p>
        <PhraseContent item={item} />
      </div>
    </section>
  )
}