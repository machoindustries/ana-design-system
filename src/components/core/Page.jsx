// Page-level header block: eyebrow, title, intro, optional actions.
// Note: does NOT handle the sidebar rail — SiteLayout.jsx already wraps
// every page in .ds-page-with-rail alongside DesignKitSidebar, so a rail
// prop here would nest a second, conflicting grid. If a page ever needs
// a *different* rail (e.g. a right-hand "on this page" TOC), that should
// be a new pattern, not this prop.
export function Page({ eyebrow, title, intro, actions, children }) {
  return (
    <section className="ds-section-tight">
      <div className="ds-container">
        <header className="ds-page-header">
          <div className="max-w-content">
            {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
            <h1 className="mt-2">{title}</h1>
            {intro ? <p className="mt-3 text-slate-700">{intro}</p> : null}
          </div>
          {actions ? <div className="ds-page-actions">{actions}</div> : null}
        </header>
        <div className="ds-page-body">{children}</div>
      </div>
    </section>
  )
}