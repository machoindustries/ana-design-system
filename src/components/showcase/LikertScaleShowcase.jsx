import { useState } from 'react'
import { Button, ErrorSummary, LikertScale } from '../core'

const SCALE_ID = 'likert-demo'

export function LikertScaleShowcase() {
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)
  const [attempt, setAttempt] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    if (value === null) {
      setError('Choose a number from 1 to 7.')
      setAttempt(a => a + 1)
      return
    }
    setError(null)
  }

  function handleChange(n) {
    setValue(n)
    setError(null)
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-surface-page p-5 shadow-ana sm:p-6">
      {error ? (
        <ErrorSummary key={attempt} headingLevel={4} errors={[{ id: `${SCALE_ID}-1`, message: error }]} />
      ) : null}
      <LikertScale
        id={SCALE_ID}
        legend="How comfortable are you using digital tools in patient care?"
        points={7}
        minLabel="Avoidant"
        maxLabel="Enthusiastic"
        value={value}
        onChange={handleChange}
        error={error}
      />
      <div>
        <Button type="submit">Next</Button>
      </div>
    </form>
  )
}
