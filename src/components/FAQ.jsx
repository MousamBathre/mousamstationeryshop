import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import AnimatedSection, { SectionHeader } from './ui/AnimatedSection'
import { faqs } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const reduce = useReducedMotion()

  return (
    <AnimatedSection id="faq" className="section-pad bg-brand-sky">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers about school stationery, office supplies, art materials, and payments at Mousam Stationery."
        />

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={item.q}
                className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-blue-50"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-sm font-bold text-brand-navy md:text-base">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: reduce ? 0 : 0.3 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"
                  >
                    ▾
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="border-t border-slate-100 px-5 pt-3 pb-4 text-sm leading-relaxed text-brand-slate md:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
