import { useEffect } from 'react'
import Header from './components/Header'
import ScrollVideoHero from './components/ScrollVideoHero'
import MenuSection from './components/MenuSection'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import ExperienceSection from './components/ExperienceSection'
import GallerySection from './components/GallerySection'
import TestimonialsSection from './components/TestimonialsSection'
import ReservationSection from './components/ReservationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible') })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <ScrollVideoHero />
        <MenuSection />
        <AboutSection />
        <FeaturesSection />
        <ExperienceSection />
        <GallerySection />
        <TestimonialsSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
