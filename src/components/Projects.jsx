import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaJava, FaPython, FaCode } from 'react-icons/fa'
import { SiNodedotjs, SiDjango, SiFlutter } from 'react-icons/si'

// ── Project data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title:       'Gestion des Étudiants',
    subtitle:    'Student Management System',
    description: 'A complete desktop application for managing student records, grades, enrollments, and academic data. Built with a clean Tkinter GUI and Python backend with full CRUD operations and data persistence.',
    github:      'https://github.com/ATTARAYOUB/Gestion_Etudiants',
    status:      'Completed',
    tech:        ['Python', 'Tkinter', 'SQLite', 'CSV', 'OOP'],
    category:    'Desktop App',
    color:       '#3b82f6',
    Icon:        FaPython,
  },
  {
    title:       'PostWall',
    subtitle:    'Full-Stack Sticky Notes Web App',
    description: 'A full-stack web application that allows users to create, manage, and interact with virtual sticky notes. Features real-time interactions, user authentication, and full data persistence across sessions.',
    github:      'https://github.com/ATTARAYOUB/PostWall',
    status:      'Completed',
    tech:        ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    category:    'Full-Stack',
    color:       '#f59e0b',
    Icon:        SiNodedotjs,
  },
  {
    title:       'Gestion Bancaire',
    subtitle:    'Desktop Banking Management System',
    description: 'A professional desktop banking management system built with Java Swing and MySQL. Implements full MVC Architecture with account management, transactions, client records, and financial reporting modules.',
    github:      'https://github.com/ATTARAYOUB/Gestion-Bancaire',
    status:      'Completed',
    tech:        ['Java', 'Swing', 'MySQL', 'MVC', 'JDBC'],
    category:    'Desktop App',
    color:       '#10b981',
    Icon:        FaJava,
  },
  {
    title:       'PassManager',
    subtitle:    'Secure Password Manager',
    description: 'A comprehensive Django-based password management application with enterprise-grade AES encryption. Users can securely store, organize, categorize, and manage all their passwords with a clean and intuitive interface.',
    github:      'https://github.com/ATTARAYOUB/PassManager-',
    status:      'Completed',
    tech:        ['Python', 'Django', 'SQLite', 'AES Encryption', 'Bootstrap'],
    category:    'Web App',
    color:       '#8b5cf6',
    Icon:        SiDjango,
  },
  {
    title:       'More Projects Coming Soon',
    subtitle:    'Currently In Development 🚧',
    description: 'Several exciting projects are currently in progress — including mobile apps with Flutter, AI-powered tools, and healthcare management systems. Stay tuned and follow the GitHub for live updates.',
    github:      'https://github.com/ATTARAYOUB',
    status:      'In Progress',
    tech:        ['Flutter', 'Dart', 'React', 'Python', 'AI/ML'],
    category:    'In Development',
    color:       '#00d4ff',
    Icon:        FaGithub,
  },
]

// ── Filter categories ─────────────────────────────────────────────────────────
const FILTERS = ['All', 'Web App', 'Desktop App', 'Full-Stack', 'In Development']

// ── Status badge ──────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  if (status === 'Completed') {
    return (
      <span className="flex items-center gap-1 text-xs font-dm font-semibold px-2.5 py-1 rounded-full"
        style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.45)', color: '#10b981' }}>
        ✅ Completed
      </span>
    )
  }
  return (
    <motion.span
      className="flex items-center gap-1 text-xs font-dm font-semibold px-2.5 py-1 rounded-full"
      style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.45)', color: '#f59e0b' }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      🚧 In Progress
    </motion.span>
  )
}

