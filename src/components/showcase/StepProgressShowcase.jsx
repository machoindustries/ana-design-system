import { useState } from 'react'
import { Button, StepProgress } from '../core'

const TOTAL = 5

export function StepProgressShowcase() {
  const [step, setStep] = useState(2)

  return (
    <div className="grid gap-6">
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-surface-page p-5 shadow-ana sm:p-6">
        <StepProgress current={step} total={TOTAL} />
        <div className="mt-6 flex flex-wrap justify-between gap-3">
          <Button variant="secondary" onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1}>Back</Button>
          <Button onClick={() => setStep(s => Math.min(TOTAL, s + 1))} disabled={step === TOTAL}>Next</Button>
        </div>
      </div>

      <div className="max-w-content space-y-3 text-[var(--color-text-secondary)]">
        <p>
          The written &ldquo;Step 2 of 5&rdquo; is what assistive technology reads, from a polite live region. The bar
          is a native <code className="ds-code">&lt;progress&gt;</code> with <code className="ds-code">aria-hidden=&quot;true&quot;</code>:
          it takes its fill from <code className="ds-code">value</code> and <code className="ds-code">max</code>, so no inline width is needed.
        </p>
        <p>
          Style it with <code className="ds-code">.ds-data-bar</code>, which sets the track and fill from
          <code className="ds-code">--color-data-track</code> and <code className="ds-code">--color-data-fill</code> (3.94:1).
          Browsers need their own pseudo-elements: <code className="ds-code">::-webkit-progress-bar</code> and
          <code className="ds-code">::-webkit-progress-value</code> in Chromium and Safari, and <code className="ds-code">::-moz-progress-bar</code> in
          Firefox. Write them as separate rules, because a selector list that mixes them is dropped whole. Add
          <code className="ds-code">.ds-data-bar-animated</code> to animate the fill. It only animates when the visitor allows motion, and Firefox
          doesn&rsquo;t animate it.
        </p>
      </div>
    </div>
  )
}
