import { motion } from 'framer-motion'
import { business, navLinks } from '../data/content'

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-blue-100 bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <motion.div
          className="grid gap-10 md:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow font-display text-lg font-extrabold text-brand-navy">
                M
              </span>
              <span className="font-display text-xl font-extrabold">{business.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-100">{business.tagline}</p>
            <p className="mt-3 text-sm text-blue-200/80">{business.location}</p>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-yellow">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-blue-100">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="transition-colors hover:text-brand-yellow hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-yellow">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-blue-100">
              <li>{business.phone}</li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-brand-yellow hover:underline">
                  {business.email}
                </a>
              </li>
              <li>{business.hours.weekdays}</li>
              <li>{business.hours.sunday}</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-blue-200/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© 2026 {business.name}. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
