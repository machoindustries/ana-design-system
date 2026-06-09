export function HtmlTableShowcase() {
  return (
    <div className="overflow-x-auto rounded-card border border-[var(--color-border-default)] bg-white shadow-ana">
      <table className="min-w-[42rem] w-full text-left text-sm">
        <caption className="sr-only">Example certification fee table</caption>
        <thead className="bg-surface-muted">
          <tr>
            <th className="px-4 py-3 font-bold text-ana-navy" scope="col">Audience</th>
            <th className="px-4 py-3 font-bold text-ana-navy" scope="col">Application type</th>
            <th className="px-4 py-3 font-bold text-ana-navy" scope="col">Fee</th>
            <th className="px-4 py-3 font-bold text-ana-navy" scope="col">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border-default)]">
          <tr>
            <th className="px-4 py-3 font-semibold" scope="row">ANA Member</th>
            <td className="px-4 py-3">Initial application</td>
            <td className="px-4 py-3">$295</td>
            <td className="px-4 py-3">Example only</td>
          </tr>
          <tr>
            <th className="px-4 py-3 font-semibold" scope="row">Nonmember</th>
            <td className="px-4 py-3">Initial application</td>
            <td className="px-4 py-3">$395</td>
            <td className="px-4 py-3">Example only</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
