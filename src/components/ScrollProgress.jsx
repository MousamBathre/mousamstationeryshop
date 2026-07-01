import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

export default function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  if (reduce) return null

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-yellow via-brand-blue to-brand-blue-dark"
      style={{ scaleX }}
    />
  )
}
