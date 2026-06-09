import { Button } from '../core/Button'

export function ButtonShowcase() {
  return (
    <div className="grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
      <Button href="#templates">Apply Now</Button>
      <Button href="#components" variant="secondary">Learn More</Button>
      <Button href="#tokens" variant="accent">Donate Today</Button>
    </div>
  )
}
