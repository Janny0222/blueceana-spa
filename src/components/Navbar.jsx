import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, business } from '../data/business.js'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { Icon } from './Icons.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname])

  // Over the dark hero (not scrolled) the bar is transparent, so use light
  // text; once scrolled the bar turns white, so switch back to dark text.
  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors ${
      scrolled
        ? isActive
          ? 'text-forest-600'
          : 'text-forest-900/70 hover:text-forest-600'
        : isActive
          ? 'text-white'
          : 'text-white/85 hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 shadow-sm shadow-forest-900/5 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" aria-label="Blueceana Spa home">
          <Logo light={!scrolled} />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full ${
                        scrolled ? 'bg-forest-500' : 'bg-white'
                      }`}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Button
            to="/contact"
            variant={scrolled ? 'primary' : 'secondary'}
            className="!px-5 !py-2.5"
          >
            <Icon name="phone" className="h-4 w-4" />
            Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl ring-1 transition-colors md:hidden ${
            scrolled
              ? 'text-forest-800 ring-forest-100'
              : 'text-white ring-white/40'
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-forest-100 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-forest-50 text-forest-700'
                        : 'text-forest-900/80 hover:bg-forest-50'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href={`tel:${business.phones[0].tel}`}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-forest-600 px-5 py-3 text-sm font-semibold text-white"
              >
                <Icon name="phone" className="h-4 w-4" />
                Call to Book
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
