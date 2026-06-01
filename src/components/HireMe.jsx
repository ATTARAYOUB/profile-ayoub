import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaDownload, FaArrowLeft, FaGithub, FaLinkedin,
  FaEnvelope, FaCheckCircle, FaGlobeAmericas,
} from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'

// ── Why I'm different ─────────────────────────────────────────────────────────
const DIFFERENTIATORS = [
  {
    icon: '🏥',
    title: 'Zero Downtime on Critical Systems',
    desc:  'Maintained BD Rowa™ VMAX 160 and Pyxis Medstation 3500/4000/ES in live hospital environments — where failure is not an option.',
    color: '#00d4ff',
  },
  {
    icon: '🔗',
    title: 'Biomedical + HL7 Integration',
    desc:  'I speak both clinical and technical languages. HL7 messaging, CCE systems, and hospital IT infrastructure are my daily work.',
    color: '#10b981',
  },
  {
    icon: '💻',
    title: 'Full-Stack + Hardware-Level',
    desc:  'Built banking systems, medical apps, and password managers — while also handling hardware-level maintenance on medical devices.',
    color: '#7b61ff',
  },
  {
    icon: '🌐',
    title: '5+ Languages, Medical Certifications',
    desc:  'Fluent in Java, Python, Flutter, React, Django — plus certified in BD Rowa and Pyxis medical automation systems.',
    color: '#f59e0b',
  },
]

// ── Core skills ───────────────────────────────────────────────────────────────
const SKILLS = [
  { label: 'Java / Spring Boot', pct: 88, color: '#f89820' },
  { label: 'Python / Django',    pct: 82, color: '#3776ab' },
  { label: 'Flutter / Dart',     pct: 78, color: '#0175c2' },
  { label: 'Healthcare IT',      pct: 92, color: '#10b981' },
  { label: 'React / JS',         pct: 80, color: '#61dafb' },
  { label: 'SQL / Databases',    pct: 85, color: '#00d4ff' },
]

// ── Target countries ──────────────────────────────────────────────────────────
// Country-specific HTML CVs created - ready to use!
const TARGETS = [
  {
    flag:    '🇨🇦',
    country: 'Canada',
    color:   '#d52b1e',
    note:    'Express Entry · Healthcare IT demand',
    href:    '/cv-canada.html',  // ✅ Created
  },
  {
    flag:    '🇦🇺',
    country: 'Australia',
    color:   '#00843d',
    note:    'Skilled Migration · Biomedical shortage',
    href:    '/cv-australia.html',  // ✅ Creating now
  },
  {
    flag:    '🇵🇹',
    country: 'Portugal / EU',
    color:   '#006600',
    note:    'Tech Visa · EU access',
    href:    '/cv-portugal.html',  // ✅ Creating now
  },
]

