import React, { useState, useRef, useEffect } from 'react'
import { FiMessageCircle, FiX, FiSend, FiMinus } from 'react-icons/fi'

/* ── Pre-programmed Q&A knowledge base ────────────────── */
const KB = [
  {
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'bonjour', 'salut', 'salam'],
    answer: "Hi! I'm Ayoub's assistant 👋 Ask me anything about his skills, experience, availability, or how to get in touch.",
  },
  {
    patterns: ['available', 'hire', 'open', 'looking', 'opportunity', 'job', 'work', 'employ'],
    answer: "Yes — Ayoub is currently open to full-time, part-time, freelance, and contract roles. He's especially interested in healthtech, medtech, and hospital IT positions. Remote-friendly and open to relocation in EU/GCC.",
  },
  {
    patterns: ['stack', 'tech', 'language', 'framework', 'use', 'know', 'skill', 'develop'],
    answer: "Core stack: Java (Spring Boot, Hibernate), Python (Django, Flask), Flutter for mobile, and React + HTML/CSS/JS for frontend. Strong SQL/NoSQL database skills: MySQL, Oracle, SQL Server, MongoDB.",
  },
  {
    patterns: ['healthcare', 'hospital', 'pyxis', 'rowa', 'bd rowa', 'hl7', 'pharmacy', 'medstation', 'biomed'],
    answer: "Ayoub has 2+ years maintaining BD Rowa VMAX 160 and Pyxis Medstation (3500/4000/ES) systems at CHU Marrakech, CHU Fès, and other sites. He handles HL7 integrations, CCE systems, and trains pharmacy staff.",
  },
  {
    patterns: ['freelance', 'contract', 'project', 'cost', 'price', 'rate', 'quote', 'estimate'],
    answer: "Ayoub takes freelance and contract work alongside his job search. He offers project-based, hourly, and long-term contracts. Send a project brief to ATTAR.AYOUB@outlook.com and he'll respond with a proposal within 48h.",
  },
  {
    patterns: ['education', 'degree', 'study', 'university', 'school', 'diploma', 'licence', 'ilsi'],
    answer: "Ayoub holds a Licence ILSI (Ingénierie Logicielle et Systèmes d'Information), completed in December 2025.",
  },
  {
    patterns: ['language', 'speak', 'arabic', 'french', 'english', 'francais'],
    answer: "Ayoub speaks Arabic (native), English (B2), and French (B2). He can work in any of these languages.",
  },
  {
    patterns: ['location', 'where', 'based', 'casablanca', 'morocco', 'relocat', 'remote'],
    answer: "Based in Casablanca, Morocco (UTC+1). Open to fully remote roles globally and to relocation, particularly in the EU and GCC.",
  },
  {
    patterns: ['contact', 'email', 'reach', 'message', 'phone', 'whatsapp', 'linkedin'],
    answer: "Best ways to reach Ayoub:\n📧 ATTAR.AYOUB@outlook.com\n📱 +212 620 834 063 (WhatsApp)\n💼 linkedin.com/in/itsayoubattar",
  },
  {
    patterns: ['project', 'built', 'github', 'portfolio', 'passmanager', 'banking', 'gestion'],
    answer: "Featured projects include PassManager (Django + AES encryption), Gestion Bancaire (Java Swing + MySQL MVC), Gestion Étudiants (Python + Tkinter), and PostWall (Node.js + MongoDB). All on github.com/ATTARAYOUB.",
  },
  {
    patterns: ['certif', 'ibm', 'udemy', 'coursera', 'data science', 'certificate'],
    answer: "Ayoub holds 8 verified certifications including IBM Data Science (Coursera), AI/Deep Learning (Udemy), Frontend Development (Udemy), and a Language B2 certificate from Wall Street English.",
  },
  {
    patterns: ['experience', 'year', 'work history', 'background', 'career'],
    answer: "Ayoub has 4+ years of experience: currently Maintenance Manager for BD Rowa & Pyxis systems at university hospitals (2023–present), previously IT Manager at a private clinic, and multiple internships in Java, web, and IT support.",
  },
]

function getBotReply(text) {
  const lower = text.toLowerCase().trim()
  for (const entry of KB) {
    if (entry.patterns.some(p => lower.includes(p))) {
      return entry.answer
    }
  }
  return "I'm not sure about that specific question. For detailed inquiries, please email Ayoub directly at ATTAR.AYOUB@outlook.com or use the Contact section — he typically replies within 24–48 hours."
}

const SUGGESTIONS = [
  'What is your tech stack?',
  'Are you available for hire?',
  'Tell me about healthcare experience',
  'How can I contact you?',
  'Freelance rates?',
]

function Message({ msg }) {
  const isBot = msg.role === 'bot'
  return (
    <div className={`flex items-end gap-2 ${isBot ? '' : 'flex-row-reverse'}`}>
      {/* Avatar */}
      {isBot && (
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5 text-white text-[0.55rem] font-bold"
          style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)', minWidth: 24 }}
        >
          AA
        </div>
      )}
      <div
        className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
        style={
          isBot
            ? { background: '#F1F5F9', color: '#1E293B', borderBottomLeftRadius: 4 }
            : { background: '#2563EB', color: '#ffffff', borderBottomRightRadius: 4 }
        }
      >
        {msg.text}
      </div>
    </div>
  )
}

