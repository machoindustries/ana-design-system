import { useState } from 'react'
import { FiArrowRight, FiDownload, FiSearch } from 'react-icons/fi'
import { NursingWorldFooter } from '../components/navigation/NursingWorldFooter'
import { NursingWorldHeader } from '../components/navigation/NursingWorldHeader'
import { ButtonShowcase } from '../components/showcase/ButtonShowcase'
import { HeroShowcase } from '../components/showcase/HeroShowcase'
import { CardShowcase } from '../components/showcase/CardShowcase'
import { AccordionShowcase } from '../components/showcase/AccordionShowcase'
import { SearchShowcase } from '../components/showcase/SearchShowcase'
import { FormShowcase } from '../components/showcase/FormShowcase'
import { LinksShowcase } from '../components/showcase/LinksShowcase'
import { HtmlTableShowcase } from '../components/showcase/HtmlTableShowcase'
import { EnterpriseComponentsShowcase } from '../components/showcase/EnterpriseComponentsShowcase'
import { MediaShowcase } from '../components/showcase/MediaShowcase'
import { DataTable } from '../components/core/DataTable'
import { SectionHeading } from '../components/core/SectionHeading'
import { TypographyScale } from '../components/foundations/TypographyScale'
import { DesignKitFooter } from '../layouts/DesignKitFooter'
import { DesignKitHeader } from '../layouts/DesignKitHeader'
import { colors, components, platformMap, principles, semanticColors, templates, typography } from '../data/systemData'

function PageShell({ eyebrow, title, children, intro }) {
  return (
    <section className="ds-section">
      <div className="ds-container">
        <SectionHeading eyebrow={eyebrow} title={title}>{intro}</SectionHeading>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

function ColorSwatch({ name, token, hex, role }) {
  return (
    <div className="overflow-hidden rounded-card border bg-white">
      <div className="h-24" style={{ backgroundColor: hex }} />
      <div className="p-4">
        <h4 className="font-bold">{name}</h4>
        <p className="ds-code mt-2 inline-block">{token}</p>
        <p className="mt-2 text-sm">{hex}</p>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{role}</p>
      </div>
    </div>
  )
}

function HomePage({ onNavigate }) {
  return (
    <>
      <section id="top" className="bg-surface-muted">
        <div className="ds-container ds-section">
          <div className="max-w-4xl">
            <p className="ds-eyebrow">Reference implementation</p>
            <h1 className="mt-3">ANA Digital Design System</h1>
            <p className="mt-5 text-xl leading-8 text-[var(--color-text-secondary)]">A public-facing React and Tailwind CSS starter for vendors, designers, developers, and platform teams. It translates the ANA brand into reusable mobile-first tokens, foundations, components, templates, and platform adapters.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="ds-button ds-button-primary" type="button" onClick={() => onNavigate('foundations')}>Explore foundations</button>
              <button className="ds-button ds-button-secondary" type="button" onClick={() => onNavigate('components')}>View components</button>
            </div>
          </div>
        </div>
      </section>

      <PageShell eyebrow="Foundational charter" title="Design system principles" intro="Every future token, component, pattern, template, and platform adapter should align to these principles.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(([name, text]) => (
            <article className="ds-card" key={name}>
              <h3 className="text-xl">{name}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{text}</p>
            </article>
          ))}
        </div>
      </PageShell>
    </>
  )
}

