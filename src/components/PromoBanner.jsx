import { motion } from 'framer-motion'
import { business } from '../data/business.js'
import { Icon } from './Icons.jsx'
import Bubbles from './Bubbles.jsx'

// Eye-catching banner for the ₱199 Promo Time.
export default function PromoBanner() {
  const { promo } = business
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest-500 via-forest-600 to-forest-800 px-8 py-12 text-center text-white shadow-xl shadow-forest-900/20 sm:py-14"
    >
      <Bubbles />
      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-200 ring-1 ring-accent-300/40">
          <Icon name="sparkle" className="h-4 w-4" />
          Special Offer
        </span>
        <h3 className="mt-5 font-display text-5xl font-bold text-accent-300 sm:text-6xl">
          {promo.title}
        </h3>
        <p className="mt-3 text-lg font-medium text-forest-50">
          {promo.time}
        </p>
        <p className="mt-2 text-sm text-forest-100/80">{promo.note}</p>
      </div>
    </motion.div>
  )
}
