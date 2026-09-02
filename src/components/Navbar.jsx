import React, { useState, useEffect } from 'react'
import { FiBriefcase, FiMenu, FiX, FiCode } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Experience',    href: '#experience' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Healthcare',    href: '#healthcare' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Freelance',     href: '#freelance' },
  { label: 'Certifications',href: '#certifications' },
  { label: 'FAQ',           href: '#faq' },
  { label: 'Contact',       href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Highlight active section
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-solid' : 'navbar-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            onClick={e => handleNav(e, '#home')}
            className="flex items-center gap-2 group no-underline"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2563EB] text-white">
              <FiCode size={15} />
            </div>
            <span className="font-poppins font-700 text-[0.95rem] text-[#0F172A] leading-none">
              Ayoub<span className="text-[#2563EB]">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={e => handleNav(e, href)}
                  className={`nav-link text-[0.82rem] font-medium ${
                    active === href ? 'text-[#2563EB]' : 'text-[#475569]'
                  }`}
                  style={active === href ? { color: '#2563EB' } : {}}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={e => handleNav(e, '#contact')}
              className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden p-2 rounded-lg text-[#475569] hover:bg-[#F1F5F9] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] shadow-lg">
          <ul className="list-none m-0 p-0 py-3">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={e => handleNav(e, href)}
                  className={`block px-6 py-3 text-sm font-medium transition-colors no-underline ${
                    active === href
                      ? 'text-[#2563EB] bg-[#EFF6FF]'
                      : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#2563EB]'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-3 pb-2">
              <a
                href="#contact"
                onClick={e => handleNav(e, '#contact')}
                className="btn-primary w-full justify-center text-sm"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
