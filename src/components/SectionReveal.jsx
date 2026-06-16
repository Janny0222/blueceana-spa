import { motion } from 'framer-motion'

// Wraps content in a scroll-triggered fade + slide-up reveal.
export default function SectionReveal({
  children,
  delay = 0,
  y = 28,
  className = '',
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
