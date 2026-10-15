import { Button, ChecklistPanel, HeroChecklist } from '../core'

export function HeroChecklistShowcase() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-5 sm:px-8">
      <HeroChecklist
        headingLevel={3}
        eyebrow="Readiness assessment"
        heading="How ready is your practice for digital change?"
        actions={
          <>
            <Button href="#start-assessment">Start the assessment</Button>
            <Button variant="secondary" href="#about-assessment">How it works</Button>
          </>
        }
        panel={
          <ChecklistPanel
            headingLevel={4}
            heading="In about 10 minutes you'll get"
            items={[
              'A readiness score out of 100',
              'Your strengths across five dimensions',
              'Courses and resources matched to your results',
            ]}
          />
        }
      >
        <p>Answer a short set of questions about your knowledge, confidence and workplace, and see where to focus next.</p>
      </HeroChecklist>
    </div>
  )
}
