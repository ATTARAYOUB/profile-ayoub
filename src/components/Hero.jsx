import React from 'react'
import {
  FiArrowRight, FiMail, FiMapPin, FiGithub,
  FiLinkedin, FiCode, FiCpu, FiLayers
} from 'react-icons/fi'
import {
  MdLocalHospital, MdOutlineIntegrationInstructions,
  MdOutlineHealthAndSafety, MdOutlineBiotech
} from 'react-icons/md'

/* ── Highlights ─────────────────────────────────────────── */
const HIGHLIGHTS = [
  {
    icon:  <MdLocalHospital size={15} />,
    text:  'Hospital Pharmacy Automation — BD Rowa & Pyxis Systems',
  },
  {
    icon:  <MdOutlineIntegrationInstructions size={15} />,
    text:  'Healthcare IT & System Integration (HL7, CCE, HIS)',
  },
  {
    icon:  <FiLayers size={15} />,
    text:  'Installation & Maintenance Missions — University Hospitals',
  },
  {
    icon:  <FiCode size={15} />,
    text:  'Java · Python · Django · Spring Boot · Flutter · React',
  },
  {
    icon:  <MdOutlineHealthAndSafety size={15} />,
    text:  'Critical Clinical Environments — CHU Marrakech, Fès, Rabat',
  },
]

/* ── Stats ──────────────────────────────────────────────── */
const STATS = [
  { value: '4+',    label: 'Years\nExperience' },
  { value: '15+',   label: 'Projects\nDelivered' },
  { value: '2+',    label: 'CHU\nEnvironments' },
  { value: '5+',    label: 'Systems\nDeployed' },
]

/* ── Specialty tags ─────────────────────────────────────── */
const SPECIALTIES = [
  { icon: <MdLocalHospital size={11} />,            label: 'Hospital Pharmacy Automation' },
  { icon: <MdOutlineIntegrationInstructions size={11} />, label: 'System Integration'    },
  { icon: <MdOutlineHealthAndSafety size={11} />,   label: 'Healthcare IT'              },
]

