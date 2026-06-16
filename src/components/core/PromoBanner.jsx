import { useState } from 'react'
import { FiArrowRight, FiX } from 'react-icons/fi'

/**
 * PromoBanner
 *
 * A dismissible banner for marketing and editorial announcements — new
 * products, member benefits, content drops, campaign pushes. This is a
 * distinct job from AlertBar: PromoBanner should feel inviting and easy
 * to engage with, where AlertBar should feel urgent and official. Keeping
 * them visually and semantically separate means customers can tell at a
 * glance whether something is "you should know this" (status) or
 * "you might like this" (marketing) — conflating the two trains people
 * to dismiss both without reading either.
 *
 * Uses ANA brand action tokens rather than status tokens, since promotions
 * are not status states:
 *   brand     — bg-action-primary (green)    default — general announcements
 *   highlight — bg-ana-navy                  darker, higher-contrast — flagship campaigns
 *   accent    — bg-action-accent (red)       urgent calls to action, fundraising pushes
 *
 * Usage:
 *   <PromoBanner
 *     eyebrow="New"
 *     title="The Economic Value of Nursing"
 *     action={{ label: 'Watch now', href: '/continuing-education/economic-value-of-nurses/' }}
 *   >
 *     A free on-demand session on articulating the value of the nursing profession.
 *   </PromoBanner>
 *
 *   <PromoBanner
 *     variant="accent"
 *     eyebrow="Through May 12"
 *     title="Help us light up the sky"
 *     action={{ label: 'Donate now', href: '/foundation/donate' }}
 *     dismissible={false}
 *   />
 */

const variantConfig = {
  brand: {
    bg: 'bg-action-primary',
    text: 'text-white',
    eyebrowText: 'text-[var(--ana-green-100)]',
    actionHover: 'hover:bg-white/10',
  },
  highlight: {
    bg: 'bg-ana-navy',
    text: 'text-white',
    eyebrowText: 'text-[var(--ana-blue-200)]',
    actionHover: 'hover:bg-white/10',
  },
  accent: {
    bg: 'bg-action-accent',
    text: 'text-white',
    eyebrowText: 'text-[var(--ana-red-200)]',
    actionHover: 'hover:bg-white/10',
  },
}

export function PromoBanner({
  variant = 'brand',
  eyebrow,
  title,
  children,
  action,
  dismissible = true,
  onDismiss,
}) {
  const [dismissed, setDismissed] = useState(false)
  const config = variantConfig[variant]

  if (dismissed) return null

  function handleDismiss() {
    setDismissed(true)
    onDismiss?.()
  }

  return (
    <div role="region" aria-label={title || 'Announcement'} className={config.bg}>
      <div className="ds-container flex flex-wrap items-center gap-4 py-3">
        <div className="min-w-0 flex-1">
          {eyebrow && (
            <p className={`text-xs font-bold uppercase tracking-wide ${config.eyebrowText}`}>{eyebrow}</p>
          )}
          <p className={`text-sm sm:text-base ${config.text}`}>
            {title && <span className="font-bold">{title}</span>}
            {title && children && ' — '}
            {children}
          </p>
        </div>

        {action && (
          <a
            href={action.href}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-button border border-white/40 px-4 py-2 text-sm font-bold no-underline ${config.text} ${config.actionHover}`}
          >
            {action.label}
            <FiArrowRight aria-hidden="true" size={16} />
          </a>
        )}

        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss this announcement"
            className={`shrink-0 rounded-button p-1.5 ${config.text} hover:bg-white/10`}
          >
            <FiX aria-hidden="true" size={18} />
          </button>
        )}
      </div>
    </div>
  )
}
