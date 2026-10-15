import { DataTable, Page, Section } from "../components/core"

export function PatternsPage() {
  const patternRows = [
    ['Search Results Pattern', 'Search input, facets, active filters, result cards, pagination, no-results state'],
    ['Certification Detail Pattern', 'Page header, summary, eligibility, requirements, pricing, FAQs, apply CTA'],
    ['News Article Pattern', 'Article header, metadata, rich text, media contact, related content'],
    ['Donation Landing Pattern', 'Impact story, stats, donation CTA, related Foundation content'],
    ['Event Detail Pattern', 'Event header, metadata, registration CTA, agenda, speakers, sponsors'],
    ['Conference Microsite Pattern', 'Microsite nav, hero, agenda, sessions, speakers, sponsors, registration'],
  ]
  return (
    <Page eyebrow="Reusable experiences" title="Patterns" intro="Patterns combine components into repeatable experiences. They sit between individual components and full page templates.">
      <Section>
        <DataTable columns={['Pattern', 'Core composition']} rows={patternRows} />
      </Section>
    </Page>
  )
}