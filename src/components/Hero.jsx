import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  FaDownload, FaArrowDown,
  FaLinkedin, FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa'

// ── Rotating titles ───────────────────────────────────────────────────────────
const TITLES = [
  'Full-Stack Developer',
  'Healthcare Tech Specialist',
  'Mobile App Engineer',
  'Java & Python Developer',
  'Biomedical IT Expert',
]

// ── Floating particles (generated once) ──────────────────────────────────────
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size:     Math.random() * 2.5 + 1.5,
  x:        `${Math.random() * 90 + 5}%`,
  y:        `${Math.random() * 80 + 5}%`,
  duration: Math.random() * 4 + 4,
  amplitude:Math.random() * 25 + 15,
  delay:    Math.random() * 3,
}))

// ── Floating tech tags ────────────────────────────────────────────────────────
const FLOAT_TAGS = [
  { label: '☕ Java',       top: '-16px',  right: '-16px', left: 'auto',  bottom: 'auto',  dur: 3,   amp: 8  },
  { label: '🏥 Healthcare', top: '30px',   left: '-20px',  right: 'auto', bottom: 'auto',  dur: 4,   amp: 6  },
  { label: '📱 Flutter',    bottom: '40px',right: '-20px', left: 'auto',  top: 'auto',     dur: 3.5, amp: 10 },
  { label: '🐍 Python',     bottom: '-16px',left: '20px',  right: 'auto', top: 'auto',     dur: 4.5, amp: 7  },
]

// ── Tag pill style ────────────────────────────────────────────────────────────
const tagStyle = {
  background:          'rgba(10,10,20,0.92)',
  border:              '1px solid rgba(0,212,255,0.35)',
  borderRadius:        10,
  padding:             '8px 14px',
  fontSize:            12,
  fontFamily:          'DM Sans, sans-serif',
  fontWeight:          500,
  color:               'rgba(255,255,255,0.85)',
  backdropFilter:      'blur(10px)',
  WebkitBackdropFilter:'blur(10px)',
  boxShadow:           '0 4px 20px rgba(0,0,0,0.3)',
  whiteSpace:          'nowrap',
  position:            'absolute',
  zIndex:              10,
}

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { num: '5+',  label: 'Years Exp'      },
  { num: '45+', label: 'Technologies'   },
  { num: '8',   label: 'Certifications' },
  { num: '4+',  label: 'Projects'       },
]

