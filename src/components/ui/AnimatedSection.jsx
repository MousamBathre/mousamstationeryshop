import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

export default function AnimatedSection({ children, className = '', id, delay = 0 }) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp(delay)}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeader({ label, title, description, light = false }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {label && <span className={`section-label ${light ? 'bg-white/15 text-yellow-300' : ''}`}>{label}</span>}
      <h2 className={`mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-brand-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? 'text-blue-100' : 'text-brand-slate'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
