import { Page, Section, SectionHeading, Stack } from "../components/core"
import { EnterpriseComponentsShowcase } from "../components/showcase/EnterpriseComponentsShowcase"
import { ReadinessResultShowcase } from "../components/showcase/ReadinessResultShowcase"

export function ContentComponentsPage() {
  return (
    <Page eyebrow="Component examples" title="Content components" intro="Reusable content, structure, resource, people, event, and authority patterns added as part of the design-system evolution.">
      <Section>
        <EnterpriseComponentsShowcase />
      </Section>
      <Section>
        <Stack gap={6}>
          <SectionHeading title="Readiness profile result" />
          <ReadinessResultShowcase />
        </Stack>
      </Section>
    </Page>
  )
}
