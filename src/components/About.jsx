import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection, { SectionHeader } from './ui/AnimatedSection'
import { about, mission, vision } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/motion'

export default function About() {
  const reduce = useReducedMotion()

  return (
    <AnimatedSection id="about" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="About Us" title={about.title} />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-xl"
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
              alt="Mousam Stationery store interior with office and school supplies"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {about.paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeUp(i * 0.08)} className="mb-4 text-base leading-relaxed text-brand-slate md:text-lg">
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp()} className="card-glass rounded-3xl border-l-4 border-brand-blue p-8">
            <h3 className="font-display text-xl font-bold text-brand-blue">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-brand-slate">{mission}</p>
          </motion.div>
          <motion.div variants={fadeUp()} className="card-glass rounded-3xl border-l-4 border-brand-yellow p-8">
            <h3 className="font-display text-xl font-bold text-brand-blue-dark">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-brand-slate">{vision}</p>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
