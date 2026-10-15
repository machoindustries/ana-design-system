import { Page, Section, SectionHeading, Stack } from "../components/core"
import { HeroShowcase } from "../components/showcase/HeroShowcase"
import { HeroChecklistShowcase } from "../components/showcase/HeroChecklistShowcase"
import { ButtonShowcase } from "../components/showcase/ButtonShowcase"
import { CardShowcase } from "../components/showcase/CardShowcase"
import { AccordionShowcase } from "../components/showcase/AccordionShowcase"
import { AlertModalShowcase } from "../components/showcase/AlertModalShowcase"
import { SearchShowcase } from "../components/showcase/SearchShowcase"

const sections = [
  ['Hero', HeroShowcase],
  ['Hero: text with a checklist panel', HeroChecklistShowcase],
  ['Buttons', ButtonShowcase],
  ['Cards', CardShowcase],
  ['Alert and Modal', AlertModalShowcase],
  ['Accordion', AccordionShowcase],
  ['Search and discovery', SearchShowcase],
]

export function ActionCardComponentsPage() {
  return (
    <Page eyebrow="Component examples" title="Actions, cards, heroes, accordions, and search" intro="Core reusable interface elements that establish consistent actions, promotional structures, cards, disclosure, and search behavior.">
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
