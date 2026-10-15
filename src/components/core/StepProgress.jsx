/**
 * StepProgress
 *
 * "Step 2 of 5" with a bar beneath it that fills in proportion. The text is
 * the accessible version and sits in a polite live region, so moving between
 * steps is announced. The bar is a native <progress> marked aria-hidden: it
 * repeats the text for sighted users and takes its fill from value/max, so
 * no inline width is needed. See .ds-data-bar in index.css for its styling.
 *
 * The fill animates between steps unless the visitor prefers reduced motion.
 *
 * Usage:
 *   <StepProgress current={2} total={5} />
 */
export function StepProgress({ current, total }) {
  return (
    <div>
      <p aria-live="polite" className="text-sm font-semibold text-[var(--color-text-secondary)]">
        Step {current} of {total}
      </p>
      <progress
        className="ds-data-bar ds-data-bar-animated mt-2"
        value={current}
        max={total}
        aria-hidden="true"
      />
    </div>
  )
}
