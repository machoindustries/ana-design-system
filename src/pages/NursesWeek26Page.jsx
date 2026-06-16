/**
 * NursesWeek26Page.jsx
 * Example: Campaign Landing Page — National Nurses Week 2026
 *
 * Demonstrates: CampaignHero, ToolkitSplit, WebinarCard, DonateSection,
 * MembershipBanner, SponsorStrip, and AdvocacyCallout patterns.
 *
 * Components used from the kit:
 *   Button, Card, SectionHeading — src/components/core/
 *
 * NEW components recommended below (not yet in the kit):
 *   CampaignHero     — full-bleed image hero with eyebrow + headline + CTA pair
 *   WebinarCard      — date/time/title/description + register CTA
 *   SponsorStrip     — logo row with accessible alt text
 *   StatBanner       — dark band with a key campaign number (e.g. 5,000,000+ nurses)
 *
 * Registration: add route + nav entry per CONTRIBUTING.md
 *   Route path:  "examples/nurses-week-2026"
 *   Nav id:      "examples/nurses-week-2026"
 */

import { Button } from '../components/core/Button'
import { SectionHeading } from '../components/core/SectionHeading'

// ---------------------------------------------------------------------------
// Local sub-components (candidates for promotion to core/ or showcase/)
// ---------------------------------------------------------------------------

/**
 * CampaignHero
 * RECOMMENDED NEW COMPONENT: src/components/core/CampaignHero.jsx
 *
 * Full-bleed hero with an optional image, eyebrow label, heading, body copy,
 * and one or two CTAs. Dark overlay keeps text readable over photography.
 * Add to ButtonShowcase once promoted.
 */
