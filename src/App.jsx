import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import HealthcareTech from './components/HealthcareTech'
import Projects from './components/Projects'
import Freelance from './components/Freelance'
import Certifications from './components/Certifications'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative bg-[#F8FAFC] text-[#1E293B] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <HealthcareTech />
        <Projects />
        <Freelance />
        <Certifications />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
