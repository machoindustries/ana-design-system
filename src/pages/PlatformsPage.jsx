import { DataTable, Page, Section } from "../components/core"
import { platformMap } from "../data/systemData"

export function PlatformsPage() {
  return (
    <Page eyebrow="Platform adapters" title="Optimizely and HubSpot alignment" intro="One design system should support Optimizely CMS 12, Optimizely Search & Navigation, Optimizely Commerce 14, and HubSpot without creating a separate visual language.">
      <Section>
        <DataTable columns={['Design system component', 'Optimizely CMS 12 block', 'HubSpot module']} rows={platformMap} />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="ds-card">
            <h2 className="type-h3">Optimizely CMS 12</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">Use structured page types for recurring content and governed container zones for flexible marketing and campaign needs.</p>
          </article>
          <article className="ds-card">
            <h2 className="type-h3">HubSpot</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">Use ANA tokens and shared modules for campaigns, gated resources, forms, donation appeals, and event promotion.</p>
          </article>
        </div>
      </Section>
    </Page>
  )
}