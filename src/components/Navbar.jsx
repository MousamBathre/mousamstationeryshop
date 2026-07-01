import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { business, navLinks } from '../data/content'

export default function Navbar() {
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}
        initial={false}
        animate={{ paddingTop: scrolled ? 12 : 20, paddingBottom: scrolled ? 12 : 20 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
          <button type="button" onClick={() => scrollTo('#home')} className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue font-display text-lg font-extrabold text-white shadow-md">
              M
            </span>
            <div className="text-left">
              <p className="font-display text-base font-extrabold text-brand-navy md:text-lg">{business.name}</p>
              <p className="hidden text-[11px] font-medium text-brand-slate sm:block">Pipariya</p>
            </div>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  active === link.href ? 'text-brand-blue' : 'text-brand-slate hover:text-brand-blue'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute right-3 bottom-1 left-3 h-0.5 rounded-full bg-brand-yellow"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button type="button" onClick={() => scrollTo('#categories')} className="btn-primary text-sm">
              Explore Products
            </button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <motion.span animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }} className="absolute h-0.5 w-5 bg-brand-navy" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="absolute h-0.5 w-5 bg-brand-navy" />
            <motion.span animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }} className="absolute h-0.5 w-5 bg-brand-navy" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-navy/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="absolute top-0 right-0 flex h-full w-[min(100%,320px)] flex-col bg-white px-6 pt-24 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  type="button"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="border-b border-slate-100 py-4 text-left text-base font-semibold text-brand-navy"
                >
                  {link.label}
                </motion.button>
              ))}
              <button type="button" onClick={() => scrollTo('#contact')} className="btn-primary mt-6 w-full">
                Contact Us
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
