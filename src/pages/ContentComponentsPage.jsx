import { PageShell } from "../components/core"
import { EnterpriseComponentsShowcase } from "../components/showcase/EnterpriseComponentsShowcase"  

export function ContentComponentsPage() {
  return (
    <PageShell eyebrow="Component examples" title="Content components" intro="Reusable content, structure, resource, people, event, and authority patterns added as part of the design-system evolution.">
      <EnterpriseComponentsShowcase />
    </PageShell>
  )
}