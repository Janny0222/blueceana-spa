import Page, { PageHeader } from '../components/Page.jsx'
import Button from '../components/Button.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import WaveDivider from '../components/WaveDivider.jsx'
import { Icon } from '../components/Icons.jsx'
import { whyChooseUs } from '../data/services.js'
import { business } from '../data/business.js'

export default function About() {
  return (
    <Page>
      <div className="relative">
        <PageHeader
          eyebrow="About Us"
          title="Your Calming Escape in Cabuyao"
          subtitle="At Blueceana Spa, we believe relaxation should feel like the ocean — calm, refreshing, and renewing."
        />
        <WaveDivider color="#ffffff" />
      </div>

      {/* Story */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <SectionReveal>
            <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-forest-900/10 ring-1 ring-forest-100">
              <img
                src="https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=900&q=80"
                alt="Serene spa interior"
                className="h-[26rem] w-full object-cover"
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-600">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-forest-900">
              Where Relaxation Meets Care
            </h2>
            <p className="mt-5 leading-relaxed text-forest-800/75">
              Blueceana Spa was created to give the community of Cabuyao a
              peaceful place to unwind. Inspired by the calm of the ocean, our
              space is designed to soothe your senses from the moment you walk
              in.
            </p>
            <p className="mt-4 leading-relaxed text-forest-800/75">
              Our caring therapists deliver every treatment with skill and
              warmth — whether you visit us in-store or book our convenient
              home service. We’re here to help you slow down, breathe, and feel
              your best.
            </p>
            <div className="mt-7">
              <Button to="/services">Explore Our Treatments</Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-forest-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-forest-900">
              What Makes Us Different
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-600 to-forest-800 py-20 text-center text-white">
        <SectionReveal className="mx-auto max-w-2xl px-5">
          <h2 className="font-display text-3xl font-bold">
            Come Experience Blueceana
          </h2>
          <p className="mt-4 text-forest-50/90">
            We’d love to welcome you. Reserve your relaxing session today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={`tel:${business.phones[0].tel}`} variant="secondary">
              <Icon name="phone" className="h-4 w-4" />
              Call to Book
            </Button>
            <Button to="/contact" variant="light">
              Find Us
            </Button>
          </div>
        </SectionReveal>
      </section>
    </Page>
  )
}
