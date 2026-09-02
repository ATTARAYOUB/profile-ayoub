import React from 'react'
import {
  FiCheckCircle, FiArrowRight, FiMail,
  FiMapPin, FiGithub, FiLinkedin
} from 'react-icons/fi'
import { MdLocalHospital, MdOutlineIntegrationInstructions } from 'react-icons/md'

const BULLETS = [
  {
    icon: <MdLocalHospital size={16} />,
    text: 'Maintainer of BD Rowa VMAX 160 and Pyxis Medstation in university hospitals (CHU Marrakech & Fès)',
  },
  {
    icon: <FiCheckCircle size={16} />,
    text: 'Full‑stack development in Java, Python, Django, Spring Boot, and Flutter',
  },
  {
    icon: <MdOutlineIntegrationInstructions size={16} />,
    text: 'Experience with HL7 integration, CCE systems, and hospital IT/biomed workflows',
  },
  {
    icon: <FiCheckCircle size={16} />,
    text: 'Recently completed Licence ILSI (Dec 2025); French B2, English B2',
  },
  {
    icon: <FiMapPin size={16} />,
    text: 'Open to remote and relocation roles in EU healthtech, medtech, and hospital IT',
  },
]

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-16">
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative z-10 section-container section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left – Text */}
          <div>
            {/* Available badge */}
            <div className="available-badge inline-flex mb-6">
              <span className="available-dot" />
              <span>Open to International Opportunities</span>
            </div>

            {/* H1 */}
            <h1 className="font-poppins font-bold leading-tight mb-5 text-white"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>
              Full‑Stack Engineer{' '}
              <span className="text-gradient-light">Specializing in</span>{' '}
              Hospital Pharmacy Automation{' '}
              <span className="text-[#06B6D4]">&amp; Healthcare IT</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8 max-w-xl">
              Moroccan developer with hands‑on experience maintaining BD Rowa and Pyxis systems
              and building secure, reliable software for clinical environments.
            </p>

            {/* Bullet highlights */}
            <ul className="space-y-3 mb-10 list-none p-0">
              {BULLETS.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[#CBD5E1] text-sm leading-relaxed">
                  <span className="text-[#06B6D4] mt-0.5 flex-shrink-0">{b.icon}</span>
                  {b.text}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
              >
                View My Work <FiArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('freelance')}
                className="btn-secondary"
                style={{ color: '#60A5FA', borderColor: '#60A5FA' }}
              >
                Work With Me
              </button>
            </div>

            {/* Quick social links */}
            <div className="flex items-center gap-5">
              <a
                href="mailto:ATTAR.AYOUB@outlook.com"
                className="text-[#64748B] hover:text-[#06B6D4] transition-colors"
                title="Email"
              >
                <FiMail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/itsayoubattar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748B] hover:text-[#06B6D4] transition-colors"
                title="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://github.com/ATTARAYOUB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748B] hover:text-[#06B6D4] transition-colors"
                title="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <span className="text-[#334155] text-sm flex items-center gap-1.5">
                <FiMapPin size={14} className="text-[#64748B]" />
                Casablanca, Morocco
              </span>
            </div>
          </div>

          {/* Right – Profile card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #2563EB 0%, #06B6D4 60%, transparent 100%)' }}
                aria-hidden="true"
              />

              <div className="relative bg-[#1E293B]/80 backdrop-blur-sm border border-[#334155] rounded-2xl p-6 w-72 shadow-2xl">
                {/* Photo or avatar */}
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <img
                      src="/profile.png"
                      alt="Ayoub Attar"
                      className="w-28 h-28 rounded-full object-cover border-3 border-[#2563EB]"
                      style={{ border: '3px solid #2563EB' }}
                      onError={e => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div
                      className="w-28 h-28 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] items-center justify-center text-white text-3xl font-bold"
                      style={{ display: 'none', border: '3px solid #2563EB' }}
                    >
                      AA
                    </div>
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#10B981] rounded-full border-2 border-[#1E293B]" />
                  </div>
                </div>

                <div className="text-center mb-5">
                  <h2 className="text-white font-semibold text-lg leading-tight">Ayoub Attar</h2>
                  <p className="text-[#94A3B8] text-sm mt-1">Full‑Stack Engineer &amp; Healthcare IT</p>
                  <p className="text-[#64748B] text-xs mt-1 flex items-center justify-center gap-1">
                    <FiMapPin size={11} /> Casablanca, Morocco
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Years Exp.', value: '4+' },
                    { label: 'Projects',   value: '15+' },
                    { label: 'Tech Stack', value: 'Java/Py' },
                    { label: 'Hospitals',  value: '2 CHUs' },
                  ].map(s => (
                    <div key={s.label} className="bg-[#0F172A] rounded-lg p-3 text-center">
                      <div className="text-[#60A5FA] font-bold text-lg leading-none">{s.value}</div>
                      <div className="text-[#64748B] text-xs mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-1.5 mt-4 justify-center">
                  {['Java', 'Spring Boot', 'Python', 'Django', 'Flutter'].map(t => (
                    <span
                      key={t}
                      className="text-[0.68rem] px-2 py-0.5 rounded-full bg-[#2563EB]/20 text-[#60A5FA] border border-[#2563EB]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
