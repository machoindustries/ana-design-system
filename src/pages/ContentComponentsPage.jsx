import { PageShell } from "../components/core"
import { EnterpriseComponentsShowcase } from "../components/showcase/EnterpriseComponentsShowcase"  
import { ReadinessResultShowcase } from "../components/showcase/ReadinessResultShowcase"

export function ContentComponentsPage() {
  return (
    <PageShell eyebrow="Component examples" title="Content components" intro="Reusable content, structure, resource, people, event, and authority patterns added as part of the design-system evolution.">
      <div className="space-y-10">
        <EnterpriseComponentsShowcase />
        <section><h3 className="mb-4">Readiness profile result</h3><ReadinessResultShowcase /></section>
      </div>
    </PageShell>
  )
}