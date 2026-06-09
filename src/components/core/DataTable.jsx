export function DataTable({ columns, rows }) {
  return (
    <div className="overflow-x-auto rounded-card border border-[var(--color-border-default)] bg-white shadow-ana">
      <table className="min-w-full divide-y divide-[var(--color-border-default)] text-left text-sm">
        <thead className="bg-surface-muted">
          <tr>
            {columns.map(column => (
              <th className="px-4 py-3 font-bold text-ana-navy" key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border-default)]">
          {rows.map(row => (
            <tr key={row.join('-')}>
              {row.map(cell => (
                <td className="px-4 py-3 align-top text-slate-700" key={cell}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
