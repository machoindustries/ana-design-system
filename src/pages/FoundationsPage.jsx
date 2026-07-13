import { Page, Section, SectionHeading, Stack, DataTable } from "../components/core"
import { ColorSwatch } from "../components/core/ColorSwatch"
import { TypographyScale } from "../components/foundations/TypographyScale"
import { colors, semanticColors, typography } from "../data/systemData"

export function FoundationsPage() {
  return (
    <Page eyebrow="Source of truth" title="Foundations" intro="Foundations hold the shared decisions that components consume: primitive colors, semantic colors, typography, spacing, radius, focus, accessibility, and responsive behavior.">
      <Section>
        <Stack gap={6}>
          <SectionHeading title="Primitive color tokens"></SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map(([name, token, hex, role]) => (
              <ColorSwatch name={name} token={token} hex={hex} role={role} key={token} />
            ))}
          </div>
        </Stack>
      </Section>
      <Section>
        <Stack gap={6}>
          <SectionHeading title="Semantic color tokens">
            Semantic tokens describe intent. Components should use semantic or component tokens rather than raw brand values.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {semanticColors.map(([name, token, role]) => (
              <article className="ds-card" key={token}>
                <h4>{name}</h4>
                <p className="ds-code mt-2 inline-block">--{token}</p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{role}</p>
              </article>
            ))}
          </div>
        </Stack>
      </Section>
      <Section>
        <Stack gap={6}>
          <SectionHeading title="Typography tokens"></SectionHeading>
          <TypographyScale />
            <div className="mt-6">
              <DataTable columns={['Use', 'Size / Token', 'Font', 'Guidance']} rows={typography} />
            </div>
        </Stack>
      </Section>      
    </Page>
  )
}