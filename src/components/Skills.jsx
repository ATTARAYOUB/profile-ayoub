import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  FaJava, FaPython, FaServer, FaDesktop,
  FaHeadset, FaNetworkWired, FaHospital,
  FaChalkboardTeacher, FaCheckCircle,
  FaCode, FaSearch, FaDatabase, FaSitemap,
  FaProjectDiagram, FaMedkit, FaTools, FaFileAlt,
} from 'react-icons/fa'
import {
  SiHtml5, SiCss, SiJavascript, SiBootstrap,
  SiJquery, SiReact, SiSpring, SiSpringboot,
  SiHibernate, SiFlask, SiDjango, SiPhp,
  SiLaravel, SiNodedotjs, SiFlutter, SiDart,
  SiMysql, SiSqlite, SiMongodb,
  SiJira, SiGithub, SiPostman,
} from 'react-icons/si'
import { MdArchitecture } from 'react-icons/md'
import { HiCode } from 'react-icons/hi'

// ── Level badge helper ────────────────────────────────────────────────────────
function getLevelBadge(pct) {
  if (pct >= 90) return { label: 'Expert',       color: '#10b981' }
  if (pct >= 75) return { label: 'Advanced',     color: '#3b82f6' }
  if (pct >= 60) return { label: 'Intermediate', color: '#f59e0b' }
  return           { label: 'Familiar',          color: '#6b7280' }
}

