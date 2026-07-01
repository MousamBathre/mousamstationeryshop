import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import AnimatedSection, { SectionHeader } from './ui/AnimatedSection'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [reduce])

  const current = testimonials[index]

  return (
    <AnimatedSection id="testimonials" className="section-pad bg-white">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Customer Reviews"
          title="What Our Customers Say"
          description="Real feedback from students, parents, and professionals in Pipariya."
        />

        <div className="relative overflow-hidden rounded-3xl bg-brand-sky p-8 shadow-lg ring-1 ring-blue-100 md:p-12">
          <div className="mb-4 flex gap-1 text-brand-yellow">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                ★
              </motion.span>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="text-lg leading-relaxed text-brand-navy md:text-xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-display font-bold text-brand-blue">— {current.author}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-brand-blue' : 'w-2.5 bg-blue-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
