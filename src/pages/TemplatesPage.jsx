import { PageShell } from "../components/core"
import { DataTable } from "../components/core"
import { templates } from "../data/systemData"

export function TemplatesPage() {
  return (
    <PageShell eyebrow="Page architecture" title="Template library" intro="The recommended CMS model is hybrid: structured page types with optional top and bottom container zones for governed flexibility.">
      <div className="rounded-2xl bg-white p-6 shadow-ana">
        <pre className="overflow-x-auto text-sm"><code>{`Page Template\n├── Structured fields\n├── Optional Top Container\n├── Main Content Area\n└── Optional Bottom Container`}</code></pre>
      </div>
      <div className="mt-8">
        <DataTable columns={['Template', 'Family', 'Core components']} rows={templates} />
      </div>
    </PageShell>
  )
}