// Foundations swatch for one primitive brand color.
//
// This is the one component allowed to reference primitive tokens: its job is
// to display them. The classes are written out in full so Tailwind can find
// them; a class built from `token` at runtime would be missing from the CSS.
const swatchClasses = {
  'ana-red-500': 'bg-[var(--ana-red-500)]',
  'ana-green-500': 'bg-[var(--ana-green-500)]',
  'ana-navy-500': 'bg-[var(--ana-navy-500)]',
  'ana-blue-500': 'bg-[var(--ana-blue-500)]',
  'ana-orange-500': 'bg-[var(--ana-orange-500)]',
  'ana-yellow-500': 'bg-[var(--ana-yellow-500)]',
  'ana-gray-900': 'bg-[var(--ana-gray-900)]',
  'ana-white': 'bg-[var(--ana-white)]',
}

export function ColorSwatch({ name, token, hex, role }) {
  return (
    <div className="overflow-hidden rounded-card border bg-white">
      <div className={`h-24 ${swatchClasses[token] ?? ''}`} />
      <div className="p-4">
        <h3 className="type-h4 font-bold">{name}</h3>
        <p className="ds-code mt-2 inline-block">{token}</p>
        <p className="mt-2 text-sm">{hex}</p>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{role}</p>
      </div>
    </div>
  )
}