// ── Single project card ───────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const { title, subtitle, description, github, status, tech, category, color, Icon } = project
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={hovered
        ? { y: -8, boxShadow: `0 20px 60px ${color}30, 0 0 30px ${color}18` }
        : { y: 0,  boxShadow: '0 0 0px transparent' }
      }
      style={{
        background:     'rgba(15,15,26,0.8)',
        border:         '1px solid rgba(0,212,255,0.15)',
        borderRadius:   16,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        overflow:       'hidden',
        display:        'flex',
        flexDirection:  'column',
        transition:     'box-shadow 0.3s ease',
      }}
    >
      {/* Accent top bar */}
      <div style={{ height: 3, background: color, borderRadius: '16px 16px 0 0', flexShrink: 0 }} />

      <div className="p-5 flex flex-col flex-1 gap-4">
        {/* Row 1: category badge + status badge */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span
            className="text-xs font-dm font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              background: `${color}22`,
              border:     `1px solid ${color}66`,
              color,
              letterSpacing: '0.1em',
              fontSize: 11,
            }}
          >
            {category}
          </span>
          <StatusBadge status={status} />
        </div>

        {/* Row 2: tech icon */}
        <div className="flex justify-center">
          <motion.div
            animate={hovered ? { rotate: 5 } : { rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              background:   `${color}18`,
              borderRadius: 12,
              padding:      16,
              display:      'inline-flex',
              filter:       `drop-shadow(0 0 8px ${color}55)`,
            }}
          >
            <Icon size={48} color={color} />
          </motion.div>
        </div>

        {/* Row 3: title + subtitle */}
        <div className="text-center">
          <h3 className="font-orbitron font-bold text-white text-sm leading-snug mb-1">{title}</h3>
          <p className="font-dm text-sm" style={{ color: `${color}cc` }}>{subtitle}</p>
        </div>

        {/* Row 4: description */}
        <p className="font-dm text-white/60 text-sm leading-relaxed flex-1">{description}</p>

        {/* Row 5: tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="font-dm rounded-md px-2 py-0.5"
              style={{
                fontSize:   12,
                background: 'rgba(0,212,255,0.08)',
                border:     '1px solid rgba(0,212,255,0.2)',
                color:      'rgba(0,212,255,0.8)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Row 6: GitHub button */}
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-dm font-semibold text-sm transition-all duration-300 mt-auto"
          style={{
            border:  `1px solid ${color}80`,
            color,
            background: 'transparent',
          }}
          whileHover={{
            background: `${color}22`,
            borderColor: color,
          }}
          whileTap={{ scale: 0.97 }}
        >
          <FaGithub size={16} />
          View on GitHub
          <motion.span
            animate={hovered ? { x: 4 } : { x: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            →
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  )
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef(null)
  const [inView,         setInView]         = useState(false)
  const [activeFilter,   setActiveFilter]   = useState('All')

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

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-cyan-400 font-orbitron text-sm tracking-widest">04.</span>
            <span className="text-white/40 font-dm text-sm">WHAT I'VE BUILT</span>
          </div>

          <div className="flex items-center gap-3 mb-1">
            <FaCode size={28} color="#00d4ff" />
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Animated underline */}
          <div className="overflow-hidden h-0.5 w-48 mb-2">
            <motion.div
              className="h-full rounded"
              style={{ background: 'linear-gradient(90deg, #00d4ff, transparent)' }}
              initial={{ x: '-100%' }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            />
          </div>

          <p className="section-subheading mb-8">
            Real-world applications built with passion and precision
          </p>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {FILTERS.map((f) => {
            const isActive = activeFilter === f
            return (
              <motion.button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-4 py-2 rounded-xl font-dm font-medium text-sm transition-all duration-250"
                style={isActive
                  ? { background: '#00d4ff', color: '#0a0a0f', border: '1px solid #00d4ff' }
                  : { background: 'transparent', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.4)' }
                }
                whileHover={!isActive ? { background: 'rgba(0,212,255,0.08)' } : {}}
                whileTap={{ scale: 0.95 }}
              >
                {f}
              </motion.button>
            )
          })}
        </motion.div>

        {/* ── Cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── View all CTA ── */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/ATTARAYOUB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={16} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
