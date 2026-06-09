import { designKitNavItems } from '../data/designKitNavigation'

export function DesignKitFooter({ onNavigate }) {
  return (
    <footer className="border-t border-[var(--color-border-default)] bg-surface-soft">
      <div className="ds-container py-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="ds-eyebrow">ANA Design System</p>
            <h2 className="mt-2 text-2xl">A shared kit for designers, vendors, and platform teams.</h2>
            <p className="mt-3 max-w-md text-[var(--color-text-secondary)]">This reference site demonstrates mobile-first tokens, components, patterns, and platform guidance that can be implemented across Optimizely CMS 12, Optimizely Commerce 14, HubSpot, and future ANA digital products.</p>
          </div>
          <nav aria-label="Design kit footer navigation" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {designKitNavItems.slice(1).map(item => (
              <button type="button" key={item.id} onClick={() => onNavigate(item.id)} className="rounded-button border border-[var(--color-border-default)] bg-white p-4 text-left font-bold text-ana-navy shadow-sm hover:bg-surface-muted">
                {item.label}
                <span className="mt-1 block text-sm font-normal text-[var(--color-text-secondary)]">{item.description}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-[var(--color-border-default)] pt-5 text-sm text-[var(--color-text-secondary)]">
          <p>© American Nurses Association. Design system reference starter kit.</p>
        </div>
      </div>
    </footer>
  )
}
