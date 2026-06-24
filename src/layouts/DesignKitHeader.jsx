import { useEffect, useRef, useState } from 'react'
import { FiBookOpen, FiChevronDown, FiMenu, FiSearch, FiX } from 'react-icons/fi'
import { designKitNavItems } from '../data/designKitNavigation'
import { SearchOverlay } from '../components/core/SearchOverlay'

// ---------------------------------------------------------------------------
// LogoMark
//
// The ANA Enterprise lockup has a hard minimum display height of 100px.
// Rather than forcing the nav row to grow to fit it (which would crowd
// the nav buttons and force awkward vertical centering), the logo gets
// its own dedicated branding row above the nav. The image is rendered at
// its true aspect ratio (≈1.68:1) with object-contain so it's never
// stretched or cropped — only its container size changes per breakpoint.
// ---------------------------------------------------------------------------
function LogoMark() {
  return (
    <img
      src="/assets/enterprise-logo-color-rgb.svg"
      alt="American Nurses Enterprise"
      className="h-[100px] w-auto object-contain"
    />
  )
}

// ---------------------------------------------------------------------------
// DropdownGroup — desktop grouped nav item with flyout panel
// ---------------------------------------------------------------------------
function DropdownGroup({ item, activePage, onNavigate }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const buttonId = `nav-group-${item.id}`
  const panelId = `nav-panel-${item.id}`

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isGroupActive = item.children?.some(child => child.id === activePage)

  return (
    <div className="relative" ref={ref}>
      <button
        id={buttonId}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(prev => !prev)}
        className={`inline-flex items-center gap-1.5 rounded-button px-3 py-2 text-sm font-bold transition
          ${isGroupActive ? 'bg-ana-navy text-white' : 'text-ana-navy hover:bg-surface-muted'}`}
      >
        {item.label}
        <FiChevronDown
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="absolute left-0 top-full z-50 mt-2 w-72 rounded-card border border-[var(--color-border-default)] bg-white shadow-ana-lg"
        >
          <ul className="p-2">
            {item.children.map(child => (
              <li key={child.id}>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate(child.id)
                    setOpen(false)
                  }}
                  className={`w-full rounded-button px-4 py-3 text-left transition
                    ${activePage === child.id
                      ? 'bg-ana-navy text-white'
                      : 'text-ana-navy hover:bg-surface-muted'}`}
                >
                  <span className="block text-sm font-bold">{child.label}</span>
                  <span className={`mt-0.5 block text-xs ${activePage === child.id ? 'text-white/75' : 'text-[var(--color-text-secondary)]'}`}>
                    {child.description}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// DesignKitHeader
// ---------------------------------------------------------------------------
export function DesignKitHeader({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [openMobileGroup, setOpenMobileGroup] = useState(null)

  // ⌘K / Ctrl+K opens search from anywhere in the kit
  useEffect(() => {
    function handleKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(prev => !prev)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  function navigate(id) {
    onNavigate(id)
    setMenuOpen(false)
    setOpenMobileGroup(null)
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-default)] bg-white/95 backdrop-blur">
      <a className="skip-link" href="#main">Skip to main content</a>

      {/* Branding row — sized to the logo's real minimum height (100px) plus
          vertical breathing room, kept independent from the nav row below it
          so neither has to compromise its own sizing for the other. */}
      <div className="ds-container">
        <div className="flex items-center justify-between gap-4 py-4">
          <button
            type="button"
            onClick={() => navigate('home')}
            className="rounded-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ana-blue"
            aria-label="ANA Design System home"
          >
            <LogoMark />
          </button>

          <span className="hidden text-sm font-semibold uppercase tracking-wide text-[var(--color-text-secondary)] sm:inline">
            Design System &middot; Reference Kit
          </span>
        </div>
      </div>

      {/* Nav row — its own compact bar, unaffected by the logo's height */}
      <div className="border-t border-[var(--color-border-default)] bg-surface-soft">
        <div className="ds-container">
          <div className="flex min-h-16 items-center justify-between gap-4">

            {/* Desktop nav */}
            <nav aria-label="Design kit navigation" className="hidden lg:flex lg:items-center lg:gap-1">
              {designKitNavItems.map(item => {
                if (item.children) {
                  return (
                    <DropdownGroup
                      key={item.id}
                      item={item}
                      activePage={activePage}
                      onNavigate={navigate}
                    />
                  )
                }
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigate(item.id)}
                    className={`rounded-button px-3 py-2 text-sm font-bold transition
                      ${activePage === item.id
                        ? 'bg-ana-navy text-white'
                        : 'text-ana-navy hover:bg-surface-muted'}`}
                  >
                    {item.label}
                  </button>
                )
              })}
            </nav>

            {/* Utility buttons */}
            <div className="flex items-center gap-2 py-2">
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-button border border-[var(--color-border-default)] text-ana-navy hover:bg-surface-muted"
                aria-label="Search the design kit (⌘K)"
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen(prev => !prev)}
              >
                <FiSearch aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => navigate('docs')}
                className={`hidden min-h-11 items-center gap-2 rounded-button border border-[var(--color-border-default)] px-4 text-sm font-bold transition md:inline-flex
                  ${activePage === 'docs' ? 'bg-ana-navy text-white' : 'text-ana-navy hover:bg-surface-muted'}`}
              >
                <FiBookOpen aria-hidden="true" /> Docs
              </button>

              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-button bg-ana-navy text-white lg:hidden"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(prev => !prev)}
              >
                {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Search overlay — rendered at the end of the header so it
              sits above all other header content in the stacking order */}
          <SearchOverlay
            open={searchOpen}
            onClose={() => setSearchOpen(false)}
            onNavigate={(id) => {
              navigate(id)
              setSearchOpen(false)
            }}
          />

          {/* Mobile menu */}
          {menuOpen && (
            <nav
              aria-label="Mobile design kit navigation"
              className="border-t border-[var(--color-border-default)] py-4 lg:hidden"
            >
              <ul className="grid gap-1">
                {designKitNavItems.map(item => {
                  if (item.children) {
                    const isGroupOpen = openMobileGroup === item.id
                    const isGroupActive = item.children.some(child => child.id === activePage)

                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          aria-expanded={isGroupOpen}
                          onClick={() => setOpenMobileGroup(isGroupOpen ? null : item.id)}
                          className={`flex w-full items-center justify-between rounded-button px-4 py-3 text-left font-bold transition
                            ${isGroupActive ? 'bg-surface-muted text-ana-navy' : 'bg-surface-soft text-ana-navy'}`}
                        >
                          <span>
                            {item.label}
                            <span className="mt-0.5 block text-sm font-normal text-[var(--color-text-secondary)]">
                              {item.description}
                            </span>
                          </span>
                          <FiChevronDown
                            aria-hidden="true"
                            className={`ml-3 shrink-0 transition-transform duration-200 ${isGroupOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {isGroupOpen && (
                          <ul className="ml-4 mt-1 grid gap-1 border-l-2 border-[var(--color-border-default)] pl-3">
                            {item.children.map(child => (
                              <li key={child.id}>
                                <button
                                  type="button"
                                  onClick={() => navigate(child.id)}
                                  className={`w-full rounded-button px-4 py-3 text-left transition
                                    ${activePage === child.id
                                      ? 'bg-ana-navy text-white'
                                      : 'bg-surface-soft text-ana-navy hover:bg-surface-muted'}`}
                                >
                                  <span className="block font-bold">{child.label}</span>
                                  <span className={`mt-0.5 block text-sm font-normal ${activePage === child.id ? 'text-white/75' : 'text-[var(--color-text-secondary)]'}`}>
                                    {child.description}
                                  </span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  }

                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => navigate(item.id)}
                        className={`w-full rounded-button px-4 py-3 text-left font-bold transition
                          ${activePage === item.id
                            ? 'bg-ana-navy text-white'
                            : 'bg-surface-soft text-ana-navy hover:bg-surface-muted'}`}
                      >
                        {item.label}
                        <span className={`mt-0.5 block text-sm font-normal ${activePage === item.id ? 'text-white/75' : 'text-[var(--color-text-secondary)]'}`}>
                          {item.description}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}