// ── All categories ────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: 'frontend', label: 'Frontend', icon: '💻',
    skills: [
      { name: 'HTML5',      pct: 95, Icon: SiHtml5,      color: '#e34f26' },
      { name: 'CSS3',       pct: 92, Icon: SiCss,        color: '#1572b6' },
      { name: 'JavaScript', pct: 85, Icon: SiJavascript, color: '#f7df1e' },
      { name: 'Bootstrap',  pct: 88, Icon: SiBootstrap,  color: '#7952b3' },
      { name: 'jQuery',     pct: 82, Icon: SiJquery,     color: '#0769ad' },
      { name: 'React',      pct: 75, Icon: SiReact,      color: '#61dafb' },
    ],
  },
  {
    id: 'backend', label: 'Backend', icon: '⚙️',
    skills: [
      { name: 'Java',             pct: 88, Icon: FaJava,       color: '#f89820' },
      { name: 'Java EE / J2EE',   pct: 40, Icon: FaJava,       color: '#f89820' },
      { name: 'JSP / Servlets',   pct: 60, Icon: FaJava,       color: '#f89820' },
      { name: 'Spring Framework', pct: 78, Icon: SiSpring,     color: '#6db33f' },
      { name: 'Spring Boot',      pct: 76, Icon: SiSpringboot, color: '#6db33f' },
      { name: 'Hibernate ORM',    pct: 75, Icon: SiHibernate,  color: '#59666c' },
      { name: 'Python',           pct: 80, Icon: FaPython,     color: '#3776ab' },
      { name: 'Flask',            pct: 59, Icon: SiFlask,      color: '#aaaaaa' },
      { name: 'Django',           pct: 74, Icon: SiDjango,     color: '#44b78b' },
      { name: 'PHP',              pct: 72, Icon: SiPhp,        color: '#777bb4' },
      { name: 'Laravel',          pct: 70, Icon: SiLaravel,    color: '#ff2d20' },
      { name: 'Node.js',          pct: 70, Icon: SiNodedotjs,  color: '#339933' },
    ],
  },
  {
    id: 'desktop', label: 'Desktop', icon: '🖥️',
    skills: [
      { name: 'Java Swing',       pct: 85, Icon: FaJava,   color: '#f89820' },
      { name: 'Tkinter (Python)', pct: 78, Icon: FaPython, color: '#3776ab' },
      { name: 'JavaFX',           pct: 40, Icon: FaJava,   color: '#f89820' },
    ],
  },
  {
    id: 'mobile', label: 'Mobile', icon: '📱',
    skills: [
      { name: 'Flutter', pct: 78, Icon: SiFlutter, color: '#02569b' },
      { name: 'Dart',    pct: 76, Icon: SiDart,    color: '#0175c2' },
    ],
  },
  {
    id: 'database', label: 'Database', icon: '🗄️',
    skills: [
      { name: 'SQL Server',    pct: 88, Icon: FaDatabase, color: '#cc2927' },
      { name: 'MySQL',         pct: 85, Icon: SiMysql,    color: '#4479a1' },
      { name: 'Oracle',        pct: 78, Icon: FaDatabase, color: '#f80000' },
      { name: 'PL/SQL (Oracle)',pct: 76, Icon: FaDatabase, color: '#f80000' },
      { name: 'SQLite',        pct: 80, Icon: SiSqlite,   color: '#003b57' },
      { name: 'MongoDB',       pct: 68, Icon: SiMongodb,  color: '#47a248' },
    ],
  },
  {
    id: 'architecture', label: 'Architecture', icon: '🏗️',
    skills: [
      { name: 'MVC Architecture',      pct: 63, Icon: MdArchitecture,  color: '#00d4ff' },
      { name: 'OOP',                   pct: 88, Icon: HiCode,           color: '#00d4ff' },
      { name: 'DAO Pattern',           pct: 78, Icon: HiCode,           color: '#00d4ff' },
      { name: 'REST API Design',       pct: 69, Icon: SiPostman,        color: '#ff6c37' },
      { name: 'UML / Merise',          pct: 78, Icon: FaProjectDiagram, color: '#00d4ff' },
      { name: 'Scrum / Agile',         pct: 58, Icon: SiJira,           color: '#0052cc' },
      { name: 'Git / GitHub',          pct: 85, Icon: SiGithub,         color: '#ffffff' },
    ],
  },
  {
    id: 'it', label: 'IT & Systems', icon: '🔧',
    skills: [
      { name: 'System Administration',   pct: 85, Icon: FaServer,       color: '#00d4ff' },
      { name: 'PC / Server Maintenance', pct: 88, Icon: FaDesktop,      color: '#00d4ff' },
      { name: 'Hardware Diagnostics',    pct: 87, Icon: FaDesktop,      color: '#00d4ff' },
      { name: 'Helpdesk Support',        pct: 82, Icon: FaHeadset,      color: '#00d4ff' },
      { name: 'Networking Basics',       pct: 75, Icon: FaNetworkWired, color: '#00d4ff' },
      { name: 'HL7 Integration',         pct: 88, Icon: FaNetworkWired, color: '#00d4ff' },
      { name: 'CCE Systems',             pct: 84, Icon: FaServer,       color: '#00d4ff' },
      { name: 'Microsoft Office',        pct: 85, Icon: FaDesktop,      color: '#d83b01' },
      { name: 'CMS / SEO',               pct: 70, Icon: FaSearch,       color: '#00d4ff' },
    ],
  },
  {
    id: 'healthcare', label: 'Healthcare', icon: '🏥',
    skills: [
      { name: 'BD Rowa™ VMAX 160',                          pct: 66, Icon: FaMedkit,       color: '#10b981' },
      { name: 'Pyxis Medstation 3500 / 4000 / ES V1.3 to V1.7', pct: 76, Icon: FaHospital, color: '#10b981' },
      { name: 'SupplyStation',                       pct: 82, Icon: FaMedkit,            color: '#10b981' },
      { name: 'Pyxis ES V1.3 Configuration',         pct: 90, Icon: FaTools,            color: '#10b981' },
      { name: 'Biomedical IT Integration',           pct: 80, Icon: FaHospital,          color: '#10b981' },
      { name: 'HL7 Integration',                     pct: 48, Icon: FaNetworkWired,      color: '#10b981' },
      { name: 'CCE Systems',                         pct: 60, Icon: FaSitemap,           color: '#10b981' },
      { name: 'Spare Parts Management',              pct: 85, Icon: FaTools,             color: '#10b981' },
      { name: 'Technical Documentation',             pct: 88, Icon: FaFileAlt,           color: '#10b981' },
      { name: 'Technical Training',                  pct: 90, Icon: FaChalkboardTeacher, color: '#10b981' },
      { name: 'Hospital Staff Training',             pct: 90, Icon: FaChalkboardTeacher, color: '#10b981' },
      { name: 'Quality Control',                     pct: 87, Icon: FaCheckCircle,       color: '#10b981' },
    ],
  },
]

