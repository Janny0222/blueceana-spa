import { motion } from 'framer-motion'
import { Icon } from './Icons.jsx'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-ocean-900/5 ring-1 ring-ocean-100"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/40 to-transparent" />
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-ocean-600 shadow-md backdrop-blur">
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ocean-900">
          {service.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ocean-800/70">
          {service.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.highlights.map((h) => (
            <li
              key={h}
              className="rounded-full bg-ocean-50 px-3 py-1 text-xs font-medium text-ocean-700"
            >
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
