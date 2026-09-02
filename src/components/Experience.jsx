import React, { useState } from 'react'
import {
  FiBriefcase, FiCalendar, FiMapPin,
  FiChevronDown, FiChevronUp, FiTool,
  FiUsers, FiZap, FiPackage
} from 'react-icons/fi'
import { MdLocalHospital, MdOutlineHealthAndSafety } from 'react-icons/md'

/* ────────────────────────────────────────────────────────
   MAINTENANCE MANAGER — rich structured data
──────────────────────────────────────────────────────── */
const MHS_ROLE = {
  title:    'Maintenance Manager',
  company:  'Morocco Healthcare Supplier (MHS)',
  location: 'Morocco — Multi-site',
  period:   'January 2023 — Present',
  current:  true,
  summary:
    'Hands-on technical manager responsible for the installation, deployment, and maintenance of hospital pharmacy automation systems across multiple clinical sites in Morocco. Combining biomedical engineering expertise with software integration skills to ensure high-availability pharmacy operations.',

  missions: [
    {
      name:    'Centre Hospitalier Bouida',
      current: false,
      items: [
        'Installation and deployment of Pyxis MedStation ES',
        'On-site configuration and integration within the hospital environment',
        'Technical intervention and system commissioning',
      ],
    },
    {
      name:    'Centre Hospitalier Chafarni',
      current: false,
      items: [
        'Installation of Pyxis MedStation ES',
        'On-site deployment and technical integration',
        'System configuration and hospital environment coordination',
      ],
    },
    {
      name:    'CHU Rabat — Ibn Sina Hospital',
      current: true,
      items: [
        'Installation of 3 × ROWA Vmax 160 automated pharmacy dispensing machines',
        'Installation and deployment of Conveyor Systems (pneumatic tube logistics)',
        'On-site technical intervention and commissioning',
        'System integration and coordination with hospital technical teams',
      ],
    },
  ],

  clients: [
    {
      client: 'MHS',
      hospitals: [
        { name: 'CHU Marrakech',    period: 'July 2024 → Present' },
        { name: 'CHU Hassan II Fès', period: '2023 → June 2023'   },
      ],
    },
  ],

  responsibilities: [
    'Preventive and curative maintenance on BD Rowa™ VMAX 160 and Pyxis Medstation 3500/4000/ES (v1.3–v1.7) and SupplyStation units',
    'HL7 integration and CCE systems management, including server administration',
    'Technical training for hospital pharmacy and clinical staff on equipment use and safety',
    'Supplier coordination and spare-parts inventory management to minimise downtime',
  ],

  systems: [
    'Pyxis MedStation ES',
    'ROWA Vmax 160',
    'SupplyStation',
    'Conveyor Systems',
    'HL7 Integration',
    'CCE Systems',
    'Hospital Pharmacy Automation',
    'On-site Installation & Deployment',
  ],
}

/* ────────────────────────────────────────────────────────
   OTHER ROLES
──────────────────────────────────────────────────────── */
const OTHER_JOBS = [
  {
    title:    'IT Manager & Medical Equipment Expert',
    company:  'Private Medical Structure',
    location: 'Casablanca, Morocco',
    period:   'May 2022 — Feb 2023',
    bullets: [
      'Maintained IT hardware infrastructure, including computers, printers, and servers, for a private healthcare facility.',
      'Delivered helpdesk support, resolved technical incidents, and assisted with internal software development.',
      'Combined biomedical equipment maintenance with day-to-day IT infrastructure management.',
    ],
  },
  {
    title:    'Founder & Graphic Designer',
    company:  'CoolWord Store — Redbubble',
    location: 'Remote',
    period:   'Mar 2022 — Jun 2022',
    bullets: [
      'Founded and managed an independent online store on the Redbubble e-commerce platform.',
      'Created original designs and managed branding, marketing, and sales analysis.',
    ],
  },
  {
    title:    'Software Programmer Intern',
    company:  'Metec Diagnostic',
    location: 'Casablanca, Morocco',
    period:   'Jan 2021 — Mar 2021',
    bullets: [
      'Supported IT peripherals, servers, and SQL Server databases.',
      'Provided technical assistance and troubleshooting support to employees.',
    ],
  },
  {
    title:    'Software Developer Intern',
    company:  'Institut Marsoul',
    location: 'Remote',
    period:   'Jun 2020 — Dec 2020',
    bullets: [
      'Built a desktop application for class scheduling and invoicing management using Java, JSP, Hibernate, Oracle, and CSS.',
    ],
  },
  {
    title:    'Web Developer Intern',
    company:  'Remorques Équipements Afrique',
    location: 'Casablanca, Morocco',
    period:   'Jan 2020 — Mar 2020',
    bullets: [
      'Developed a website template for accounting and internal operations using HTML5, CSS3, JavaScript, Bootstrap, and jQuery.',
    ],
  },
]

