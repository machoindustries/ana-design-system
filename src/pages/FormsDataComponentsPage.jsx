import { PageShell } from "../components/core"
import { FormShowcase } from "../components/showcase/FormShowcase"
import { LinksShowcase } from "../components/showcase/LinksShowcase"
import { HtmlTableShowcase } from "../components/showcase/HtmlTableShowcase"
import { StepProgressShowcase } from "../components/showcase/StepProgressShowcase"
import { LikertScaleShowcase } from "../components/showcase/LikertScaleShowcase"
import { ConsentStepShowcase } from "../components/showcase/ConsentStepShowcase"

export function FormsDataComponentsPage() {
  return (
    <PageShell eyebrow="Component examples" title="Forms, links, and tables" intro="Accessible form fields, link patterns, and native HTML tables designed mobile-first for CMS and platform reuse.">
      <div className="space-y-10">
        <section><h3 className="mb-4">Form</h3><FormShowcase /></section>
        <section><h3 className="mb-4">Step progress</h3><StepProgressShowcase /></section>
        <section><h3 className="mb-4">Likert scale</h3><LikertScaleShowcase /></section>
        <section><h3 className="mb-4">Consent step</h3><ConsentStepShowcase /></section>
        <section><h3 className="mb-4">Links</h3><LinksShowcase /></section>
        <section><h3 className="mb-4">HTML table</h3><HtmlTableShowcase /></section>
      </div>
    </PageShell>
  )
}