import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Experience entries (reverse-chronological) ───────────────────────────────
const EXPERIENCE = [
  {
    icon: '🏥',
    role: 'Maintenance Manager',
    company: 'Morocco Healthcare Supplier',
    location: 'Fès & Marrakech, Morocco',
    period: 'Jan 2023 — Present',
    current: true,
    color: '#00d4ff',
    bullets: [
      'Preventive & curative maintenance of medical automation systems',
      'Expert in BD Rowa™ VMAX 160, Pyxis Medstation 3500 / 4000 / ES / SupplyStation',
      'Managed quality control, HL7 integration, CCE systems, server administration',
      'Provided technical support & training for pharmacy and hospital staff',
      'Coordinated suppliers, spare parts, and technical documentation',
    ],
  },
  {
    icon: '💻',
    role: 'Medical Expert – IT Manager',
    company: 'Private Clinic',
    location: 'Casablanca, Morocco',
    period: 'May 2022 — Feb 2023',
    current: false,
    color: '#7b61ff',
    bullets: [
      'Maintained and repaired IT hardware: computers, printers, servers',
      'Provided helpdesk support, resolved incidents, assisted in software development',
      'Combined biomedical maintenance with IT infrastructure tasks',
    ],
  },
  {
    icon: '🎨',
    role: 'Graphic Designer & E-Commerce Entrepreneur',
    company: 'CoolWord — Redbubble (Remote)',
    location: 'Remote',
    period: 'Mar 2022 — Jun 2022',
    current: false,
    color: '#f59e0b',
    bullets: [
      'Founded and managed "CoolWord" store on Redbubble',
      'Created original designs, handled product quality, branding, and sales analysis',
    ],
  },
  {
    icon: '⚙️',
    role: 'Software Programmer Intern',
    company: 'Metec Diagnostic',
    location: 'Casablanca, Morocco',
    period: 'Jan 2021 — Mar 2021',
    current: false,
    color: '#10b981',
    bullets: [
      'Maintained IT peripherals, servers, and SQL Server support',
      'Provided employee technical assistance and troubleshooting',
    ],
  },
  {
    icon: '🖥️',
    role: 'Software Programmer Intern',
    company: 'Institut Marsoul',
    location: 'Remote',
    period: 'Jun 2020 — Dec 2020',
    current: false,
    color: '#06b6d4',
    bullets: [
      'Designed desktop application for schedules & invoicing',
      'Applied Java, JSP, Hibernate, Oracle, and CSS',
    ],
  },
  {
    icon: '🌐',
    role: 'Web Developer Intern',
    company: 'Remorques Équipements Afrique',
    location: 'Casablanca, Morocco',
    period: 'Jan 2020 — Mar 2020',
    current: false,
    color: '#a78bfa',
    bullets: [
      'Built and deployed company website using HTML, CSS, JavaScript, Bootstrap',
      'Integrated dynamic content and contact forms',
      'Collaborated with the team to align design with brand identity',
    ],
  },
]

// ── Education entries ────────────────────────────────────────────────────────
const EDUCATION = [
  {
    icon: '🎓',
    role: 'Licence — ILSI',
    company: 'Université Spécialisée',
    location: 'Morocco',
    period: '2022 — Present',
    current: true,
    color: '#7b61ff',
    badge: { label: 'In Progress', style: 'bg-emerald-400/10 border-emerald-400/40 text-emerald-400' },
    bullets: [
      'Ingénierie Logicielle et Systèmes d\'Information',
      'Software engineering, information systems architecture',
      'Web & mobile development, databases, project management',
    ],
  },
  {
    icon: '🎓',
    role: 'Diplôme de Technicien Spécialisé en Développement Informatique',
    company: 'ISTA NTIC',
    location: 'Casablanca, Morocco',
    period: '2018 — 2020',
    current: false,
    color: '#f59e0b',
    badge: { label: '16.84 / 20 — Very Good', style: 'bg-amber-400/10 border-amber-400/40 text-amber-400' },
    bullets: [
      'Core: Java, SQL, Web Development, UML, Oracle, Hibernate, Networking',
      'Graduated with distinction — Very Good (16.84/20)',
    ],
  },
  {
    icon: '📚',
    role: 'Baccalauréat — Sciences Expérimentales',
    company: 'Lycée Mohammed VI',
    location: 'Casablanca, Morocco',
    period: '2017 — 2018',
    current: false,
    color: '#10b981',
    badge: { label: '11.29 / 20 — Pass', style: 'bg-slate-400/10 border-slate-400/40 text-slate-400' },
    bullets: [
      'Life & Earth Sciences (Sciences de la Vie et de la Terre)',
    ],
  },
]