// ── Animated skill bar ────────────────────────────────────────────────────────
function SkillBar({ label, pct, color, inView, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-dm text-white/80 text-sm">{label}</span>
        <span className="font-orbitron text-xs font-bold" style={{ color }}>{pct}%</span>
      </div>
      <div
        style={{
          height:       6,
          borderRadius: 999,
          background:   'rgba(255,255,255,0.06)',
          overflow:     'hidden',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          style={{
            height:       '100%',
            borderRadius: 999,
            background:   `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow:    `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function HireMe() {
  const heroRef  = useRef(null)
  const skillRef = useRef(null)
  const whyRef   = useRef(null)
  const ctaRef   = useRef(null)

  const heroInView  = useInView(heroRef,  { once: true, amount: 0.2 })
  const skillInView = useInView(skillRef, { once: true, amount: 0.2 })
  const whyInView   = useInView(whyRef,   { once: true, amount: 0.1 })
  const ctaInView   = useInView(ctaRef,   { once: true, amount: 0.2 })

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: '#0a0a0f', color: '#f0f4f8' }}
    >
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Background glows */}
      <div
        aria-hidden="true"
        style={{
          position:     'fixed',
          top:          -200,
          left:         -200,
          width:        600,
          height:       600,
          background:   'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
          filter:       'blur(40px)',
          pointerEvents:'none',
          zIndex:       0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position:     'fixed',
          bottom:       -200,
          right:        -200,
          width:        500,
          height:       500,
          background:   'radial-gradient(circle, rgba(123,97,255,0.05) 0%, transparent 70%)',
          filter:       'blur(60px)',
          pointerEvents:'none',
          zIndex:       0,
        }}
      />

      {/* ── Navbar strip ── */}
      <div
        className="navbar-blur sticky top-0 z-50"
        style={{ padding: '0 24px' }}
      >
        <div
          style={{
            maxWidth:       1100,
            margin:         '0 auto',
            height:         64,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
          }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <FaArrowLeft size={14} color="#00d4ff" />
              <span className="font-dm text-white/60 text-sm hover:text-white transition-colors">
                Back to Portfolio
              </span>
            </motion.div>
          </Link>

          <div className="flex items-center gap-2">
            <motion.span
              style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-dm text-white/50 text-xs">Open to opportunities</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* ══════════════════════════════════════════════════════════
            HERO BLOCK
        ══════════════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          style={{ padding: '80px 0 60px', textAlign: 'center' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display:      'inline-flex',
              alignItems:   'center',
              gap:          8,
              padding:      '8px 20px',
              borderRadius: 999,
              background:   'rgba(0,212,255,0.08)',
              border:       '1px solid rgba(0,212,255,0.3)',
              marginBottom: 28,
            }}
          >
            <HiLightningBolt size={14} color="#00d4ff" />
            <span className="font-dm text-xs font-semibold tracking-widest uppercase" style={{ color: '#00d4ff' }}>
              Limited Edition: Biomedical + Full-Stack
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-orbitron font-black"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: 20 }}
          >
            Why Hire{' '}
            <span
              style={{
                background:           'linear-gradient(135deg, #00d4ff, #7b61ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor:  'transparent',
                backgroundClip:       'text',
              }}
            >
              Ayoub Attar?
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm"
            style={{
              fontSize:    'clamp(15px, 2vw, 18px)',
              color:       'rgba(255,255,255,0.6)',
              maxWidth:    600,
              margin:      '0 auto 16px',
              lineHeight:  1.7,
            }}
          >
            🇲🇦 Maintenance Manager @ Morocco Healthcare Supplier · Full-Stack Developer
            <br />
            BD Rowa VMAX · Pyxis Medstation · HL7 · Java · Python · Flutter · Spring Boot
          </motion.p>

          {/* Target countries pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display:      'inline-flex',
              alignItems:   'center',
              gap:          8,
              padding:      '8px 20px',
              borderRadius: 999,
              background:   'rgba(16,185,129,0.08)',
              border:       '1px solid rgba(16,185,129,0.3)',
              marginBottom: 40,
            }}
          >
            <FaGlobeAmericas size={13} color="#10b981" />
            <span className="font-dm text-sm" style={{ color: '#10b981' }}>
              Open to: Canada 🇨🇦 · Australia 🇦🇺 · Portugal 🇵🇹
            </span>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35, type: 'spring', stiffness: 200 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              animate={{ boxShadow: [
                '0 0 0px rgba(0,212,255,0)',
                '0 0 40px rgba(0,212,255,0.4)',
                '0 0 0px rgba(0,212,255,0)',
              ]}}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width:        120,
                height:       120,
                borderRadius: '50%',
                border:       '2px solid rgba(0,212,255,0.5)',
                overflow:     'hidden',
              }}
            >
              <img
                src="/profile.png"
                alt="Ayoub Attar"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            THE QUOTE
        ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          style={{
            background:   'rgba(0,212,255,0.04)',
            border:       '1px solid rgba(0,212,255,0.2)',
            borderLeft:   '3px solid #00d4ff',
            borderRadius: 12,
            padding:      '24px 32px',
            marginBottom: 60,
            textAlign:    'center',
          }}
        >
          <p
            className="font-dm"
            style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.7 }}
          >
            "Most developers don't understand healthcare workflows.
            Most biomeds don't code.{' '}
            <span style={{ color: '#00d4ff', fontStyle: 'normal', fontWeight: 600 }}>I do both.</span>"
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            WHY I'M DIFFERENT
        ══════════════════════════════════════════════════════════ */}
        <section ref={whyRef} style={{ marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 40 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-orbitron text-sm tracking-widest" style={{ color: '#00d4ff' }}>01.</span>
              <span className="font-dm text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>THE DIFFERENTIATOR</span>
            </div>
            <h2 className="section-heading">
              Why I'm Different from{' '}
              <span className="gradient-text">1000s of Developers</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: `${item.color}66`, boxShadow: `0 12px 40px ${item.color}18` }}
                style={{
                  background:     'rgba(15,15,26,0.8)',
                  border:         '1px solid rgba(255,255,255,0.07)',
                  borderRadius:   16,
                  padding:        '24px',
                  backdropFilter: 'blur(12px)',
                  transition:     'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                }}
              >
                {/* Top bar accent */}
                <div
                  style={{
                    width:        40,
                    height:       3,
                    borderRadius: 999,
                    background:   item.color,
                    marginBottom: 16,
                  }}
                />
                <div className="flex items-start gap-3">
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h3 className="font-orbitron font-bold text-white text-sm mb-2">{item.title}</h3>
                    <p className="font-dm text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <FaCheckCircle size={12} color={item.color} />
                  <span className="font-dm text-xs font-semibold" style={{ color: item.color }}>
                    Verified Experience
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SKILL BARS
        ══════════════════════════════════════════════════════════ */}
        <section ref={skillRef} style={{ marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 36 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-orbitron text-sm tracking-widest" style={{ color: '#00d4ff' }}>02.</span>
              <span className="font-dm text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>CORE SKILLS</span>
            </div>
            <h2 className="section-heading">
              Technical <span className="gradient-text">Proficiency</span>
            </h2>
          </motion.div>

          <div
            style={{
              background:     'rgba(15,15,26,0.8)',
              border:         '1px solid rgba(0,212,255,0.12)',
              borderRadius:   20,
              padding:        '36px',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {SKILLS.map((s, i) => (
                <SkillBar
                  key={s.label}
                  label={s.label}
                  pct={s.pct}
                  color={s.color}
                  inView={skillInView}
                  delay={0.1 + i * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            COUNTRY-TARGETED RESUME DOWNLOADS
        ══════════════════════════════════════════════════════════ */}
        <section ref={ctaRef} style={{ marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 36 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-orbitron text-sm tracking-widest" style={{ color: '#00d4ff' }}>03.</span>
              <span className="font-dm text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>READY TO HIRE</span>
            </div>
            <h2 className="section-heading">
              Download My <span className="gradient-text">Resume</span>
            </h2>
            <p className="font-dm mt-2" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>
              Tailored for each market — pick the version relevant to you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {TARGETS.map((t, i) => (
              <motion.a
                key={t.country}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, boxShadow: `0 20px 50px ${t.color}30` }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display:        'flex',
                  flexDirection:  'column',
                  alignItems:     'center',
                  gap:            12,
                  padding:        '32px 24px',
                  background:     'rgba(15,15,26,0.8)',
                  border:         `1px solid ${t.color}40`,
                  borderRadius:   20,
                  textDecoration: 'none',
                  backdropFilter: 'blur(12px)',
                  transition:     'box-shadow 0.3s ease, transform 0.3s ease',
                  cursor:         'pointer',
                }}
              >
                <span style={{ fontSize: 48 }}>{t.flag}</span>
                <div style={{ textAlign: 'center' }}>
                  <p className="font-orbitron font-bold text-white text-sm mb-1">{t.country}</p>
                  <p className="font-dm text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{t.note}</p>
                </div>
                <div
                  className="flex items-center gap-2 font-dm font-semibold text-sm"
                  style={{
                    padding:      '10px 20px',
                    borderRadius: 8,
                    background:   `${t.color}18`,
                    border:       `1px solid ${t.color}60`,
                    color:        t.color,
                    marginTop:    4,
                  }}
                >
                  <FaDownload size={13} />
                  Download CV
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            CONTACT CTA
        ══════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            background:   'rgba(0,212,255,0.04)',
            border:       '1px solid rgba(0,212,255,0.15)',
            borderRadius: 24,
            padding:      '48px 32px',
            textAlign:    'center',
            marginBottom: 80,
          }}
        >
          <h2 className="font-orbitron font-black text-white mb-3" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            Ready to Talk?
          </h2>
          <p className="font-dm mb-8" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, maxWidth: 480, margin: '0 auto 32px' }}>
            Whether you're a recruiter, a healthcare company, or a tech team — let's connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:itsayoubattar@gmail.com"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaEnvelope size={14} />
              Send Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/itsayoubattar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaLinkedin size={14} />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/ATTARAYOUB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub size={14} />
              GitHub
            </motion.a>
          </div>
        </motion.section>

      </div>
    </div>
  )
}
