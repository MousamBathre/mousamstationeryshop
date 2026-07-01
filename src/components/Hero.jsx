import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { business, hero } from '../data/content'

const words = hero.heading.split(' ')

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 20 })
  const py = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 })

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })

  return (
    <section id="home" ref={ref} onMouseMove={onMove} className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-yellow-300/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_45%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <div>
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="h-2 w-2 rounded-full bg-brand-yellow" />
            {business.tagline}
          </motion.span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-brand-navy md:text-5xl lg:text-6xl">
            {words.map((word, wi) => (
              <span key={wi} className="mr-[0.3em] inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 + wi * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-brand-slate md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.9 }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
          >
            <MagneticButton onClick={() => scrollTo('#categories')}>{hero.primaryCta}</MagneticButton>
            <motion.button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="btn-secondary"
              whileHover={reduce ? {} : { scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {hero.secondaryCta}
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-blue/5 px-4 py-2 text-sm font-medium text-brand-blue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <span className="font-semibold">{business.type}</span>
            <span className="text-brand-slate">·</span>
            <span className="text-brand-slate">Pipariya, MP</span>
          </motion.div>
        </div>

        <motion.div style={{ x: px, y: py }} className="relative mx-auto w-full max-w-lg">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/70 shadow-2xl shadow-blue-900/15"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1583484963886-cce2b5df3642?w=900&q=85"
              alt="School and office stationery display at Mousam Stationery"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/50 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-2 rounded-2xl bg-white px-4 py-3 shadow-xl md:-right-6"
            animate={reduce ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-xs font-bold uppercase tracking-wide text-brand-blue">Trusted Local Store</p>
            <p className="font-display font-bold text-brand-navy">Since Pipariya</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-2 rounded-2xl bg-brand-yellow px-4 py-3 shadow-xl md:-left-6"
            animate={reduce ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <p className="text-xs font-bold uppercase text-brand-navy/70">Quality Stationery</p>
            <p className="font-display text-lg font-extrabold text-brand-navy">Affordable Prices</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to about"
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={reduce ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-brand-blue/30 p-1">
          <motion.div className="h-2 w-1 rounded-full bg-brand-blue" />
        </div>
      </motion.button>
    </section>
  )
}

function MagneticButton({ children, onClick }) {
  const reduce = useReducedMotion()
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="btn-primary group"
      whileHover={reduce ? {} : { scale: 1.04, y: -2, boxShadow: '0 16px 40px rgba(29,78,216,0.35)' }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      <motion.span className="inline-block" initial={false} whileHover={{ x: 4 }}>
        →
      </motion.span>
    </motion.button>
  )
}
