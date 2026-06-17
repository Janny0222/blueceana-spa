import Page, { PageHeader } from '../components/Page.jsx'
import Button from '../components/Button.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import PromoBanner from '../components/PromoBanner.jsx'
import WaveDivider from '../components/WaveDivider.jsx'
import { Icon } from '../components/Icons.jsx'
import { services } from '../data/services.js'
import { business } from '../data/business.js'

export default function Services() {
  return (
    <Page>
      <div className="relative">
        <PageHeader
          eyebrow="Our Services"
          title="Treatments Made for Total Relaxation"
          subtitle="From soothing massages to refreshing body scrubs — choose the experience that suits you best."
        />
        <WaveDivider color="#ffffff" />
      </div>

      {/* Alternating feature rows */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl space-y-20 px-5">
          {services.map((s, i) => {
            const reverse = i % 2 === 1
            return (
              <SectionReveal key={s.id}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    reverse ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-forest-900/10 ring-1 ring-forest-100 lg:[direction:ltr]">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      className="h-72 w-full object-cover sm:h-96"
                    />
                  </div>
                  <div className="lg:[direction:ltr]">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-100 text-forest-600">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold text-forest-900">
                      {s.name}
                    </h2>
                    <p className="mt-4 leading-relaxed text-forest-800/75">
                      {s.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full bg-forest-50 px-4 py-1.5 text-sm font-medium text-forest-700 ring-1 ring-forest-100"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7">
                      <Button href={`tel:${business.phones[0].tel}`}>
                        <Icon name="phone" className="h-4 w-4" />
                        Book This Service
                      </Button>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </section>

      {/* Home service callout */}
      <section className="bg-cream-100 py-16">
        <div className="mx-auto max-w-5xl px-5">
          <SectionReveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-10 text-center shadow-lg shadow-forest-900/5 ring-1 ring-forest-100 sm:flex-row sm:text-left">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-400 to-forest-600 text-white shadow-md">
                <Icon name="home" className="h-8 w-8" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-forest-900">
                  Home Service Available
                </h3>
                <p className="mt-2 text-forest-800/70">
                  Prefer to relax in the comfort of your own home? Book any of
                  our treatments by reservation and we’ll come to you.
                </p>
              </div>
              <Button href={`tel:${business.phones[1].tel}`} variant="secondary">
                Reserve Home Service
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Promo */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5">
          <PromoBanner />
        </div>
      </section>
    </Page>
  )
}
