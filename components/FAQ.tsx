'use client'

import { useState } from 'react'
import { useT } from '@/context/LanguageContext'
import content from '@/content'

export default function FAQ() {
  const t = useT()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-28 px-6 bg-ink-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[2.5rem] sm:text-5xl font-black text-white text-center mb-12 tracking-tight leading-[1.05]">
          {t(content.faq.sectionTitle)}
        </h2>

        <div className="space-y-3">
          {content.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`bg-ink-800/60 rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-brand-600/50' : 'border-white/8 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-black text-white text-base">
                    {t(item.q)}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform ${isOpen ? 'bg-brand-600 text-white rotate-45' : 'bg-white/10 text-slate-300'}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {t(item.a)}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
