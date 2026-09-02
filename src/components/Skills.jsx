import React, { useState } from 'react'
import {
  FiCode, FiDatabase, FiServer, FiSmartphone,
  FiMonitor, FiSettings, FiActivity, FiShield
} from 'react-icons/fi'
import { MdLocalHospital } from 'react-icons/md'
import {
  SiSpring, SiSpringboot, SiPython, SiDjango, SiFlutter,
  SiJavascript, SiHtml5, SiMysql, SiMongodb
} from 'react-icons/si'

/* ── Featured skills shown at top ──────────────────────── */
const FEATURED = [
  { name: 'Java',        icon: <FiCode size={16} />,           color: '#EF4444' },
  { name: 'Spring Boot', icon: <SiSpringboot size={16} />,     color: '#22C55E' },
  { name: 'Python',      icon: <SiPython size={16} />,         color: '#3B82F6' },
  { name: 'Django',      icon: <SiDjango size={16} />,         color: '#065F46' },
  { name: 'Flutter',     icon: <SiFlutter size={16} />,        color: '#06B6D4' },
  { name: 'React',       icon: <FiCode size={16} />,           color: '#38BDF8' },
  { name: 'JavaScript',  icon: <SiJavascript size={16} />,     color: '#EAB308' },
  { name: 'MySQL',       icon: <SiMysql size={16} />,          color: '#2563EB' },
]

const BADGE_CLASSES = {
  Expert:       'badge badge-expert',
  Advanced:     'badge badge-advanced',
  Intermediate: 'badge badge-intermediate',
  Familiar:     'badge badge-familiar',
}

/* ── All skill categories ──────────────────────────────── */
const CATEGORIES = [
  {
    title: 'Backend',
    icon:  <FiServer size={14} />,
    note:  'Focus area',
    skills: [
      ['Java',            'Advanced'],
      ['Spring Framework','Advanced'],
      ['Spring Boot',     'Advanced'],
      ['Hibernate ORM',   'Advanced'],
      ['Python',          'Advanced'],
      ['Django',          'Intermediate'],
      ['Flask',           'Familiar'],
      ['PHP',             'Intermediate'],
      ['Laravel',         'Intermediate'],
      ['Node.js',         'Intermediate'],
      ['JSP / Servlets',  'Intermediate'],
      ['Java EE / J2EE',  'Familiar'],
    ],
  },
  {
    title: 'Frontend',
    icon:  <FiCode size={14} />,
    skills: [
      ['HTML5',      'Expert'],
      ['CSS3',       'Expert'],
      ['JavaScript', 'Advanced'],
      ['Bootstrap',  'Advanced'],
      ['jQuery',     'Advanced'],
      ['React',      'Advanced'],
    ],
  },
  {
    title: 'Mobile',
    icon:  <FiSmartphone size={14} />,
    skills: [
      ['Flutter', 'Advanced'],
      ['Dart',    'Advanced'],
    ],
  },
  {
    title: 'Desktop',
    icon:  <FiMonitor size={14} />,
    skills: [
      ['Java Swing',      'Advanced'],
      ['Tkinter (Python)','Advanced'],
      ['JavaFX',          'Familiar'],
    ],
  },
  {
    title: 'Database',
    icon:  <FiDatabase size={14} />,
    skills: [
      ['SQL Server',       'Advanced'],
      ['MySQL',            'Advanced'],
      ['Oracle',           'Advanced'],
      ['PL/SQL (Oracle)',  'Advanced'],
      ['SQLite',           'Advanced'],
      ['MongoDB',          'Intermediate'],
    ],
  },
  {
    title: 'Architecture & Practices',
    icon:  <FiSettings size={14} />,
    skills: [
      ['OOP',              'Advanced'],
      ['MVC Architecture', 'Intermediate'],
      ['DAO Pattern',      'Advanced'],
      ['REST API Design',  'Intermediate'],
      ['UML / Merise',     'Advanced'],
      ['Scrum / Agile',    'Familiar'],
      ['Git / GitHub',     'Advanced'],
    ],
  },
  {
    title: 'IT & Systems',
    icon:  <FiShield size={14} />,
    skills: [
      ['System Administration', 'Advanced'],
      ['PC / Server Maintenance','Advanced'],
      ['Hardware Diagnostics',  'Advanced'],
      ['Helpdesk Support',      'Advanced'],
      ['Networking Basics',     'Advanced'],
      ['Microsoft Office',      'Advanced'],
      ['CMS / SEO',             'Intermediate'],
    ],
  },
  {
    title: 'Healthcare Technology',
    icon:  <MdLocalHospital size={14} />,
    highlight: true,
    skills: [
      ['BD Rowa™ VMAX 160',              'Intermediate'],
      ['Pyxis Medstation 3500/4000/ES',  'Advanced'],
      ['SupplyStation',                  'Advanced'],
      ['Pyxis ES V1.3 Configuration',    'Expert'],
      ['Biomedical IT Integration',      'Advanced'],
      ['HL7 Integration',                'Familiar'],
      ['CCE Systems',                    'Intermediate'],
      ['Spare Parts Management',         'Advanced'],
      ['Technical Documentation',        'Advanced'],
      ['Technical Training',             'Expert'],
      ['Hospital Staff Training',        'Expert'],
      ['Quality Control',                'Advanced'],
    ],
  },
]

function CategoryCard({ cat }) {
  return (
    <div className={`card p-5 ${cat.highlight ? 'border-[#BAE6FD] bg-[#F0F9FF]' : ''}`}>
      <div className="skill-category-header">
        <span className={cat.highlight ? 'text-[#0891B2]' : 'text-[#64748B]'}>{cat.icon}</span>
        <span>{cat.title}</span>
        {cat.note && (
          <span className="ml-auto text-[0.65rem] px-2 py-0.5 rounded-full bg-[#DBEAFE] text-[#2563EB] font-semibold">
            {cat.note}
          </span>
        )}
      </div>
      <div>
        {cat.skills.map(([name, level]) => (
          <div key={name} className="skill-row">
            <span className="text-sm text-[#334155]">{name}</span>
            <span className={BADGE_CLASSES[level]}>{level}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? CATEGORIES : CATEGORIES.slice(0, 4)

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="section-container">

        {/* Header */}
        <div className="mb-10">
          <p className="section-label">
            <FiCode size={14} /> Technical Skills
          </p>
          <h2 className="section-title">What I Work With</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            I have deep expertise in backend and full‑stack development, with a strong focus on
            Django, Java, and related frameworks.
          </p>
        </div>

        {/* Featured skills */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-3">
            Featured Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {FEATURED.map(f => (
              <span
                key={f.name}
                className="featured-skill"
                style={{ '--icon-color': f.color }}
              >
                <span style={{ color: f.color }}>{f.icon}</span>
                {f.name}
              </span>
            ))}
          </div>
        </div>

        {/* Badge legend */}
        <div className="flex flex-wrap gap-3 mb-8 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
          <span className="text-xs font-semibold text-[#64748B] mr-2">Levels:</span>
          {Object.keys(BADGE_CLASSES).map(level => (
            <span key={level} className={BADGE_CLASSES[level]}>{level}</span>
          ))}
        </div>

        {/* Grid of categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {/* Healthcare always visible & prominent */}
          {visible.map((cat, i) => (
            <div key={cat.title} className={cat.highlight ? 'md:col-span-2 xl:col-span-1' : ''}>
              <CategoryCard cat={cat} />
            </div>
          ))}
        </div>

        {/* Show more/less */}
        {CATEGORIES.length > 4 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(v => !v)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : `Show All ${CATEGORIES.length} Categories`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
