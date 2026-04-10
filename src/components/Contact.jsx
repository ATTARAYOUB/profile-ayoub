import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MdLocationOn } from 'react-icons/md'

// ── Contact section ──────────────────────────────────────────────────────────
export default function Contact() {
  const ref = useRef(null)
  const [inView,    setInView]    = useState(false)
  const [formData,  setFormData]  = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
    const body    = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    window.location.href = `mailto:itsayoubattar@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const INFO_LINKS = [
    {
      href:     'mailto:itsayoubattar@gmail.com',
      icon:     '📧',
      label:    'Email',
      value:    'itsayoubattar@gmail.com',
      external: false,
    },
    {
      href:     'tel:+212620834063',
      icon:     '📞',
      label:    'Phone',
      value:    '+212 620 834 063',
      external: false,
    },
    {
      href:     'https://www.linkedin.com/in/itsayoubattar',
      icon:     '💼',
      label:    'LinkedIn',
      value:    'linkedin.com/in/itsayoubattar',
      external: true,
    },
    {
      href:     'https://github.com/ATTARAYOUB',
      icon:     null,
      label:    'GitHub',
      value:    'github.com/ATTARAYOUB',
      external: true,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      href:     null,
      icon:     '📍',
      label:    'Location',
      value:    'Casablanca, Morocco — Open to Remote & Relocation',
      external: false,
    },
    {
      href:     null,
      icon:     '🎂',
      label:    'Date of Birth',
      value:    '11 / 02 / 2000',
      external: false,
    },
    {
      href:     null,
      icon:     '🌍',
      label:    'Nationality',
      value:    'Moroccan',
      external: false,
    },
  ]

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-cyan-400 font-orbitron text-sm tracking-widest">07.</span>
            <span className="text-white/40 font-dm text-sm">LET'S TALK</span>
          </div>
          <h2 className="section-heading mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="accent-line mx-auto" />
          <p className="section-subheading">
            Open to collaborations, opportunities, and interesting conversations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── Left: info + availability banner ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Contact info card */}
            <div className="glass-card p-6">
              <h3 className="font-orbitron font-bold text-white text-sm mb-5">Contact Information</h3>
              <div className="space-y-3">
                {INFO_LINKS.map((item) => {
                  const inner = (
                    <div className="flex items-center gap-3">
                      <span className="text-xl w-6 flex-shrink-0 flex items-center justify-center">
                        {item.svg ?? item.icon}
                      </span>
                      <div>
                        <p className="text-xs text-white/40 font-dm">{item.label}</p>
                        <p className="text-sm font-dm text-white/80">{item.value}</p>
                      </div>
                    </div>
                  )

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="social-link"
                      >
                        {inner}
                      </a>
                    )
                  }
                  return (
                    <div key={item.label} className="social-link cursor-default">
                      {inner}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ── Availability banner (replaces QR code) ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              whileHover={{
                boxShadow: '0 0 24px rgba(0,212,255,0.18)',
                borderColor: 'rgba(0,212,255,0.55)',
              }}
              style={{
                background:   'rgba(0,212,255,0.05)',
                border:       '1px solid rgba(0,212,255,0.3)',
                borderRadius: 12,
                padding:      24,
                transition:   'box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Left: pulsing dot + text */}
                <div className="flex items-center gap-3">
                  <motion.span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: '#10b981' }}
                    animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div>
                    <p className="font-orbitron font-bold text-white text-sm">
                      🌍 Open to Remote &amp; International Opportunities
                    </p>
                    <p className="font-dm text-white/50 text-xs mt-0.5">
                      Available for full-time, part-time, freelance &amp; contract roles
                    </p>
                  </div>
                </div>

                {/* Right: location */}
                <div
                  className="flex items-center gap-1.5 flex-shrink-0 self-start sm:self-auto px-3 py-1.5 rounded-lg"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
                >
                  <MdLocationOn size={14} color="#00d4ff" />
                  <span className="font-dm text-cyan-400 text-xs font-medium whitespace-nowrap">
                    Casablanca, Morocco
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                className="my-4"
                style={{ height: 1, background: 'rgba(0,212,255,0.12)' }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['Remote Work', 'Relocation Ready', 'Healthcare Tech', 'Full Stack', 'AI / ML'].map((tag) => (
                  <span
                    key={tag}
                    className="font-dm text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(0,212,255,0.07)',
                      border:     '1px solid rgba(0,212,255,0.2)',
                      color:      'rgba(0,212,255,0.75)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-6">
              <h3 className="font-orbitron font-bold text-white text-sm mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-dm text-white/50 text-xs mb-1.5">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block font-dm text-white/50 text-xs mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-dm text-white/50 text-xs mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Job Opportunity"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block font-dm text-white/50 text-xs mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="form-input resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? (
                    <><span>✅</span> Message Sent!</>
                  ) : (
                    <><span>🚀</span> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
