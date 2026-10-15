import { FiCheck } from 'react-icons/fi'

/**
 * ChecklistPanel
 *
 * A navy card with a heading and a checklist. Used as the second column of
 * HeroChecklist in place of an image.
 *
 * The check marks are decorative (aria-hidden); the list carries the
 * meaning. They use --color-accent-on-dark (6.97:1 on navy) rather than a
 * background token borrowed as a foreground colour.
 *
 * Usage:
 *   <ChecklistPanel heading="In 10 minutes you'll get" items={['A readiness score', '…']} />
 */
export function ChecklistPanel({ heading, items, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`

  return (
    <div className="rounded-[var(--radius-lg)] bg-surface-dark p-6 text-[var(--color-text-inverse)] shadow-ana-lg md:p-8">
      <Heading className="type-h4 text-[var(--color-text-inverse)]">{heading}</Heading>
      <ul className="mt-4 space-y-3">
        {items.map(item => (
          <li key={item} className="flex gap-3">
            <FiCheck aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-[var(--color-accent-on-dark)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
