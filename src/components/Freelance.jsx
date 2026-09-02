import React from 'react'
import {
  FiBriefcase, FiCode, FiServer, FiDatabase, FiMail,
  FiPhone, FiLinkedin, FiGithub, FiCheckCircle, FiClock,
  FiGlobe, FiZap
} from 'react-icons/fi'
import { MdLocalHospital } from 'react-icons/md'

const SERVICES = [
  {
    icon:  <FiCode size={22} />,
    color: 'icon-box',
    title: 'Backend & Full‑Stack Development',
    items: [
      'Design and implement REST APIs and backend services in Java (Spring Boot) and Python (Django/Flask).',
      'Build full‑stack web apps with HTML, CSS, JavaScript, React, Django, Spring Boot.',
      'Develop desktop tools in Java (Swing/JavaFX) and Python (Tkinter) for internal workflows.',
      'Create cross‑platform mobile apps with Flutter & Dart.',
    ],
  },
  {
    icon:  <MdLocalHospital size={22} />,
    color: 'icon-box-teal',
    title: 'Healthcare & Hospital IT',
    items: [
      'Advise on hospital pharmacy automation (BD Rowa, Pyxis) and related workflows.',
      'Support HL7‑based integrations between automation systems and hospital information systems.',
      'Build internal tools for pharmacy, clinical, or hospital administration teams (data management, reporting, dashboards).',
      'Help bridge the gap between clinical/biomedical teams and software engineers.',
    ],
  },
  {
    icon:  <FiDatabase size={22} />,
    color: 'icon-box-emerald',
    title: 'Data, Security & Reliability',
    items: [
      'Design databases and data models in MySQL, PostgreSQL, SQL Server, Oracle, MongoDB.',
      'Implement secure authentication, authorization, and data protection patterns.',
      'Build systems with maintainable architecture (MVC, DAO, clear separation of concerns).',
      'Improve legacy codebases: refactor, document, and add tests where needed.',
    ],
  },
]

const HOW_I_WORK = [
  {
    icon:  <FiMail size={18} />,
    label: 'Communication',
    desc:  'Clear, regular updates via email, Slack, Teams, or your preferred tool.',
  },
  {
    icon:  <FiGlobe size={18} />,
    label: 'Time Zones',
    desc:  'Based in Morocco (UTC+1); flexible to overlap with EU, GCC, and partial US hours.',
  },
  {
    icon:  <FiBriefcase size={18} />,
    label: 'Engagement Models',
    desc:  'Project‑based (fixed scope & price), time‑based (hourly or weekly), or long‑term part‑time / full‑time contract.',
  },
  {
    icon:  <FiGlobe size={18} />,
    label: 'Languages',
    desc:  'Arabic (native), English (B2), French (B2).',
  },
]

const IDEAL_PROJECTS = [
  'Healthtech / medtech MVPs and prototypes',
  'Internal tools for hospitals, clinics, or healthcare vendors',
  'Backend services and APIs for web or mobile apps',
  'Data management, reporting, and workflow automation tools',
  'Integrations between existing systems (HIS, lab systems, pharmacy automation, etc.)',
]

const WHAT_I_SEND_BACK = [
  'My understanding of your needs',
  'A proposed approach and timeline',
  'An estimate of effort and cost',
]

