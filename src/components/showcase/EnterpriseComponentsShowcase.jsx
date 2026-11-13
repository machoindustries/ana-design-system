import { FaQuoteLeft } from 'react-icons/fa'
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiClock, FiDownload, FiFileText, FiFilter, FiMapPin, FiUser } from 'react-icons/fi'
import { useEffect, useId, useRef, useState } from 'react'

function ComponentDoc({ eyebrow, title, purpose, whenToUse, anatomy, children, code }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border-default)] bg-white shadow-ana">
      <div className="border-b border-[var(--color-border-default)] p-5 sm:p-6">
        <p className="ds-eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-2xl">{title}</h2>
        <p className="mt-3 max-w-content text-[var(--color-text-secondary)]">{purpose}</p>
      </div>
      <div className="grid gap-6 p-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] sm:p-6">
        <div>{children}</div>
        <aside className="space-y-4 rounded-card bg-surface-muted p-4">
          <div>
            <h3 className="text-base font-semibold">When to use</h3>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{whenToUse}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold">Anatomy</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-secondary)]">
              {anatomy.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold">Example</h3>
            <code className="ds-code mt-2 block overflow-x-auto whitespace-nowrap">{code}</code>
          </div>
        </aside>
      </div>
    </article>
  )
}

function PageHeaderExample() {
  return (
    <div className="rounded-2xl bg-surface-muted p-5 sm:p-8">
      <nav aria-label="Breadcrumb" className="text-sm font-semibold">
        <ol className="flex flex-wrap gap-2 text-[var(--color-text-secondary)]">
          <li><a href="#components">Home</a></li>
          <li aria-hidden="true">/</li>
          <li><a href="#components">Practice & Policy</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-[var(--color-text-primary)]">Advocacy</li>
        </ol>
      </nav>
      <p className="ds-eyebrow mt-8">Practice & Advocacy</p>
      <h3 className="type-h2 mt-2">Advancing the nursing profession</h3>
      <p className="mt-4 max-w-content text-lg text-[var(--color-text-secondary)]">Explore ANA advocacy priorities, position statements, and resources that help nurses shape safer and more equitable care.</p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--color-text-secondary)]">
        <span className="inline-flex items-center gap-2"><FiFileText aria-hidden="true" /> Resource hub</span>
        <span className="inline-flex items-center gap-2"><FiClock aria-hidden="true" /> Updated June 2026</span>
      </div>
    </div>
  )
}

function SectionIntroExample() {
  return (
    <div className="rounded-2xl border border-[var(--color-border-default)] p-5 sm:p-8">
      <p className="ds-eyebrow">Resources for nurses</p>
      <div className="mt-3 grid gap-4 md:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] md:items-end">
        <div>
          <h3 className="type-h2">Tools to support your practice</h3>
          <p className="mt-3 max-w-content text-[var(--color-text-secondary)]">Use curated standards, toolkits, and policy guidance to advocate for patients, colleagues, and the profession.</p>
        </div>
        <div className="md:text-right">
          <a className="ds-button ds-button-secondary" href="#components">View resources</a>
        </div>
      </div>
    </div>
  )
}

function MetadataGroupExample() {
  return (
    <dl className="grid gap-3 rounded-card border border-[var(--color-border-default)] bg-white p-5 text-sm sm:grid-cols-3">
      <div>
        <dt className="font-bold text-[var(--color-text-brand)]">Published</dt>
        <dd className="mt-1 text-[var(--color-text-secondary)]">June 8, 2026</dd>
      </div>
      <div>
        <dt className="font-bold text-[var(--color-text-brand)]">Category</dt>
        <dd className="mt-1 text-[var(--color-text-secondary)]">Policy</dd>
      </div>
      <div>
        <dt className="font-bold text-[var(--color-text-brand)]">Organization</dt>
        <dd className="mt-1 text-[var(--color-text-secondary)]">American Nurses Association</dd>
      </div>
    </dl>
  )
}

