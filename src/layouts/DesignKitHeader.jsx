import { useState } from 'react'
import { FiBookOpen, FiMenu, FiSearch, FiX } from 'react-icons/fi'
import { designKitNavItems } from '../data/designKitNavigation'

function LogoMark() {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ana-red text-white" aria-hidden="true">
        <img src="/assets/flame-logo-color-rgb.svg" alt="" className="h-7 w-auto" />
      </span>
      <span>
        <span className="block text-base font-bold leading-5 text-ana-navy">ANA Design System</span>
        <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">Reference Kit</span>
      </span>
    </span>
  )
}

export function DesignKitHeader({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  function navigate(id) {
    onNavigate(id)
    setMenuOpen(false)
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-default)] bg-white/95 backdrop-blur">
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="ds-container">
        <div className="flex min-h-20 items-center justify-between gap-4 py-3">
          <button type="button" onClick={() => navigate('home')} className="rounded-button text-left no-underline hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ana-blue" aria-label="ANA Design System home">
            <LogoMark />
          </button>

          <nav aria-label="Design kit navigation" className="hidden lg:flex lg:items-center lg:gap-1">
            {designKitNavItems.slice(1).map(item => (
              <button
                type="button"
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`rounded-button px-3 py-2 text-sm font-bold transition ${activePage === item.id ? 'bg-ana-navy text-white' : 'text-ana-navy hover:bg-surface-muted'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-button border border-[var(--color-border-default)] text-ana-navy hover:bg-surface-muted" aria-label="Toggle design kit search" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}>
              <FiSearch aria-hidden="true" />
            </button>
            <a href="/" className="hidden min-h-11 items-center gap-2 rounded-button border border-[var(--color-border-default)] px-4 text-sm font-bold no-underline hover:bg-surface-muted md:inline-flex">
              <FiBookOpen aria-hidden="true" /> Docs
            </a>
            <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-button bg-ana-navy text-white lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {searchOpen ? (
          <form className="grid gap-3 border-t border-[var(--color-border-default)] py-4 sm:grid-cols-[1fr_auto]" role="search">
            <label htmlFor="design-kit-search" className="sr-only">Search the design kit</label>
            <input id="design-kit-search" className="ds-field" type="search" placeholder="Search foundations, components, templates" />
            <button className="ds-button ds-button-primary" type="submit">Search</button>
          </form>
        ) : null}

        {menuOpen ? (
          <nav aria-label="Mobile design kit navigation" className="grid gap-2 border-t border-[var(--color-border-default)] py-4 lg:hidden">
            {designKitNavItems.map(item => (
              <button
                type="button"
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`rounded-button px-4 py-3 text-left font-bold ${activePage === item.id ? 'bg-ana-navy text-white' : 'bg-surface-soft text-ana-navy'}`}
              >
                {item.label}
                <span className="mt-1 block text-sm font-normal opacity-80">{item.description}</span>
              </button>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  )
}
