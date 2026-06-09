export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-content">
      {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-2">{title}</h2>
      {children ? <p className="mt-3 text-slate-700">{children}</p> : null}
    </div>
  )
}
