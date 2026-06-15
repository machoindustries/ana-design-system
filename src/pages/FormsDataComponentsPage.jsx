import { PageShell } from "../components/core/PageShell"
import { FormShowcase } from "../components/showcase/FormShowcase"
import { LinksShowcase } from "../components/showcase/LinksShowcase"
import { HtmlTableShowcase } from "../components/showcase/HtmlTableShowcase"

export function FormsDataComponentsPage() {
  return (
    <PageShell eyebrow="Component examples" title="Forms, links, and tables" intro="Accessible form fields, link patterns, and native HTML tables designed mobile-first for CMS and platform reuse.">
      <div className="space-y-10">
        <section><h3 className="mb-4">Form</h3><FormShowcase /></section>
        <section><h3 className="mb-4">Links</h3><LinksShowcase /></section>
        <section><h3 className="mb-4">HTML table</h3><HtmlTableShowcase /></section>
      </div>
    </PageShell>
  )
}