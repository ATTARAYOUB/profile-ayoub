import React, { useState } from 'react'
import {
  FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin,
  FiSend, FiCheckCircle, FiAlertCircle
} from 'react-icons/fi'

const CONTACT_ITEMS = [
  {
    icon:    <FiMail size={20} />,
    label:   'Email',
    value:   'ATTAR.AYOUB@outlook.com',
    href:    'mailto:ATTAR.AYOUB@outlook.com',
    color:   'icon-box',
  },
  {
    icon:    <FiPhone size={20} />,
    label:   'Phone / WhatsApp',
    value:   '+212 620 834 063',
    href:    'tel:+212620834063',
    color:   'icon-box-teal',
  },
  {
    icon:    <FiLinkedin size={20} />,
    label:   'LinkedIn',
    value:   'linkedin.com/in/itsayoubattar',
    href:    'https://linkedin.com/in/itsayoubattar',
    color:   'icon-box',
    external: true,
  },
  {
    icon:    <FiGithub size={20} />,
    label:   'GitHub',
    value:   'github.com/ATTARAYOUB',
    href:    'https://github.com/ATTARAYOUB',
    color:   'icon-box',
    external: true,
  },
  {
    icon:    <FiMapPin size={20} />,
    label:   'Location',
    value:   'Casablanca, Morocco – Open to Remote & Relocation',
    href:    null,
    color:   'icon-box-emerald',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'ok' | 'error'

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Build mailto link as a simple, dependency-free send approach
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact')
    window.open(`mailto:ATTAR.AYOUB@outlook.com?subject=${subject}&body=${body}`)
    setStatus('ok')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label">
            <FiMail size={14} /> Contact
          </p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            I'm currently open to full‑time, part‑time, freelance, and contract opportunities.
            If you have a role or project that matches my profile, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact info */}
          <div className="space-y-4">
            {CONTACT_ITEMS.map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="contact-link"
                >
                  <span className={item.color}>{item.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs text-[#94A3B8] font-medium">{item.label}</p>
                    <p className="text-[#1E293B] text-sm font-medium truncate">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div key={item.label} className="contact-link cursor-default">
                  <span className={item.color}>{item.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs text-[#94A3B8] font-medium">{item.label}</p>
                    <p className="text-[#1E293B] text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              )
            ))}

            {/* Availability note */}
            <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-3 mt-6">
              <FiCheckCircle size={18} className="text-[#059669] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#065F46] text-sm">Response Time</p>
                <p className="text-[#047857] text-sm mt-0.5">
                  I typically reply within 24–48 hours. For urgent matters, WhatsApp is fastest.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="card p-7">
            <h3 className="font-semibold text-[#0F172A] text-lg mb-6">Send a Message</h3>

            {status === 'ok' && (
              <div className="mb-5 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] flex items-center gap-2">
                <FiCheckCircle size={16} className="text-[#059669]" />
                <p className="text-sm text-[#065F46] font-medium">
                  Your email client should have opened. If not, email me directly at ATTAR.AYOUB@outlook.com
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#475569] mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity / Project inquiry / …"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your role or project…"
                  className="form-input resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <FiSend size={16} /> Send Message
              </button>

              <p className="text-xs text-center text-[#94A3B8]">
                This will open your default email client pre-filled with your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
