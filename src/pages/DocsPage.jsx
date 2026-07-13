import { Page, Section, SectionHeading, Stack, DataTable } from "../components/core"

const commands = [
  ['npm install', 'Install dependencies'],
  ['npm run dev', 'Start the dev server at localhost:5173, hot-reloads on save'],
  ['npm run build', 'Production build, outputs to /dist'],
  ['npm run preview', 'Preview the production build locally'],
  ['npm run lint', 'Check for code issues — run this before every commit'],
]

const folderMap = [
  ['components/core/', 'Reusable UI primitives (Button, Card, AlertBar, Modal...)'],
  ['components/showcase/', 'Live examples used inside documentation pages'],
  ['data/', 'Static content: navigation items, color tables, principles'],
  ['layouts/', 'SiteLayout, DesignKitHeader, DesignKitFooter'],
  ['pages/', 'One file per documentation section'],
  ['tokens.css', 'ANA design tokens — the source of truth for all styling'],
]

export function DocsPage() {
  return (
    <Page
      eyebrow="Contributing"
      title="Docs"
      intro="How to run the kit locally and how to add new pages, components, and tokens. The patterns here are intentionally repetitive — once you learn one, you know them all."
    >
      <Section>
        <Stack gap={6}>
          <SectionHeading eyebrow="Setup" title="Getting started">
            Clone the repo, install dependencies, and start the dev server.
          </SectionHeading>
          <DataTable columns={['Command', 'What it does']} rows={commands} />
        </Stack>
      </Section>

      <Section>
        <Stack gap={6}>
          <SectionHeading eyebrow="Structure" title="Project layout">
            A quick map of where things live.
          </SectionHeading>
          <DataTable columns={['Path', 'Contents']} rows={folderMap} />
        </Stack>
      </Section>

      <Section>
        <Stack gap={6}>
          <SectionHeading eyebrow="Workflow" title="Adding a new page">
            Every new section follows the same three steps.
          </SectionHeading>
          {/* A responsive 3-column grid isn't a Stack use case — Stack is
              single-axis (row or column), not a grid primitive. Left as
              Tailwind grid utilities intentionally. */}
          <div className="grid gap-4 md:grid-cols-3">
            <article className="ds-card">
              <p className="ds-eyebrow">Step 1</p>
              <h4 className="mt-2">Create the page file</h4>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Add <code className="ds-code">src/pages/YourNewPage.jsx</code> using{' '}
                <code className="ds-code">Page</code> to keep the layout consistent.
              </p>
            </article>
            <article className="ds-card">
              <p className="ds-eyebrow">Step 2</p>
              <h4 className="mt-2">Register the route</h4>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Add the import and a <code className="ds-code">&lt;Route&gt;</code> entry in{' '}
                <code className="ds-code">DesignSystemHome.jsx</code>.
              </p>
            </article>
            <article className="ds-card">
              <p className="ds-eyebrow">Step 3</p>
              <h4 className="mt-2">Add it to navigation</h4>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Add an entry to <code className="ds-code">designKitNavigation.js</code>. The{' '}
                <code className="ds-code">id</code> must match the route path exactly.
              </p>
            </article>
          </div>
        </Stack>
      </Section>

      <Section>
        <Stack gap={6}>
          <SectionHeading eyebrow="Workflow" title="Adding a new core component">
            Core components live in <code className="ds-code">src/components/core/</code> and should
            do one thing well.
          </SectionHeading>
          <Stack gap={4}>
            <article className="ds-card">
              <h4>Use semantic tokens, not primitives</h4>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Prefer <code className="ds-code">var(--color-background-info)</code> over{' '}
                <code className="ds-code">var(--ana-blue-100)</code>. Semantic tokens are what
                components should consume, so a brand color change updates every component that
                uses it from a single place.
              </p>
            </article>
            <article className="ds-card">
              <h4>Pair it with a showcase</h4>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Add a matching file in <code className="ds-code">components/showcase/</code> with a
                few real, representative examples — not lorem ipsum — and wire it into the relevant
                documentation page.
              </p>
            </article>
            <article className="ds-card">
              <h4>Keep props simple</h4>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                If a component needs more than five or six props, it&apos;s probably doing too much.
                Consider splitting it into two components instead.
              </p>
            </article>
          </Stack>
        </Stack>
      </Section>

      <Section>
        <Stack gap={6}>
          <SectionHeading eyebrow="Standards" title="Code conventions">
            A short list, not a style guide.
          </SectionHeading>
          <ul className="grid gap-3 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2">
            {[
              'Semantic HTML first — button for actions, a for navigation, nav for navigation regions.',
              'Mobile-first — base styles for small screens, sm:/md:/lg: modifiers for larger ones.',
              'No inline styles — reference tokens.css via a Tailwind class or CSS variable.',
              'No hard-coded hex values in component files — colors belong in tokens.css.',
              'Run npm run lint before every commit and fix everything it flags.',
              'Every interactive element must be reachable and operable by keyboard.',
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ana-green" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Stack>
      </Section>

      <Section tinted>
        <Stack gap={6}>
          <SectionHeading eyebrow="Reference" title="Further reading">
            The full contributing guide, including detailed code examples for each step above, lives
            in the repository root.
          </SectionHeading>
          <a
            href="https://github.com/machoindustries/ana-design-system/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="ds-button ds-button-secondary inline-flex"
          >
            View CONTRIBUTING.md on GitHub
          </a>
        </Stack>
      </Section>
    </Page>
  )
}