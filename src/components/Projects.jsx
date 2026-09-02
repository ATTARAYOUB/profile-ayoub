import React from 'react'
import { FiCode, FiGithub, FiExternalLink, FiLayers } from 'react-icons/fi'
import { MdOutlinePhoneIphone } from 'react-icons/md'

const PROJECTS = [
  {
    title:    'Gestion des Étudiants – Student Management System',
    type:     'Desktop App',
    status:   'Completed',
    desc:     'Desktop application for managing student records, grades, enrollments, and academic data. Built with Tkinter GUI and Python backend, with full CRUD operations and data persistence.',
    tech:     ['Python', 'Tkinter', 'SQLite', 'CSV', 'OOP'],
    github:   'https://github.com/ATTARAYOUB/Gestion_Etudiants',
    color:    '#3B82F6',
  },
  {
    title:    'PostWall – Full‑Stack Sticky Notes Web App',
    type:     'Web App',
    status:   'Completed',
    desc:     'Full‑stack app to create, manage, and interact with virtual sticky notes, with real‑time interactions and user authentication.',
    tech:     ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    github:   'https://github.com/ATTARAYOUB',
    color:    '#10B981',
  },
  {
    title:    'Gestion Bancaire – Desktop Banking Management System',
    type:     'Desktop App',
    status:   'Completed',
    desc:     'Professional desktop banking management system with modules for account management, transactions, client records, and financial reporting. Built with Java Swing + MySQL, following MVC architecture.',
    tech:     ['Java', 'Swing', 'MySQL', 'MVC', 'JDBC'],
    github:   'https://github.com/ATTARAYOUB/Gestion-Bancaire',
    color:    '#2563EB',
  },
  {
    title:    'PassManager – Secure Password Manager',
    type:     'Web App',
    status:   'Completed',
    desc:     'Django‑based password manager with enterprise‑grade AES encryption for secure storage and management of passwords.',
    tech:     ['Python', 'Django', 'SQLite', 'AES Encryption', 'Bootstrap'],
    github:   'https://github.com/ATTARAYOUB/PassManager-',
    color:    '#EF4444',
  },
  {
    title:    'More Projects Coming Soon',
    type:     'In Development',
    status:   'In Progress',
    desc:     'Projects in progress include mobile apps with Flutter, AI‑powered tools, and healthcare management systems.',
    tech:     ['Flutter', 'Dart', 'React', 'Python', 'AI/ML'],
    github:   null,
    color:    '#8B5CF6',
    upcoming: true,
  },
]

const GITHUB_REPOS = [
  { name: 'ManageStudent',     desc: 'Student management app',                  lang: 'CSS',        url: 'https://github.com/ATTARAYOUB/Gestion_Etudiants' },
  { name: 'profile-ayoub',    desc: 'Premium portfolio website',               lang: 'JavaScript', url: 'https://github.com/ATTARAYOUB/profile-ayoub' },
  { name: 'portfolio-oussama',desc: 'Enhanced portfolio with UX/UI improvements',lang: 'HTML',      url: 'https://github.com/ATTARAYOUB' },
  { name: 'PassManager-',     desc: 'Django password manager',                  lang: 'Python',     url: 'https://github.com/ATTARAYOUB/PassManager-' },
  { name: 'Gestion-Bancaire', desc: 'Desktop banking app in Java/MySQL',        lang: 'Java',       url: 'https://github.com/ATTARAYOUB/Gestion-Bancaire' },
  { name: 'Gestion_Etudiants',desc: 'Student management app in Tkinter & Python',lang: 'Python',    url: 'https://github.com/ATTARAYOUB/Gestion_Etudiants' },
]

const LANG_COLORS = {
  CSS: '#A855F7', JavaScript: '#EAB308', HTML: '#F97316',
  Python: '#3B82F6', Java: '#EF4444', Code: '#10B981',
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="section-container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label">
            <FiCode size={14} /> Featured Projects
          </p>
          <h2 className="section-title">What I've Built</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            A selection of projects that demonstrate my backend, full‑stack, and healthcare‑oriented
            engineering skills.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className={`card p-6 flex flex-col ${p.upcoming ? 'border-dashed border-[#CBD5E1]' : ''}`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${p.color}15`, color: p.color }}
                >
                  {p.upcoming
                    ? <MdOutlinePhoneIphone size={20} />
                    : <FiLayers size={20} />}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <span
                    className="text-[0.68rem] px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      background: p.status === 'Completed' ? '#ECFDF5' : '#FEF9C3',
                      color:      p.status === 'Completed' ? '#059669'  : '#92400E',
                      border:     `1px solid ${p.status === 'Completed' ? '#A7F3D0' : '#FDE68A'}`,
                    }}
                  >
                    {p.status}
                  </span>
                  <span className="text-[0.68rem] px-2 py-0.5 rounded-full bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0] font-medium">
                    {p.type}
                  </span>
                </div>
              </div>

              <h3 className="font-semibold text-[#0F172A] text-base leading-snug mb-2">{p.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              {/* GitHub link */}
              {p.github && !p.upcoming && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 justify-center"
                >
                  <FiGithub size={15} /> View on GitHub
                </a>
              )}
              {p.upcoming && (
                <div className="text-center text-sm text-[#94A3B8] py-2">
                  🚧 Work in progress
                </div>
              )}
            </div>
          ))}
        </div>

        {/* GitHub Repos list */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
            Also on GitHub
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {GITHUB_REPOS.map(r => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 flex items-center justify-between gap-3 no-underline group"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <FiGithub size={14} className="text-[#64748B] flex-shrink-0" />
                    <span className="font-medium text-[#0F172A] text-sm truncate group-hover:text-[#2563EB] transition-colors">
                      {r.name}
                    </span>
                  </div>
                  <p className="text-[#94A3B8] text-xs mt-0.5 truncate">{r.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: LANG_COLORS[r.lang] ?? '#94A3B8' }}
                  />
                  <span className="text-[0.7rem] text-[#64748B]">{r.lang}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <a
              href="https://github.com/ATTARAYOUB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FiGithub size={16} /> View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
