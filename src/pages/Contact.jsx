import Page, { PageHeader } from '../components/Page.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import WaveDivider from '../components/WaveDivider.jsx'
import { Icon } from '../components/Icons.jsx'
import { business } from '../data/business.js'

export default function Contact() {
  const { address, phones, hours, promo, social, maps } = business

  const infoCards = [
    {
      icon: 'pin',
      title: 'Location',
      lines: [address.line1, address.line2, address.region],
    },
    {
      icon: 'clock',
      title: 'Opening Hours',
      lines: hours.map((h) => `${h.day}: ${h.time}`),
    },
    {
      icon: 'tag',
      title: promo.title,
      lines: [promo.time, promo.note],
    },
  ]

  return (
    <Page>
      <div className="relative">
        <PageHeader
          eyebrow="Get in Touch"
          title="Visit or Reserve With Us"
          subtitle="We’re here to help you relax. Reach out to book an appointment or ask about our home service."
        />
        <WaveDivider color="#ffffff" />
      </div>

      {/* Contact + info */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: phones + facebook */}
          <SectionReveal>
            <div className="rounded-3xl bg-gradient-to-br from-ocean-600 to-ocean-800 p-8 text-white shadow-xl shadow-ocean-900/20">
              <h2 className="font-display text-2xl font-bold">
                Reservations & Home Services
              </h2>
              <p className="mt-2 text-sm text-ocean-50/80">
                Call or message us to book your relaxing session.
              </p>

              <div className="mt-6 space-y-3">
                {phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4 ring-1 ring-white/20 transition-colors hover:bg-white/20"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-ocean-100/70">
                        Call / Text
                      </span>
                      <span className="font-display text-lg font-semibold">
                        {p.label}
                      </span>
                    </span>
                  </a>
                ))}

                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4 ring-1 ring-white/20 transition-colors hover:bg-white/20"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                    <Icon name="facebook" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-ocean-100/70">
                      Message us on
                    </span>
                    <span className="font-display text-lg font-semibold">
                      Facebook
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Right: info cards */}
          <div className="grid gap-5 sm:grid-cols-1">
            {infoCards.map((card, i) => (
              <SectionReveal key={card.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-3xl bg-ocean-50/70 p-6 ring-1 ring-ocean-100">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-ocean-600 shadow-sm">
                    <Icon name={card.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ocean-900">
                      {card.title}
                    </h3>
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-ocean-800/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-sand-100 pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionReveal>
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-ocean-900/10 ring-1 ring-ocean-100">
              <iframe
                title="Blueceana Spa location on Google Maps"
                src={maps.embedSrc}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </Page>
  )
}
