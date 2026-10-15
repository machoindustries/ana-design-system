import { useId } from 'react'

/**
 * ReadinessResult
 *
 * The result screen of a scored assessment such as the ARNI readiness
 * profile: a heading, a disclaimer, a dark score card, a panel of
 * dimensions, recommendation links and the scoring version.
 *
 * Two columns (score card | dimensions) from md up, stacked below.
 *
 * Withheld state: when score.value is null the card shows no number and
 * explains why (score.withheldMessage). The dimensions are still shown.
 *
 * Screen readers hear the score as "72 out of 100". Each dimension's score
 * is written out ("64" or "Not answered"); its bar is a decorative
 * <progress> (aria-hidden) styled by .ds-data-bar.
 *
 * Recommendation links sit on a soft tint, so they use
 * --color-link-on-tint (10.70:1) rather than the link default (4.23:1, fails).
 *
 * Usage:
 *   <ReadinessResult
 *     heading="Your readiness profile"
 *     disclaimer="This is a provisional score …"
 *     score={{ label: 'Overall readiness', value: 72, band: 'Developing', description: '…' }}
 *     dimensions={{ heading: 'Your dimensions', items: [{ name: 'Knowledge', score: 64 }] }}
 *     recommendations={{ heading: 'Recommended for you', items: [{ title: '…', href: '/…', description: '…' }] }}
 *     scoringLabel="arni-v2-provisional"
 *   />
 */
export function ReadinessResult({ heading, disclaimer, score, dimensions, recommendations, scoringLabel, headingLevel = 2 }) {
  const headingId = useId()
  const Heading = `h${headingLevel}`
  const Subheading = `h${headingLevel + 1}`
  const withheld = score.value === null || score.value === undefined
  const links = recommendations?.items ?? []

  return (
    <section aria-labelledby={headingId}>
      <Heading id={headingId} className="type-h3">{heading}</Heading>
      {disclaimer ? <p className="mt-2 text-[var(--color-text-secondary)]">{disclaimer}</p> : null}

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-[var(--radius-lg)] bg-surface-dark p-6 text-[var(--color-text-inverse)]">
          <p className="text-sm font-semibold uppercase tracking-wider">{score.label}</p>
          {withheld ? (
            <p className="mt-3">{score.withheldMessage}</p>
          ) : (
            <>
              <p className="type-h1 mt-2">
                {score.value}
                <span className="sr-only"> out of 100</span>
              </p>
              {score.band ? <p className="type-h3 mt-2">{score.band}</p> : null}
              {score.description ? <p className="mt-2">{score.description}</p> : null}
            </>
          )}
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-surface-page p-6">
          <Subheading className="type-h4">{dimensions.heading}</Subheading>
          <ul className="mt-4 space-y-4">
            {dimensions.items.map(item => {
              const answered = item.score !== null && item.score !== undefined
              return (
                <li key={item.name} className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
                  <span className="min-w-0">{item.name}</span>
                  <span className="font-semibold">{answered ? item.score : 'Not answered'}</span>
                  <progress
                    className="ds-data-bar col-span-2"
                    value={answered ? Math.max(0, Math.min(100, item.score)) : 0}
                    max={100}
                    aria-hidden="true"
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {links.length > 0 ? (
        <div className="mt-5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-surface-page p-6">
          <Subheading className="type-h4">{recommendations.heading}</Subheading>
          <ul className="mt-4 space-y-3">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-12 items-center rounded-full bg-surface-soft px-4 py-2 font-semibold text-[var(--color-link-on-tint)] underline underline-offset-4 hover:decoration-2"
                >
                  {link.title}
                </a>
                {link.description ? (
                  <p className="mt-1 text-[var(--color-text-secondary)]">{link.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {scoringLabel ? (
        <p className="mt-4 text-sm text-[var(--color-text-secondary)]">Scoring: {scoringLabel}</p>
      ) : null}
    </section>
  )
}
