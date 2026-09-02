import React from 'react'
import { FiLinkedin, FiGithub, FiMail, FiCode } from 'react-icons/fi'

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

const SOCIAL = [
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/itsayoubattar', label: 'LinkedIn' },
  { icon: <FiGithub size={18} />,   href: 'https://github.com/ATTARAYOUB',        label: 'GitHub'   },
  { icon: <FiMail size={18} />,     href: 'mailto:ATTAR.AYOUB@outlook.com',        label: 'Email'    },
]

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
                <FiCode size={15} />
              </div>
              <span className="font-poppins font-bold text-[0.95rem]">
                Ayoub<span className="text-[#2563EB]">.</span>
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              Full‑Stack Engineer specializing in hospital pharmacy automation and healthcare IT.
              Based in Casablanca, Morocco.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#64748B] hover:bg-[#2563EB] hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#475569] mb-4">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-none m-0 p-0">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={e => scrollTo(e, l.href)}
                    className="text-[#94A3B8] text-sm hover:text-[#60A5FA] transition-colors no-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#475569] mb-4">
              Contact
            </p>
            <ul className="space-y-2 list-none m-0 p-0">
              <li>
                <a
                  href="mailto:ATTAR.AYOUB@outlook.com"
                  className="text-[#94A3B8] text-sm hover:text-[#60A5FA] transition-colors no-underline"
                >
                  ATTAR.AYOUB@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+212620834063"
                  className="text-[#94A3B8] text-sm hover:text-[#60A5FA] transition-colors no-underline"
                >
                  +212 620 834 063
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/itsayoubattar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] text-sm hover:text-[#60A5FA] transition-colors no-underline"
                >
                  linkedin.com/in/itsayoubattar
                </a>
              </li>
              <li className="text-[#64748B] text-sm">
                Casablanca, Morocco
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E293B] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#475569] text-sm text-center">
            © 2025 Ayoub Attar – All rights reserved
          </p>
          <p className="text-[#334155] text-xs text-center">
            Full‑Stack Engineer · Healthcare IT · Java · Python · Django · Spring Boot
          </p>
        </div>
      </div>
    </footer>
  )
}
