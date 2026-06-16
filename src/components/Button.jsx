import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const styles = {
  primary:
    'bg-ocean-600 text-white shadow-lg shadow-ocean-600/30 hover:bg-ocean-700',
  secondary:
    'bg-white text-ocean-700 ring-1 ring-ocean-200 hover:bg-ocean-50',
  light:
    'bg-white/15 text-white ring-1 ring-white/40 backdrop-blur hover:bg-white/25',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold font-display transition-colors duration-200'

// Polymorphic button: renders <Link>, <a>, or <button> based on props.
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  ...rest
}) {
  const cls = `${base} ${styles[variant]} ${className}`
  const motionProps = { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 } }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={cls} {...rest}>
          {children}
        </Link>
      </motion.div>
    )
  }
  if (href) {
    return (
      <motion.a href={href} className={cls} {...motionProps} {...rest}>
        {children}
      </motion.a>
    )
  }
  return (
    <motion.button className={cls} {...motionProps} {...rest}>
      {children}
    </motion.button>
  )
}
