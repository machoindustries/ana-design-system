import { useId } from 'react'

/**
 * LikertScale
 *
 * A numbered rating question (for example 1–7) built as a fieldset/legend
 * radio group, with labels for the two ends.
 *
 * Layout:
 *   - Below md: full-width stacked rows, with each end label beside its
 *     point. Seven 44px targets don't fit across a 320px screen.
 *   - md and up: one row of equal columns across the full width, with the
 *     end labels beneath.
 *
 * Every point is a 48px (min-h-12) target, and the whole point is the
 * label, so all of it is clickable. Selection is shown by the radio's own
 * dot, a heavier border and a bold number, not by colour alone.
 *
 * Each end radio's accessible name includes its end label ("1, Avoidant").
 * The visible end labels are aria-hidden, so they aren't read twice.
 *
 * Usage:
 *   <LikertScale
 *     legend="How do you feel about using AI tools in your practice?"
 *     points={7}
 *     minLabel="Avoidant"
 *     maxLabel="Enthusiastic"
 *     value={value}
 *     onChange={setValue}
 *     error={error}
 *   />
 *
 * Pass `id` when an ErrorSummary needs to link to the scale: the first
 * point's radio is `${id}-1`.
 */
export function LikertScale({ id: idProp, legend, points = 7, minLabel, maxLabel, value, onChange, error }) {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const errorId = `${id}-error`
  const values = Array.from({ length: points }, (_, i) => i + 1)

  function endLabel(n) {
    if (n === 1) return minLabel
    if (n === points) return maxLabel
    return null
  }

  return (
    <fieldset
      className={`min-w-0 ${error ? 'border-l-4 border-[var(--color-border-error)] pl-4' : ''}`}
      aria-describedby={error ? errorId : undefined}
    >
      <legend className="ds-label mb-3">{legend}</legend>

      <div className="grid gap-2 md:auto-cols-fr md:grid-flow-col">
        {values.map(n => {
          const hint = endLabel(n)
          return (
            <label
              key={n}
              className="flex min-h-12 min-w-12 cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-surface-page px-4 py-2 has-[:checked]:border-[var(--color-border-strong)] has-[:checked]:bg-surface-soft has-[:checked]:font-bold has-[:checked]:shadow-[inset_0_0_0_1px_var(--color-border-strong)] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--color-focus-ring)] has-[:focus-visible]:outline-solid md:flex-col md:justify-center md:gap-1 md:px-2"
            >
              <input
                id={`${id}-${n}`}
                type="radio"
                name={id}
                value={n}
                checked={value === n}
                onChange={() => onChange?.(n)}
                aria-label={hint ? `${n}, ${hint}` : String(n)}
                aria-describedby={error && n === 1 ? errorId : undefined}
                className="h-5 w-5 shrink-0 accent-[var(--color-action-primary)]"
              />
              <span aria-hidden="true">{n}</span>
              {hint ? (
                <span aria-hidden="true" className="text-sm font-normal text-[var(--color-text-secondary)] md:hidden">
                  {hint}
                </span>
              ) : null}
            </label>
          )
        })}
      </div>

      <div aria-hidden="true" className="mt-2 hidden justify-between text-sm text-[var(--color-text-secondary)] md:flex">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>

      {error ? (
        <p id={errorId} className="mt-2 text-sm font-semibold text-[var(--color-text-error)]">{error}</p>
      ) : null}
    </fieldset>
  )
}