// ── Featured skills (top 5) ───────────────────────────────────────────────────
const FEATURED = [
  { name: 'Java',        Icon: FaJava,       color: '#f89820' },
  { name: 'Python',      Icon: FaPython,     color: '#3776ab' },
  { name: 'Rowa VMAX',   Icon: FaHospital,   color: '#10b981' },
  { name: 'Flutter',     Icon: SiFlutter,    color: '#02569b' },
  { name: 'Spring Boot', Icon: SiSpringboot, color: '#6db33f' },
]

// ── Tabs ──────────────────────────────────────────────────────────────────────
const TABS = ['All', ...CATEGORIES.map(c => c.label)]

// ── Legend ────────────────────────────────────────────────────────────────────
const LEGEND = [
  { dot: '#10b981', level: 'Expert',       range: '90–100%', desc: 'Production-ready mastery'  },
  { dot: '#3b82f6', level: 'Advanced',     range: '75–89%',  desc: 'Strong professional use'   },
  { dot: '#f59e0b', level: 'Intermediate', range: '60–74%',  desc: 'Growing proficiency'       },
  { dot: '#6b7280', level: 'Familiar',     range: '< 60%',   desc: 'Exposure & learning'       },
]

// ── Animated skill row ────────────────────────────────────────────────────────
function SkillRow({ skill, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const badge = getLevelBadge(skill.pct)

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="space-y-1.5 cursor-default"
    >
      {/* Name + badge row */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <motion.span
            animate={hovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{ flexShrink: 0, color: skill.color, display: 'flex' }}
          >
            <skill.Icon size={18} />
          </motion.span>
          <span className="font-dm font-medium text-white/90 truncate" style={{ fontSize: 14 }}>
            {skill.name}
          </span>
          {/* Level badge */}
          <span
            className="font-dm uppercase flex-shrink-0"
            style={{
              fontSize:      9,
              letterSpacing: '0.1em',
              padding:       '2px 7px',
              borderRadius:  999,
              background:    `${badge.color}1f`,
              border:        `1px solid ${badge.color}66`,
              color:         badge.color,
            }}
          >
            {badge.label}
          </span>
        </div>
      </div>

      {/* Bar + percentage */}
      <div className="flex items-center gap-2">
        <div
          className="flex-1 relative overflow-hidden"
          style={{
            height:       7,
            borderRadius: 999,
            background:   'rgba(255,255,255,0.08)',
            boxShadow:    'inset 0 0 4px rgba(0,0,0,0.5)',
          }}
        >
          {/* Fill */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.pct}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
            style={{
              height:       '100%',
              borderRadius: 999,
              background:   `linear-gradient(90deg, ${skill.color}, #00d4ff)`,
              filter:       hovered ? 'brightness(1.3)' : 'brightness(1)',
              transition:   'filter 0.2s ease',
              position:     'relative',
              overflow:     'hidden',
            }}
          >
            {/* Shimmer overlay */}
            <span
              className="skill-shimmer absolute inset-0"
              style={{ borderRadius: 999 }}
            />
          </motion.div>
        </div>

        {/* Percentage — Orbitron, right of bar */}
        <motion.span
          animate={hovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="font-orbitron flex-shrink-0 tabular-nums"
          style={{ fontSize: 11, color: skill.color, minWidth: 34, textAlign: 'right' }}
        >
          {skill.pct}%
        </motion.span>
      </div>
    </motion.div>
  )
}

// ── Category card ─────────────────────────────────────────────────────────────
function CategoryCard({ cat, inView, startIndex }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background:   'rgba(255,255,255,0.02)',
        border:       `1px solid ${hovered ? 'rgba(0,212,255,0.15)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 16,
        padding:      24,
        transition:   'border-color 0.3s ease',
      }}
    >
      {/* Category header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-5"
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: '#00d4ff' }}
        />
        <span className="text-base">{cat.icon}</span>
        <span
          className="font-dm font-semibold uppercase tracking-widest"
          style={{ fontSize: 11, color: '#00d4ff' }}
        >
          {cat.label}
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(0,212,255,0.12)' }} />
        <span className="font-dm text-white/30" style={{ fontSize: 11 }}>
          {cat.skills.length} skills
        </span>
      </motion.div>

      {/* Skills grid */}
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
        {cat.skills.map((skill, i) => (
          <SkillRow
            key={skill.name}
            skill={skill}
            index={startIndex + i}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  )
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const [activeTab, setActiveTab] = useState('All')

  const visibleCats = activeTab === 'All'
    ? CATEGORIES
    : CATEGORIES.filter(c => c.label === activeTab)

  let runningIndex = 0

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-cyan-400 font-orbitron text-sm tracking-widest">03.</span>
            <span className="text-white/40 font-dm text-sm">WHAT I KNOW</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap mb-2">
            <FaCode size={24} color="#00d4ff" />
            <h2 className="section-heading">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <span
              className="font-dm font-semibold"
              style={{
                fontSize: 12, padding: '4px 12px', borderRadius: 999,
                background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.35)',
                color: '#00d4ff',
              }}
            >
              50+ Skills
            </span>
          </div>

          <div className="accent-line" />
          <p className="section-subheading mb-5">
            Technologies &amp; tools I work with daily
          </p>

          {/* Legend — 2×2 on mobile, 4-col on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {LEGEND.map(l => (
              <div
                key={l.level}
                className="flex items-start gap-2 p-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5" style={{ background: l.dot }} />
                <div>
                  <p className="font-dm font-semibold text-white/80" style={{ fontSize: 12 }}>
                    {l.level} <span className="text-white/40">({l.range})</span>
                  </p>
                  <p className="font-dm text-white/40" style={{ fontSize: 11 }}>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Featured skills row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-8"
        >
          <p className="font-dm text-white/40 uppercase tracking-widest mb-3" style={{ fontSize: 11 }}>
            ✦ Featured Skills
          </p>
          <div
            className="flex gap-3 pb-2"
            style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {FEATURED.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: `0 0 20px ${f.color}4d`,
                  borderColor: `${f.color}cc`,
                }}
                style={{
                  minWidth:     110,
                  height:       110,
                  background:   'rgba(255,255,255,0.03)',
                  border:       `1px solid ${f.color}4d`,
                  borderRadius: 16,
                  display:      'flex',
                  flexDirection:'column',
                  alignItems:   'center',
                  justifyContent: 'center',
                  gap:          10,
                  cursor:       'default',
                  flexShrink:   0,
                  transition:   'border-color 0.3s ease',
                }}
              >
                <span style={{ filter: `drop-shadow(0 0 8px ${f.color}88)`, display: 'flex' }}>
                  <f.Icon size={40} color={f.color} />
                </span>
                <span className="font-dm text-white/80" style={{ fontSize: 12, textAlign: 'center', lineHeight: 1.2 }}>
                  {f.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Tab bar ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-6"
          style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-2 pb-1" style={{ minWidth: 'max-content' }}>
            {TABS.map(tab => {
              const isActive = activeTab === tab
              return (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="font-dm font-medium text-sm px-4 py-2 rounded-xl whitespace-nowrap"
                  style={isActive
                    ? { background: '#00d4ff', color: '#0a0a0f', border: '1px solid #00d4ff' }
                    : { background: 'transparent', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.4)' }
                  }
                  whileHover={!isActive ? { background: 'rgba(0,212,255,0.08)' } : {}}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* ── Category cards ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {visibleCats.map(cat => {
              const si = runningIndex
              runningIndex += cat.skills.length
              return (
                <CategoryCard
                  key={cat.id}
                  cat={cat}
                  inView={inView}
                  startIndex={si}
                />
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
