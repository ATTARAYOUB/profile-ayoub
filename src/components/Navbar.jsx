import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '../hooks/useScrollAnimation'
const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
]

const SECTION_IDS = ['hero', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection           = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-blur' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Home"
            >
              {/* Profile avatar */}
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                border: '1.5px solid rgba(0,212,255,0.5)',
                overflow: 'hidden', flexShrink: 0,
              }}>
                <img
                  src="/profile.png"
                  alt="Ayoub Attar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <span className="font-orbitron font-bold text-white/80 text-sm hidden sm:block group-hover:text-cyan-400 transition-colors duration-300">
                Attar Ayoub
              </span>
            </motion.a>

            {/* ── Desktop links ── */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const id       = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className={`relative px-4 py-2 rounded-lg font-dm text-sm font-medium transition-all duration-300 ${
                      isActive ? 'text-cyan-400' : 'text-white/60 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg bg-cyan-400/10 border border-cyan-400/30"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </motion.a>
                )
              })}
              <motion.a
                href="mailto:itsayoubattar@gmail.com"
                className="ml-3 btn-primary text-sm py-2 px-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </div>

            {/* ── Hamburger ── */}
            <motion.button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <motion.span className="block w-5 h-0.5 bg-cyan-400 rounded"
                animate={menuOpen ? { rotate: 45, y: 8 }  : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }} />
              <motion.span className="block w-5 h-0.5 bg-cyan-400 rounded"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }} />
              <motion.span className="block w-5 h-0.5 bg-cyan-400 rounded"
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 mobile-menu py-4 px-6"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 px-4 rounded-lg text-white/70 hover:text-cyan-400 hover:bg-cyan-400/5 font-dm font-medium transition-all duration-200 border border-transparent hover:border-cyan-400/20"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:itsayoubattar@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="mt-2 btn-primary text-center"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