function FoundationsPage() {
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

function ComponentOverviewPage() {
  return (
    <PageShell eyebrow="Component library" title="Component audit matrix v2.1" intro="This page is the master component inventory. Individual component examples are split into dedicated pages so designers and vendors can review one family at a time.">
      <DataTable columns={['Component', 'Family', 'Variants / Scope', 'Guidance']} rows={components} />
    </PageShell>
  )
}

function ContentComponentsPage() {
  return (
    <PageShell eyebrow="Component examples" title="Content components" intro="Reusable content, structure, resource, people, event, and authority patterns added as part of the design-system evolution.">
      <EnterpriseComponentsShowcase />
    </PageShell>
  )
}

function ActionCardComponentsPage() {
  return (
    <PageShell eyebrow="Component examples" title="Actions, cards, heroes, accordions, and search" intro="Core reusable interface elements that establish consistent actions, promotional structures, cards, disclosure, and search behavior.">
      <div className="space-y-10">
        <HeroShowcase />
        <section><h3 className="mb-4">Buttons</h3><ButtonShowcase /></section>
        <section><h3 className="mb-4">Cards</h3><CardShowcase /></section>
        <section><h3 className="mb-4">Accordion</h3><AccordionShowcase /></section>
        <section><h3 className="mb-4">Search and discovery</h3><SearchShowcase /></section>
      </div>
    </PageShell>
  )
}

function FormsDataComponentsPage() {
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


function MediaComponentsPage() {
  return (
    <PageShell eyebrow="Component examples" title="Media components" intro="Images are now a first-class part of the design kit, including standalone image blocks, image/text splits, image cards, and accessibility guidance.">
      <MediaShowcase />
    </PageShell>
  )
}


function NavigationPreviewPage() {
  return (
    <PageShell eyebrow="Component library preview" title="NursingWorld header and footer" intro="The NursingWorld-style global header and footer are now treated as component examples rather than the design-kit shell. They can be refined separately from the public design system documentation site.">
      <div className="space-y-8">
        <article className="rounded-2xl border border-[var(--color-border-default)] bg-white shadow-ana">
          <div className="border-b border-[var(--color-border-default)] p-5">
            <h3 className="text-2xl">Global Header Preview</h3>
            <p className="mt-2 text-[var(--color-text-secondary)]">Includes utility links, logo, primary navigation, search, cart, account, and mobile menu behavior.</p>
          </div>
          <div className="overflow-hidden rounded-b-2xl border-t border-[var(--color-border-default)]">
            <NursingWorldHeader />
          </div>
        </article>
        <article className="rounded-2xl border border-[var(--color-border-default)] bg-white shadow-ana">
          <div className="border-b border-[var(--color-border-default)] p-5">
            <h3 className="text-2xl">Global Footer Preview</h3>
            <p className="mt-2 text-[var(--color-text-secondary)]">Includes grouped footer navigation, ANA brand area, social links, legal links, and back-to-top behavior.</p>
          </div>
          <div className="overflow-hidden rounded-b-2xl">
            <NursingWorldFooter />
          </div>
        </article>
      </div>
    </PageShell>
  )
}

function PatternsPage() {
  const patternRows = [
    ['Search Results Pattern', 'Search input, facets, active filters, result cards, pagination, no-results state'],
    ['Certification Detail Pattern', 'Page header, summary, eligibility, requirements, pricing, FAQs, apply CTA'],
    ['News Article Pattern', 'Article header, metadata, rich text, media contact, related content'],
    ['Donation Landing Pattern', 'Impact story, stats, donation CTA, related Foundation content'],
    ['Event Detail Pattern', 'Event header, metadata, registration CTA, agenda, speakers, sponsors'],
    ['Conference Microsite Pattern', 'Microsite nav, hero, agenda, sessions, speakers, sponsors, registration'],
  ]
  return (
    <PageShell eyebrow="Reusable experiences" title="Patterns" intro="Patterns combine components into repeatable experiences. They sit between individual components and full page templates.">
      <DataTable columns={['Pattern', 'Core composition']} rows={patternRows} />
    </PageShell>
  )
}

function TemplatesPage() {
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


function ContentHubExamplePage() {
  const topics = [
    ['Workplace', 'Build healthier work environments and strengthen safety, staffing, and team resilience.', '120 resources'],
    ['Leadership', 'Explore guidance for nurse leaders, mentors, executives, and emerging professionals.', '85 resources'],
    ['Career Growth', 'Find resources for continuing education, certification, advancement, and professional development.', '94 resources'],
    ['Advocacy', 'Learn how nurses shape policy, elevate practice, and advance the profession.', '37 resources'],
  ]

  const latestResources = [
    ['Article', 'Time management tips for nurses', 'Practical guidance for managing responsibilities, prioritizing care, and protecting well-being.', '5 min read'],
    ['Guide', 'Creating healthier work environments', 'A resource for building safer, more supportive workplaces for nurses and patients.', 'Download'],
    ['Article', 'How nurses lead change in healthcare', 'Explore how nurses use expertise, advocacy, and collaboration to transform care.', '7 min read'],
  ]

  const relatedLinks = ['Continuing Education', 'Workplace Violence Prevention', 'ANA Membership', 'Nurses Books']

  return (
    <>
      <section className="bg-surface-muted">
        <div className="ds-container ds-section">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="ds-eyebrow">Example page</p>
              <h1>Content Hub</h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-[var(--color-text-secondary)]">
                Explore trusted nursing resources, career guidance, workplace insights, leadership development, and professional growth.
              </p>
              <form className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]" role="search" aria-label="Search Content Hub">
                <label htmlFor="content-hub-search" className="sr-only">Search Content Hub</label>
                <div className="relative">
                  <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ana-blue" aria-hidden="true" />
                  <input id="content-hub-search" className="ds-field pl-11" type="search" placeholder="Search Content Hub" />
                </div>
                <button className="ds-button ds-button-primary" type="submit">Search</button>
              </form>
            </div>
            <aside className="rounded-2xl bg-white p-5 shadow-ana sm:p-6">
              <p className="ds-eyebrow">Design system notes</p>
              <h2 className="mt-2 text-2xl">Resource Hub Template</h2>
              <p className="mt-3 text-[var(--color-text-secondary)]">
                This reference implementation uses the Page Header, Search Input, Topic Card Grid, Featured Resource, Content Feed, Metadata Group, Membership CTA, and Related Content components.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-container">
          <SectionHeading eyebrow="Browse" title="Browse by topic">
            Use topic cards to help users scan and choose a starting point before scrolling through long lists of articles.
          </SectionHeading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map(([title, description, count]) => (
              <article className="ds-card flex flex-col" key={title}>
                <p className="ds-tag w-fit">{count}</p>
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-[var(--color-text-secondary)]">{description}</p>
                <a href="/" className="mt-5 inline-flex items-center gap-2 font-bold no-underline">
                  Explore <FiArrowRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft">
        <div className="ds-container ds-section">
          <SectionHeading eyebrow="Featured resource" title="Creating healthier work environments">
            Feature one high-value resource so the page has a clear editorial priority instead of presenting all content at the same visual weight.
          </SectionHeading>
          <article className="mt-8 overflow-hidden rounded-2xl bg-white shadow-ana lg:grid lg:grid-cols-[.95fr_1.05fr]">
            <div className="min-h-64 bg-[linear-gradient(135deg,var(--ana-green-500),var(--ana-blue-500))] p-6 text-white lg:min-h-full">
              <div className="flex h-full min-h-56 items-end rounded-xl border border-white/35 p-5">
                <p className="max-w-sm text-2xl font-bold leading-8">Image-enabled featured resource area. Replace with approved ANA photography.</p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="ds-tag">Guide</span>
                <span className="ds-tag">Workplace</span>
                <span className="ds-tag">5 min read</span>
              </div>
              <h3 className="mt-5 text-3xl">Build supportive environments where nurses can lead, learn, and thrive.</h3>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                This featured resource pattern gives editors a consistent way to promote important guidance while maintaining brand-aligned hierarchy and mobile-first readability.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a className="ds-button ds-button-primary" href="/">Read the guide</a>
                <a className="ds-button ds-button-secondary" href="/">Browse workplace resources</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-container">
          <SectionHeading eyebrow="Latest" title="Latest resources">
            Use consistent cards with metadata groups so users can understand content type, topic, and effort before they click.
          </SectionHeading>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {latestResources.map(([type, title, description, meta]) => (
              <article className="ds-card" key={title}>
                <div className="flex flex-wrap gap-2">
                  <span className="ds-tag">{type}</span>
                  <span className="ds-tag">{meta}</span>
                </div>
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{description}</p>
                <a href="/" className="mt-5 inline-flex items-center gap-2 font-bold no-underline">
                  {type === 'Guide' ? 'Download' : 'Read more'} {type === 'Guide' ? <FiDownload aria-hidden="true" /> : <FiArrowRight aria-hidden="true" />}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ana-navy text-white">
        <div className="ds-container py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-white/80">Membership CTA</p>
              <h2 className="mt-2 text-white">Advance your career with ANA</h2>
              <p className="mt-3 max-w-2xl text-white/85">
                Connect the Content Hub to the broader ANA ecosystem with clear next steps for membership, education, and advocacy.
              </p>
            </div>
            <a href="/" className="ds-button bg-white text-ana-navy hover:bg-[var(--ana-blue-100)]">Join ANA</a>
          </div>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_.85fr]">
            <article className="ds-card">
              <SectionHeading eyebrow="Newsletter" title="Get nursing resources in your inbox">
                Subscribe to receive trusted resources, policy updates, and professional development opportunities.
              </SectionHeading>
              <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input id="newsletter-email" className="ds-field" type="email" placeholder="Email address" />
                <button className="ds-button ds-button-primary" type="submit">Subscribe</button>
              </form>
            </article>
            <aside className="ds-card">
              <h3 className="text-2xl">Related ANA resources</h3>
              <ul className="mt-4 grid gap-3">
                {relatedLinks.map(link => (
                  <li key={link}>
                    <a className="flex items-center justify-between rounded-button border border-[var(--color-border-default)] p-3 font-bold no-underline hover:bg-surface-muted" href="/">
                      {link}
                      <FiArrowRight aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}


function PlatformsPage() {
  return (
    <PageShell eyebrow="Platform adapters" title="Optimizely and HubSpot alignment" intro="One design system should support Optimizely CMS 12, Optimizely Search & Navigation, Optimizely Commerce 14, and HubSpot without creating a separate visual language.">
      <DataTable columns={['Design system component', 'Optimizely CMS 12 block', 'HubSpot module']} rows={platformMap} />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="ds-card">
          <h3>Optimizely CMS 12</h3>
          <p className="mt-2 text-[var(--color-text-secondary)]">Use structured page types for recurring content and governed container zones for flexible marketing and campaign needs.</p>
        </article>
        <article className="ds-card">
          <h3>HubSpot</h3>
          <p className="mt-2 text-[var(--color-text-secondary)]">Use ANA tokens and shared modules for campaigns, gated resources, forms, donation appeals, and event promotion.</p>
        </article>
      </div>
    </PageShell>
  )
}

function renderPage(activePage, onNavigate) {
  switch (activePage) {
    case 'foundations': return <FoundationsPage />
    case 'components': return <ComponentOverviewPage />
    case 'content-components': return <ContentComponentsPage />
    case 'action-card-components': return <ActionCardComponentsPage />
    case 'forms-data-components': return <FormsDataComponentsPage />
    case 'media-components': return <MediaComponentsPage />
    case 'navigation-preview': return <NavigationPreviewPage />
    case 'patterns': return <PatternsPage />
    case 'templates': return <TemplatesPage />
    case 'examples': return <ContentHubExamplePage />
    case 'platforms': return <PlatformsPage />
    default: return <HomePage onNavigate={onNavigate} />
  }
}

export function DesignSystemHome() {
  const [activePage, setActivePage] = useState('home')

  function handleNavigate(pageId) {
    setActivePage(pageId)
  }

  return (
    <>
      <DesignKitHeader activePage={activePage} onNavigate={handleNavigate} />
      <main id="main">
        {renderPage(activePage, handleNavigate)}
      </main>
      <DesignKitFooter onNavigate={handleNavigate} />
    </>
  )
}
