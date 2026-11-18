import { useId } from 'react'

/**
 * StatementHero
 *
 * A text-only page opener: eyebrow, a large heading, a short intro and up to
 * two actions, with no image. The background is the page, a surface (soft,
 * muted, dark) or one of three playbook gradients. On load the text rises from
 * the bottom of the block into place and fades in (.ds-entrance); nothing
 * moves with reduced motion, and the text is visible without it.
 *
 * Gradients are the dark, analogous playbook pairs that keep white text at AA:
 * Nurses Blue to Navy (4.54:1 at the blue end), Navy to 25% black and Gray to
 * 25% black. Green to Navy is left out: white on Nurses Green is 3.68:1, which
 * fails for the intro. On a gradient the eyebrow is white, because the green
 * on-dark eyebrow is 3.55:1 on Nurses Blue.
 *
 * Usage:
 *   <StatementHero
 *     eyebrow="Content Hub"
 *     heading="Practical guidance for every stage of your career"
 *     background="blue-navy"
 *     actions={<><Button href="/start">Get started</Button><Button variant="secondary" href="/about">Learn more</Button></>}
 *   >
 *     Articles, toolkits and courses from ANA, in one place.
 *   </StatementHero>
 */
const backgrounds = {
  none: { className: 'bg-surface-page', dark: false },
  soft: { className: 'bg-surface-soft', dark: false },
  muted: { className: 'bg-surface-muted', dark: false },
  dark: { className: 'bg-surface-dark', dark: true },
  'blue-navy': { className: 'ds-gradient-blue-navy', dark: true, gradient: true },
  'navy-black': { className: 'ds-gradient-navy-black', dark: true, gradient: true },
  'gray-black': { className: 'ds-gradient-gray-black', dark: true, gradient: true },
}

export const statementHeroBackgrounds = Object.keys(backgrounds)

export function StatementHero({ eyebrow, heading, children, actions, background = 'none', align = 'center', headingLevel = 1 }) {
  const headingId = useId()
  const Heading = `h${headingLevel}`
  const bg = backgrounds[background] ?? backgrounds.none
  const centered = align === 'center'
  const eyebrowColor = bg.gradient ? 'text-[var(--color-text-inverse)]' : bg.dark ? 'text-[var(--color-text-eyebrow-on-dark)]' : ''

  return (
    <section aria-labelledby={headingId} className={`ds-statement-hero ${bg.dark ? 'ds-statement-hero-on-dark' : ''} ${bg.className} overflow-hidden px-5 py-14 sm:px-8 md:py-24`}>
      <div className={`ds-entrance max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
        {eyebrow ? <p className={`ds-eyebrow mb-4 ${eyebrowColor}`}>{eyebrow}</p> : null}
        <Heading id={headingId} className={`text-[length:var(--type-h2-size)] leading-[var(--type-h2-line-height)] font-bold md:text-[length:var(--type-h1-size)] md:leading-[var(--type-h1-line-height)] ${bg.dark ? 'text-[var(--color-text-inverse)]' : 'text-[var(--color-text-brand)]'}`}>
          {heading}
        </Heading>
        {children ? <div className={`mt-5 text-lg md:text-xl ${bg.dark ? 'text-[var(--color-text-inverse)]' : 'text-[var(--color-text-primary)]'}`}>{children}</div> : null}
        {actions ? <div className={`mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${centered ? 'sm:justify-center' : ''}`}>{actions}</div> : null}
      </div>
    </section>
  )
}
