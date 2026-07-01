import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Categories from './components/Categories'
import Brands from './components/Brands'
import Services from './components/Services'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import PageLoader from './components/PageLoader'

export default function App() {
  const [loading, setLoading] = useState(true)
  const reduce = useReducedMotion()

  return (
    <>
      {loading && <PageLoader onComplete={() => setLoading(false)} />}
      <CursorGlow />
      <ScrollProgress />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 16 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhyChooseUs />
          <Categories />
          <Brands />
          <Services />
          <Stats />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
