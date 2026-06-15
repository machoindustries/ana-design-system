export function ColorSwatch({ name, token, hex, role }) {
  return (
    <div className="overflow-hidden rounded-card border bg-white">
      <div className="h-24" style={{ backgroundColor: hex }} />
      <div className="p-4">
        <h4 className="font-bold">{name}</h4>
        <p className="ds-code mt-2 inline-block">{token}</p>
        <p className="mt-2 text-sm">{hex}</p>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{role}</p>
      </div>
    </div>
  )
}