export default function Hero() {
  const scrollTo = id => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-16">
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative z-10 section-container section-padding w-full">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-10 xl:gap-16 items-center">

          {/* ══════════════ LEFT — Headline ══════════════ */}
          <div className="max-w-2xl">

            {/* Available badge */}
            <div className="available-badge inline-flex mb-6">
              <span className="available-dot" />
              <span>Open to International Opportunities</span>
            </div>

            {/* H1 */}
            <h1
              className="font-bold leading-[1.12] mb-5 text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.1rem)' }}
            >
              Full‑Stack Engineer{' '}
              <span className="text-gradient-light">Specializing in</span>{' '}
              Hospital Pharmacy{' '}
              <span className="text-[#06B6D4]">Automation</span>{' '}
              <span className="text-white">&amp;</span>{' '}
              <span className="text-[#06B6D4]">Healthcare IT</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-[#94A3B8] leading-relaxed mb-8 max-w-lg"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}>
              Full‑Stack Engineer with hands‑on experience in Healthcare IT, hospital pharmacy
              automation, system integration, and critical clinical environments. Experienced in
              maintaining and deploying BD Rowa and Pyxis systems while building secure and
              reliable software solutions.
            </p>

            {/* Highlights */}
            <ul className="space-y-2.5 mb-10 list-none p-0">
              {HIGHLIGHTS.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 leading-relaxed"
                  style={{ color: '#CBD5E1', fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)' }}
                >
                  <span className="text-[#06B6D4] mt-0.5 flex-shrink-0">{b.icon}</span>
                  {b.text}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                View My Work <FiArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo('freelance')}
                className="btn-secondary"
                style={{ color: '#60A5FA', borderColor: '#60A5FA' }}
              >
                Work With Me
              </button>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-5 flex-wrap">
              <a href="mailto:ATTAR.AYOUB@outlook.com"
                className="text-[#64748B] hover:text-[#06B6D4] transition-colors" title="Email">
                <FiMail size={19} />
              </a>
              <a href="https://linkedin.com/in/itsayoubattar"
                target="_blank" rel="noopener noreferrer"
                className="text-[#64748B] hover:text-[#06B6D4] transition-colors" title="LinkedIn">
                <FiLinkedin size={19} />
              </a>
              <a href="https://github.com/ATTARAYOUB"
                target="_blank" rel="noopener noreferrer"
                className="text-[#64748B] hover:text-[#06B6D4] transition-colors" title="GitHub">
                <FiGithub size={19} />
              </a>
              <span className="text-[#475569] text-xs flex items-center gap-1.5 select-none">
                <FiMapPin size={13} className="text-[#64748B]" />
                Casablanca, Morocco
              </span>
            </div>
          </div>

          {/* ══════════════ RIGHT — Profile card ══════════════ */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full" style={{ maxWidth: 400 }}>

              {/* Ambient glow */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-25 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 40%, #2563EB 0%, #06B6D4 55%, transparent 80%)',
                }}
                aria-hidden="true"
              />

              {/* ── Card ── */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, rgba(30,41,59,0.92) 0%, rgba(15,23,42,0.96) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(99,148,255,0.2)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                {/* Top accent strip */}
                <div
                  className="h-[3px] w-full"
                  style={{ background: 'linear-gradient(90deg, #2563EB, #06B6D4, #2563EB)' }}
                />

                <div className="p-7">

                  {/* ── Profile image ── */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                      {/* Outer glow ring */}
                      <div
                        className="absolute inset-0 rounded-full blur-md opacity-50"
                        style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', transform: 'scale(1.1)' }}
                        aria-hidden="true"
                      />
                      {/* Border ring */}
                      <div
                        className="relative rounded-full p-[3px]"
                        style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}
                      >
                        <div className="rounded-full overflow-hidden bg-[#0F172A]"
                          style={{ width: 110, height: 110 }}>
                          <img
                            src="/profile.png"
                            alt="Ayoub Attar"
                            className="w-full h-full object-cover"
                            style={{ display: 'block' }}
                            onError={e => {
                              e.target.style.display = 'none'
                              e.target.parentElement.style.display = 'flex'
                              e.target.parentElement.style.alignItems = 'center'
                              e.target.parentElement.style.justifyContent = 'center'
                              e.target.parentElement.innerHTML =
                                '<span style="color:#60A5FA;font-size:2.2rem;font-weight:700;font-family:Poppins,sans-serif">AA</span>'
                            }}
                          />
                        </div>
                      </div>
                      {/* Online dot */}
                      <span
                        className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2"
                        style={{ background: '#10B981', borderColor: '#0F172A' }}
                      />
                    </div>

                    {/* Name & title */}
                    <h2
                      className="text-white font-bold text-center leading-tight mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.15rem' }}
                    >
                      Ayoub Attar
                    </h2>
                    <p className="text-[#60A5FA] text-xs font-semibold text-center tracking-wide mb-1">
                      Full‑Stack Engineer
                    </p>
                    <p className="text-[#94A3B8] text-xs text-center">
                      Healthcare IT &amp; Hospital Automation
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <FiMapPin size={11} className="text-[#64748B]" />
                      <span className="text-[#64748B] text-xs">Casablanca, Morocco</span>
                    </div>
                  </div>

                  {/* ── Divider ── */}
                  <div className="h-px w-full mb-5" style={{ background: 'rgba(99,148,255,0.12)' }} />

                  {/* ── Stats grid ── */}
                  <div className="grid grid-cols-2 gap-2.5 mb-5">
                    {STATS.map(s => (
                      <div
                        key={s.label}
                        className="rounded-xl p-3 text-center"
                        style={{
                          background: 'rgba(15,23,42,0.7)',
                          border: '1px solid rgba(99,148,255,0.12)',
                        }}
                      >
                        <div
                          className="font-bold leading-none mb-1.5"
                          style={{ color: '#60A5FA', fontSize: '1.4rem', fontFamily: 'Poppins,sans-serif' }}
                        >
                          {s.value}
                        </div>
                        <div
                          className="text-[#64748B] leading-snug"
                          style={{ fontSize: '0.68rem', whiteSpace: 'pre-line' }}
                        >
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ── Divider ── */}
                  <div className="h-px w-full mb-5" style={{ background: 'rgba(99,148,255,0.12)' }} />

                  {/* ── Specialty pills ── */}
                  <div className="mb-5">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#475569] mb-2.5">
                      Specializations
                    </p>
                    <div className="space-y-2">
                      {SPECIALTIES.map(sp => (
                        <div
                          key={sp.label}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg"
                          style={{
                            background: 'rgba(37,99,235,0.1)',
                            border: '1px solid rgba(37,99,235,0.2)',
                          }}
                        >
                          <span className="text-[#06B6D4] flex-shrink-0">{sp.icon}</span>
                          <span className="text-[#94A3B8] text-xs font-medium">{sp.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Tech stack badges ── */}
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#475569] mb-2.5">
                      Core Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Java', 'Spring Boot', 'Python', 'Django', 'Flutter', 'React'].map(t => (
                        <span
                          key={t}
                          className="text-[0.7rem] px-2.5 py-1 rounded-full font-medium"
                          style={{
                            background: 'rgba(37,99,235,0.15)',
                            border: '1px solid rgba(37,99,235,0.25)',
                            color: '#93C5FD',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom accent strip */}
                <div
                  className="h-[2px] w-full"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)' }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
