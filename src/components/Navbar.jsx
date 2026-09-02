import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiCode } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Healthcare',     href: '#healthcare' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Freelance',      href: '#freelance' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'FAQ',            href: '#faq' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${sections[i]}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const isScrolled = scrolled || menuOpen

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:  isScrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid #E2E8F0' : '1px solid transparent',
        boxShadow:   isScrolled ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[64px]">

          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={e => handleNav(e, '#home')}
            className="flex items-center gap-2.5 flex-shrink-0 no-underline"
            aria-label="Home"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2563EB] text-white flex-shrink-0">
              <FiCode size={14} strokeWidth={2.5} />
            </div>
            <span
              className="font-semibold text-[0.95rem] leading-none tracking-tight"
              style={{ color: isScrolled ? '#0F172A' : '#ffffff', fontFamily: 'Poppins, sans-serif' }}
            >
              Ayoub<span className="text-[#2563EB]">.</span>
            </span>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = active === href
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={e => handleNav(e, href)}
                      className="relative px-3 py-1.5 rounded-md text-[0.82rem] font-medium transition-colors duration-200 no-underline block"
                      style={{
                        color: isActive
                          ? '#2563EB'
                          : isScrolled
                            ? '#475569'
                            : 'rgba(255,255,255,0.80)',
                        background: isActive ? 'rgba(37,99,235,0.08)' : 'transparent',
                      }}
                      onMouseEnter={e => {
                        if (!isActive) e.currentTarget.style.color = isScrolled ? '#2563EB' : '#ffffff'
                        if (!isActive) e.currentTarget.style.background = isScrolled ? 'rgba(37,99,235,0.06)' : 'rgba(255,255,255,0.1)'
                      }}
                      onMouseLeave={e => {
                        if (!isActive) e.currentTarget.style.color = isScrolled ? '#475569' : 'rgba(255,255,255,0.80)'
                        if (!isActive) e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {label}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#2563EB]"
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* ── Right: CTA + hamburger ── */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#contact"
              onClick={e => handleNav(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 no-underline"
              style={{
                background: '#2563EB',
                boxShadow: '0 2px 8px rgba(37,99,235,0.30)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1D4ED8'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Hire Me
            </a>

            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
              style={{
                color:      isScrolled ? '#475569' : 'rgba(255,255,255,0.85)',
                background: isScrolled ? 'transparent' : 'rgba(255,255,255,0.1)',
              }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '600px' : '0px',
          background: 'rgba(255,255,255,0.98)',
          borderTop: menuOpen ? '1px solid #E2E8F0' : 'none',
          backdropFilter: 'blur(16px)',
        }}
      >
        <ul className="list-none m-0 p-0 py-2">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={e => handleNav(e, href)}
                  className="flex items-center justify-between px-6 py-3 text-sm font-medium no-underline transition-colors"
                  style={{
                    color:      isActive ? '#2563EB' : '#334155',
                    background: isActive ? '#EFF6FF' : 'transparent',
                    borderLeft: isActive ? '3px solid #2563EB' : '3px solid transparent',
                  }}
                >
                  {label}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  )}
                </a>
              </li>
            )
          })}
          <li className="px-6 pt-3 pb-4">
            <a
              href="#contact"
              onClick={e => handleNav(e, '#contact')}
              className="flex items-center justify-center w-full py-2.5 rounded-lg text-sm font-semibold text-white no-underline"
              style={{ background: '#2563EB', boxShadow: '0 2px 8px rgba(37,99,235,0.25)' }}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
