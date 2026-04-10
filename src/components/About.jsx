import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaBriefcase, FaCode, FaDownload, FaArrowRight,
  FaLayerGroup, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaLinkedin, FaGithub, FaGlobeAfrica,
} from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import { MdCake, MdWork, MdSchool } from 'react-icons/md'

// ── Animated counter ──────────────────────────────────────────────────────────
function CountUp({ target, suffix = '', inView }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let current = 0
    const duration = 1500
    const steps = 60
    const increment = target / steps
    const interval = duration / steps
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, interval)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span>{count}{suffix}</span>
}

// ── Stats data ────────────────────────────────────────────────────────────────
const STATS = [
  { value: 5,  suffix: '+', label: 'Years Experience',  Icon: FaBriefcase,    color: '#00d4ff' },
  { value: 8,  suffix: '',  label: 'Certifications',    Icon: HiAcademicCap,  color: '#10b981' },
  { value: 4,  suffix: '+', label: 'Projects Built',    Icon: FaCode,         color: '#3b82f6' },
  { value: 45, suffix: '+', label: 'Technologies',      Icon: FaLayerGroup,   color: '#f59e0b' },
]

// ── Identity tags ─────────────────────────────────────────────────────────────
const TAGS = [
  '⚕️ Healthcare Tech',
  '☕ Java Developer',
  '🐍 Python Engineer',
  '⚛️ React Developer',
  '📱 Flutter Mobile',
  '🏥 Biomedical IT',
  '🔐 Security Apps',
  '🗄️ Database Design',
  '🌐 Full-Stack',
  '📊 Data Science',
]

// ── Languages ─────────────────────────────────────────────────────────────────
const LANGUAGES = [
  { flag: '🇲🇦', name: 'Arabic',  level: 'Native', pct: 100, color: '#10b981' },
  { flag: '🇬🇧', name: 'English', level: 'B2',     pct: 80,  color: '#3b82f6' },
  { flag: '🇫🇷', name: 'French',  level: 'A2',     pct: 40,  color: '#f59e0b' },
]

// ── Info rows ─────────────────────────────────────────────────────────────────
const INFO_ROWS = [
  { Icon: FaMapMarkerAlt, label: 'Location',      value: 'Casablanca, Morocco' },
  { Icon: MdCake,         label: 'Date of Birth', value: '11 / 02 / 2000' },
  { Icon: FaGlobeAfrica,  label: 'Nationality',   value: 'Moroccan' },
  { Icon: MdSchool,       label: 'Education',     value: 'Licence ILSI (In Progress)' },
  { Icon: MdWork,         label: 'Current Role',  value: 'Maintenance Manager' },
  { Icon: FaEnvelope,     label: 'Email',         value: 'itsayoubattar@gmail.com' },
  { Icon: FaPhone,        label: 'Phone',         value: '+212 620 834 063' },
]

// ── Social links ──────────────────────────────────────────────────────────────
const SOCIALS = [
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/itsayoubattar', label: 'LinkedIn' },
  { Icon: FaGithub,   href: 'https://github.com/ATTARAYOUB',             label: 'GitHub'   },
  { Icon: FaEnvelope, href: 'mailto:itsayoubattar@gmail.com',            label: 'Email'    },
  { Icon: FaPhone,    href: 'tel:+212620834063',                         label: 'Phone'    },
]

