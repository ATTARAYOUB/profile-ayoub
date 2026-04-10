import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaLinkedin } from 'react-icons/fa'
import { SiJira, SiUdemy, SiJavascript, SiCoursera } from 'react-icons/si'
import { MdLanguage } from 'react-icons/md'
import { HiAcademicCap } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'

// ── Cert data (newest first) ─────────────────────────────────────────────────
const CERTS = [
  {
    title:      'Python Development Professional Certification',
    issuer:     'GTF Education',
    issued:     'December 2025',
    credId:     '8244129795AA',
    link:       'https://edu.gtf.pt/pluginfile.php/1/tool_certificate/issues/1766583842/8244129795AA.pdf',
    color:      '#3b82f6',
    Icon:       FaPython,
    badge:      'Professional',
    isLatest:   true,
  },
  {
    title:      'What is Data Science?',
    issuer:     'IBM / Coursera',
    issued:     'January 2024',
    credId:     'ZNJTGGJL7PLD',
    link:       'https://www.coursera.org/account/accomplishments/verify/ZNJTGGJL7PLD',
    color:      '#006699',
    Icon:       SiCoursera,
    badge:      'Data Science',
    isLatest:   false,
  },
  {
    title:      'Jira Project Management (Scrum & Kanban)',
    issuer:     'Great Learning',
    issued:     '2023',
    credId:     null,
    link:       'https://www.linkedin.com/in/itsayoubattar/overlay/Certifications/2024683011/treasury?profileId=ACoAAEm70CIBLSvGAA82qqHX9K67R0nnWcjNyvE',
    color:      '#0052cc',
    Icon:       SiJira,
    badge:      'Project Management',
    isLatest:   false,
  },
  {
    title:      'Introduction to Career Skills in Software Development',
    issuer:     'LinkedIn Learning',
    issued:     '2023',
    credId:     null,
    link:       'https://www.linkedin.com/in/itsayoubattar/overlay/Certifications/1037603710/treasury?profileId=ACoAAEm70CIBLSvGAA82qqHX9K67R0nnWcjNyvE',
    color:      '#0077b5',
    Icon:       FaLinkedin,
    badge:      'Career Skills',
    isLatest:   false,
  },
  {
    title:      'Deep Learning Preparation Course in Arabic — Part 1: Python',
    issuer:     'Udemy',
    issued:     'January 2020',
    credId:     'UC-8e63cdba-c74d-4816-899f-a5f6dd7f415f',
    link:       'https://www.udemy.com/certificate/UC-8e63cdba-c74d-4816-899f-a5f6dd7f415f/',
    color:      '#a435f0',
    Icon:       FaPython,
    badge:      'AI / Deep Learning',
    isLatest:   false,
  },
  {
    title:      'JavaScript',
    issuer:     'Udemy',
    issued:     'January 2020',
    credId:     'UC-9c920bb8-ce22-445c-828b-fd2a1c1058ae',
    link:       'https://www.udemy.com/certificate/UC-9c920bb8-ce22-445c-828b-fd2a1c1058ae/',
    color:      '#a435f0',
    Icon:       SiJavascript,
    badge:      'Frontend',
    isLatest:   false,
  },
  {
    title:      'MTA — Introduction to Programming Using HTML & CSS',
    issuer:     'Udemy',
    issued:     'January 2020',
    credId:     'UC-c77979c9-6d2d-4bdf-bf42-e034800f71fd',
    link:       'https://www.udemy.com/certificate/UC-c77979c9-6d2d-4bdf-bf42-e034800f71fd/',
    color:      '#a435f0',
    Icon:       SiUdemy,
    badge:      'Web Fundamentals',
    isLatest:   false,
  },
  {
    title:      'Certificate of English — Level 8 (B2)',
    issuer:     'Wall Street English Morocco',
    issued:     'January 2020',
    credId:     null,
    link:       'https://www.wallstreetenglish.ma/',
    color:      '#f4a261',
    Icon:       MdLanguage,
    badge:      'Language — B2',
    isLatest:   false,
  },
]

