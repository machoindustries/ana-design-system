import { useEffect, useRef } from 'react'

/**
 * ErrorSummary
 *
 * Lists a form's validation errors at the top of the form, each one a link
 * to its field. It takes focus when it appears, and role="alert" announces
 * it, so a failed submit is never silent.
 *
 * Remount it on every failed submit (give it a `key` that changes) so focus
 * and the announcement happen again even if the errors are the same.
 *
 * Each field it points to should carry aria-invalid="true" and an
 * aria-describedby pointing at its own inline message.
 *
 * Sits on the page background, not the error tint: link-default fails on
 * --color-background-error, and the red heading is 5.10:1 on white.
 *
 * Usage:
 *   <ErrorSummary key={attempt} errors={[{ id: 'consent', message: 'Tick the box to agree.' }]} />
 */
export function ErrorSummary({ errors, title = 'There is a problem', headingLevel = 2 }) {
  const ref = useRef(null)
  const Heading = `h${headingLevel}`

  useEffect(() => {
    ref.current?.focus()
  }, [])

  function goToField(event, id) {
    const field = document.getElementById(id)
    if (!field) return
    event.preventDefault()
    field.focus()
  }

  return (
    <div
      ref={ref}
      role="alert"
      tabIndex={-1}
      className="rounded-[var(--radius-md)] border-2 border-l-8 border-[var(--color-border-error)] bg-surface-page p-4"
    >
      <Heading className="type-h4 text-[var(--color-text-error)]">{title}</Heading>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {errors.map(error => (
          <li key={error.id}>
            <a href={`#${error.id}`} onClick={event => goToField(event, error.id)} className="font-semibold">
              {error.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
