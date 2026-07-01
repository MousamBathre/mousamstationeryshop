import { motion, useReducedMotion } from 'framer-motion'

export default function PageLoader({ onComplete }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-light"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: reduce ? 0.2 : 1.6, duration: 0.5, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow font-display text-xl font-extrabold text-brand-navy shadow-lg">
          M
        </span>
        <div>
          <p className="font-display text-2xl font-extrabold text-white">Mousam Stationery</p>
          <p className="text-sm text-blue-100">Pipariya, Madhya Pradesh</p>
        </div>
      </motion.div>
      <motion.div
        className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full rounded-full bg-brand-yellow"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reduce ? 0.2 : 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
  )
}