function DownloadCardExample() {
  return (
    <a href="#components" className="group flex flex-col gap-4 rounded-card border border-[var(--color-border-default)] bg-white p-5 no-underline transition hover:border-[var(--color-border-info)] hover:shadow-ana sm:flex-row sm:items-start">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-surface-info text-[var(--color-text-info)]">
        <FiDownload aria-hidden="true" size={24} />
      </span>
      <span>
        <span className="ds-tag">PDF</span>
        <span className="mt-3 block text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-link-default)]">Workplace violence prevention toolkit</span>
        <span className="mt-2 block text-sm text-[var(--color-text-secondary)]">Download guidance, checklists, and advocacy resources. PDF, 1.2 MB.</span>
      </span>
    </a>
  )
}

function QuickLinksExample() {
  const links = ['Code of Ethics', 'Practice standards', 'Position statements', 'Advocacy resources']
  return (
    <nav aria-labelledby="quick-links-heading" className="rounded-card bg-surface-dark p-5 text-white">
      <h3 id="quick-links-heading" className="text-xl text-white">Quick links</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map(link => (
          <li key={link}>
            <a className="block rounded-button border border-white/30 px-4 py-3 font-bold text-white no-underline hover:bg-white hover:text-[var(--color-link-hover)]" href="#components">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function TimelineExample() {
  const steps = [
    ['1', 'Review eligibility', 'Confirm requirements before starting the application.'],
    ['2', 'Prepare documents', 'Gather transcripts, licensure details, and supporting materials.'],
    ['3', 'Submit application', 'Complete payment and receive next-step instructions.'],
  ]
  return (
    <ol className="space-y-4">
      {steps.map(([number, title, text]) => (
        <li className="grid grid-cols-[3rem_1fr] gap-4" key={title}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-brand font-bold text-white">{number}</span>
          <span className="border-b border-[var(--color-border-default)] pb-4">
            <strong className="block text-lg text-[var(--color-text-primary)]">{title}</strong>
            <span className="mt-1 block text-sm text-[var(--color-text-secondary)]">{text}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}

function LogoGridExample() {
  const logos = ['ANA', 'ANCC', 'Foundation', 'Partner']
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {logos.map(logo => (
        <div className="flex min-h-24 items-center justify-center rounded-card border border-[var(--color-border-default)] bg-white p-4 text-xl font-bold text-[var(--color-text-brand)]" key={logo}>{logo}</div>
      ))}
    </div>
  )
}

function QuoteExample() {
  const quotes = [
    { text: 'The ANA Leadership Institute gave me the confidence to lead my unit through a year of change.', name: 'Jordan Sample, RN', role: 'Nurse Manager, Medical-Surgical Unit', photo: true },
    { text: 'Being part of ANA connects me to nurses who are shaping policy, not just reacting to it.', name: 'Alex Example, MSN, RN', role: 'Member since 2014' },
  ]
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {quotes.map(quote => (
        <figure className="flex flex-col rounded-card bg-surface-muted p-5 sm:p-6" key={quote.name}>
          <FaQuoteLeft aria-hidden="true" className="text-[var(--color-text-eyebrow)]" size={28} />
          <blockquote className="mt-4 flex-1 text-xl text-[var(--color-text-primary)]">
            <p className="leading-8">{quote.text}</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            {quote.photo ? (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-text-brand)]"><FiUser aria-hidden="true" size={24} /></div>
            ) : null}
            <div>
              <p className="font-semibold leading-6">{quote.name}</p>
              <p className="text-sm leading-6 text-[var(--color-text-secondary)]">{quote.role}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

// Counts the digits up from 0 the first time the number scrolls into view.
// The real value is rendered first and stays there for screen readers, for
// no-JS and for anyone who prefers reduced motion.
function CountUp({ value }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const match = value.match(/^(\D*)([\d,]+)(.*)$/)
    if (!el || !match || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const [, prefix, digits, suffix] = match
    const target = Number(digits.replace(/,/g, ''))
    const format = n => prefix + (digits.includes(',') ? n.toLocaleString('en-US') : String(n)) + suffix
    let frame
    el.textContent = format(0)
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = now => {
        const progress = Math.min((now - start) / 1500, 1)
        el.textContent = format(Math.round(target * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      el.textContent = value
    }
  }, [value])
  return (
    <>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums" ref={ref}>{value}</span>
    </>
  )
}

function StatHighlightsExample() {
  const stats = [
    { value: '70,000+', label: 'Members' },
    { value: '33,000+', label: 'Newsletter subscribers' },
    { value: '1,200', label: 'Continuing education courses' },
    { value: '54', label: 'State and territorial associations' },
  ]
  return (
    <section aria-labelledby="stat-highlights-heading" className="rounded-card bg-[var(--color-background-dark)] px-5 py-10 sm:px-8 sm:py-12">
      <h3 className="sr-only" id="stat-highlights-heading">ANA by the numbers</h3>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(14rem,100%),1fr))] gap-8 text-center">
        {stats.map(stat => (
          <li key={stat.label}>
            <p className="type-h1 text-[var(--color-text-inverse)]"><CountUp value={stat.value} /></p>
            <p className="mt-1 text-[var(--color-text-eyebrow-on-dark)]">{stat.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const filterGroups = [
  { label: 'Media type', options: [
    { id: 'article', label: 'Article', count: 142 },
    { id: 'podcast', label: 'Podcast', count: 38 },
    { id: 'video', label: 'Video', count: 27 },
    { id: 'toolkit', label: 'Toolkit', count: 15 },
  ] },
  { label: 'Topic', options: [
    { id: 'workplace', label: 'Workplace', count: 96, children: [
      { id: 'staffing', label: 'Staffing', count: 41 },
      { id: 'safety', label: 'Workplace safety', count: 33 },
    ] },
    { id: 'leadership', label: 'Nursing leadership', count: 64 },
    { id: 'becoming', label: 'Becoming a nurse', count: 52 },
  ] },
]

const allFilterOptions = filterGroups.flatMap(group => group.options.flatMap(option => [option, ...(option.children ?? [])]))

function FilterOption({ option, selected, onToggle }) {
  return (
    <li>
      <label className="flex min-h-11 cursor-pointer items-center gap-3 text-sm">
        <input checked={selected.includes(option.id)} className="h-5 w-5 shrink-0 accent-[var(--color-action-primary)]" onChange={() => onToggle(option.id)} type="checkbox" />
        <span className="flex-1">{option.label}</span>
        <span className="text-[var(--color-text-secondary)]">{option.count}<span className="sr-only"> results</span></span>
      </label>
      {option.children ? (
        <ul className="ml-8 border-l border-[var(--color-border-default)] pl-3">
          {option.children.map(child => <FilterOption key={child.id} onToggle={onToggle} option={child} selected={selected} />)}
        </ul>
      ) : null}
    </li>
  )
}

function SearchFiltersExample() {
  const [selected, setSelected] = useState(['article', 'workplace'])
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const toggle = id => setSelected(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id])
  const shown = selected.length ? Math.min(320, selected.reduce((sum, id) => sum + allFilterOptions.find(option => option.id === id).count, 0)) : 320
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p aria-live="polite" className="font-semibold">Showing {shown} of 320 resources</p>
        <button aria-controls={panelId} aria-expanded={open} className="ds-button ds-button-secondary gap-2 lg:hidden" onClick={() => setOpen(!open)} type="button">
          <FiFilter aria-hidden="true" /> Filters{selected.length ? ` (${selected.length})` : ''}
        </button>
      </div>
      {selected.length ? (
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="sr-only">Active filters</h3>
          {selected.map(id => (
            <button aria-label={`Remove filter: ${allFilterOptions.find(option => option.id === id).label}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border-default)] px-3 text-sm font-semibold" key={id} onClick={() => toggle(id)} type="button">
              {allFilterOptions.find(option => option.id === id).label} <span aria-hidden="true">×</span>
            </button>
          ))}
          <button className="min-h-11 px-2 text-sm font-semibold text-[var(--color-text-link)] underline underline-offset-4" onClick={() => setSelected([])} type="button">Clear all</button>
        </div>
      ) : null}
      <div className={`${open ? 'block' : 'hidden'} space-y-2 rounded-card border border-[var(--color-border-default)] bg-white p-4 lg:block`} id={panelId}>
        {filterGroups.map(group => (
          <details className="group border-b border-[var(--color-border-default)] py-2 last:border-b-0" key={group.label} open>
            <summary className="flex min-h-11 cursor-pointer items-center justify-between font-semibold">{group.label}<FiChevronDown aria-hidden="true" className="transition group-open:rotate-180" /></summary>
            <fieldset>
              <legend className="sr-only">{group.label}</legend>
              <ul>
                {group.options.map(option => <FilterOption key={option.id} onToggle={toggle} option={option} selected={selected} />)}
              </ul>
            </fieldset>
          </details>
        ))}
      </div>
    </div>
  )
}

// Pages to show: the first, the last, and one either side of the current
// page. A gap of one page shows that page; longer gaps show a gap marker.
function pageItems(current, total) {
  const pages = [...new Set([1, current - 1, current, current + 1, total])].filter(page => page >= 1 && page <= total).sort((a, b) => a - b)
  return pages.flatMap((page, index) => {
    const skipped = index ? page - pages[index - 1] - 1 : 0
    if (skipped === 1) return [page - 1, page]
    return skipped > 1 ? ['gap-' + page, page] : [page]
  })
}

function PaginationExample() {
  const total = 12
  const [current, setCurrent] = useState(4)
  const go = page => event => {
    event.preventDefault()
    setCurrent(page)
  }
  const step = 'inline-flex min-h-11 items-center gap-1 rounded-button px-3 text-sm font-semibold'
  return (
    <nav aria-label="Pagination">
      <ul className="grid grid-cols-[1fr_auto_1fr] items-center gap-1 sm:flex sm:flex-wrap sm:justify-center">
        <li className="justify-self-end">
          {current > 1
            ? <a className={`${step} no-underline hover:bg-[var(--color-background-info)]`} href={`?page=${current - 1}`} onClick={go(current - 1)}><FiChevronLeft aria-hidden="true" />Previous</a>
            : <span aria-disabled="true" className={`${step} text-[var(--color-action-disabled-text)]`}><FiChevronLeft aria-hidden="true" />Previous</span>}
        </li>
        <li className="px-2 text-center text-sm sm:hidden">Page {current} of {total}</li>
        {pageItems(current, total).map(item => typeof item === 'string'
          ? <li aria-hidden="true" className="hidden px-1 text-[var(--color-text-secondary)] sm:block" key={item}>…</li>
          : (
            <li className="hidden sm:block" key={item}>
              {item === current
                ? <span aria-current="page" className="inline-flex h-11 min-w-11 items-center justify-center rounded-button bg-[var(--color-background-dark)] px-3 font-bold text-[var(--color-text-inverse)]"><span className="sr-only">Page </span>{item}</span>
                : <a className="inline-flex h-11 min-w-11 items-center justify-center rounded-button px-3 font-semibold no-underline hover:bg-[var(--color-background-info)]" href={`?page=${item}`} onClick={go(item)}><span className="sr-only">Page </span>{item}</a>}
            </li>
          ))}
        <li className="justify-self-start">
          {current < total
            ? <a className={`${step} no-underline hover:bg-[var(--color-background-info)]`} href={`?page=${current + 1}`} onClick={go(current + 1)}>Next<FiChevronRight aria-hidden="true" /></a>
            : <span aria-disabled="true" className={`${step} text-[var(--color-action-disabled-text)]`}>Next<FiChevronRight aria-hidden="true" /></span>}
        </li>
      </ul>
    </nav>
  )
}

const loadMoreResults = ['Safe staffing toolkit', 'Speaking up about workplace violence', 'New nurse residency guide', 'Leading through change', 'Self-care for night shift', 'Mentoring new graduates', 'Delegation essentials', 'Understanding the Code of Ethics', 'Advocating at the state level']

function LoadMoreExample() {
  const pageSize = 3
  const [shown, setShown] = useState(pageSize)
  const firstNew = useRef(null)
  const loaded = useRef(false)
  useEffect(() => {
    if (loaded.current) firstNew.current?.focus()
  }, [shown])
  const loadMore = event => {
    event.preventDefault()
    loaded.current = true
    setShown(Math.min(shown + pageSize, loadMoreResults.length))
  }
  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        {loadMoreResults.slice(0, shown).map((title, index) => (
          <li key={title}>
            <a className="font-semibold" href="#results" ref={index === shown - pageSize && shown > pageSize ? firstNew : null}>{title}</a>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="text-sm text-[var(--color-text-secondary)]">Showing {shown} of {loadMoreResults.length} resources</p>
      {shown < loadMoreResults.length
        ? <a className="ds-button ds-button-secondary" href={`?page=${shown / pageSize + 1}`} onClick={loadMore}>Load more resources</a>
        : null}
    </div>
  )
}

function SearchResultCardExample() {
  return (
    <article className="rounded-card border border-[var(--color-border-default)] bg-white p-5">
      <div className="flex flex-wrap gap-2">
        <span className="ds-tag">Resource</span>
        <span className="ds-tag">Continuing education</span>
      </div>
      <h3 className="mt-4 text-2xl"><a href="#components">Continuing education resources for nurses</a></h3>
      <p className="mt-2 text-[var(--color-text-secondary)]">Find courses, standards, and professional development guidance across ANA and ANCC resources.</p>
      <p className="mt-3 text-sm text-[var(--color-text-secondary)]">nursingworld.org/practice-policy/education</p>
    </article>
  )
}

function RelatedContentExample() {
  const items = ['Workplace violence prevention', 'Official position statements', 'Advocacy priorities']
  return (
    <section aria-labelledby="related-heading" className="rounded-2xl bg-surface-muted p-5 sm:p-6">
      <h3 id="related-heading">Related content</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {items.map(item => (
          <article className="rounded-card bg-white p-4 shadow-ana" key={item}>
            <h4 className="text-lg"><a href="#components">{item}</a></h4>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Explore connected ANA guidance and resources.</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContentFeedExample() {
  const items = [
    ['News', 'ANA releases new workforce findings'],
    ['Event', 'Policy briefing for nurse advocates'],
    ['Resource', 'Updated workplace safety toolkit'],
  ]
  return (
    <div className="divide-y divide-[var(--color-border-default)] rounded-card border border-[var(--color-border-default)] bg-white">
      {items.map(([type, title]) => (
        <article className="p-4 sm:flex sm:items-center sm:justify-between sm:gap-6" key={title}>
          <div>
            <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-eyebrow)]">{type}</span>
            <h3 className="mt-1 text-lg font-semibold"><a href="#components">{title}</a></h3>
          </div>
          <a className="mt-3 inline-block font-bold sm:mt-0" href="#components">View</a>
        </article>
      ))}
    </div>
  )
}

function CredentialBadgeExample() {
  return (
    <div className="inline-flex items-center gap-4 rounded-2xl border border-[var(--color-border-default)] bg-white p-5 shadow-ana">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-brand text-2xl font-bold text-white">RN</span>
      <span>
        <span className="ds-tag">Credential</span>
        <strong className="mt-2 block text-xl text-[var(--color-text-primary)]">AGPCNP-BC</strong>
        <span className="text-sm text-[var(--color-text-secondary)]">Adult-Gerontology Primary Care Nurse Practitioner</span>
      </span>
    </div>
  )
}

function MembershipStatusExample() {
  return (
    <article className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5 shadow-ana">
      <span className="ds-tag">Member portal</span>
      <h3 className="mt-4 text-2xl">Active member</h3>
      <p className="mt-2 text-[var(--color-text-secondary)]">Membership renews on September 30, 2026.</p>
      <a className="ds-button ds-button-primary mt-5" href="#components">Renew membership</a>
    </article>
  )
}

function EventScheduleExample() {
  const sessions = [
    ['9:00 AM', 'Opening keynote', 'Main Ballroom'],
    ['10:30 AM', 'Advocacy in action', 'Room 204'],
    ['1:00 PM', 'Nurse-led innovation', 'Innovation Stage'],
  ]
  return (
    <div className="rounded-card border border-[var(--color-border-default)] bg-white">
      {sessions.map(([time, title, place]) => (
        <article className="grid gap-2 border-b border-[var(--color-border-default)] p-4 last:border-b-0 sm:grid-cols-[8rem_1fr]" key={title}>
          <time className="font-bold text-[var(--color-text-brand)]">{time}</time>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-1 inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"><FiMapPin aria-hidden="true" /> {place}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

function SpeakerCardExample() {
  return (
    <article className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5 shadow-ana sm:flex sm:gap-5">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-surface-muted text-[var(--color-text-brand)]"><FiUser aria-hidden="true" size={32} /></div>
      <div className="mt-4 sm:mt-0">
        <h3 className="text-2xl">Jordan Sample, RN</h3>
        <p className="mt-1 font-semibold text-[var(--color-text-info)]">Nurse leader and policy advocate</p>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Use for speakers, authors, experts, leaders, and nurse story profiles.</p>
      </div>
    </article>
  )
}

export function EnterpriseComponentsShowcase() {
  return (
    <div className="space-y-10">
      <ComponentDoc eyebrow="Page structure" title="Page Header" purpose="Use for content pages that need breadcrumbs, title, intro copy, and metadata without a full marketing hero." whenToUse="Standard pages, policy pages, resource hubs, news pages, and certification content." anatomy={['Breadcrumbs', 'Eyebrow', 'Title', 'Description', 'Metadata']} code="<PageHeader />"><PageHeaderExample /></ComponentDoc>
      <ComponentDoc eyebrow="Content" title="Section Intro" purpose="A reusable section opener that combines an optional eyebrow, heading, description, and CTA." whenToUse="Before card grids, resource lists, feature sections, or campaign modules." anatomy={['Eyebrow', 'Heading', 'Description', 'Optional CTA']} code="<SectionIntro />"><SectionIntroExample /></ComponentDoc>
      <ComponentDoc eyebrow="Content" title="Metadata Group" purpose="A compact definition-list pattern for publishing details, categories, dates, authors, organizations, and content type labels." whenToUse="News, events, resources, certifications, policy pages, and search results." anatomy={['Label', 'Value', 'Optional icon']} code="<MetadataGroup />"><MetadataGroupExample /></ComponentDoc>
      <ComponentDoc eyebrow="Resources" title="Download Card" purpose="A card for PDFs, toolkits, whitepapers, forms, and other downloadable resources." whenToUse="Resource hubs, position statements, certification forms, and advocacy toolkits." anatomy={['File type', 'Title', 'Description', 'File size', 'Download action']} code="<DownloadCard />"><DownloadCardExample /></ComponentDoc>
      <ComponentDoc eyebrow="Navigation" title="Quick Links" purpose="A short curated list that helps users jump to high-value pages or tasks." whenToUse="Landing pages, resource pages, portals, conference microsites, and long-form content pages." anatomy={['Heading', 'List of links', 'Optional icons']} code="<QuickLinks />"><QuickLinksExample /></ComponentDoc>
      <ComponentDoc eyebrow="Process" title="Timeline" purpose="A mobile-first sequence for steps, milestones, agendas, certification processes, or policy activity." whenToUse="Certification steps, donation funnels, event agendas, application processes, or historical timelines." anatomy={['Step marker', 'Step title', 'Description']} code="<Timeline />"><TimelineExample /></ComponentDoc>
      <ComponentDoc eyebrow="Trust" title="Logo Grid" purpose="Displays partner, sponsor, affiliate, or entity logos in a consistent and accessible grid." whenToUse="Foundation partners, conference sponsors, accreditation partners, and enterprise affiliations." anatomy={['Section heading', 'Logo item', 'Accessible label']} code="<LogoGrid />"><LogoGridExample /></ComponentDoc>
      <ComponentDoc eyebrow="Trust" title="Quote" purpose="A static pull quote or testimonial with attribution, for member stories, endorsements, and expert statements." whenToUse="Landing pages, campaign pages, resource hubs, and nurse stories. Place two or three side by side in a grid instead of rotating them." anatomy={['Decorative quote mark', 'Quote text', 'Name', 'Role or organization', 'Optional photo']} code="<Quote />"><QuoteExample /></ComponentDoc>
      <ComponentDoc eyebrow="Trust" title="Stat Highlights" purpose="A band of two to four headline numbers with short labels. Each number counts up once when it scrolls into view." whenToUse="Full-width sections on landing pages, campaign pages, annual reports, and membership pages, not side columns or narrow containers. Up to four numbers of about seven characters (70,000+); write larger values short (4.5M+). Numbers move to two per row, then one, when the space is narrower. Keep labels to a few words, and use numbers that are current and sourced. Not for years or dates, which should not count up." anatomy={['Optional heading (visible or screen-reader only)', 'Number, entered as text such as 70,000+', 'Label', 'Count-up: once, about 1.5 seconds; none when reduced motion is on']} code="<StatHighlights />"><StatHighlightsExample /></ComponentDoc>
      <ComponentDoc eyebrow="Search" title="Search Result Card" purpose="A structured card for Optimizely Search & Navigation results with content type, title, excerpt, and URL." whenToUse="Site search, resource search, certification search, news search, and event search." anatomy={['Content type', 'Title link', 'Excerpt', 'URL', 'Optional metadata']} code="<SearchResultCard />"><SearchResultCardExample /></ComponentDoc>
      <ComponentDoc eyebrow="Search" title="Search Filters" purpose="Checkbox facets with result counts, grouped under collapsible headings, with an active-filters row and a live result count. Below the large breakpoint the panel sits behind a Filters button." whenToUse="Resource hubs, site search, news, events, and any listing where users narrow more than about 20 results. Results update when a box changes; the count is announced to screen readers. Keep one level of nesting at most." anatomy={['Result count (announced when it changes)', 'Filters button on small screens, showing how many are on', 'Active filter chips, each removable, and Clear all', 'Collapsible groups: a heading, then checkboxes with counts', 'Optional sub-options, indented under their parent']} code="<SearchFilters />"><SearchFiltersExample /></ComponentDoc>
      <ComponentDoc eyebrow="Search" title="Pagination" purpose="Numbered pages for search results and long listings: Previous and Next, the first and last page, and the pages either side of the current one. On small screens it shortens to Previous, Page 4 of 12, Next." whenToUse="Site search, news, events, and any listing where people compare or return to a position. Every page is a real link with its own URL, and the current page is marked for screen readers." anatomy={['Navigation landmark labelled Pagination', 'Previous and Next (shown but inactive at the ends)', 'Page links; the current page has aria-current', 'Gap markers where more than one page is skipped', 'Page X of Y on small screens']} code="<Pagination />"><PaginationExample /></ComponentDoc>
      <ComponentDoc eyebrow="Search" title="Load More" purpose="A button under a list that adds the next set of results in place, with a count of how many are showing." whenToUse="Browsing feeds such as resource hubs, where people scan rather than return to a position. It is a real link to the next page, so it works without JavaScript. After loading, focus moves to the first new result and the count is announced. Use Pagination instead for search results." anatomy={['Results list', 'Showing X of Y (announced when it changes)', 'Load more button, hidden when everything is shown']} code="<LoadMore />"><LoadMoreExample /></ComponentDoc>
      <ComponentDoc eyebrow="Content" title="Related Content" purpose="A flexible manual or dynamic section for related resources, news, events, programs, or certification content." whenToUse="Bottom container zones and detail pages where next steps improve findability." anatomy={['Heading', 'Related item cards', 'Optional CTA']} code="<RelatedContent />"><RelatedContentExample /></ComponentDoc>
      <ComponentDoc eyebrow="Dynamic content" title="Content Feed" purpose="A generalized feed that extends the current Latest News model to news, events, resources, products, and mixed content." whenToUse="Landing pages, campaign pages, resource hubs, and bottom container zones." anatomy={['Content type label', 'Title link', 'Optional metadata', 'Action']} code="<ContentFeed />"><ContentFeedExample /></ComponentDoc>
      <ComponentDoc eyebrow="ANCC" title="Credential Badge" purpose="A compact authority element for credentials, recognition, certification status, and ANCC programs." whenToUse="Certification detail pages, account dashboards, recognition pages, and credential directories." anatomy={['Badge mark', 'Credential name', 'Description', 'Status label']} code="<CredentialBadge />"><CredentialBadgeExample /></ComponentDoc>
      <ComponentDoc eyebrow="Membership" title="Membership Status Card" purpose="A personalized portal card for membership state, renewal date, and next action." whenToUse="My Account dashboards, member portals, and renewal experiences." anatomy={['Status label', 'Status title', 'Renewal detail', 'CTA']} code="<MembershipStatusCard />"><MembershipStatusExample /></ComponentDoc>
      <ComponentDoc eyebrow="Events" title="Event Schedule" purpose="A readable agenda module for events, conferences, webinars, and session listings." whenToUse="Event pages, conference microsites, and session detail pages." anatomy={['Time', 'Session title', 'Location', 'Optional speaker']} code="<EventSchedule />"><EventScheduleExample /></ComponentDoc>
      <ComponentDoc eyebrow="People" title="Speaker / Person Card" purpose="A reusable person profile for speakers, experts, authors, staff, leaders, and nurse stories." whenToUse="Events, articles, leadership pages, nurse stories, and expert directories." anatomy={['Photo or placeholder', 'Name', 'Role', 'Short bio']} code={'<PersonCard variant="speaker" />'}><SpeakerCardExample /></ComponentDoc>
    </div>
  )
}
