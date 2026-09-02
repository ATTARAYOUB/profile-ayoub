import React from 'react'
import { FiServer, FiTool, FiUsers, FiCpu, FiPackage, FiWind } from 'react-icons/fi'
import { MdLocalHospital, MdOutlineIntegrationInstructions, MdOutlineHealthAndSafety } from 'react-icons/md'

/* ── Capability pillars ─────────────────────────────────── */
const PILLARS = [
  {
    icon:  <FiTool size={22} />,
    color: 'icon-box',
    title: 'Systems Maintained',
    items: [
      'BD Rowa VMAX 160 – automated pharmacy dispensing robot',
      'Pyxis Medstation 3500 / 4000 / ES V1.3–V1.7 – medication cabinet systems',
      'SupplyStation – supply management solution',
    ],
  },
  {
    icon:  <MdOutlineIntegrationInstructions size={22} />,
    color: 'icon-box-teal',
    title: 'Integrations',
    items: [
      'HL7 messaging between automation systems and hospital information systems',
      'CCE systems configuration and maintenance',
      'Server-side connectivity for multi-site hospital deployments',
    ],
  },
  {
    icon:  <FiServer size={22} />,
    color: 'icon-box',
    title: 'Responsibilities',
    items: [
      'Preventive & corrective maintenance across multiple hospital sites',
      'Server administration and uptime management',
      'Spare parts logistics and vendor coordination',
      'Quality control and compliance documentation',
    ],
  },
  {
    icon:  <FiUsers size={22} />,
    color: 'icon-box-emerald',
    title: 'Training',
    items: [
      'Technical training for pharmacists and hospital staff',
      'System usage and safety protocol instruction',
      'Reducing user errors through structured onboarding',
    ],
  },
  {
    icon:  <FiCpu size={22} />,
    color: 'icon-box-teal',
    title: 'Software Tools Built',
    items: [
      'Complementary tools for pharmacy data management',
      'Reporting dashboards for clinical workflow teams',
      'Secure credential management utilities for hospital IT',
    ],
  },
]

/* ── Hospital references ────────────────────────────────── */
const HOSPITALS = [
  {
    name:     'CHU Ibn Tofail – Marrakech',
    type:     'University Hospital',
    systems:  'BD Rowa VMAX 160 · Pyxis Medstation · HL7',
    color:    '#2563EB',
    bg:       '#EFF6FF',
    border:   '#BFDBFE',
  },
  {
    name:     'CHU Hassan II – Fès',
    type:     'University Hospital',
    systems:  'BD Rowa VMAX 160 · Pyxis Medstation · HL7',
    color:    '#0891B2',
    bg:       '#F0F9FF',
    border:   '#BAE6FD',
  },
  {
    name:     'CHU Mohammed VI – Marrakech',
    type:     'University Hospital',
    systems:  'BD Rowa VMAX 160 · Pyxis Medstation · CCE',
    color:    '#059669',
    bg:       '#ECFDF5',
    border:   '#A7F3D0',
  },
]

/* ── Installation projects ──────────────────────────────── */
const INSTALLATIONS = [
  {
    icon:    <FiPackage size={20} />,
    color:   '#7C3AED',
    bg:      '#F5F3FF',
    border:  '#DDD6FE',
    tag:     'Installation · Rabat',
    title:   '3× BD Rowa VMAX 160 – Rabat',
    items: [
      'Full installation and commissioning of 3 VMAX 160 units at a major Rabat facility',
      'Site preparation, hardware setup, network configuration, and system validation',
      'Staff onboarding, training sessions, and go-live support',
    ],
  },
  {
    icon:    <FiWind size={20} />,
    color:   '#0891B2',
    bg:      '#F0F9FF',
    border:  '#BAE6FD',
    tag:     'Installation · Rabat',
    title:   'Pneumatic Conveyor System – Ibn Sina Hospital',
    items: [
      'Installation of a full pneumatic conveyor (convoyeur) system at Ibn Sina Hospital',
      'Integration with existing hospital logistics and pharmacy distribution workflows',
      'System testing, performance validation, and technical handover to the hospital team',
    ],
  },
]

export default function HealthcareTech() {
  return (
    <section id="healthcare" className="section-padding bg-white">
      <div className="section-container">

        {/* ── Header ── */}
        <div className="mb-12">
          <p className="section-label">
            <MdLocalHospital size={14} /> Healthcare Technology
          </p>
          <h2 className="section-title">Healthcare Technology Expertise</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            Working at the intersection of biomedical engineering and software — hospital pharmacy
            automation, IT integration, and hands-on field deployments across Morocco.
          </p>
        </div>

        {/* ── Hospital references ── */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
            Hospitals &amp; Clients
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOSPITALS.map(h => (
              <div
                key={h.name}
                className="flex items-start gap-3 px-4 py-4 rounded-xl border transition-all hover:-translate-y-0.5"
                style={{ background: h.bg, borderColor: h.border }}
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${h.color}18` }}
                >
                  🏥
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-[#0F172A] text-sm leading-snug">{h.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: h.color }}>{h.type}</p>
                  <p className="text-[#64748B] text-xs mt-1 leading-relaxed">{h.systems}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Installation projects ── */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
            Notable Installations
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {INSTALLATIONS.map(inst => (
              <div
                key={inst.title}
                className="card p-5 border transition-all hover:-translate-y-0.5"
                style={{ borderColor: inst.border, background: inst.bg }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${inst.color}18`, color: inst.color }}
                  >
                    {inst.icon}
                  </div>
                  <div className="min-w-0">
                    <span
                      className="inline-block text-[0.68rem] font-semibold px-2 py-0.5 rounded-full mb-1"
                      style={{ background: `${inst.color}15`, color: inst.color, border: `1px solid ${inst.color}30` }}
                    >
                      {inst.tag}
                    </span>
                    <h3 className="font-semibold text-[#0F172A] text-sm leading-snug">{inst.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {inst.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#334155]">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                        style={{ background: inst.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Capability pillars ── */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
            Capabilities
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="card p-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className={p.color}>{p.icon}</span>
                  <h3 className="font-semibold text-[#0F172A] text-base">{p.title}</h3>
                </div>
                <ul className="space-y-2">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Value banner ── */}
        <div className="p-6 rounded-2xl section-navy text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4">
            <MdOutlineHealthAndSafety size={40} className="text-[#06B6D4] flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-white mb-1">
                Domain Expertise You Can't Find in a Textbook
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed max-w-2xl">
                Most developers don't know what a Pyxis Medstation is. I do — and I've installed and
                maintained them across multiple university hospitals and major facilities in Morocco.
                This unique combination of clinical domain knowledge and software engineering is what
                I bring to healthtech teams worldwide.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
