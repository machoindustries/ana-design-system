import { PageShell } from "../components/core/PageShell"
import { MediaShowcase } from "../components/showcase/MediaShowcase"

export function MediaComponentsPage() {
  return (
    <PageShell eyebrow="Component examples" title="Media components" intro="Images are now a first-class part of the design kit, including standalone image blocks, image/text splits, image cards, and accessibility guidance.">
      <MediaShowcase />
    </PageShell>
  )
}