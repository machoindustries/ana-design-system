export function LinksShowcase() {
  return (
    <div className="grid gap-4 rounded-2xl border border-[var(--color-border-default)] bg-white p-5 shadow-ana sm:p-6">
      <p>
        Inline links should be descriptive, such as <a href="/">review certification requirements</a>, rather than vague labels like click here.
      </p>
      <ul className="grid gap-3">
        <li><a href="/" className="font-bold">Download the workplace violence prevention toolkit</a></li>
        <li><a href="/" className="font-bold">Explore continuing education resources</a></li>
        <li><a href="/" className="font-bold">View all position statements</a></li>
      </ul>
    </div>
  )
}
