import { PageShell } from "../components/core/PageShell"
import { DataTable } from "../components/core/DataTable"

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
    <PageShell eyebrow="Reusable experiences" title="Patterns" intro="Patterns combine components into repeatable experiences. They sit between individual components and full page templates.">
      <DataTable columns={['Pattern', 'Core composition']} rows={patternRows} />
    </PageShell>
  )
}