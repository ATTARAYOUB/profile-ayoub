import React, { useState } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const JOBS = [
  {
    title:    'Maintenance Manager',
    company:  'Morocco Healthcare Supplier (CHU Marrakech & Fès)',
    location: 'Fès & Marrakech, Morocco',
    period:   'Jan 2023 — Present',
    current:  true,
    bullets: [
      'Maintain and troubleshoot BD Rowa VMAX 160 and Pyxis Medstation 3500/4000/ES systems across major university hospitals, ensuring high uptime for automated pharmacy dispensing.',
      'Lead HL7 integration between automation systems and hospital information systems, reducing manual medication errors and improving workflow efficiency.',
      'Coordinate with vendors and hospital IT teams on server administration, CCE systems, and spare parts logistics for multiple sites.',
      'Train pharmacists and technicians on system usage and safety protocols, improving adoption and reducing user errors.',
    ],
  },
  {
    title:    'Medical Expert – IT Manager',
    company:  'Private Clinic',
    location: 'Casablanca, Morocco',
    period:   'May 2022 — Feb 2023',
    bullets: [
      'Maintained and repaired IT hardware: computers, printers, servers.',
      'Provided helpdesk support, resolved incidents, and assisted in software development.',
      'Combined biomedical maintenance with IT infrastructure tasks.',
    ],
  },
  {
    title:    'Graphic Designer & E‑Commerce Entrepreneur',
    company:  'CoolWord — Redbubble',
    location: 'Remote',
    period:   'Mar 2022 — Jun 2022',
    bullets: [
      'Founded and managed "CoolWord" store on Redbubble.',
      'Created original designs, handled product quality, branding, and sales analysis.',
    ],
  },
  {
    title:    'Software Programmer Intern',
    company:  'Metec Diagnostic',
    location: 'Casablanca, Morocco',
    period:   'Jan 2021 — Mar 2021',
    bullets: [
      'Maintained IT peripherals, servers, and SQL Server support.',
      'Provided employee technical assistance and troubleshooting.',
    ],
  },
  {
    title:    'Software Programmer Intern',
    company:  'Institut Marsoul',
    location: 'Remote',
    period:   'Jun 2020 — Dec 2020',
    bullets: [
      'Designed a desktop application for schedules & invoicing.',
      'Used Java, JSP, Hibernate, Oracle, and CSS.',
    ],
  },
  {
    title:    'Web Developer Intern',
    company:  'Remorques Équipements Afrique',
    location: 'Casablanca, Morocco',
    period:   'Jan 2020 — Mar 2020',
    bullets: [
      'Built and deployed the company website using HTML, CSS, JavaScript, and Bootstrap.',
      'Integrated dynamic content and contact forms.',
      'Collaborated with the team to align design with brand identity.',
    ],
  },
]

function JobCard({ job, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div className="relative pl-12 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div
        className="absolute left-[11px] top-6 w-[18px] h-[18px] rounded-full border-[3px] border-white shadow-sm z-10"
        style={{ background: job.current ? '#2563EB' : '#94A3B8', boxShadow: job.current ? '0 0 0 3px rgba(37,99,235,0.2)' : 'none' }}
      />

      <div className="card p-5 hover:border-[#BFDBFE] transition-all">
        {/* Header row */}
        <div
          className="flex items-start justify-between gap-4 cursor-pointer"
          onClick={() => setOpen(v => !v)}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-[#0F172A] text-base leading-snug">{job.title}</h3>
              {job.current && (
                <span className="text-[0.68rem] px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] font-semibold">
                  Current
                </span>
              )}
            </div>
            <p className="text-[#2563EB] font-medium text-sm mt-0.5">{job.company}</p>
            <div className="flex flex-wrap gap-4 mt-1.5 text-xs text-[#64748B]">
              <span className="flex items-center gap-1">
                <FiCalendar size={11} /> {job.period}
              </span>
              <span className="flex items-center gap-1">
                <FiMapPin size={11} /> {job.location}
              </span>
            </div>
          </div>
          <button className="text-[#94A3B8] hover:text-[#2563EB] transition-colors flex-shrink-0 mt-1">
            {open ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
          </button>
        </div>

        {/* Bullets */}
        {open && (
          <ul className="mt-4 space-y-2 list-none p-0 border-t border-[#F1F5F9] pt-4">
            {job.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#334155] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-2" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-alt">
      <div className="section-container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label">
            <FiBriefcase size={14} /> Experience
          </p>
          <h2 className="section-title">Work History</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            From hospital pharmacy automation to full‑stack development — a track record of delivering
            reliable solutions in demanding environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-[2px] rounded-full"
            style={{ background: 'linear-gradient(to bottom, #2563EB, #06B6D4, #E2E8F0)' }}
          />

          {JOBS.map((job, i) => (
            <JobCard key={i} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