/* ────────────────────────────────────────────────────────
   RICH CARD — Maintenance Manager
──────────────────────────────────────────────────────── */
function MHSCard() {
  const [missionsOpen,  setMissionsOpen]  = useState(true)
  const [clientsOpen,   setClientsOpen]   = useState(true)
  const [detailsOpen,   setDetailsOpen]   = useState(false)

  const r = MHS_ROLE

  return (
    <div className="relative pl-12 pb-10">
      {/* Timeline dot — blue pulsing for current */}
      <div
        className="absolute left-[11px] top-6 w-5 h-5 rounded-full border-[3px] border-white z-10"
        style={{ background: '#2563EB', boxShadow: '0 0 0 4px rgba(37,99,235,0.18)' }}
      />

      {/* Card */}
      <div
        className="rounded-2xl border border-[#BFDBFE] overflow-hidden"
        style={{ background: '#ffffff', boxShadow: '0 2px 16px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.05)' }}
      >

        {/* ── TOP HEADER BAR ── */}
        <div
          className="px-6 pt-6 pb-5 border-b border-[#EFF6FF]"
          style={{ background: 'linear-gradient(135deg, #F8FAFF 0%, #EFF6FF 100%)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex-1 min-w-0">
              {/* Title + badge */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-bold text-[#0F172A] text-xl leading-tight">{r.title}</h3>
                <span className="inline-flex items-center gap-1 text-[0.7rem] px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
                  Current
                </span>
              </div>
              {/* Company */}
              <p className="text-[#2563EB] font-semibold text-base">{r.company}</p>
              {/* Meta */}
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <FiCalendar size={12} /> {r.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={12} /> {r.location}
                </span>
              </div>
            </div>
            {/* Icon badge */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center shadow-sm">
                <MdOutlineHealthAndSafety size={24} className="text-white" />
              </div>
            </div>
          </div>

          {/* Summary */}
          <p className="mt-4 text-[#334155] text-sm leading-relaxed">{r.summary}</p>
        </div>

        {/* ── MISSIONS ── */}
        <div className="border-b border-[#F1F5F9]">
          <button
            onClick={() => setMissionsOpen(v => !v)}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#F8FAFC] transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <FiTool size={14} className="text-[#2563EB]" />
              </div>
              <span className="font-semibold text-[#0F172A] text-sm">Field Missions</span>
              <span className="text-[0.68rem] px-2 py-0.5 rounded-full bg-[#F1F5F9] text-[#64748B] font-medium">
                {r.missions.length} missions
              </span>
            </div>
            {missionsOpen
              ? <FiChevronUp size={16} className="text-[#94A3B8]" />
              : <FiChevronDown size={16} className="text-[#94A3B8]" />
            }
          </button>

          {missionsOpen && (
            <div className="px-6 pb-5 space-y-4">
              {r.missions.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 border"
                  style={
                    m.current
                      ? { background: '#F0FDF4', borderColor: '#86EFAC' }
                      : { background: '#F8FAFC', borderColor: '#E2E8F0' }
                  }
                >
                  {/* Mission header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <MdLocalHospital
                      size={15}
                      style={{ color: m.current ? '#059669' : '#2563EB' }}
                      className="flex-shrink-0"
                    />
                    <span className="font-semibold text-[#0F172A] text-sm">{m.name}</span>
                    {m.current && (
                      <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC] font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
                        Current Mission
                      </span>
                    )}
                  </div>
                  {/* Items */}
                  <ul className="space-y-1.5">
                    {m.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-[#334155] leading-relaxed">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                          style={{ background: m.current ? '#10B981' : '#2563EB' }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── HOSPITALS & CLIENTS ── */}
        <div className="border-b border-[#F1F5F9]">
          <button
            onClick={() => setClientsOpen(v => !v)}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#F8FAFC] transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <FiUsers size={14} className="text-[#2563EB]" />
              </div>
              <span className="font-semibold text-[#0F172A] text-sm">Hospitals & Clients</span>
            </div>
            {clientsOpen
              ? <FiChevronUp size={16} className="text-[#94A3B8]" />
              : <FiChevronDown size={16} className="text-[#94A3B8]" />
            }
          </button>

          {clientsOpen && (
            <div className="px-6 pb-5">
              {r.clients.map((c, ci) => (
                <div key={ci}>
                  {/* Client label */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#0F172A] text-white tracking-wide">
                      {c.client}
                    </span>
                    <span className="text-xs text-[#64748B]">Client / Employer</span>
                  </div>
                  {/* Hospital rows */}
                  <div className="space-y-2 ml-1">
                    {c.hospitals.map((h, hi) => (
                      <div
                        key={hi}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]"
                      >
                        <div className="flex items-center gap-2.5">
                          <MdLocalHospital size={15} className="text-[#2563EB] flex-shrink-0" />
                          <span className="font-semibold text-[#0F172A] text-sm">{h.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5 ml-5 sm:ml-0">
                          <FiCalendar size={11} className="text-[#94A3B8]" />
                          <span className="text-xs text-[#64748B] font-medium">{h.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── KEY RESPONSIBILITIES (collapsible) ── */}
        <div className="border-b border-[#F1F5F9]">
          <button
            onClick={() => setDetailsOpen(v => !v)}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#F8FAFC] transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <FiBriefcase size={14} className="text-[#2563EB]" />
              </div>
              <span className="font-semibold text-[#0F172A] text-sm">Key Responsibilities</span>
            </div>
            {detailsOpen
              ? <FiChevronUp size={16} className="text-[#94A3B8]" />
              : <FiChevronDown size={16} className="text-[#94A3B8]" />
            }
          </button>

          {detailsOpen && (
            <ul className="px-6 pb-5 space-y-2.5">
              {r.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#334155] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ── SYSTEMS & TECHNOLOGIES ── */}
        <div className="px-6 py-5">
          <div className="flex items-center gap-2 mb-3">
            <FiPackage size={13} className="text-[#64748B]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
              Systems & Technologies
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {r.systems.map(s => (
              <span
                key={s}
                className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border border-[#BFDBFE] text-[#1D4ED8] bg-[#EFF6FF] transition-all hover:bg-[#DBEAFE] hover:border-[#93C5FD]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────
   STANDARD CARD — all other roles
──────────────────────────────────────────────────────── */
function JobCard({ job }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative pl-12 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div
        className="absolute left-[11px] top-6 w-[16px] h-[16px] rounded-full border-[3px] border-white z-10"
        style={{ background: '#94A3B8' }}
      />

      <div
        className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all hover:border-[#BFDBFE] hover:shadow-md"
        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
      >
        {/* Clickable header */}
        <div
          className="flex items-start justify-between gap-4 px-5 py-4 cursor-pointer"
          onClick={() => setOpen(v => !v)}
        >
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-[#0F172A] text-[0.95rem] leading-snug">{job.title}</h3>
            <p className="text-[#2563EB] font-medium text-sm mt-0.5">{job.company}</p>
            <div className="flex flex-wrap gap-3 mt-1.5 text-xs text-[#64748B]">
              <span className="flex items-center gap-1">
                <FiCalendar size={11} /> {job.period}
              </span>
              <span className="flex items-center gap-1">
                <FiMapPin size={11} /> {job.location}
              </span>
            </div>
          </div>
          <button
            className="text-[#CBD5E1] hover:text-[#2563EB] transition-colors flex-shrink-0 mt-0.5 p-1 rounded-md hover:bg-[#EFF6FF]"
            aria-label={open ? 'Collapse' : 'Expand'}
          >
            {open ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
          </button>
        </div>

        {/* Expanded bullets */}
        {open && (
          <div className="px-5 pb-4 border-t border-[#F1F5F9] pt-3">
            <ul className="space-y-2">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#334155] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] flex-shrink-0 mt-2" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────
   SECTION
──────────────────────────────────────────────────────── */
export default function Experience() {
  return (
    <section id="experience" className="section-padding section-alt">
      <div className="section-container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label">
            <FiBriefcase size={14} /> Experience
          </p>
          <h2 className="section-title">Professional Experience</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            5+ years bridging biomedical engineering and software — from large-scale hospital
            pharmacy automation installations to full‑stack development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical gradient line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-[2px] rounded-full"
            style={{ background: 'linear-gradient(to bottom, #2563EB 0%, #06B6D4 40%, #E2E8F0 100%)' }}
          />

          {/* Current role — rich card */}
          <MHSCard />

          {/* Other roles — standard cards */}
          {OTHER_JOBS.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
