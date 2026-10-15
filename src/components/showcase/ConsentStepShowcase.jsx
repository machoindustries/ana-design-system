import { useState } from 'react'
import { ConsentStep } from '../core'

function Notice() {
  return (
    <>
      <p>
        The American Nurses Association will use your answers to calculate your readiness profile and, in a form that
        doesn&rsquo;t identify you, to improve its programs. Your answers are kept for 24 months.
      </p>
      <p>
        Read how we handle your information in the <a href="#privacy-policy">privacy policy</a>.
      </p>
    </>
  )
}

function Example({ title, requireCheckbox }) {
  const [accepted, setAccepted] = useState(false)

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-surface-page p-5 shadow-ana sm:p-6">
      <h4 className="mb-4">{title}</h4>
      <ConsentStep
        requireCheckbox={requireCheckbox}
        checkboxLabel="I have read the notice above and agree to take part."
        headingLevel={5}
        onContinue={() => setAccepted(true)}
      >
        <Notice />
      </ConsentStep>
      <p role="status" className="mt-4 text-sm text-[var(--color-text-secondary)]">
        {accepted ? 'Accepted. The survey would now move on to step 2.' : ''}
      </p>
    </div>
  )
}

export function ConsentStepShowcase() {
  return (
    <div className="grid gap-6">
      <Example title="With a required checkbox (default)" requireCheckbox />
      <Example title="Message only" requireCheckbox={false} />
    </div>
  )
}