// ── Single timeline card ─────────────────────────────────────────────────────
function TimelineCard({ item, index, isLeft, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.13 }}
      className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="glass-card-hover p-5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xl leading-none">{item.icon}</span>
                {item.current && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 font-dm font-medium">
                    Current
                  </span>
                )}
                {item.badge && (
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-dm font-semibold ${item.badge.style}`}>
                    {item.badge.label}
                  </span>
                )}
              </div>
              <h3 className="font-orbitron font-bold text-white text-sm leading-snug">{item.role}</h3>
              <p className="font-dm text-cyan-400 text-sm mt-0.5">{item.company}</p>
              <p className="font-dm text-white/40 text-xs mt-0.5">{item.location}</p>
            </div>
            <span className="font-dm text-white/40 text-xs whitespace-nowrap flex-shrink-0 mt-1 text-right">
              {item.period}
            </span>
          </div>

          {/* Bullets */}
          <ul className="space-y-1.5">
            {item.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-2 text-sm font-dm text-white/60">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.color }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center dot */}
      <motion.div
        className="absolute left-4 md:left-1/2 top-5 w-4 h-4 rounded-full border-2 flex items-center justify-center -translate-x-1/2 z-10"
        style={{ borderColor: item.color, background: '#0a0a0f' }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.13 }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
      </motion.div>
    </motion.div>
  )
}

// ── Timeline wrapper ─────────────────────────────────────────────────────────
function Timeline({ items, inView }) {
  return (
    <div className="relative mt-10">
      <motion.div
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(180deg, transparent, #00d4ff 10%, #00d4ff 90%, transparent)' }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
      />
      <div className="space-y-8">
        {items.map((item, i) => (
          <TimelineCard key={i} item={item} index={i} isLeft={i % 2 === 0} inView={inView} />
        ))}
      </div>
    </div>
  )
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function Experience() {
  const ref = useRef(null)
  const [inView,     setInView]     = useState(false)
  const [activeTab,  setActiveTab]  = useState('experience')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el) } },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const tabs = [
    { id: 'experience', label: 'Experience', icon: '💼', count: EXPERIENCE.length },
    { id: 'education',  label: 'Education',  icon: '🎓', count: EDUCATION.length  },
  ]

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-cyan-400 font-orbitron text-sm tracking-widest">02.</span>
            <span className="text-white/40 font-dm text-sm">MY JOURNEY</span>
          </div>
          <h2 className="section-heading mb-2">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <div className="accent-line" />
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mt-8 mb-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-dm font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id ? 'text-cyan-400' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tabBg"
                  className="absolute inset-0 rounded-xl bg-cyan-400/10 border border-cyan-400/30"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{tab.icon}</span>
              <span className="relative z-10">{tab.label}</span>
              <span
                className="relative z-10 text-xs px-1.5 py-0.5 rounded-full font-orbitron"
                style={{
                  background: activeTab === tab.id ? 'rgba(0,212,255,0.15)' : 'rgba(255,255,255,0.05)',
                  color:      activeTab === tab.id ? '#00d4ff' : 'rgba(255,255,255,0.3)',
                }}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Animated content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <Timeline items={EXPERIENCE} inView={inView} />
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <Timeline items={EDUCATION} inView={inView} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
