import React from 'react'
import {
  FiUser, FiGlobe, FiMapPin, FiBookOpen,
  FiCode, FiCheckCircle
} from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'
import { MdLocalHospital } from 'react-icons/md'

const HIGHLIGHTS = [
  {
    icon:  <FiCode size={18} />,
    color: 'icon-box',
    title: 'Backend & Full‑Stack',
    desc:  'Java, Spring Boot, Python, Django, Flask, Node.js, Flutter, React',
  },
  {
    icon:  <MdLocalHospital size={18} />,
    color: 'icon-box-teal',
    title: 'Healthcare IT',
    desc:  'BD Rowa™ VMAX, Pyxis Medstation, HL7 Integration, Biomedical IT Systems',
  },
  {
    icon:  <FiBookOpen size={18} />,
    color: 'icon-box-emerald',
    title: 'Education',
    desc:  'Licence ILSI (In Progress) · Specialized Technician Diploma in Software Dev',
  },
]

const EDUCATION = [
  {
    degree:  'Licence — Software Engineering & Information Systems (ILSI)',
    school:  'Université Spécialisée, Morocco',
    period:  '2025 – Present',
    status:  'In Progress',
    color:   '#2563EB',
  },
  {
    degree:  'Specialized Technician Diploma in Software Development',
    school:  'ISTA NTIC, Casablanca, Morocco',
    period:  '2018 – 2020',
    status:  'Completed',
    color:   '#059669',
  },
  {
    degree:  'Baccalauréat — Experimental Sciences (Life & Earth Sciences)',
    school:  'Lycée Mohammed VI, Casablanca, Morocco',
    period:  '2017 – 2018',
    status:  'Completed',
    color:   '#059669',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label">
            <FiUser size={14} /> About Me
          </p>
          <h2 className="section-title">Who I Am</h2>
          <div className="accent-bar" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left – Bio + languages + education */}
          <div>
            <p className="text-[#334155] leading-relaxed text-[1.02rem] mb-5">
              I'm <strong className="text-[#0F172A]">Ayoub Attar</strong>, a Moroccan full‑stack
              developer and Healthcare Technology Specialist with 5+ years of experience bridging
              biomedical engineering and software development. I maintain critical medical automation
              systems (BD Rowa™ VMAX 160, Pyxis Medstation) while building full‑stack applications
              using Java, Python, Django, Flutter, and React.
            </p>
            <p className="text-[#334155] leading-relaxed text-[1.02rem] mb-5">
              Currently completing my{' '}
              <span className="inline-flex items-center gap-1 text-[#2563EB] font-medium">
                <HiAcademicCap size={16} /> Licence ILSI
              </span>{' '}
              (Software Engineering & Information Systems) and holding 8 international certifications.
              I bring a unique combination of healthcare technology operations and software engineering
              to fast‑paced technical teams.
            </p>

            {/* Languages */}
            <div className="space-y-3 mt-6 mb-8">
              <div className="flex items-center gap-3 text-[#334155]">
                <span className="icon-box">
                  <FiGlobe size={18} />
                </span>
                <div>
                  <span className="font-semibold text-[#0F172A]">Languages: </span>
                  Arabic (native) · English (B2 Upper-Intermediate) · French (A2 Basic)
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#334155]">
                <span className="icon-box-teal">
                  <FiMapPin size={18} />
                </span>
                <div>
                  <span className="font-semibold text-[#0F172A]">Location: </span>
                  Casablanca, Morocco — open to remote work and relocation
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-3 flex items-center gap-1.5">
                <HiAcademicCap size={13} /> Education
              </p>
              <div className="space-y-3">
                {EDUCATION.map((e, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl border"
                    style={{
                      background:   e.status === 'In Progress' ? '#EFF6FF' : '#F8FAFC',
                      borderColor:  e.status === 'In Progress' ? '#BFDBFE' : '#E2E8F0',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${e.color}18`, color: e.color }}
                    >
                      <HiAcademicCap size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-[#0F172A] text-sm leading-snug">{e.degree}</p>
                      <p className="text-[#64748B] text-xs mt-0.5">{e.school}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-xs text-[#94A3B8]">{e.period}</span>
                        <span
                          className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            background: e.status === 'In Progress' ? '#DBEAFE' : '#DCFCE7',
                            color:      e.status === 'In Progress' ? '#1D4ED8' : '#15803D',
                          }}
                        >
                          {e.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available banner */}
            <div className="mt-6 p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-3">
              <FiCheckCircle size={20} className="text-[#059669] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#065F46] text-sm">Currently Available</p>
                <p className="text-[#047857] text-sm mt-0.5">
                  Open to full‑time, part‑time, freelance, and contract opportunities — remote or on‑site.
                </p>
              </div>
            </div>
          </div>

          {/* Right – Highlight cards + what I bring */}
          <div className="space-y-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="card p-5 flex items-start gap-4">
                <span className={h.color}>{h.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#0F172A] text-base mb-0.5">{h.title}</h3>
                  <p className="text-[#64748B] text-sm">{h.desc}</p>
                </div>
              </div>
            ))}

            {/* What I bring */}
            <div className="card p-5">
              <h3 className="font-semibold text-[#0F172A] text-base mb-3">What I Bring</h3>
              <ul className="space-y-2">
                {[
                  'Deep domain knowledge in hospital pharmacy automation (BD Rowa, Pyxis)',
                  'Reliable, maintainable code for clinical environments',
                  'Bridge between clinical/biomed teams and software engineers',
                  '8 international certifications across software, data, and AI',
                  'Clear communication in Arabic, English, and French',
                  'Proven ability to work across multiple hospital sites simultaneously',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                    <FiCheckCircle size={14} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
