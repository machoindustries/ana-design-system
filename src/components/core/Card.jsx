export function Card({ eyebrow, title, children, linkText = 'View guidance', href = '#' }) {
  return (
    <article className="ds-card">
      {eyebrow ? <span className="ds-tag">{eyebrow}</span> : null}
      <h3 className="mt-4 text-xl">{title}</h3>
      <p className="mt-2 text-sm text-slate-700">{children}</p>
      <a href={href} className="mt-4 inline-block font-bold">
        {linkText}
      </a>
    </article>
  )
}
