import { useState } from 'react'
import { FiChevronDown, FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from 'react-icons/fi'
import { Button } from '../core'
import { primaryNav, utilityLinks } from '../../data/navigation'

function IconButton({ children, label, className = '', onClick }) {
  return (
    <button
      type="button"
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-button border border-[var(--color-border-default)] bg-white text-ana-navy transition hover:bg-surface-muted ${className}`}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function DesktopMenuItem({ item }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-button px-3 py-3 text-sm font-bold text-ana-navy hover:bg-surface-muted"
        aria-haspopup="true"
      >
        {item.label}
        <FiChevronDown aria-hidden="true" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-[28rem] translate-y-2 rounded-card border border-[var(--color-border-default)] bg-white p-5 opacity-0 shadow-ana-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <p className="font-bold text-ana-navy">{item.label}</p>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{item.description}</p>
        <ul className="mt-4 grid gap-2">
          {item.links.map(link => (
            <li key={link}>
              <a href="/" className="font-semibold no-underline hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MobileMenu() {
  return (
    <nav aria-label="Mobile navigation" className="border-t border-[var(--color-border-default)] py-4 lg:hidden">
      <div className="grid gap-4">
        {primaryNav.map(item => (
          <details className="rounded-card border border-[var(--color-border-default)] bg-white p-4" key={item.label}>
            <summary className="cursor-pointer font-bold text-ana-navy">{item.label}</summary>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{item.description}</p>
            <ul className="mt-3 grid gap-2">
              {item.links.map(link => (
                <li key={link}>
                  <a href="/" className="font-semibold no-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        ))}
        <div className="grid gap-2 border-t border-[var(--color-border-default)] pt-4 sm:grid-cols-2">
          {utilityLinks.map(link => (
            <a href="/" className="font-semibold no-underline" key={link}>
              {link}
            </a>
          ))}
          <a href="/" className="font-semibold no-underline">Login</a>
          <Button href="/" variant="accent" className="sm:col-span-2">Join ANA</Button>
        </div>
      </div>
    </nav>
  )
}

function SearchForm() {
  return (
    <form className="grid gap-3 border-t border-[var(--color-border-default)] py-4 sm:grid-cols-[1fr_auto]" role="search">
      <label htmlFor="site-search" className="sr-only">Search NursingWorld</label>
      <input id="site-search" className="ds-field" type="search" placeholder="Search NursingWorld" />
      <Button type="submit">Search</Button>
    </form>
  )
}

export function NursingWorldHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="border-b border-[var(--color-border-default)] bg-white">
      <a className="skip-link" href="#main">Skip to main content</a>

      <div className="hidden border-b border-[var(--color-border-default)] bg-surface-soft lg:block">
        <div className="ds-container flex items-center justify-between py-2 text-sm">
          <nav aria-label="ANA family links" className="flex gap-5">
            {utilityLinks.map(link => (
              <a href="/" className="font-semibold no-underline" key={link}>{link}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="/" className="font-semibold no-underline">Login</a>
            <a href="/" className="font-semibold no-underline">Cart</a>
            <Button href="/" variant="accent" className="!min-h-9 !px-4 !py-2 !text-xs">Join ANA</Button>
          </div>
        </div>
      </div>

      <div className="ds-container">
        <div className="flex items-center justify-between gap-4 py-4">
          <a href="#top" className="flex items-center no-underline" aria-label="American Nurses home">
            <img src="/assets/ana-logo-color-rgb.svg" alt="American Nurses" className="h-11 w-auto sm:h-14" />
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:flex lg:items-center lg:gap-1">
            {primaryNav.map(item => <DesktopMenuItem item={item} key={item.label} />)}
          </nav>

          <div className="flex items-center gap-2">
            <IconButton label="Open search" onClick={() => setSearchOpen(!searchOpen)}>
              <FiSearch aria-hidden="true" />
            </IconButton>
            <a href="/" aria-label="Shopping cart" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-button border border-[var(--color-border-default)] bg-white text-ana-navy no-underline hover:bg-surface-muted">
              <FiShoppingCart aria-hidden="true" />
            </a>
            <a href="/" aria-label="My account" className="hidden min-h-11 min-w-11 items-center justify-center rounded-button border border-[var(--color-border-default)] bg-white text-ana-navy no-underline hover:bg-surface-muted sm:inline-flex">
              <FiUser aria-hidden="true" />
            </a>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-button bg-ana-navy text-white lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {searchOpen ? <SearchForm /> : null}
        {menuOpen ? <MobileMenu /> : null}
      </div>
    </header>
  )
}
