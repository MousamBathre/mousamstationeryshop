import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection, { SectionHeader } from './ui/AnimatedSection'
import { categories } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/motion'

export default function Categories() {
  const reduce = useReducedMotion()
  const [loaded, setLoaded] = useState({})

  return (
    <AnimatedSection id="categories" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Explore Products"
          title="Product Categories"
          description="Browse our wide collection of school stationery, office supplies, art materials, gifts, and everyday essentials."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {categories.map((cat, i) => (
            <motion.article
              key={cat.name}
              variants={fadeUp(i * 0.02)}
              whileHover={reduce ? {} : { y: -8, scale: 1.02 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-blue-900/5 ring-1 ring-slate-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {!loaded[cat.name] && <div className="absolute inset-0 animate-pulse bg-slate-200" />}
                <motion.img
                  src={cat.image}
                  alt={`${cat.name} available at Mousam Stationery Pipariya`}
                  className={`img-cover transition-transform duration-500 group-hover:scale-110 ${loaded[cat.name] ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                  onLoad={() => setLoaded((s) => ({ ...s, [cat.name]: true }))}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 via-brand-blue/20 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-4">
                  <h3 className="font-display text-base font-bold text-white md:text-lg">{cat.name}</h3>
                </div>
                <motion.div
                  className="absolute inset-0 bg-brand-yellow/0 transition-colors group-hover:bg-brand-yellow/10"
                  layout
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