export default function Freelance() {
  return (
    <section id="freelance" className="section-padding section-alt">
      <div className="section-container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label">
            <FiBriefcase size={14} /> Freelance & Contract Work
          </p>
          <h2 className="section-title">Work With Me</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            Looking for a reliable full‑stack engineer with healthcare domain expertise? I help
            startups, healthtech companies, and hospital IT teams build secure, reliable software
            and integrations.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {SERVICES.map(s => (
            <div key={s.title} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={s.color}>{s.icon}</span>
                <h3 className="font-semibold text-[#0F172A] text-base leading-snug">{s.title}</h3>
              </div>
              <ul className="space-y-2">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#334155] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">

          {/* How I Work */}
          <div>
            <h3 className="font-semibold text-[#0F172A] text-lg mb-6 flex items-center gap-2">
              <FiClock size={18} className="text-[#2563EB]" /> How I Work
            </h3>
            <div className="space-y-4">
              {HOW_I_WORK.map(w => (
                <div key={w.label} className="flex items-start gap-3">
                  <span className="icon-box flex-shrink-0">{w.icon}</span>
                  <div>
                    <p className="font-medium text-[#0F172A] text-sm">{w.label}</p>
                    <p className="text-[#64748B] text-sm leading-relaxed mt-0.5">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Projects */}
          <div>
            <h3 className="font-semibold text-[#0F172A] text-lg mb-6 flex items-center gap-2">
              <FiZap size={18} className="text-[#10B981]" /> Typical Projects I'm Interested In
            </h3>
            <ul className="space-y-3">
              {IDEAL_PROJECTS.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#334155]">
                  <FiCheckCircle size={16} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Let's Work Together CTA */}
        <div className="card-navy p-8 rounded-2xl text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-bold text-xl text-white mb-3">Let's Work Together</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
                If you have a project in mind or need an engineer to join your team on a contract
                basis, I'd love to hear about it.
              </p>
              <p className="text-[#64748B] text-xs font-semibold uppercase tracking-widest mb-3">
                Contact me with:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'A short description of your project or needs',
                  'Your preferred tech stack (if any)',
                  'Expected timeline and budget range (if known)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <span className="text-[#06B6D4] mt-0.5">→</span> {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#64748B] text-xs font-semibold uppercase tracking-widest mb-3">
                I'll get back to you with:
              </p>
              <ul className="space-y-2 mb-6">
                {WHAT_I_SEND_BACK.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <FiCheckCircle size={14} className="text-[#10B981] flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#64748B] text-xs mt-4">
                Open to freelance, contract, and part‑time collaborations alongside full‑time opportunities.
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              <a
                href="mailto:ATTAR.AYOUB@outlook.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#2563EB] transition-all group"
              >
                <span className="w-10 h-10 rounded-lg bg-[#2563EB]/20 flex items-center justify-center text-[#60A5FA] flex-shrink-0">
                  <FiMail size={18} />
                </span>
                <div>
                  <p className="text-xs text-[#64748B]">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#60A5FA] transition-colors">
                    ATTAR.AYOUB@outlook.com
                  </p>
                </div>
              </a>
              <a
                href="tel:+212620834063"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#06B6D4] transition-all group"
              >
                <span className="w-10 h-10 rounded-lg bg-[#06B6D4]/20 flex items-center justify-center text-[#22D3EE] flex-shrink-0">
                  <FiPhone size={18} />
                </span>
                <div>
                  <p className="text-xs text-[#64748B]">WhatsApp / Phone</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#22D3EE] transition-colors">
                    +212 620 834 063
                  </p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/itsayoubattar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#2563EB] transition-all group"
              >
                <span className="w-10 h-10 rounded-lg bg-[#2563EB]/20 flex items-center justify-center text-[#60A5FA] flex-shrink-0">
                  <FiLinkedin size={18} />
                </span>
                <div>
                  <p className="text-xs text-[#64748B]">LinkedIn</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#60A5FA] transition-colors">
                    linkedin.com/in/itsayoubattar
                  </p>
                </div>
              </a>
              <a
                href="https://github.com/ATTARAYOUB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#94A3B8] transition-all group"
              >
                <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                  <FiGithub size={18} />
                </span>
                <div>
                  <p className="text-xs text-[#64748B]">GitHub</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#E2E8F0] transition-colors">
                    github.com/ATTARAYOUB
                  </p>
                </div>
              </a>

              <a
                href="mailto:ATTAR.AYOUB@outlook.com?subject=Project Inquiry"
                className="btn-emerald w-full justify-center mt-4"
              >
                <FiMail size={16} /> Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
