import { Button } from '../core/Button'

export function FormShowcase() {
  return (
    <form className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5 shadow-ana sm:p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="ds-label">First name</label>
          <input id="first-name" className="ds-field mt-2" type="text" autoComplete="given-name" />
        </div>
        <div>
          <label htmlFor="last-name" className="ds-label">Last name</label>
          <input id="last-name" className="ds-field mt-2" type="text" autoComplete="family-name" />
        </div>
        <div>
          <label htmlFor="email" className="ds-label">Email address</label>
          <input id="email" className="ds-field mt-2" type="email" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="role" className="ds-label">Professional role</label>
          <select id="role" className="ds-field mt-2" defaultValue="">
            <option value="" disabled>Select a role</option>
            <option>Registered nurse</option>
            <option>Advanced practice registered nurse</option>
            <option>Nurse educator</option>
            <option>Healthcare leader</option>
          </select>
        </div>
        <fieldset className="md:col-span-2">
          <legend className="ds-label">Interests</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {['Advocacy', 'Certification', 'Continuing education', 'Membership'].map(item => (
              <label className="flex items-start gap-3" key={item}>
                <input type="checkbox" className="mt-1 h-4 w-4" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="md:col-span-2">
          <label htmlFor="message" className="ds-label">Message</label>
          <textarea id="message" className="ds-field mt-2 min-h-32" />
          <p className="ds-help">Keep helper text concise and useful.</p>
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit">Submit Form</Button>
      </div>
    </form>
  )
}
