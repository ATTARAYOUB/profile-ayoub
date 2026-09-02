import React from 'react'
import {
  FiUser, FiGlobe, FiMapPin, FiBookOpen,
  FiCode, FiCheckCircle
} from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'
import { MdLocalHospital } from 'react-icons/md'

const HIGHLIGHTS = [
  { icon: <FiCode size={18} />,      color: 'icon-box',        title: 'Backend & Full‑Stack', desc: 'Java, Spring Boot, Python, Django, Flutter' },
  { icon: <MdLocalHospital size={18} />, color: 'icon-box-teal',   title: 'Healthcare IT',        desc: 'BD Rowa, Pyxis, HL7 Integration, CCE Systems' },
  { icon: <FiBookOpen size={18} />,  color: 'icon-box-emerald', title: 'Licence ILSI',          desc: 'Ingénierie Logicielle et Systèmes d\'Information, Dec 2025' },
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

          {/* Left – Bio */}
          <div>
            <p className="text-[#334155] leading-relaxed text-[1.02rem] mb-5">
              I'm <strong className="text-[#0F172A]">Ayoub Attar</strong>, a Moroccan full‑stack engineer
              focused on healthcare technology. I work at the intersection of biomedical engineering and
              software: maintaining automated pharmacy systems (BD Rowa, Pyxis) in large hospitals,
              integrating them with hospital information systems via HL7, and building complementary tools
              for clinicians and IT teams.
            </p>
            <p className="text-[#334155] leading-relaxed text-[1.02rem] mb-5">
              My stack includes Java, Python, Django, Spring Boot, and Flutter, with strong SQL/NoSQL
              database skills. I recently completed my{' '}
              <span className="inline-flex items-center gap-1 text-[#2563EB] font-medium">
                <HiAcademicCap size={16} /> Licence ILSI
              </span>{' '}
              (Ingénierie Logicielle et Systèmes d'Information) in December 2025 and am now looking
              for international roles in healthtech, medtech, or hospital IT where I can combine
              domain expertise with solid software engineering.
            </p>

            {/* Languages & Location */}
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 text-[#334155]">
                <span className="icon-box">
                  <FiGlobe size={18} />
                </span>
                <div>
                  <span className="font-semibold text-[#0F172A]">Languages: </span>
                  Arabic (native), English (B2), French (B2)
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#334155]">
                <span className="icon-box-teal">
                  <FiMapPin size={18} />
                </span>
                <div>
                  <span className="font-semibold text-[#0F172A]">Location: </span>
                  Casablanca, Morocco – open to remote work and relocation
                </div>
              </div>
            </div>

            {/* Available banner */}
            <div className="mt-8 p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-3">
              <FiCheckCircle size={20} className="text-[#059669] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#065F46] text-sm">Currently Available</p>
                <p className="text-[#047857] text-sm mt-0.5">
                  Open to full‑time, part‑time, freelance, and contract opportunities — remote or on‑site.
                </p>
              </div>
            </div>
          </div>

          {/* Right – Highlight cards */}
          <div className="space-y-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="card p-5 flex items-start gap-4">
                <span className={h.color}>
                  {h.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-[#0F172A] text-base mb-0.5">{h.title}</h3>
                  <p className="text-[#64748B] text-sm">{h.desc}</p>
                </div>
              </div>
            ))}

            {/* Core values / what I bring */}
            <div className="card p-5">
              <h3 className="font-semibold text-[#0F172A] text-base mb-3">What I Bring</h3>
              <ul className="space-y-2">
                {[
                  'Deep domain knowledge in hospital pharmacy automation',
                  'Reliable, maintainable code for clinical environments',
                  'Bridge between clinical/biomed teams and software engineers',
                  'Clear communication in Arabic, English, and French',
                  'Proven ability to work across multiple hospital sites',
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
