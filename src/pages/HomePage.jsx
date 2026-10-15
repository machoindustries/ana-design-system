import { Link } from 'react-router-dom'
import { Section, SectionHeading, Stack } from '../components/core'
import { principles } from '../data/systemData'

export function HomePage() {
  return (
    <>
      <section id="top" className="bg-surface-muted">
        <div className="ds-container ds-section">
          <div className="max-w-4xl">
            <p className="ds-eyebrow">Reference implementation</p>
            <h1 className="mt-3">ANA Digital Design System</h1>
            <p className="mt-5 text-xl leading-8 text-[var(--color-text-secondary)]">A public-facing React and Tailwind CSS starter for vendors, designers, developers, and platform teams. It translates the ANA brand into reusable mobile-first tokens, foundations, components, templates, and platform adapters.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="ds-button ds-button-primary" to="/foundations">Explore foundations</Link>
              <Link className="ds-button ds-button-secondary" to="/components">View components</Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="ds-container">
          <Stack gap={6}>
            <SectionHeading eyebrow="Foundational charter" title="Design system principles">
              Every future token, component, pattern, template, and platform adapter should align to these principles.
            </SectionHeading>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {principles.map(([name, text]) => (
                <article className="ds-card" key={name}>
                  <h3 className="text-xl">{name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{text}</p>
                </article>
              ))}
            </div>
          </Stack>
        </div>
      </Section>
    </>
  )
}