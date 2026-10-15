import { Page, Section } from "../components/core"
import { MediaShowcase } from "../components/showcase/MediaShowcase"

export function MediaComponentsPage() {
  return (
    <Page eyebrow="Component examples" title="Media components" intro="Images are now a first-class part of the design kit, including standalone image blocks, image/text splits, image cards, and accessibility guidance.">
      <Section>
        <MediaShowcase />
      </Section>
    </Page>
  )
}