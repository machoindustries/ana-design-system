import { Page, Section, SectionHeading, Stack } from "../components/core"
import { FormShowcase } from "../components/showcase/FormShowcase"
import { LinksShowcase } from "../components/showcase/LinksShowcase"
import { HtmlTableShowcase } from "../components/showcase/HtmlTableShowcase"
import { StepProgressShowcase } from "../components/showcase/StepProgressShowcase"
import { LikertScaleShowcase } from "../components/showcase/LikertScaleShowcase"
import { ConsentStepShowcase } from "../components/showcase/ConsentStepShowcase"

const sections = [
  ['Form', FormShowcase],
  ['Step progress', StepProgressShowcase],
  ['Likert scale', LikertScaleShowcase],
  ['Consent step', ConsentStepShowcase],
  ['Links', LinksShowcase],
  ['HTML table', HtmlTableShowcase],
]

export function FormsDataComponentsPage() {
  return (
    <Page eyebrow="Component examples" title="Forms, links, and tables" intro="Accessible form fields, link patterns, and native HTML tables designed mobile-first for CMS and platform reuse.">
      {sections.map(([title, Showcase]) => (
        <Section key={title}>
          <Stack gap={6}>
            <SectionHeading title={title} />
            <Showcase />
          </Stack>
        </Section>
      ))}
    </Page>
  )
}