// ── Paragraphs ────────────────────────────────────────────────────────────────
const PARAGRAPHS = [
  'I am Ayoub Attar, a Moroccan Full-Stack Developer and Healthcare Technology Specialist based in Casablanca. With a rare combination of biomedical expertise and software engineering skills, I bridge the gap between critical medical infrastructure and modern technology.',
  'Currently serving as Maintenance Manager at Morocco Healthcare Supplier (CHU Marrakech & Fès), I oversee the maintenance and administration of advanced medical automation systems including BD Rowa™ VMAX 160 and Pyxis Medstation 3500/4000/ES — ensuring zero downtime in critical hospital pharmacy environments.',
  'On the development side, I build full-stack applications using Java, Python, Django, Spring Boot, Flutter, and modern web technologies. From desktop banking systems and secure password managers to mobile apps and student management platforms — I craft software that solves real problems.',
  'Currently pursuing my Licence in ILSI (Ingénierie Logicielle et Systèmes d\'Information), I am actively seeking international opportunities where I can combine my healthcare domain knowledge with cutting-edge software development to build the next generation of medical technology solutions.',
]

// ── Main component ────────────────────────────────────────────────────────────
export default function About() {
  const sectionRef = useRef(null)
  const inView     = useInView(sectionRef, { once: true, amount: 0.1 })

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="section-padding relative" ref={sectionRef}>
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">

        {/* ── Section number ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-cyan-400 font-orbitron text-sm tracking-widest">01.</span>
          <span className="text-white/40 font-dm text-sm">WHO I AM</span>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* ════ LEFT COLUMN ════ */}
          <div className="flex-1 lg:w-[60%] space-y-6">

            {/* Section badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{
                background: 'rgba(0,212,255,0.08)',
                border:     '1px solid rgba(0,212,255,0.25)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="font-dm text-cyan-400 text-xs font-medium tracking-wider uppercase">About Me</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-orbitron font-black leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
            >
              The Developer{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #00d4ff, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Behind the Code
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-4">
              {PARAGRAPHS.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="font-dm text-white/70 leading-relaxed"
                  style={{ fontSize: 15 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Availability banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              style={{
                background:   'rgba(16,185,129,0.06)',
                border:       '1px solid rgba(16,185,129,0.3)',
                borderRadius: 10,
                padding:      '14px 20px',
              }}
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: '#10b981' }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div>
                  <p className="font-dm font-semibold text-white/90" style={{ fontSize: 14 }}>
                    🌍 Open to Remote &amp; On-site Opportunities
                  </p>
                  <p className="font-dm text-white/45" style={{ fontSize: 12 }}>
                    Casablanca, Morocco — Worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                onClick={() => window.open('/cv-print.html', '_blank')}
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload size={14} />
                Download CV
              </motion.button>
              <motion.button
                onClick={scrollToProjects}
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <FaArrowRight size={14} />
              </motion.button>
            </motion.div>
          </div>

          {/* ════ RIGHT COLUMN ════ */}
          <motion.div
            className="w-full lg:w-[40%]"
            initial={{ opacity: 0, x: 30, y: 0 }}
            animate={inView
              ? { opacity: 1, x: 0, y: [0, -8, 0] }
              : { opacity: 0, x: 30, y: 0 }
            }
            transition={inView
              ? {
                  opacity: { duration: 0.6, delay: 0.2 },
                  x:       { duration: 0.6, delay: 0.2 },
                  y:       { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                }
              : { duration: 0.6 }
            }
            style={{
              background:          'rgba(10,10,20,0.9)',
              border:              '1px solid rgba(0,212,255,0.2)',
              borderRadius:        20,
              backdropFilter:      'blur(20px)',
              WebkitBackdropFilter:'blur(20px)',
              boxShadow:           '0 0 40px rgba(0,212,255,0.06)',
              overflow:            'hidden',
            }}
          >
            {/* Card top — gradient bg with photo + name */}
            <div
              className="flex flex-col items-center py-8 px-6 gap-3"
              style={{ background: 'linear-gradient(135deg, #0f0f1a, #0a1628)' }}
            >
              {/* Profile photo */}
              <motion.div
                animate={{ boxShadow: [
                  '0 0 0px rgba(0,212,255,0)',
                  '0 0 20px rgba(0,212,255,0.5)',
                  '0 0 0px rgba(0,212,255,0)',
                ]}}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width:        100,
                  height:       100,
                  borderRadius: '50%',
                  border:       '2px solid rgba(0,212,255,0.5)',
                  overflow:     'hidden',
                  flexShrink:   0,
                }}
              >
                <img
                  src="/profile.png"
                  alt="Ayoub Attar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>
              <div className="text-center mt-1">
                <h3 className="font-orbitron font-bold text-white" style={{ fontSize: 20 }}>
                  Attar Ayoub
                </h3>
                <p className="font-dm mt-1" style={{ fontSize: 13, color: '#00d4ff' }}>
                  Full-Stack Developer &amp; Healthcare Tech Specialist
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(0,212,255,0.15)' }} />

            {/* Info rows */}
            <div className="px-6 py-5 space-y-3">
              {INFO_ROWS.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={15} color="#00d4ff" style={{ flexShrink: 0 }} />
                  <span className="font-dm text-white/40 w-24 flex-shrink-0" style={{ fontSize: 12 }}>
                    {label}
                  </span>
                  <span className="font-dm text-white/85 truncate" style={{ fontSize: 13 }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(0,212,255,0.1)' }} />

            {/* Languages */}
            <div className="px-6 py-5 space-y-3">
              {LANGUAGES.map((lang, i) => (
                <div key={lang.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: 16 }}>{lang.flag}</span>
                      <span className="font-dm text-white/80" style={{ fontSize: 13 }}>{lang.name}</span>
                    </div>
                    <span className="font-dm text-white/40" style={{ fontSize: 11 }}>{lang.level}</span>
                  </div>
                  <div
                    style={{
                      height:       4,
                      borderRadius: 999,
                      background:   'rgba(255,255,255,0.08)',
                      overflow:     'hidden',
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.pct}%` } : { width: 0 }}
                      transition={{ duration: 1.1, delay: 0.6 + i * 0.15, ease: 'easeOut' }}
                      style={{
                        height:       '100%',
                        borderRadius: 999,
                        background:   `linear-gradient(90deg, #00d4ff, ${lang.color})`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(0,212,255,0.1)' }} />

            {/* Social links */}
            <div className="px-6 py-5 flex justify-center gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex items-center justify-center"
                  style={{
                    width:        40,
                    height:       40,
                    borderRadius: '50%',
                    background:   'rgba(0,212,255,0.06)',
                    border:       '1px solid rgba(0,212,255,0.3)',
                    color:        '#ffffff',
                    flexShrink:   0,
                  }}
                  whileHover={{
                    scale:      1.1,
                    background: 'rgba(0,212,255,0.2)',
                    borderColor:'#00d4ff',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{
                y: -4,
                borderColor: `${stat.color}66`,
                boxShadow:   `0 8px 24px ${stat.color}22`,
              }}
              style={{
                background:   'rgba(255,255,255,0.03)',
                border:       '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding:      '24px 16px',
                textAlign:    'center',
                cursor:       'default',
                transition:   'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <stat.Icon size={22} color={stat.color} style={{ margin: '0 auto 10px' }} />
              <div
                className="font-orbitron font-bold"
                style={{ fontSize: 32, color: stat.color, lineHeight: 1 }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div
                className="font-dm uppercase tracking-wider mt-2 text-white/60"
                style={{ fontSize: 11 }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Identity tags ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5 mt-10"
        >
          {TAGS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
              whileHover={{
                scale:           1.03,
                background:      'rgba(0,212,255,0.15)',
                borderColor:     '#00d4ff',
              }}
              style={{
                background:   'rgba(0,212,255,0.06)',
                border:       '1px solid rgba(0,212,255,0.2)',
                borderRadius: 999,
                padding:      '8px 18px',
                fontSize:     13,
                fontFamily:   'DM Sans, sans-serif',
                fontWeight:   500,
                color:        'rgba(255,255,255,0.85)',
                cursor:       'default',
                transition:   'background 0.2s ease, border-color 0.2s ease',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
