import { motion } from 'framer-motion'
import AnimatedSection, { SectionHeader } from './ui/AnimatedSection'
import { services } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/motion'

const icons = {
  book: '📚',
  briefcase: '💼',
  palette: '🎨',
  copy: '📄',
  print: '🖨️',
  layers: '📑',
  bind: '📒',
  project: '📋',
  gift: '🎁',
  cart: '🛒',
}

export default function Services() {
  return (
    <AnimatedSection id="services" className="section-pad bg-brand-sky">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Our Services"
          title="More Than a Stationery Shop"
          description="Photocopy, printing, lamination, spiral binding, gift wrapping, and bulk school orders — all available at Mousam Stationery."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              variants={fadeUp(i * 0.04)}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(29,78,216,0.12)' }}
              className="card-glass rounded-2xl p-5 text-center"
            >
              <motion.span
                className="text-3xl"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {icons[service.icon]}
              </motion.span>
              <h3 className="mt-3 font-display text-sm font-bold text-brand-navy md:text-base">{service.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
