import { useEffect, useId, useRef } from 'react'
import { FiX } from 'react-icons/fi'

/**
 * Modal
 *
 * A blocking overlay dialog reserved for interactions that must be
 * acknowledged or decided before the customer can continue — confirming
 * a destructive action, a required form, a session-timeout warning,
 * a checkout interruption that needs explicit input.
 *
 * Do not use Modal for announcements the customer can safely ignore
 * (maintenance notices, promotions, general status updates) — use
 * AlertBar or PromoBanner instead. Modals interrupt the task at hand;
 * overusing them for low-stakes information trains customers to
 * reflexively dismiss dialogs without reading them, which works against
 * you in the moments a forced decision actually matters (e.g. a
 * cancellation confirmation).
 *
 * Accessibility behavior included:
 *   - Traps focus inside the dialog while open
 *   - Returns focus to the triggering element on close
 *   - Closes on Escape
 *   - Closes on backdrop click (set closeOnBackdropClick={false} for
 *     destructive confirmations where an accidental click should not dismiss)
 *   - Uses role="dialog", aria-modal, and is labelled by its title
 *
 * Usage:
 *   const [open, setOpen] = useState(false)
 *
 *   <Modal
 *     open={open}
 *     onClose={() => setOpen(false)}
 *     title="Confirm cancellation"
 *     closeOnBackdropClick={false}
 *     footer={
 *       <>
 *         <button className="ds-button ds-button-secondary" onClick={() => setOpen(false)}>
 *           Keep membership
 *         </button>
 *         <button className="ds-button ds-button-accent" onClick={handleCancel}>
 *           Cancel membership
 *         </button>
 *       </>
 *     }
 *   >
 *     This will end your ANA membership at the end of the current billing period.
 *   </Modal>
 */

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
}

export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  closeOnBackdropClick = true,
  size = 'md',
}) {
  const dialogRef = useRef(null)
  const titleId = useId()
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement

    const dialog = dialogRef.current
    const focusable = dialog?.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    focusable?.[0]?.focus()

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && focusable?.length) {
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previouslyFocused.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
        onClick={closeOnBackdropClick ? onClose : undefined}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative w-full ${sizeClasses[size]} rounded-2xl bg-white shadow-ana-lg`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border-default)] p-5">
          <h2 id={titleId} className="text-2xl">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="shrink-0 rounded-button p-1.5 text-[var(--color-text-secondary)] hover:bg-surface-muted"
          >
            <FiX aria-hidden="true" size={20} />
          </button>
        </div>

        <div className="p-5 text-[var(--color-text-primary)]">{children}</div>

        {footer && (
          <div className="flex flex-wrap justify-end gap-3 border-t border-[var(--color-border-default)] p-5">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