function CampaignHero({ eyebrow, heading, body, primaryCta, secondaryCta, imageSrc, imageAlt }) {
  return (
    <section
      className="relative overflow-hidden bg-ana-navy text-white"
      aria-label={heading}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || ''}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
      )}
      <div className="relative ds-container py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {eyebrow && <p className="ds-eyebrow mb-4 text-[var(--ana-green-100)]">{eyebrow}</p>}
          <h1 className="text-white">{heading}</h1>
          {body && <p className="mt-6 max-w-2xl text-lg text-white/90 leading-relaxed">{body}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary">{primaryCta.label}</Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" className="border-white text-white hover:bg-white/10">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/**
 * StatBanner
 * RECOMMENDED NEW COMPONENT: src/components/core/StatBanner.jsx
 *
 * A full-width dark band surfacing a single impactful number or statement.
 * Good for campaign pages, Foundation impact sections, and homepage heroes.
 */
function StatBanner({ stat, label }) {
  return (
    <div className="bg-ana-navy text-white">
      <div className="ds-container py-10 text-center">
        <p className="text-5xl font-bold text-white md:text-6xl">{stat}</p>
        <p className="mt-2 text-lg text-white/80">{label}</p>
      </div>
    </div>
  )
}

/**
 * WebinarCard
 * RECOMMENDED NEW COMPONENT: src/components/core/WebinarCard.jsx
 *
 * Displays a webinar or event with date/time, title, description, and CTA.
 * Extend with a `status` prop (upcoming | live | on-demand) for visual badges.
 */
function WebinarCard({ date, title, description, href, status = 'upcoming' }) {
  const statusLabel = {
    upcoming: { text: 'Upcoming', classes: 'bg-[var(--color-background-info)] text-ana-blue' },
    live: { text: 'Live now', classes: 'bg-[var(--color-background-error)] text-[var(--color-text-error)]' },
    'on-demand': { text: 'On demand', classes: 'bg-surface-muted text-[var(--color-text-secondary)]' },
  }[status]

  return (
    <article className="ds-card flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        {date && <p className="text-sm font-semibold text-[var(--color-text-secondary)]">{date}</p>}
        <span className={`ds-tag shrink-0 ${statusLabel.classes}`}>{statusLabel.text}</span>
      </div>
      <h3 className="text-xl leading-snug">{title}</h3>
      <p className="grow text-sm text-[var(--color-text-secondary)]">{description}</p>
      <Button href={href} variant="secondary" className="self-start">Register Now</Button>
    </article>
  )
}

/**
 * SponsorStrip
 * RECOMMENDED NEW COMPONENT: src/components/core/SponsorStrip.jsx
 *
 * Accessible logo row for sponsors and partners.
 * Each logo needs a meaningful alt value — filenames are not acceptable alt text.
 */
function SponsorStrip({ heading, sponsors }) {
  return (
    <section className="ds-section border-t border-[var(--color-border-default)]">
      <div className="ds-container">
        {heading && (
          <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
            {heading}
          </p>
        )}
        <ul
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          aria-label="Sponsors and donors"
        >
          {sponsors.map(({ src, alt, href }) => (
            <li key={alt}>
              {href ? (
                <a href={href} className="no-underline" target="_blank" rel="noopener noreferrer">
                  <img src={src} alt={alt} className="h-10 w-auto object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100" />
                </a>
              ) : (
                <img src={src} alt={alt} className="h-10 w-auto object-contain grayscale opacity-70" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const webinars = [
  {
    date: 'May 7 · 6–7:30 p.m. ET',
    title: 'Mary Eliza Mahoney: An Ode to Nursing History',
    description:
      'A celebration of the trailblazers who shaped the nursing profession, honoring the legacy of Mary Eliza Mahoney, the first Black nurse in the United States.',
    href: 'https://ana-org.zoom.us/meeting/register/rcYK9FpATCmitM_01ugYXg',
    status: 'upcoming',
  },
  {
    date: 'May 11 · 3 p.m. ET',
    title: 'Myth-Busting AI in Nursing',
    description:
      'Grounded in ANA\'s ethical leadership and AI Think Tank insights, this session demystifies common fears and clarifies how nurses can actively shape the future of AI.',
    href: 'https://ana-org.zoom.us/webinar/register/WN_JhYYtX55R9G-5EKuiGbuZQ',
    status: 'upcoming',
  },
  {
    date: 'May 12 · 3 p.m. ET',
    title: 'Stronger Together: Building a Culture of Mental Wellness in Nursing',
    description:
      'Explore key challenges affecting well-being and how nurses and organizations can build supportive cultures that promote psychological health and sustain the workforce.',
    href: 'https://ana-org.zoom.us/webinar/register/WN_OiRRVwD2S5usboCLbnDvow',
    status: 'upcoming',
  },
  {
    date: 'Available now',
    title: 'The Economic Value of Nursing',
    description:
      'Learn how to clearly articulate your value, transform perceptions, and elevate the healthcare industry with insights from experts in nursing economics.',
    href: 'https://www.nursingworld.org/continuing-education/economic-value-of-nurses/',
    status: 'on-demand',
  },
]

const sponsors = [
  {
    src: 'https://pages.nursingworld.org/hs-fs/hubfs/NSOheartlogo_200%20Nov.%202021.png',
    alt: 'NSO — Nurses Service Organization',
    href: 'https://www.nso.com',
  },
  {
    src: 'https://pages.nursingworld.org/hs-fs/hubfs/Shakes%20For%20Shifts%202-1.png',
    alt: 'Shakes for Shifts',
  },
  {
    src: 'https://pages.nursingworld.org/hs-fs/hubfs/CMGLogo_Border_NoMg%20(1)-1.png',
    alt: 'Chipotle Mexican Grill',
    href: 'https://www.chipotle.com',
  },
  {
    src: 'https://pages.nursingworld.org/hs-fs/hubfs/CJ__Logo_Primary.png',
    alt: 'Convention Jewelry',
    href: 'https://www.conventionjewelry.com',
  },
  {
    src: 'https://pages.nursingworld.org/hs-fs/hubfs/hid-logo-rgb-300dpi-hi-res-2021.png',
    alt: 'HID Global',
  },
  {
    src: 'https://pages.nursingworld.org/hs-fs/hubfs/JoyMetrics-Purple-Gradient-1000px.jpg',
    alt: 'JoyMetrics',
  },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function NursesWeek26Page() {
  return (
    <div>
      <a className="skip-link" href="#main">Skip to main content</a>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <CampaignHero
        eyebrow="May 6–12, 2026 · National Nurses Week"
        heading="The Power of Nurses™"
        body="The American Nurses Enterprise is thrilled to celebrate National Nurses Week 2026, recognizing the invaluable contributions nurses make in healthcare and in our lives, while addressing the real challenges they face every day."
        imageSrc="https://pages.nursingworld.org/hubfs/NNW/ANA-3533-HubspotHeader-V2_ANA-NNW2026-HubspotHeader-1440x400.jpg"
        imageAlt="National Nurses Week 2026 banner"
        primaryCta={{ label: 'Download the Toolkit', href: 'https://brand.ana.org/s/vpwr9bgq85tmxfk2bvvsz' }}
        secondaryCta={{ label: 'Learn More', href: '#webinars' }}
      />

      <main id="main">

        {/* ── Stat banner ──────────────────────────────────────────────────── */}
        <StatBanner
          stat="5,000,000+"
          label="nurses across the country we are honoring this week"
        />

        {/* ── Toolkit ──────────────────────────────────────────────────────── */}
        <section className="ds-section" aria-labelledby="toolkit-heading">
          <div className="ds-container">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="NNW 2026 Digital Toolkit"
                  title="Everything you need to celebrate nurses locally"
                  id="toolkit-heading"
                >
                  Designed to help you elevate engagement in your state, this toolkit is filled with
                  customizable resources, marketing assets, and activation ideas to drive awareness
                  during National Nurses Week.
                </SectionHeading>

                <ul className="mt-6 grid gap-2 text-sm text-[var(--color-text-secondary)]">
                  {[
                    'Guidance for pitching stories to press',
                    'How to create a declaration and reach local politicians',
                    'Social media assets',
                    'Customizable posters, thank-you cards, and certificates',
                    'How to advocate for lighting up a landmark near you',
                    'Paths to up-level local events',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ana-green" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  href="https://brand.ana.org/s/vpwr9bgq85tmxfk2bvvsz"
                  variant="primary"
                  className="mt-8"
                >
                  Download the Toolkit
                </Button>
              </div>

              <figure className="overflow-hidden rounded-2xl shadow-ana-lg">
                <img
                  src="https://pages.nursingworld.org/hs-fs/hubfs/ANA-3533-Hubspot-ToolkitMockUp-01.png"
                  alt="Preview of the NNW 2026 Digital Toolkit showing printable assets and social media templates"
                  className="w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* ── Light Up the Sky ─────────────────────────────────────────────── */}
        <section className="ds-section bg-surface-muted" aria-labelledby="lightup-heading">
          <div className="ds-container">
            <SectionHeading
              eyebrow="Nurses Light Up the Sky"
              title="Help us illuminate 250 landmarks for nurses"
              id="lightup-heading"
            >
              Last year ANE illuminated 206 buildings in honor of nurses. This year, in celebration
              of America&apos;s 250th Anniversary, we&apos;re aiming for 250. If you have suggestions for
              buildings, landmarks, or healthcare hubs in your state, email us at{' '}
              <a href="mailto:NursesWeek@ana.org">NursesWeek@ana.org</a>.
            </SectionHeading>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <figure className="overflow-hidden rounded-card shadow-ana sm:col-span-2 lg:col-span-2 lg:row-span-2">
                <img
                  src="https://pages.nursingworld.org/hs-fs/hubfs/beautiful%20bridge%202%20-%20Light%20up.png"
                  alt="Bridge illuminated in red for National Nurses Week"
                  className="h-full w-full object-cover"
                />
              </figure>
              {[
                {
                  src: 'https://pages.nursingworld.org/hubfs/Screenshot%202025-11-23%20at%207.27.01%20PM-1.png',
                  alt: 'Landmark lit in ANA red for Nurses Week',
                },
                {
                  src: 'https://pages.nursingworld.org/hs-fs/hubfs/Screenshot%202025-11-23%20at%207.45.47%20PM.png',
                  alt: 'Building illuminated in red to honor nurses',
                },
                {
                  src: 'https://pages.nursingworld.org/hs-fs/hubfs/Screenshot%202025-11-23%20at%207.45.13%20PM.png',
                  alt: 'City landmark lit red for National Nurses Week',
                },
              ].map(({ src, alt }) => (
                <figure key={alt} className="overflow-hidden rounded-card shadow-ana">
                  <img src={src} alt={alt} className="h-full w-full object-cover" />
                </figure>
              ))}
            </div>

            <p className="mt-8 text-sm text-[var(--color-text-secondary)]">
              Share your photos using{' '}
              <strong>#ThePowerOfNurses</strong> and <strong>#NursesLightUpTheSky</strong>
            </p>
          </div>
        </section>

        {/* ── Webinars ─────────────────────────────────────────────────────── */}
        <section className="ds-section" id="webinars" aria-labelledby="webinars-heading">
          <div className="ds-container">
            <SectionHeading
              eyebrow="National Nurses Week Webinars"
              title="Join us for four celebrations this May"
              id="webinars-heading"
            >
              Free webinars covering nursing history, AI, mental wellness, and the economic value
              of the profession. All are open to nurses and healthcare advocates.
            </SectionHeading>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {webinars.map(webinar => (
                <WebinarCard key={webinar.title} {...webinar} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Donate ───────────────────────────────────────────────────────── */}
        <section
          className="ds-section bg-ana-navy text-white"
          aria-labelledby="donate-heading"
        >
          <div className="ds-container">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <figure className="overflow-hidden rounded-2xl shadow-ana-lg">
                <img
                  src="https://pages.nursingworld.org/hs-fs/hubfs/happy%20baby%20with%20nurse.jpg"
                  alt="Nurse smiling with a happy baby patient"
                  className="w-full object-cover"
                />
              </figure>
              <div>
                <p className="ds-eyebrow text-[var(--ana-green-100)]">American Nurses Foundation</p>
                <h2 className="mt-2 text-white" id="donate-heading">Your donation makes an impact</h2>
                <p className="mt-4 text-white/85">
                  The American Nurses Foundation advances the nursing profession by serving as a
                  thought-leader, catalyst, convener, and funding conduit. We identify the most
                  pressing issues facing nurses and get resources to research and amplify solutions
                  that transform health and healthcare.
                </p>
                <Button
                  href="https://web.charityengine.net/ANF_NNW_2026"
                  variant="accent"
                  className="mt-8"
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Everyday purchases ───────────────────────────────────────────── */}
        <section className="ds-section bg-surface-soft" aria-labelledby="partners-heading">
          <div className="ds-container">
            <SectionHeading
              eyebrow="Partner offers"
              title="Everyday purchases that support nurses"
              id="partners-heading"
            >
              The American Nurses Foundation has partnered with Chipotle and Convention Jewelry to
              make supporting nurses simple through May.
            </SectionHeading>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <article className="ds-card flex flex-col gap-4">
                <p className="ds-eyebrow">Through May 12</p>
                <h3 className="text-xl">Round up at Chipotle</h3>
                <p className="grow text-sm text-[var(--color-text-secondary)]">
                  Order online or through the app and round up your total at checkout to donate
                  your change to the American Nurses Foundation.
                </p>
                <Button href="https://www.chipotle.com" variant="secondary" className="self-start">
                  Order Now
                </Button>
              </article>

              <article className="ds-card flex flex-col gap-4">
                <p className="ds-eyebrow">Through May 31</p>
                <h3 className="text-xl">Shop Convention Jewelry</h3>
                <p className="grow text-sm text-[var(--color-text-secondary)]">
                  Use promo code <strong>NURSESWEEK26</strong> for 25% off all online purchases.
                  15% of proceeds are donated to the American Nurses Foundation.
                </p>
                <Button href="https://www.conventionjewelry.com" variant="secondary" className="self-start">
                  Shop Now
                </Button>
              </article>
            </div>
          </div>
        </section>

        {/* ── Healthy Nurse ────────────────────────────────────────────────── */}
        <section className="ds-section" aria-labelledby="hnhn-heading">
          <div className="ds-container">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Healthy Nurse, Healthy Nation®"
                  title="Recharge &amp; Rise Challenge"
                  id="hnhn-heading"
                >
                  Sponsored by Humana. Through simple, energizing daily actions inspired by real
                  nursing life, you&apos;ll build habits that support rest, renewal, and sustainable
                  well-being on and off shift. Starting May 4.
                </SectionHeading>
                <Button href="https://hubs.ly/Q04dLB_Y0." variant="primary" className="mt-8">
                  Sign Up Today
                </Button>
              </div>
              <figure className="overflow-hidden rounded-2xl shadow-ana-lg">
                <img
                  src="https://pages.nursingworld.org/hs-fs/hubfs/ANA-HNHN-May%20Challenge-750x625%20(Smartbrief).jpg"
                  alt="Healthy Nurse, Healthy Nation — The Power of Nurses: Recharge & Rise Challenge promotional"
                  className="w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* ── Membership ───────────────────────────────────────────────────── */}
        <section
          className="ds-section bg-ana-navy text-white"
          aria-labelledby="membership-heading"
        >
          <div className="ds-container">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="ds-eyebrow text-[var(--ana-green-100)]">American Nurses Association</p>
                <h2 className="mt-2 text-white" id="membership-heading">
                  Proudly celebrating 130 years of leadership
                </h2>
                <p className="mt-4 text-white/85">
                  Together, we have the power to advance the nursing profession and create a
                  healthcare environment where nurses can thrive. Join ANA and your State Nurses
                  Association for professional support and growth you won&apos;t find anywhere else.
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-white/80">
                  {[
                    '36+ hours of free CNE credits',
                    'Discounts on ANCC Certification',
                    'Access to travel, insurance & liability discounts',
                    'Community, mentorship, and advocacy support',
                  ].map(benefit => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ana-green" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button
                  href="https://www.nursingworld.org/membership/joinANA/"
                  variant="primary"
                  className="mt-8"
                >
                  Join ANA Now
                </Button>
              </div>
              <figure>
                <img
                  src="https://pages.nursingworld.org/hs-fs/hubfs/ANA-130th-Lockup-White-RGB.png"
                  alt="American Nurses Association 130th anniversary logo"
                  className="mx-auto w-64 max-w-full"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* ── Advocacy ─────────────────────────────────────────────────────── */}
        <section className="ds-section bg-surface-info" aria-labelledby="advocacy-heading">
          <div className="ds-container text-center">
            <p className="ds-eyebrow">#RNAction</p>
            <h2 className="mt-2" id="advocacy-heading">Your voice matters</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              ANA advocates for the profession and patients year-round, but nothing is more
              impactful than legislators hearing directly from nurses. Use your voice — advocate today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="https://www.nursingworld.org/practice-policy/" variant="primary">
                Take Action
              </Button>
              <Button href="https://www.nursingworld.org/practice-policy/" variant="secondary">
                Sign the Petition
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-ana-navy">
              {['Prevent Workplace Violence', 'Medicaid Still Matters', 'Improve Access to Care'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ana-blue" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Sponsors ─────────────────────────────────────────────────────── */}
        <SponsorStrip
          heading="Thank you to our 2026 sponsors and donors"
          sponsors={sponsors}
        />

      </main>
    </div>
  )
}