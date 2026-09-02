import React from 'react'
import { FiActivity, FiServer, FiTool, FiUsers, FiCpu } from 'react-icons/fi'
import { MdLocalHospital, MdOutlineIntegrationInstructions, MdOutlineHealthAndSafety } from 'react-icons/md'

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

const HOSPITALS = [
  { name: 'CHU Ibn Tofail – Marrakech', type: 'University Hospital', flag: '🏥' },
  { name: 'CHU Hassan II – Fès',        type: 'University Hospital', flag: '🏥' },
]

export default function HealthcareTech() {
  return (
    <section id="healthcare" className="section-padding bg-white">
      <div className="section-container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label">
            <MdLocalHospital size={14} /> Healthcare Technology
          </p>
          <h2 className="section-title">Healthcare Technology Expertise</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            I work at the intersection of biomedical engineering and software, focusing on hospital
            pharmacy automation and IT integration.
          </p>
        </div>

        {/* Hospitals served */}
        <div className="flex flex-wrap gap-4 mb-10">
          {HOSPITALS.map(h => (
            <div
              key={h.name}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE]"
            >
              <span className="text-2xl">{h.flag}</span>
              <div>
                <p className="font-semibold text-[#1E293B] text-sm leading-tight">{h.name}</p>
                <p className="text-[#64748B] text-xs">{h.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pillars grid */}
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

        {/* Unique value banner */}
        <div className="mt-10 p-6 rounded-2xl section-navy text-white relative overflow-hidden">
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
                Most developers don't know what a Pyxis Medstation is. I do — and I've maintained them
                in two of Morocco's largest university hospitals. This unique combination of clinical
                domain knowledge and software engineering is what I bring to healthtech teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
