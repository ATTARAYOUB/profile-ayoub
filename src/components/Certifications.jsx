import React from 'react'
import { FiAward, FiExternalLink, FiCalendar, FiHash } from 'react-icons/fi'
import { MdAutoGraph } from 'react-icons/md'

const CERTS = [
  {
    title:   'Professional',
    issuer:  'GTF Education',
    date:    'December 2025',
    id:      '8244129795AA',
    url:     '#',
    color:   '#2563EB',
    bg:      '#EFF6FF',
    border:  '#BFDBFE',
  },
  {
    title:   'Data Science',
    issuer:  'IBM / Coursera',
    date:    'January 2024',
    id:      'ZNJTGGJL7PLD',
    url:     'https://www.coursera.org/account/accomplishments/verify/ZNJTGGJL7PLD',
    color:   '#0891B2',
    bg:      '#F0F9FF',
    border:  '#BAE6FD',
  },
  {
    title:   'Project Management',
    issuer:  'Great Learning',
    date:    '2023',
    id:      null,
    url:     '#',
    color:   '#059669',
    bg:      '#ECFDF5',
    border:  '#A7F3D0',
  },
  {
    title:   'Career Skills',
    issuer:  'LinkedIn Learning',
    date:    '2023',
    id:      null,
    url:     '#',
    color:   '#2563EB',
    bg:      '#EFF6FF',
    border:  '#BFDBFE',
  },
  {
    title:   'AI / Deep Learning',
    issuer:  'Udemy',
    date:    'January 2020',
    id:      'UC-8e63cdba-c74d-4816-899f-a5f6dd7f415f',
    url:     'https://www.udemy.com/certificate/UC-8e63cdba-c74d-4816-899f-a5f6dd7f415f/',
    color:   '#7C3AED',
    bg:      '#F5F3FF',
    border:  '#DDD6FE',
  },
  {
    title:   'Frontend Development',
    issuer:  'Udemy',
    date:    'January 2020',
    id:      'UC-9c920bb8-ce22-445c-828b-fd2a1c1058ae',
    url:     'https://www.udemy.com/certificate/UC-9c920bb8-ce22-445c-828b-fd2a1c1058ae/',
    color:   '#EA580C',
    bg:      '#FFF7ED',
    border:  '#FED7AA',
  },
  {
    title:   'Web Fundamentals',
    issuer:  'Udemy',
    date:    'January 2020',
    id:      'UC-c77979c9-6d2d-4bdf-bf42-e034800f71fd',
    url:     'https://www.udemy.com/certificate/UC-c77979c9-6d2d-4bdf-bf42-e034800f71fd/',
    color:   '#EA580C',
    bg:      '#FFF7ED',
    border:  '#FED7AA',
  },
  {
    title:   'Language — B2 English',
    issuer:  'Wall Street English Morocco',
    date:    'January 2020',
    id:      null,
    url:     '#',
    color:   '#0F172A',
    bg:      '#F8FAFC',
    border:  '#E2E8F0',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="section-container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label">
            <FiAward size={14} /> Certifications
          </p>
          <h2 className="section-title">Verified Credentials</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            Verified credentials from global platforms, covering software, data, AI, and professional skills.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {CERTS.map((c, i) => (
            <div
              key={i}
              className="card p-5 flex flex-col group"
              style={{ borderColor: c.border, backgroundColor: c.bg }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: `${c.color}20`, color: c.color }}
              >
                <FiAward size={20} />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-[#0F172A] text-sm leading-snug mb-1">{c.title}</h3>
              <p className="font-medium text-sm mb-3" style={{ color: c.color }}>{c.issuer}</p>

              <div className="space-y-1 mb-4 flex-1">
                <p className="flex items-center gap-1.5 text-xs text-[#64748B]">
                  <FiCalendar size={11} /> {c.date}
                </p>
                {c.id && (
                  <p className="flex items-start gap-1.5 text-xs text-[#94A3B8] break-all">
                    <FiHash size={11} className="flex-shrink-0 mt-0.5" />
                    <span className="font-mono text-[0.68rem]">{c.id}</span>
                  </p>
                )}
              </div>

              {c.url && c.url !== '#' ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg transition-all"
                  style={{
                    color: c.color,
                    background: `${c.color}10`,
                    border: `1px solid ${c.color}30`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${c.color}20`
                    e.currentTarget.style.borderColor = `${c.color}60`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = `${c.color}10`
                    e.currentTarget.style.borderColor = `${c.color}30`
                  }}
                >
                  <FiExternalLink size={12} /> View Certificate
                </a>
              ) : (
                <div className="text-xs text-center text-[#94A3B8] py-1">
                  Issued credential
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Continuous learning note */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-[#EFF6FF] to-[#F0F9FF] border border-[#BFDBFE] flex items-start gap-4">
          <MdAutoGraph size={24} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#1E40AF] text-sm mb-1">Continuous Learning</p>
            <p className="text-[#334155] text-sm leading-relaxed">
              Currently expanding expertise in AI/ML, cloud architecture, and healthcare informatics.
              Always learning, always building.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
