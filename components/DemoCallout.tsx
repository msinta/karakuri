'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

export default function DemoCallout() {
  const t = useT()

  const handleClick = () => {
    trackEvent('demo_click', { product_name: 'karakuri' })
  }

  return (
    <section className="py-16 px-6 bg-ink-900">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative rounded-3xl border border-white/8 overflow-hidden"
          style={{
            backgroundColor: '#0E0E1B',
            backgroundImage:
              'linear-gradient(rgba(139,111,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,111,255,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-0 items-center">

            {/* Left — copy */}
            <div className="p-10 sm:p-14">
              <span className="inline-flex items-center bg-brand-500/15 text-brand-300 text-xs font-black px-3 py-1 rounded-full border border-brand-500/30 mb-6">
                {t(content.demoCallout.badge)}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white mb-5 leading-[1.1] tracking-tight whitespace-pre-line">
                {t(content.demoCallout.headline)}
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-7 max-w-md">
                {t(content.demoCallout.description)}
              </p>

              <button
                onClick={handleClick}
                className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-bold text-sm transition-colors"
              >
                {t(content.demoCallout.cta)}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </button>
            </div>

            {/* Right — code/data window with floating purple action */}
            <div className="relative p-8 sm:p-10 flex items-center justify-center min-h-[340px]">
              {/* Stacked window frames */}
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-2 -left-2 right-2 bottom-2 bg-ink-700/40 border border-white/5 rounded-xl" />
                <div className="absolute -top-1 -left-1 right-1 bottom-1 bg-ink-700/60 border border-white/8 rounded-xl" />

                {/* Front window */}
                <div className="relative bg-ink-800 border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/40">
                  <div className="bg-ink-700/60 px-3 py-2 flex items-center gap-1.5 border-b border-white/5">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="ml-2 text-[10px] text-slate-500 font-mono">draft.json</span>
                  </div>
                  <div className="p-3 font-mono text-[11px] leading-relaxed">
                    {[
                      { n: 1, code: '{', c: 'text-slate-500' },
                      { n: 2, code: '  "company": "株式会社モチコ",', c: 'text-slate-300' },
                      { n: 3, code: '  "contact": "田中 健 (CMO)",', c: 'text-slate-300' },
                      { n: 4, code: '  "revenue": "12.4億",', c: 'text-slate-300' },
                      { n: 5, code: '  "ai_draft":', c: 'text-slate-300' },
                      { n: 6, code: '    "田中様、貴社のCRM刷新...",', c: 'text-brand-300' },
                      { n: 7, code: '  "approved_by": "Chatwork"', c: 'text-emerald-400' },
                      { n: 8, code: '}', c: 'text-slate-500' },
                    ].map((line) => (
                      <div key={line.n} className="flex">
                        <span className="text-slate-600 w-6 text-right pr-2 select-none">{line.n}</span>
                        <span className={line.c}>{line.code}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating purple "Push" button */}
                <button
                  onClick={handleClick}
                  className="absolute -top-4 -right-4 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-2xl shadow-brand-600/50 transition-colors flex items-center gap-2"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                  Push
                </button>

                {/* Cursor */}
                <svg
                  className="absolute -top-9 right-2 hidden sm:block"
                  width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden
                >
                  <path d="M2 2l8 18 2-8 8-2z" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
