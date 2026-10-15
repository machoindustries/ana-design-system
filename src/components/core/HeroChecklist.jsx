import { useId } from 'react'

/**
 * HeroChecklist
 *
 * The "text with a checklist panel" hero variant: dark text on the page
 * background (eyebrow, heading, intro, CTAs) with a ChecklistPanel beside it
 * in place of an image. Columns are about 60/40 (3fr/2fr) from md up; the
 * panel drops below the text on mobile.
 *
 * The eyebrow uses the kit's .ds-eyebrow (Nurses Blue, 4.54:1 on white).
 * Don't tint it green: green text on white is 3.68:1 and fails AA.
 *
 * Usage:
 *   <HeroChecklist
 *     eyebrow="Readiness assessment"
 *     heading="How ready are you for AI in nursing?"
 *     actions={<><Button href="/start">Start</Button><Button variant="secondary" href="/about">Learn more</Button></>}
 *     panel={<ChecklistPanel heading="You'll get" items={[…]} />}
 *   >
 *     Answer a short set of questions …
 *   </HeroChecklist>
 */
export function HeroChecklist({ eyebrow, heading, children, actions, panel, headingLevel = 2 }) {
  const headingId = useId()
  const Heading = `h${headingLevel}`

  return (
    <section aria-labelledby={headingId} className="bg-surface-page py-8">
      <div className="grid items-center gap-8 md:grid-cols-[3fr_2fr] md:gap-12">
        <div>
          {eyebrow ? <p className="ds-eyebrow mb-3">{eyebrow}</p> : null}
          <Heading id={headingId} className="text-[length:var(--type-h3-size)] leading-[var(--type-h3-line-height)] font-bold text-[var(--color-text-brand)] md:text-[length:var(--type-h2-size)] md:leading-[var(--type-h2-line-height)]">
            {heading}
          </Heading>
          {children ? <div className="mt-4 text-lg text-[var(--color-text-primary)]">{children}</div> : null}
          {actions ? <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div> : null}
        </div>
        {panel}
      </div>
    </section>
  )
}
