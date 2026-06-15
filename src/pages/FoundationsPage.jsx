import { PageShell } from "../components/core/PageShell"
import { ColorSwatch } from "../components/core/ColorSwatch"
import { TypographyScale } from "../components/foundations/TypographyScale"
import { DataTable } from "../components/core/DataTable"
import { colors, semanticColors, typography } from "../data/systemData"

export function FoundationsPage() {
  return (
    <PageShell eyebrow="Source of truth" title="Foundations" intro="Foundations hold the shared decisions that components consume: primitive colors, semantic colors, typography, spacing, radius, focus, accessibility, and responsive behavior.">
      <h3 className="mb-4">Primitive color tokens</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {colors.map(([name, token, hex, role]) => (
          <ColorSwatch name={name} token={token} hex={hex} role={role} key={token} />
        ))}
      </div>

      <h3 className="mt-10 mb-4">Semantic color tokens</h3>
      <p className="mb-4 max-w-content text-[var(--color-text-secondary)]">Semantic tokens describe intent. Components should use semantic or component tokens rather than raw brand values.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {semanticColors.map(([name, token, role]) => (
          <article className="ds-card" key={token}>
            <h4>{name}</h4>
            <p className="ds-code mt-2 inline-block">--{token}</p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{role}</p>
          </article>
        ))}
      </div>

      <h3 className="mt-10 mb-4">Typography tokens</h3>
      <TypographyScale />
      <div className="mt-6">
        <DataTable columns={['Use', 'Size / Token', 'Font', 'Guidance']} rows={typography} />
      </div>
    </PageShell>
  )
}