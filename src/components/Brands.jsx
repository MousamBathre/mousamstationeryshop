import { motion } from 'framer-motion'
import AnimatedSection, { SectionHeader } from './ui/AnimatedSection'
import { brands } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/motion'

export default function Brands() {
  return (
    <AnimatedSection id="brands" className="section-pad bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-light">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          label="Popular Brands"
          title="Trusted Stationery Brands We Stock"
          description="From Classmate and DOMS to Reynolds, Cello, Faber-Castell, and more — genuine products at fair prices."
        />

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {brands.map((brand, i) => (
            <motion.span
              key={brand}
              variants={fadeUp(i * 0.02)}
              whileHover={{ scale: 1.06, y: -3 }}
              className="rounded-xl bg-white/95 px-5 py-3 font-display text-sm font-bold text-brand-navy shadow-lg backdrop-blur-sm md:text-base"
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 overflow-hidden rounded-2xl border border-white/20 bg-white/10 py-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex w-max gap-10"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <span key={`${brand}-${i}`} className="whitespace-nowrap text-sm font-semibold text-white/90">
                {brand} ·
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
