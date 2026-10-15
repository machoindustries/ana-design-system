import { ReadinessResult } from '../core'

const disclaimer = 'This is a provisional score for your own reflection. It isn’t a credential or an assessment of your practice.'

const recommendations = {
  heading: 'Recommended for you',
  items: [
    { title: 'Digital health foundations course', href: '#digital-health-course', description: 'A self-paced course with contact hours.' },
    { title: 'Leading change on your unit', href: '#leading-change', description: 'A webinar series for charge nurses and managers.' },
  ],
}

export function ReadinessResultShowcase() {
  return (
    <div className="grid gap-10">
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-surface-page p-5 shadow-ana sm:p-6">
        <ReadinessResult
          headingLevel={3}
          heading="Your readiness profile, Jordan"
          disclaimer={disclaimer}
          score={{
            label: 'Overall readiness',
            value: 72,
            band: 'Developing',
            description: 'You have a solid base and some clear areas to build on.',
          }}
          dimensions={{
            heading: 'Your dimensions',
            items: [
              { name: 'Knowledge', score: 80 },
              { name: 'Confidence', score: 64 },
              { name: 'Workplace support', score: 55 },
              { name: 'Ethics and safety', score: 90 },
              { name: 'Barriers', score: null },
            ],
          }}
          recommendations={recommendations}
          scoringLabel="arni-v2-provisional"
        />
      </div>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-surface-page p-5 shadow-ana sm:p-6">
        <p className="ds-eyebrow mb-4">Withheld state</p>
        <ReadinessResult
          headingLevel={3}
          heading="Your readiness profile"
          disclaimer={disclaimer}
          score={{
            label: 'Overall readiness',
            value: null,
            withheldMessage: 'We can’t give you a score yet: you skipped the questions on workplace support, and the score needs them. Your answers so far are below.',
          }}
          dimensions={{
            heading: 'Your dimensions',
            items: [
              { name: 'Knowledge', score: 80 },
              { name: 'Confidence', score: 64 },
              { name: 'Workplace support', score: null },
              { name: 'Ethics and safety', score: 90 },
              { name: 'Barriers', score: null },
            ],
          }}
          scoringLabel="arni-v2-provisional"
        />
      </div>
    </div>
  )
}
