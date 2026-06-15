import { FiSearch, FiArrowRight, FiDownload } from "react-icons/fi"
import { SectionHeading } from "../components/core"


export function ContentHubExamplePage() {
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
