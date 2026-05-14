'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

function GlowFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden mb-8"
      style={{
        backgroundColor: '#0E0E1B',
        backgroundImage:
          'linear-gradient(rgba(139,111,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,111,255,0.06) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <div className="relative p-6" style={{ minHeight: 160 }}>
        {children}
      </div>
    </div>
  )
}

const stepVisuals = [
  () => (
    <div className="relative">
      <div className="bg-ink-700 border-2 border-brand-600 rounded-xl px-4 py-3 shadow-lg shadow-brand-600/20 max-w-[260px]">
        <div className="flex items-center justify-between mb-2">
          <div className="w-7 h-7 rounded bg-ink-600 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
          </div>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">推奨</span>
        </div>
        <p className="text-sm font-black text-white">企業リストをインポート</p>
        <p className="text-[11px] text-slate-400 mt-0.5">CSV · HubSpot · Salesforce</p>
      </div>
      <div className="absolute top-3 left-3 right-3 h-12 bg-ink-700/40 border border-white/5 rounded-xl -z-0" />
    </div>
  ),
  () => (
    <div className="space-y-2 max-w-[260px]">
      <div className="bg-ink-700 border border-white/10 rounded-lg px-3 py-2">
        <p className="text-[9px] text-slate-400 font-bold mb-1">エンリッチメント</p>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-sky-500 flex items-center justify-center"><span className="text-[8px] text-white font-black">S</span></div>
          <span className="text-[12px] font-bold text-white flex-1">Sansan</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
        </div>
      </div>
      <div className="bg-ink-700 border border-white/10 rounded-lg px-3 py-2">
        <p className="text-[9px] text-slate-400 font-bold mb-1">追加列</p>
        <p className="text-[11px] font-bold text-white">+ 帝国DB · TSR · Wantedly</p>
      </div>
      <button className="bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-lg w-full py-2 flex items-center justify-center gap-1.5 shadow-lg shadow-brand-600/30">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
        実行
      </button>
    </div>
  ),
  () => (
    <div className="space-y-2 max-w-[260px]">
      <div className="border-2 border-brand-600/60 rounded-xl px-3 py-2.5 flex items-center gap-2.5 bg-ink-700/50">
        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
        </div>
        <span className="text-sm font-bold text-white">AI下書き完了</span>
      </div>
      <div className="border border-white/10 rounded-xl px-3 py-2.5 flex items-center gap-2.5 bg-ink-700/50 opacity-80">
        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
        </div>
        <span className="text-sm font-bold text-white">HubSpotに送信済</span>
      </div>
    </div>
  ),
]

export default function HowItWorks() {
  const t = useT()

  return (
    <section className="py-28 px-6 bg-ink-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-[2.5rem] sm:text-5xl font-black text-white tracking-tight mb-5 leading-[1.05]">
            {t(content.howItWorks.sectionTitle)}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t(content.howItWorks.sectionSubtitle)}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {content.howItWorks.steps.map((step, i) => {
            const Visual = stepVisuals[i]
            return (
              <div key={i} className="bg-ink-800/60 border border-white/8 rounded-2xl p-6">
                <GlowFrame>
                  <Visual />
                </GlowFrame>
                <h3 className="font-black text-white text-xl mb-3">
                  {step.number}. {t(step.headline)}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t(step.description)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
