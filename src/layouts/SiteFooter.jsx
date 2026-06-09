import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { footerGroups } from '../data/navigation'

function SocialLink({ href, label, children }) {
  return (
    <a href={href} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/30 text-white no-underline transition hover:bg-white hover:text-ana-navy" aria-label={label}>
      {children}
    </a>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-ana-navy text-white">
      <div className="ds-container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <img src="/assets/ana-lockup-white.webp" alt="American Nurses" className="h-auto w-60 max-w-full" />
            <p className="mt-5 max-w-sm text-white/80">The ANA Digital Design System translates the American Nurses brand into reusable, accessible, mobile-first digital experiences.</p>
            <div className="mt-6 flex flex-wrap gap-3" aria-label="Social links">
              <SocialLink href="/" label="Facebook"><FaFacebookF aria-hidden="true" /></SocialLink>
              <SocialLink href="/" label="Instagram"><FaInstagram aria-hidden="true" /></SocialLink>
              <SocialLink href="/" label="LinkedIn"><FaLinkedinIn aria-hidden="true" /></SocialLink>
              <SocialLink href="/" label="YouTube"><FaYoutube aria-hidden="true" /></SocialLink>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map(([heading, links]) => (
              <div key={heading}>
                <h2 className="text-lg font-bold text-white">{heading}</h2>
                <ul className="mt-4 grid gap-3">
                  {links.map(link => (
                    <li key={link}>
                      <a href="/" className="text-white/85 no-underline hover:text-white hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6">
          <div className="flex flex-col gap-4 text-sm text-white/75 lg:flex-row lg:items-center lg:justify-between">
            <p>© American Nurses Association. All rights reserved.</p>
            <nav aria-label="Legal links" className="flex flex-wrap gap-x-5 gap-y-2">
              {['Privacy Policy', 'Accessibility', 'Terms of Use', 'Sitemap'].map(link => (
                <a key={link} href="/" className="text-white/85 no-underline hover:text-white hover:underline">{link}</a>
              ))}
              <a href="#top" className="text-white/85 no-underline hover:text-white hover:underline">Back to top</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