// ── Main component ────────────────────────────────────────────────────────────
export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0)
  const sectionRef = useRef(null)

  // Rotate titles every 2.5s
  useEffect(() => {
    const t = setInterval(() => setTitleIdx(i => (i + 1) % TITLES.length), 2500)
    return () => clearInterval(t)
  }, [])

  // Scroll-based opacity for scroll indicator
  const { scrollY } = useScroll()
  const scrollOpacity = useTransform(scrollY, [0, 200], [1, 0])

  const scrollToAbout    = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight:    '100vh',
        display:      'flex',
        alignItems:   'center',
        position:     'relative',
        overflow:     'hidden',
        padding:      '120px 0 80px',
        background:   '#0a0a0f',
      }}
    >
      {/* ── Grid background ── */}
      <div
        aria-hidden="true"
        style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
          backgroundSize:  '50px 50px',
          pointerEvents:   'none',
        }}
      />

      {/* ── Glow blob 1 (top-left) ── */}
      <div
        aria-hidden="true"
        style={{
          position:     'absolute',
          width:        600,
          height:       600,
          background:   'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          top:          -200,
          left:         -200,
          filter:       'blur(40px)',
          pointerEvents:'none',
        }}
      />

      {/* ── Glow blob 2 (bottom-right) ── */}
      <div
        aria-hidden="true"
        style={{
          position:     'absolute',
          width:        500,
          height:       500,
          background:   'radial-gradient(circle, rgba(0,100,200,0.06) 0%, transparent 70%)',
          bottom:       -100,
          right:        -100,
          filter:       'blur(60px)',
          pointerEvents:'none',
        }}
      />

      {/* ── Floating particles ── */}
      {PARTICLES.map(p => (
        <motion.div
          key={p.id}
          aria-hidden="true"
          style={{
            position:     'absolute',
            left:         p.x,
            top:          p.y,
            width:        p.size,
            height:       p.size,
            borderRadius: '50%',
            background:   'rgba(0,212,255,0.4)',
            pointerEvents:'none',
          }}
          animate={{ y: [0, -p.amplitude, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      {/* ── Main container ── */}
      <div
        style={{
          maxWidth: 1200,
          margin:   '0 auto',
          padding:  '0 24px',
          width:    '100%',
          display:  'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:      60,
          alignItems:'center',
          position: 'relative',
          zIndex:   1,
        }}
      >
        {/* ════════════════ LEFT COLUMN ════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display:      'inline-flex',
              alignItems:   'center',
              gap:          10,
              padding:      '8px 20px',
              borderRadius: 999,
              background:   'rgba(0,212,255,0.08)',
              border:       '1px solid rgba(0,212,255,0.3)',
              width:        'fit-content',
            }}
          >
            <motion.span
              style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0 }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#00d4ff' }}>
              👋 Available for International Opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.6)', margin: 0 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 900,
              fontSize:   'clamp(36px, 6vw, 64px)',
              lineHeight: 1.05,
              margin:     0,
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip: 'text',
              animation:  'gradientShift 4s ease infinite',
            }}
          >
            Attar Ayoub
          </motion.h1>

          {/* Rotating title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, minHeight: 40, overflow: 'hidden' }}
          >
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 2.5vw, 22px)', color: 'rgba(255,255,255,0.7)' }}>
              I am a&nbsp;
            </span>
            <div style={{ position: 'relative', overflow: 'hidden', minWidth: 0 }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIdx}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0,  opacity: 1 }}
                  exit={{    y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{
                    display:    'block',
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 600,
                    fontSize:   'clamp(16px, 2.5vw, 24px)',
                    color:      '#00d4ff',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {TITLES[titleIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize:   'clamp(14px, 1.8vw, 18px)',
              color:      'rgba(255,255,255,0.65)',
              maxWidth:   520,
              lineHeight: 1.7,
              margin:     0,
            }}
          >
            Bridging Healthcare Technology &amp; Software Engineering
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 0 }}
          >
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                <div style={{ padding: '4px 16px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: 18, color: '#00d4ff', lineHeight: 1.2 }}>
                    {s.num}
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>
                    {s.label}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}
          >
            {/* Download CV */}
            <motion.button
              onClick={() => window.open('/cv-print.html', '_blank')}
              whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                display:      'inline-flex',
                alignItems:   'center',
                gap:          8,
                background:   '#00d4ff',
                color:        '#000000',
                fontFamily:   'DM Sans, sans-serif',
                fontWeight:   600,
                fontSize:     15,
                padding:      '14px 32px',
                borderRadius: 8,
                border:       'none',
                cursor:       'pointer',
              }}
            >
              <FaDownload size={15} />
              Download CV
            </motion.button>

            {/* View Projects */}
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ background: 'rgba(0,212,255,0.1)', borderColor: '#00d4ff' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                display:      'inline-flex',
                alignItems:   'center',
                gap:          8,
                background:   'transparent',
                color:        '#00d4ff',
                fontFamily:   'DM Sans, sans-serif',
                fontWeight:   600,
                fontSize:     15,
                padding:      '14px 32px',
                borderRadius: 8,
                border:       '1.5px solid rgba(0,212,255,0.5)',
                cursor:       'pointer',
              }}
            >
              View Projects
              <FaArrowDown size={14} />
            </motion.button>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/itsayoubattar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ background: 'rgba(0,119,181,0.3)', scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display:      'inline-flex',
                alignItems:   'center',
                justifyContent:'center',
                width:        48,
                height:       48,
                borderRadius: '50%',
                background:   'rgba(0,119,181,0.15)',
                border:       '1px solid rgba(0,119,181,0.4)',
                color:        '#0077b5',
                textDecoration:'none',
                flexShrink:   0,
              }}
            >
              <FaLinkedin size={20} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/ATTARAYOUB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ background: 'rgba(255,255,255,0.12)', scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display:      'inline-flex',
                alignItems:   'center',
                justifyContent:'center',
                width:        48,
                height:       48,
                borderRadius: '50%',
                background:   'rgba(255,255,255,0.05)',
                border:       '1px solid rgba(255,255,255,0.15)',
                color:        'rgba(255,255,255,0.8)',
                textDecoration:'none',
                flexShrink:   0,
              }}
            >
              <FaGithub size={20} />
            </motion.a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            style={{ display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <FaMapMarkerAlt size={13} color="rgba(0,212,255,0.6)" />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
              Casablanca, Morocco
            </span>
          </motion.div>
        </div>

        {/* ════════════════ RIGHT COLUMN — PHOTO ════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          style={{
            display:        'flex',
            justifyContent: 'center',
            alignItems:     'center',
            position:       'relative',
          }}
        >
          {/* Photo wrapper */}
          <div
            style={{
              position: 'relative',
              width:    'clamp(220px, 30vw, 340px)',
              height:   'clamp(280px, 38vw, 440px)',
              flexShrink: 0,
            }}
          >
            {/* Outer glow */}
            <div
              aria-hidden="true"
              style={{
                position:     'absolute',
                inset:        0,
                borderRadius: 24,
                background:   'radial-gradient(ellipse at center, rgba(0,212,255,0.2) 0%, transparent 70%)',
                filter:       'blur(20px)',
                transform:    'scale(1.1)',
                zIndex:       0,
              }}
            />

            {/* Gradient border frame */}
            <div
              aria-hidden="true"
              style={{
                position:     'absolute',
                inset:        -2,
                borderRadius: 26,
                background:   'linear-gradient(135deg, #00d4ff 0%, transparent 40%, transparent 60%, #00d4ff 100%)',
                zIndex:       1,
              }}
            />

            {/* Photo */}
            <div
              style={{
                position:     'relative',
                width:        '100%',
                height:       '100%',
                borderRadius: 24,
                overflow:     'hidden',
                zIndex:       2,
              }}
            >
              <img
                src="/profile.png"
                alt="Ayoub Attar - Full Stack Developer"
                style={{
                  width:          '100%',
                  height:         '100%',
                  objectFit:      'cover',
                  objectPosition: 'center top',
                  display:        'block',
                }}
              />
            </div>

            {/* Corner accent — top-left */}
            <div
              aria-hidden="true"
              style={{
                position:    'absolute',
                top:         -8,
                left:        -8,
                width:       24,
                height:      24,
                borderTop:   '2px solid #00d4ff',
                borderLeft:  '2px solid #00d4ff',
                borderRadius:'2px 0 0 0',
                zIndex:      3,
              }}
            />

            {/* Corner accent — bottom-right */}
            <div
              aria-hidden="true"
              style={{
                position:      'absolute',
                bottom:        -8,
                right:         -8,
                width:         24,
                height:        24,
                borderBottom:  '2px solid #00d4ff',
                borderRight:   '2px solid #00d4ff',
                borderRadius:  '0 0 2px 0',
                zIndex:        3,
              }}
            />

            {/* Floating tech tags */}
            {FLOAT_TAGS.map((tag, i) => (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, -tag.amp, 0] }}
                transition={{
                  opacity:  { duration: 0.4, delay: 0.9 + i * 0.1 },
                  scale:    { duration: 0.4, delay: 0.9 + i * 0.1 },
                  y:        { duration: tag.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
                }}
                style={{
                  ...tagStyle,
                  top:    tag.top,
                  right:  tag.right,
                  bottom: tag.bottom,
                  left:   tag.left,
                }}
              >
                {tag.label}
              </motion.div>
            ))}

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, type: 'spring', stiffness: 300 }}
              style={{
                position:            'absolute',
                bottom:              -20,
                left:                '50%',
                transform:           'translateX(-50%)',
                display:             'inline-flex',
                alignItems:          'center',
                gap:                 8,
                background:          'rgba(10,10,20,0.95)',
                border:              '1px solid rgba(0,212,255,0.3)',
                borderRadius:        999,
                padding:             '8px 20px',
                fontFamily:          'DM Sans, sans-serif',
                fontSize:            12,
                color:               'rgba(255,255,255,0.85)',
                backdropFilter:      'blur(10px)',
                WebkitBackdropFilter:'blur(10px)',
                whiteSpace:          'nowrap',
                zIndex:              10,
              }}
            >
              <motion.span
                style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', flexShrink: 0 }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              5+ Years Experience
              <span style={{ fontSize: 16 }}>🇲🇦</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{
          position:   'absolute',
          bottom:     32,
          left:       '50%',
          transform:  'translateX(-50%)',
          display:    'flex',
          flexDirection:'column',
          alignItems: 'center',
          gap:        6,
          cursor:     'pointer',
          opacity:    scrollOpacity,
          zIndex:     10,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width:        26,
            height:       40,
            borderRadius: 13,
            border:       '1.5px solid rgba(255,255,255,0.2)',
            display:      'flex',
            alignItems:   'flex-start',
            justifyContent:'center',
            paddingTop:   6,
          }}
        >
          <div style={{ width: 4, height: 8, borderRadius: 2, background: '#00d4ff' }} />
        </motion.div>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>
          Scroll to explore
        </span>
      </motion.div>
    </section>
  )
}
