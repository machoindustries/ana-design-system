import { useState } from 'react'
import { FiAlertTriangle, FiCheckCircle, FiInfo, FiX, FiXCircle } from 'react-icons/fi'

/**
 * AlertBar
 *
 * A persistent, full-width banner for operational and status messaging —
 * scheduled maintenance, active outages, policy notices, or system status
 * updates. Non-blocking: it sits at the top of (or within) the page but
 * never prevents the customer from using what's underneath it.
 *
 * Reserve AlertBar for status/operational messaging. For marketing or
 * editorial announcements (new products, member news, content promotion),
 * use PromoBanner instead — see PromoBanner.jsx. Mixing the two jobs into
 * one component makes both worse: status messages need to read as urgent
 * and official, marketing messages need to read as inviting.
 *
 * For anything that must be acknowledged or decided before the customer
 * can continue — a destructive confirmation, a required form, a session
 * timeout — use Modal instead. AlertBar is for things the customer can see
 * and dismiss without blocking their task.
 *
 * Variants map directly to the kit's existing semantic status tokens
 * (tokens.css / tailwind.config.js — no new tokens required):
 *   info     — bg-surface-info     blue    general announcements, status updates
 *   success  — bg-surface-success  green   resolved incidents, completed actions
 *   warning  — bg-surface-warning  yellow  scheduled maintenance, upcoming changes
 *   error    — bg-surface-error    red     active outages, critical failures
 *
 * Usage:
 *   <AlertBar variant="warning" title="Scheduled maintenance">
 *     nursingworld.org will be unavailable Saturday, June 20 from 11 PM–2 AM ET.
 *   </AlertBar>
 *
 *   <AlertBar
 *     variant="error"
 *     title="Service disruption"
 *     dismissible={false}
 *     action={{ label: 'View status page', href: '/status' }}
 *   >
 *     Some members may experience errors when renewing membership online.
 *   </AlertBar>
 */

const variantConfig = {
  info: {
    icon: FiInfo,
    bg: 'bg-surface-info',
    border: 'border-[var(--color-border-info)]',
    iconColor: 'text-[var(--color-text-info)]',
  },
  success: {
    icon: FiCheckCircle,
    bg: 'bg-surface-success',
    border: 'border-[var(--color-border-success)]',
    iconColor: 'text-[var(--color-text-success)]',
  },
  warning: {
    icon: FiAlertTriangle,
    bg: 'bg-surface-warning',
    border: 'border-[var(--color-border-warning)]',
    iconColor: 'text-[var(--color-text-warning)]',
  },
  error: {
    icon: FiXCircle,
    bg: 'bg-surface-error',
    border: 'border-[var(--color-border-error)]',
    iconColor: 'text-[var(--color-text-error)]',
  },
}

export function AlertBar({
  variant = 'info',
  title,
  children,
  action,
  dismissible = true,
  onDismiss,
}) {
  const [dismissed, setDismissed] = useState(false)
  const config = variantConfig[variant]
  const Icon = config.icon

  if (dismissed) return null

  function handleDismiss() {
    setDismissed(true)
    onDismiss?.()
  }

  // Errors and warnings interrupt screen reader output immediately;
  // info and success are announced politely so they don't cut off other speech.
  const role = variant === 'error' || variant === 'warning' ? 'alert' : 'status'

  return (
    <div role={role} className={`border-b ${config.border} ${config.bg}`}>
      <div className="ds-container flex flex-wrap items-start gap-3 py-3 sm:items-center">
        <Icon aria-hidden="true" className={`mt-0.5 shrink-0 sm:mt-0 ${config.iconColor}`} size={20} />

        <div className="min-w-0 flex-1 text-sm">
          {title && <span className="font-bold text-[var(--color-text-primary)]">{title}: </span>}
          <span className="text-[var(--color-text-primary)]">{children}</span>
        </div>

        {action && (
          <a
            href={action.href}
            className="shrink-0 whitespace-nowrap text-sm font-bold text-[var(--color-text-primary)] underline hover:no-underline"
          >
            {action.label}
          </a>
        )}

        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss this notice"
            className="shrink-0 rounded-button p-1 text-[var(--color-text-primary)] hover:bg-black/5"
          >
            <FiX aria-hidden="true" size={18} />
          </button>
        )}
      </div>
    </div>
  )
}
