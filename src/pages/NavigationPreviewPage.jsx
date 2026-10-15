import { Page, Section } from "../components/core"
import { NursingWorldHeader } from "../components/navigation/NursingWorldHeader"
import { NursingWorldFooter } from "../components/navigation/NursingWorldFooter"

export function NavigationPreviewPage() {
  return (
    <Page eyebrow="Component library preview" title="NursingWorld header and footer" intro="The NursingWorld-style global header and footer are now treated as component examples rather than the design-kit shell. They can be refined separately from the public design system documentation site.">
      <Section>
        <div className="space-y-8">
          <article className="rounded-2xl border border-[var(--color-border-default)] bg-white shadow-ana">
            <div className="border-b border-[var(--color-border-default)] p-5">
              <h2 className="text-2xl">Global Header Preview</h2>
              <p className="mt-2 text-[var(--color-text-secondary)]">Includes utility links, logo, primary navigation, search, cart, account, and mobile menu behavior.</p>
            </div>
            <div className="overflow-hidden rounded-b-2xl border-t border-[var(--color-border-default)]">
              <NursingWorldHeader />
            </div>
          </article>
          <article className="rounded-2xl border border-[var(--color-border-default)] bg-white shadow-ana">
            <div className="border-b border-[var(--color-border-default)] p-5">
              <h2 className="text-2xl">Global Footer Preview</h2>
              <p className="mt-2 text-[var(--color-text-secondary)]">Includes grouped footer navigation, ANA brand area, social links, legal links, and back-to-top behavior.</p>
            </div>
            <div className="overflow-hidden rounded-b-2xl">
              <NursingWorldFooter />
            </div>
          </article>
        </div>
      </Section>
    </Page>
  )
}