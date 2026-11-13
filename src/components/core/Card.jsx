// icon is optional: pass a react-icons component, such as FiUsers. It is
// decorative, so the title carries the meaning.
export function Card({ eyebrow, title, children, linkText = 'View guidance', href = '#', icon: Icon }) {
  return (
    <article className="ds-card">
      {Icon ? (
        <div className="flex h-14 w-14 items-center justify-center rounded-card bg-[var(--color-background-info)] text-[var(--color-text-brand)]">
          <Icon aria-hidden="true" size={28} />
        </div>
      ) : null}
      {eyebrow ? <span className={Icon ? 'ds-tag mt-4' : 'ds-tag'}>{eyebrow}</span> : null}
      <h3 className="mt-4 text-xl">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{children}</p>
      <a href={href} className="mt-4 inline-block font-bold">
        {linkText}
      </a>
    </article>
  )
}
