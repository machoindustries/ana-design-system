import { useId, useState } from 'react'
import { Button } from './Button'
import { ErrorSummary } from './ErrorSummary'

/**
 * ConsentStep
 *
 * A legal notice a visitor has to accept before a survey or assessment
 * continues. This is a legal notice, not a cookie banner: it sits inline in
 * the flow, never floats over the page, and can't be dismissed.
 *
 * The notice is editor-supplied rich text (pass it as children); links in it
 * take --color-link-on-tint, which passes on the tinted box.
 *
 * Two variants:
 *   - requireCheckbox (default): a required "I agree" checkbox. Continuing
 *     without it shows an ErrorSummary that links to the box, and the box
 *     gets aria-invalid and aria-describedby pointing at its message.
 *   - requireCheckbox={false}: the message alone and a Continue button.
 *
 * headingLevel sets the ErrorSummary heading: one below the step's heading.
 *
 * Usage:
 *   <ConsentStep checkboxLabel="I have read and agree to the notice above." onContinue={next}>
 *     <p>ANA will use your answers to …</p>
 *   </ConsentStep>
 */
export function ConsentStep({ children, checkboxLabel = 'I agree', requireCheckbox = true, onContinue, headingLevel = 2 }) {
  const id = useId()
  const checkboxId = `${id}-agree`
  const errorId = `${checkboxId}-error`
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState(null)
  const [attempt, setAttempt] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    if (requireCheckbox && !agreed) {
      setError('Tick the box to agree to the notice before you continue.')
      setAttempt(a => a + 1)
      return
    }
    setError(null)
    onContinue?.()
  }

  function handleChange(event) {
    setAgreed(event.target.checked)
    if (event.target.checked) setError(null)
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5">
      {error ? (
        <ErrorSummary key={attempt} headingLevel={headingLevel} errors={[{ id: checkboxId, message: error }]} />
      ) : null}

      <div className="ds-notice rounded-[var(--radius-md)] border-l-4 border-[var(--color-border-info)] bg-surface-info p-4 text-[var(--color-text-primary)] sm:p-5">
        {children}
      </div>

      {requireCheckbox ? (
        <div className={error ? 'border-l-4 border-[var(--color-border-error)] pl-4' : ''}>
          <label htmlFor={checkboxId} className="flex min-h-12 cursor-pointer items-start gap-3 py-2">
            <input
              id={checkboxId}
              type="checkbox"
              required
              checked={agreed}
              onChange={handleChange}
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={error ? errorId : undefined}
              className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-action-primary)]"
            />
            <span className="font-semibold">{checkboxLabel}</span>
          </label>
          {error ? (
            <p id={errorId} className="text-sm font-semibold text-[var(--color-text-error)]">{error}</p>
          ) : null}
        </div>
      ) : null}

      <div>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  )
}