export default function Chatbot() {
  const [open,        setOpen]        = useState(false)
  const [minimised,   setMinimised]   = useState(false)
  const [messages,    setMessages]    = useState([
    { id: 0, role: 'bot', text: "Hi! 👋 I'm Ayoub's assistant. Ask me about his skills, experience, availability, or how to work together." },
  ])
  const [input,       setInput]       = useState('')
  const [typing,      setTyping]      = useState(false)
  const [unread,      setUnread]      = useState(0)
  const bottomRef   = useRef(null)
  const inputRef    = useRef(null)

  // Auto-scroll to latest message
  useEffect(() => {
    if (open && !minimised) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open, minimised])

  // Focus input when opened
  useEffect(() => {
    if (open && !minimised) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setUnread(0)
    }
  }, [open, minimised])

  const sendMessage = (text) => {
    const trimmed = (text || input).trim()
    if (!trimmed) return

    const userMsg = { id: Date.now(), role: 'user', text: trimmed }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    // Simulate typing delay for realism
    setTimeout(() => {
      const reply = getBotReply(trimmed)
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', text: reply }])
      setTyping(false)
      if (!open || minimised) setUnread(n => n + 1)
    }, 600 + Math.random() * 400)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* ── Chat panel ── */}
      <div
        className="fixed z-[999] transition-all duration-300"
        style={{
          bottom: '90px',
          right: '24px',
          width: 'min(360px, calc(100vw - 32px))',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
          transformOrigin: 'bottom right',
        }}
      >
        <div
          className="rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: '#ffffff',
            boxShadow: '0 8px 40px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid #E2E8F0',
            height: minimised ? 'auto' : '480px',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#0F172A,#1E293B)' }}
          >
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}
                >
                  AA
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#10B981] rounded-full border-2 border-[#1E293B]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">Ayoub's Assistant</p>
                <p className="text-[#10B981] text-xs mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
                  Online
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setMinimised(v => !v)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
                aria-label={minimised ? 'Expand chat' : 'Minimise chat'}
              >
                <FiMinus size={14} />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <FiX size={14} />
              </button>
            </div>
          </div>

          {/* Body — hidden when minimised */}
          {!minimised && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ background: '#F8FAFC' }}>
                {messages.map(msg => (
                  <Message key={msg.id} msg={msg} />
                ))}
                {typing && (
                  <div className="flex items-end gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[0.55rem] font-bold flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}
                    >
                      AA
                    </div>
                    <div className="px-3.5 py-2.5 rounded-2xl bg-[#F1F5F9]" style={{ borderBottomLeftRadius: 4 }}>
                      <div className="flex gap-1 items-center h-4">
                        {[0, 1, 2].map(i => (
                          <span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]"
                            style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Suggestion chips */}
              {messages.length <= 2 && (
                <div className="px-4 py-2 flex gap-2 overflow-x-auto flex-shrink-0 border-t border-[#E2E8F0]"
                  style={{ scrollbarWidth: 'none', background: '#ffffff' }}>
                  {SUGGESTIONS.map(s => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border border-[#BFDBFE] text-[#2563EB] bg-[#EFF6FF] hover:bg-[#DBEAFE] transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="px-3 py-3 border-t border-[#E2E8F0] flex items-center gap-2 flex-shrink-0 bg-white">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask me anything…"
                  className="flex-1 text-sm outline-none px-3 py-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#1E293B] placeholder-[#94A3B8] focus:border-[#2563EB] focus:bg-white transition-colors"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-all flex-shrink-0"
                  style={{
                    background: input.trim() ? '#2563EB' : '#CBD5E1',
                    cursor: input.trim() ? 'pointer' : 'default',
                  }}
                  aria-label="Send message"
                >
                  <FiSend size={15} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Floating button ── */}
      <button
        onClick={() => { setOpen(v => !v); setMinimised(false); setUnread(0) }}
        className="fixed z-[999] flex items-center justify-center rounded-full text-white transition-all duration-300"
        style={{
          bottom: '24px',
          right: '24px',
          width: 56,
          height: 56,
          background: open ? '#1E293B' : 'linear-gradient(135deg,#2563EB,#06B6D4)',
          boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
          transform: open ? 'rotate(0deg)' : 'rotate(0deg)',
        }}
        aria-label={open ? 'Close chat' : 'Open chat with Ayoub\'s assistant'}
      >
        {open
          ? <FiX size={22} />
          : <FiMessageCircle size={22} />
        }
        {/* Unread badge */}
        {!open && unread > 0 && (
          <span
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#EF4444] text-white text-[0.65rem] font-bold flex items-center justify-center"
          >
            {unread}
          </span>
        )}
        {/* Pulse ring when closed */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full"
            style={{ animation: 'chatPulse 2.5s ease-out infinite', border: '2px solid rgba(37,99,235,0.5)' }}
            aria-hidden="true"
          />
        )}
      </button>

      {/* Bounce + pulse keyframes */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%            { transform: translateY(-5px); }
        }
        @keyframes chatPulse {
          0%   { transform: scale(1);    opacity: 0.7; }
          70%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
      `}</style>
    </>
  )
}
