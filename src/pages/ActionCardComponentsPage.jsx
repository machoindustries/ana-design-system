import { PageShell } from "../components/core"
import { HeroShowcase } from "../components/showcase/HeroShowcase"
import { HeroChecklistShowcase } from "../components/showcase/HeroChecklistShowcase"
import { ButtonShowcase } from "../components/showcase/ButtonShowcase"
import { CardShowcase } from "../components/showcase/CardShowcase"
import { AccordionShowcase } from "../components/showcase/AccordionShowcase"
import { AlertModalShowcase } from "../components/showcase/AlertModalShowcase"
import { SearchShowcase } from "../components/showcase/SearchShowcase"

export function ActionCardComponentsPage() {
  return (
    <PageShell eyebrow="Component examples" title="Actions, cards, heroes, accordions, and search" intro="Core reusable interface elements that establish consistent actions, promotional structures, cards, disclosure, and search behavior.">
      <div className="space-y-10">
        <HeroShowcase />
        <section><h3 className="mb-4">Hero: text with a checklist panel</h3><HeroChecklistShowcase /></section>
        <section><h3 className="mb-4">Buttons</h3><ButtonShowcase /></section>
        <section><h3 className="mb-4">Cards</h3><CardShowcase /></section>
        <section><h3>Alert and Modal</h3><AlertModalShowcase /></section>
        <section><h3 className="mb-4">Accordion</h3><AccordionShowcase /></section>
        <section><h3 className="mb-4">Search and discovery</h3><SearchShowcase /></section>
      </div>
    </PageShell>
  )
}