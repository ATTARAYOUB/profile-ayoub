import React, { useState } from 'react'
import { FiMessageCircle, FiChevronDown, FiChevronUp, FiUser } from 'react-icons/fi'

const QA = [
  {
    q: 'What roles are you currently looking for?',
    a: "I'm looking for backend or full‑stack engineer roles in healthtech, medtech, hospital IT, or data‑intensive products. I'm open to remote work and relocation, especially in the EU and GCC.",
  },
  {
    q: 'What is your tech stack?',
    a: 'My core stack is Java (Spring, Spring Boot, Hibernate) and Python (Django, Flask), with strong SQL/NoSQL database skills. I also work with Flutter for mobile and modern frontend technologies (HTML, CSS, JavaScript, React, Bootstrap).',
  },
  {
    q: 'Do you only work in healthcare?',
    a: "Healthcare is my main differentiator, but I'm open to any domain where I can build reliable backend systems and full‑stack applications (SaaS, fintech, internal tools, etc.).",
  },
  {
    q: 'Are you available for freelance or contract work?',
    a: 'Yes. I take on freelance and contract projects in parallel with my job search. See the "Freelance & Contract Work" section for details.',
  },
  {
    q: 'What is your education?',
    a: 'I hold a Licence ILSI (Ingénierie Logicielle et Systèmes d\'Information), completed in December 2025.',
  },
  {
    q: 'What languages do you speak?',
    a: 'Arabic (native), English (B2), and French (B2).',
  },
  {
    q: 'Where are you based, and are you open to relocation?',
    a: "I'm based in Casablanca, Morocco. I'm open to remote roles globally and to relocation, particularly in the EU and GCC.",
  },
]

function ChatPair({ pair, index }) {
  const [open, setOpen] = useState(index < 2)

  return (
    <div className="space-y-2 mb-4">
      {/* Question bubble (right side) */}
      <div className="flex items-end justify-end gap-2">
        <div className="chat-bubble-q">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[0.65rem] text-[#64748B] font-medium">You asked</span>
          </div>
          <p>{pair.q}</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#0F172A] flex items-center justify-center flex-shrink-0">
          <FiUser size={12} className="text-white" />
        </div>
      </div>

      {/* Answer bubble (left side) */}
      <div className="flex items-end gap-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}
        >
          <span className="text-white text-[0.6rem] font-bold">AA</span>
        </div>
        <div className="chat-bubble-a">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[0.65rem] text-[#2563EB] font-semibold">Ayoub</span>
            <span className="text-[0.65rem] text-[#94A3B8]">answered</span>
          </div>
          <p>{pair.a}</p>
        </div>
      </div>
    </div>
  )
}

/* Accordion fallback for extra Q&A items on mobile */
function AccordionItem({ pair, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#E2E8F0] rounded-xl overflow-hidden mb-3">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[#F8FAFC] transition-colors"
        onClick={() => setOpen(v => !v)}
      >
        <span className="font-medium text-[#0F172A] text-sm pr-4">{pair.q}</span>
        {open
          ? <FiChevronUp size={16} className="text-[#2563EB] flex-shrink-0" />
          : <FiChevronDown size={16} className="text-[#94A3B8] flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <p className="text-[#334155] text-sm leading-relaxed">{pair.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding section-alt">
      <div className="section-container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label">
            <FiMessageCircle size={14} /> FAQ & Quick Answers
          </p>
          <h2 className="section-title">Common Questions</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            Common questions about my background, availability, and how I work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Chat-style bubbles (desktop) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}
                >
                  <span className="text-white text-xs font-bold">AA</span>
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] text-sm">Ayoub Attar</p>
                  <p className="text-[#10B981] text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
                    Available for opportunities
                  </p>
                </div>
              </div>

              {/* Scrollable chat */}
              <div className="p-5 max-h-[500px] overflow-y-auto space-y-1">
                {QA.map((pair, i) => (
                  <ChatPair key={i} pair={pair} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Accordion (always visible, primary on mobile) */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
              Quick Reference
            </p>
            {QA.map((pair, i) => (
              <AccordionItem key={i} pair={pair} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
