import { motion } from 'framer-motion'
import AnimatedSection, { SectionHeader } from './ui/AnimatedSection'
import { whyChooseUs } from '../data/content'
import { fadeUp, staggerContainer, springHover } from '../utils/motion'

const iconMap = {
  grid: '▦',
  tag: '◈',
  shield: '◉',
  heart: '♥',
  star: '★',
  spark: '✦',
  book: '📘',
  briefcase: '💼',
  palette: '🎨',
}

export default function WhyChooseUs() {
  return (
    <AnimatedSection id="why-us" className="section-pad bg-brand-sky">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Why Choose Us"
          title="Why Customers Trust Mousam Stationery"
          description="Quality products, trusted brands, and friendly service for students, professionals, and artists in Pipariya."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp(i * 0.03)}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group"
            >
              <motion.div variants={springHover} className="card-glass h-full rounded-2xl p-6 transition-shadow hover:shadow-xl">
                <motion.span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-xl text-white shadow-md"
                  whileHover={{ rotate: 8, scale: 1.08 }}
                >
                  {iconMap[item.icon] || '•'}
                </motion.span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
