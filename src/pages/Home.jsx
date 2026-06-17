import { motion } from 'framer-motion'
import Page from '../components/Page.jsx'
import Button from '../components/Button.jsx'
import Bubbles from '../components/Bubbles.jsx'
import WaveDivider from '../components/WaveDivider.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import PromoBanner from '../components/PromoBanner.jsx'
import { Icon } from '../components/Icons.jsx'
import { services, whyChooseUs } from '../data/services.js'
import { business } from '../data/business.js'

export default function Home() {
  return (
    <Page>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-forest-400 via-forest-600 to-forest-800 pt-24">
        <Bubbles />
        {/* soft glow accents */}
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-forest-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-32 h-80 w-80 rounded-full bg-forest-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 lg:grid-cols-2">
          <div className="text-center text-white lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ring-1 ring-white/30 backdrop-blur"
            >
              <Icon name="pin" className="h-4 w-4" />
              Cabuyao, Laguna
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 font-display text-5xl font-bold leading-tight sm:text-6xl"
            >
              Relax. Refresh.
              <br />
              <span className="text-forest-100">Renew.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-5 max-w-md text-lg text-forest-50/90 lg:mx-0"
            >
              {business.shortPitch}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <Button to="/contact" variant="secondary">
                <Icon name="phone" className="h-4 w-4" />
                Book an Appointment
              </Button>
              <Button to="/services" variant="light">
                View Services
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 text-sm text-forest-50/80"
            >
              {business.tagline} · Call{' '}
              <a className="font-semibold underline-offset-2 hover:underline" href={`tel:${business.phones[0].tel}`}>
                {business.phones[0].label}
              </a>
            </motion.p>
          </div>

          {/* Floating layered image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="relative mx-auto hidden w-full max-w-md lg:block"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-forest-900/40 ring-1 ring-white/30"
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
                alt="Relaxing spa treatment at Blueceana Spa"
                className="h-[30rem] w-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-200 text-accent-700">
                <Icon name="sparkle" className="h-6 w-6" />
              </span>
              <div className="text-left">
                <p className="font-display text-lg font-bold text-forest-900">₱199</p>
                <p className="text-xs text-forest-800/70">Promo Time 1–5 PM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      {/* ===== INTRO STRIP ===== */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-3">
          {[
            { icon: 'leaf', label: 'Soothing Treatments' },
            { icon: 'home', label: 'Home Service Available' },
            { icon: 'tag', label: 'Affordable Promos' },
          ].map((item, i) => (
            <SectionReveal key={item.label} delay={i * 0.1}>
              <div className="flex items-center gap-4 rounded-2xl bg-forest-50/60 px-6 py-5 ring-1 ring-forest-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-forest-600 shadow-sm">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <p className="font-display font-semibold text-forest-900">
                  {item.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="bg-cream-100 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-600">
              What We Offer
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-forest-900">
              Treatments to Melt Your Stress Away
            </h2>
            <p className="mt-4 text-forest-800/70">
              Each session is designed to relax your body, calm your mind, and
              leave you feeling renewed.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/services">See All Services</Button>
          </div>
        </div>
      </section>

      {/* ===== PROMO ===== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <PromoBanner />
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative bg-forest-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-600">
              Why Blueceana
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-forest-900">
              A Calming Escape You’ll Love
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-white p-7 text-center shadow-lg shadow-forest-900/5 ring-1 ring-forest-100">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-400 to-forest-600 text-white shadow-md">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-forest-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-800/70">
                    {item.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-600 to-forest-800 py-20 text-center text-white">
        <Bubbles />
        <SectionReveal className="relative mx-auto max-w-2xl px-5">
          <h2 className="font-display text-4xl font-bold">
            Ready to Unwind?
          </h2>
          <p className="mt-4 text-forest-50/90">
            Reserve your relaxing session today — or let us bring the spa
            experience to your home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={`tel:${business.phones[0].tel}`} variant="secondary">
              <Icon name="phone" className="h-4 w-4" />
              Call {business.phones[0].label}
            </Button>
            <Button to="/contact" variant="light">
              Contact & Location
            </Button>
          </div>
        </SectionReveal>
      </section>
    </Page>
  )
}
