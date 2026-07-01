import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import AnimatedSection, { SectionHeader } from './ui/AnimatedSection'
import { statistics } from '../data/content'

function Counter({ value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setCount(value)
      return
    }
    let start = 0
    const duration = 1800
    const step = value / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value, reduce])

  return (
    <motion.div ref={ref} className="text-center" whileHover={{ scale: 1.04 }}>
      <p className="font-display text-4xl font-extrabold text-brand-yellow md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-semibold text-blue-100 md:text-base">{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <AnimatedSection id="stats" className="section-pad bg-brand-navy">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          label="Our Impact"
          title="Numbers That Speak for Themselves"
          description="Serving Pipariya with quality stationery, trusted brands, and happy customers every day."
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => (
            <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
