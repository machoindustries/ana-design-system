import { FiClock, FiDownload, FiFileText, FiMapPin, FiUser } from 'react-icons/fi'

function ComponentDoc({ eyebrow, title, purpose, whenToUse, anatomy, children, code }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border-default)] bg-white shadow-ana">
      <div className="border-b border-[var(--color-border-default)] p-5 sm:p-6">
        <p className="ds-eyebrow">{eyebrow}</p>
        <h3 className="mt-2 text-2xl">{title}</h3>
        <p className="mt-3 max-w-content text-[var(--color-text-secondary)]">{purpose}</p>
      </div>
      <div className="grid gap-6 p-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] sm:p-6">
        <div>{children}</div>
        <aside className="space-y-4 rounded-card bg-surface-muted p-4">
          <div>
            <h4 className="text-base">When to use</h4>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{whenToUse}</p>
          </div>
          <div>
            <h4 className="text-base">Anatomy</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-secondary)]">
              {anatomy.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-base">Example</h4>
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
      <h2 className="mt-2">Advancing the nursing profession</h2>
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
          <h2>Tools to support your practice</h2>
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
        <dt className="font-bold text-ana-navy">Published</dt>
        <dd className="mt-1 text-[var(--color-text-secondary)]">June 8, 2026</dd>
      </div>
      <div>
        <dt className="font-bold text-ana-navy">Category</dt>
        <dd className="mt-1 text-[var(--color-text-secondary)]">Policy</dd>
      </div>
      <div>
        <dt className="font-bold text-ana-navy">Organization</dt>
        <dd className="mt-1 text-[var(--color-text-secondary)]">American Nurses Association</dd>
      </div>
    </dl>
  )
}

function DownloadCardExample() {
  return (
    <a href="#components" className="group flex flex-col gap-4 rounded-card border border-[var(--color-border-default)] bg-white p-5 no-underline transition hover:border-ana-blue hover:shadow-ana sm:flex-row sm:items-start">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-surface-info text-ana-blue">
        <FiDownload aria-hidden="true" size={24} />
      </span>
      <span>
        <span className="ds-tag">PDF</span>
        <span className="mt-3 block text-xl font-bold text-[var(--color-text-primary)] group-hover:text-ana-blue">Workplace violence prevention toolkit</span>
        <span className="mt-2 block text-sm text-[var(--color-text-secondary)]">Download guidance, checklists, and advocacy resources. PDF, 1.2 MB.</span>
      </span>
    </a>
  )
}

function QuickLinksExample() {
  const links = ['Code of Ethics', 'Practice standards', 'Position statements', 'Advocacy resources']
  return (
    <nav aria-labelledby="quick-links-heading" className="rounded-card bg-ana-navy p-5 text-white">
      <h3 id="quick-links-heading" className="text-xl text-white">Quick links</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map(link => (
          <li key={link}>
            <a className="block rounded-button border border-white/30 px-4 py-3 font-bold text-white no-underline hover:bg-white hover:text-ana-navy" href="#components">{link}</a>
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
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ana-green font-bold text-white">{number}</span>
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
        <div className="flex min-h-24 items-center justify-center rounded-card border border-[var(--color-border-default)] bg-white p-4 text-xl font-bold text-ana-navy" key={logo}>{logo}</div>
      ))}
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
            <span className="text-xs font-bold uppercase tracking-wide text-ana-blue">{type}</span>
            <h4 className="mt-1 text-lg"><a href="#components">{title}</a></h4>
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
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ana-green text-2xl font-bold text-white">RN</span>
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
          <time className="font-bold text-ana-navy">{time}</time>
          <div>
            <h4 className="text-lg">{title}</h4>
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
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-surface-muted text-ana-navy"><FiUser aria-hidden="true" size={32} /></div>
      <div className="mt-4 sm:mt-0">
        <h3 className="text-2xl">Jordan Sample, RN</h3>
        <p className="mt-1 font-semibold text-ana-blue">Nurse leader and policy advocate</p>
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
      <ComponentDoc eyebrow="Search" title="Search Result Card" purpose="A structured card for Optimizely Search & Navigation results with content type, title, excerpt, and URL." whenToUse="Site search, resource search, certification search, news search, and event search." anatomy={['Content type', 'Title link', 'Excerpt', 'URL', 'Optional metadata']} code="<SearchResultCard />"><SearchResultCardExample /></ComponentDoc>
      <ComponentDoc eyebrow="Content" title="Related Content" purpose="A flexible manual or dynamic section for related resources, news, events, programs, or certification content." whenToUse="Bottom container zones and detail pages where next steps improve findability." anatomy={['Heading', 'Related item cards', 'Optional CTA']} code="<RelatedContent />"><RelatedContentExample /></ComponentDoc>
      <ComponentDoc eyebrow="Dynamic content" title="Content Feed" purpose="A generalized feed that extends the current Latest News model to news, events, resources, products, and mixed content." whenToUse="Landing pages, campaign pages, resource hubs, and bottom container zones." anatomy={['Content type label', 'Title link', 'Optional metadata', 'Action']} code="<ContentFeed />"><ContentFeedExample /></ComponentDoc>
      <ComponentDoc eyebrow="ANCC" title="Credential Badge" purpose="A compact authority element for credentials, recognition, certification status, and ANCC programs." whenToUse="Certification detail pages, account dashboards, recognition pages, and credential directories." anatomy={['Badge mark', 'Credential name', 'Description', 'Status label']} code="<CredentialBadge />"><CredentialBadgeExample /></ComponentDoc>
      <ComponentDoc eyebrow="Membership" title="Membership Status Card" purpose="A personalized portal card for membership state, renewal date, and next action." whenToUse="My Account dashboards, member portals, and renewal experiences." anatomy={['Status label', 'Status title', 'Renewal detail', 'CTA']} code="<MembershipStatusCard />"><MembershipStatusExample /></ComponentDoc>
      <ComponentDoc eyebrow="Events" title="Event Schedule" purpose="A readable agenda module for events, conferences, webinars, and session listings." whenToUse="Event pages, conference microsites, and session detail pages." anatomy={['Time', 'Session title', 'Location', 'Optional speaker']} code="<EventSchedule />"><EventScheduleExample /></ComponentDoc>
      <ComponentDoc eyebrow="People" title="Speaker / Person Card" purpose="A reusable person profile for speakers, experts, authors, staff, leaders, and nurse stories." whenToUse="Events, articles, leadership pages, nurse stories, and expert directories." anatomy={['Photo or placeholder', 'Name', 'Role', 'Short bio']} code={'<PersonCard variant="speaker" />'}><SpeakerCardExample /></ComponentDoc>
    </div>
  )
}