// ── "Latest" pulsing badge ────────────────────────────────────────────────────
function LatestBadge() {
  return (
    <motion.span
      className="font-orbitron text-cyan-400 flex items-center gap-1"
      style={{
        fontSize:   10,
        padding:    '3px 10px',
        borderRadius: 999,
        background: 'rgba(0,212,255,0.15)',
        border:     '1px solid #00d4ff',
        whiteSpace: 'nowrap',
      }}
      animate={{
        boxShadow: [
          '0 0 0px rgba(0,212,255,0)',
          '0 0 8px rgba(0,212,255,0.4)',
          '0 0 0px rgba(0,212,255,0)',
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      ✦ Latest
    </motion.span>
  )
}

// ── Single cert card ──────────────────────────────────────────────────────────
function CertCard({ cert, index }) {
  const { title, issuer, issued, credId, link, color, Icon, badge, isLatest } = cert
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={hovered
        ? { y: -6, boxShadow: `0 8px 32px ${color}33` }
        : { y: 0,  boxShadow: '0 0 0px transparent' }
      }
      style={{
        background:     'rgba(10,10,20,0.85)',
        border:         `1px solid ${color}40`,
        borderLeft:     `3px solid ${hovered ? color : color + 'aa'}`,
        borderRadius:   12,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display:        'flex',
        flexDirection:  'column',
        overflow:       'hidden',
        transition:     'border-left 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="p-5 flex flex-col flex-1 gap-3">

        {/* Row 1: badge label + latest badge */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span
            className="font-dm uppercase"
            style={{
              fontSize:      10,
              letterSpacing: '0.12em',
              padding:       '3px 10px',
              borderRadius:  999,
              background:    `${color}1f`,
              border:        `1px solid ${color}59`,
              color,
              whiteSpace:    'nowrap',
            }}
          >
            {badge}
          </span>
          {isLatest && <LatestBadge />}
        </div>

        {/* Row 2: issuer icon + name */}
        <div className="flex items-center gap-2">
          <Icon size={28} color={color} style={{ flexShrink: 0 }} />
          <span className="font-dm text-white/60" style={{ fontSize: 13 }}>{issuer}</span>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: `${color}22` }} />

        {/* Row 3: title */}
        <p
          className="font-dm font-medium text-white/90 leading-snug flex-1"
          style={{
            fontSize:   15,
            display:    '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow:   'hidden',
          }}
        >
          {title}
        </p>

        {/* Row 4: date + credential */}
        <div className="space-y-1">
          <p className="font-dm text-white/50" style={{ fontSize: 12 }}>
            📅 Issued: {issued}
          </p>
          {credId && (
            <p className="font-dm text-white/40 truncate" style={{ fontSize: 11 }}>
              🔑 {credId}
            </p>
          )}
        </div>
      </div>

      {/* View Certificate button */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 font-dm font-medium transition-all duration-200"
        style={{
          fontSize:    13,
          color,
          borderTop:   `1px solid ${color}33`,
          background:  'transparent',
          textDecoration: 'none',
        }}
        whileHover={{ background: `${color}18` }}
        whileTap={{ scale: 0.97 }}
      >
        <FiExternalLink size={13} />
        View Certificate
        <motion.span
          animate={hovered ? { x: 4 } : { x: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.div>
  )
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function Certifications() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

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

  return (
    <section id="certifications" className="section-padding relative" ref={ref}>
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-cyan-400 font-orbitron text-sm tracking-widest">06.</span>
            <span className="text-white/40 font-dm text-sm">CREDENTIALS</span>
          </div>

          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <HiAcademicCap size={28} color="#00d4ff" />
            <h2 className="section-heading">
              <span className="gradient-text">Certifications</span>
            </h2>
            {/* Count badge */}
            <span
              className="font-dm font-semibold"
              style={{
                fontSize:    12,
                padding:     '4px 12px',
                borderRadius: 999,
                background:  'rgba(0,212,255,0.1)',
                border:      '1px solid rgba(0,212,255,0.35)',
                color:       '#00d4ff',
              }}
            >
              8 Certificates
            </span>
          </div>

          <div className="accent-line" />
          <p className="section-subheading mb-10">
            Verified credentials from global platforms
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        {/* ── Continuous learning note ── */}
        <motion.div
          className="mt-8 glass-card p-5 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-xl flex-shrink-0">
            📚
          </div>
          <div>
            <p className="font-orbitron font-bold text-white text-sm mb-0.5">Continuous Learning</p>
            <p className="font-dm text-white/50 text-sm">
              Currently expanding expertise in AI/ML, cloud architecture, and healthcare informatics. Always learning, always building.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
