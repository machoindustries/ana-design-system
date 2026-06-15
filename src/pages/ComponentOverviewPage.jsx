import { PageShell } from "../components/core/PageShell"
import { DataTable } from "../components/core/DataTable"
import { components } from "../data/systemData"

export function ComponentOverviewPage() {
  return (
    <PageShell eyebrow="Component library" title="Component audit matrix v2.1" intro="This page is the master component inventory. Individual component examples are split into dedicated pages so designers and vendors can review one family at a time.">
      <DataTable columns={['Component', 'Family', 'Variants / Scope', 'Guidance']} rows={components} />
    </PageShell>
  )
}