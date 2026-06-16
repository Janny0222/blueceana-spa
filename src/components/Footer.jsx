import { Link } from 'react-router-dom'
import { business, navLinks } from '../data/business.js'
import Logo from './Logo.jsx'
import { Icon } from './Icons.jsx'

export default function Footer() {
  const { address, phones, social, hours } = business
  return (
    <footer className="relative bg-ocean-900 text-ocean-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ocean-100/70">
            {business.shortPitch}
          </p>
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-ocean-500"
            aria-label="Blueceana Spa on Facebook"
          >
            <Icon name="facebook" className="h-5 w-5" />
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-ocean-100/70 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Visit Us
          </h4>
          <p className="mt-4 flex items-start gap-2.5 text-sm text-ocean-100/70">
            <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-300" />
            <span>
              {address.line1}
              <br />
              {address.line2}
              <br />
              {address.region}
            </span>
          </p>
          <p className="mt-3 flex items-start gap-2.5 text-sm text-ocean-100/70">
            <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-300" />
            <span>
              {hours.map((h) => (
                <span key={h.day} className="block">
                  {h.day}: {h.time}
                </span>
              ))}
            </span>
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Reservations
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {phones.map((p) => (
              <li key={p.tel}>
                <a
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-2.5 text-ocean-100/70 transition-colors hover:text-white"
                >
                  <Icon name="phone" className="h-5 w-5 shrink-0 text-ocean-300" />
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ocean-100/60">{business.tagline}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-ocean-100/50">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
