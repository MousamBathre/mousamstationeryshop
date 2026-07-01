import { motion } from 'framer-motion'
import AnimatedSection, { SectionHeader } from './ui/AnimatedSection'
import { business } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/motion'

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Contact Us"
          title="Visit Mousam Stationery"
          description="We are located in Main Market, Pipariya. Call, email, or visit us for school, office, and art supplies."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <motion.div variants={fadeUp()} className="card-glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-brand-blue">Business Name</h3>
              <p className="mt-2 text-brand-slate">{business.name}</p>
            </motion.div>

            <motion.div variants={fadeUp()} className="card-glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-brand-blue">Address</h3>
              <address className="mt-2 not-italic leading-relaxed text-brand-slate">
                {business.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </motion.div>

            <motion.div variants={fadeUp()} className="card-glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-brand-blue">Phone & Email</h3>
              <p className="mt-2">
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="font-semibold text-brand-navy hover:text-brand-blue">
                  {business.phone}
                </a>
              </p>
              <p className="mt-2">
                <a href={`mailto:${business.email}`} className="font-semibold text-brand-blue hover:underline">
                  {business.email}
                </a>
              </p>
            </motion.div>

            <motion.div variants={fadeUp()} className="card-glass rounded-2xl border-l-4 border-brand-yellow p-6">
              <h3 className="font-display text-lg font-bold text-brand-blue">Business Hours</h3>
              <p className="mt-2 text-brand-slate">{business.hours.weekdays}</p>
              <p className="mt-1 text-brand-slate">{business.hours.sunday}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-blue-100"
          >
            <iframe
              title="Mousam Stationery location — Main Market, Pipariya"
              src="https://maps.google.com/maps?q=Main+Market+Pipariya+Madhya+Pradesh&output=embed"
              className="h-[320px] w-full border-0 md:h-full md:min-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
