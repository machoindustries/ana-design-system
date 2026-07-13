// Docks title/eyebrow/actions at the top, Carbon-style rigid header block.
export function Page({ eyebrow, title, actions, children, rail = false }) {
  return (
    <div className={`ds-page ${rail ? 'ds-page-with-rail' : ''}`}>
      <header className="ds-page-header">
        <div>
          {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
        </div>
        {actions ? <div className="ds-page-actions">{actions}</div> : null}
      </header>
      <div className="ds-page-body">{children}</div>
    </div>
  )
}