'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

const stepVisuals = [
  // 1: Connect — three logos linking
  () => (
    <div className="flex items-center justify-center gap-2">
      {[
        { c: '#0EA5E9', l: 'S' },
        { c: '#10B981', l: 'C' },
        { c: '#7C3AED', l: 'S' },
      ].map((b, i) => (
        <div key={i} className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: b.c }}>
          <span className="text-white text-sm font-black">{b.l}</span>
        </div>
      ))}
      <span className="text-2xl text-slate-300 mx-1">⇄</span>
      <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center shadow-sm">
        <span className="text-white text-sm font-black">K</span>
      </div>
    </div>
  ),
  // 2: Pick template — stacked template cards
  () => (
    <div className="space-y-1.5">
      {['Sansan → Shopify顧客', 'Shopify注文 → Chatwork', 'カート離脱 → HubSpot'].map((tpl, i) => (
        <div key={tpl} className={`flex items-center gap-2 rounded-md px-2 py-1.5 border ${i === 0 ? 'bg-brand-50 border-brand-200' : 'bg-white border-slate-200'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
          <span className="text-[11px] font-bold text-slate-700">{tpl}</span>
        </div>
      ))}
    </div>
  ),
  // 3: Run & scale — KPIs
  () => (
    <div className="grid grid-cols-3 gap-2">
      {[
        { v: '247', l: '実行' },
        { v: '99%', l: '成功率' },
        { v: '4h', l: '節約' },
      ].map((k) => (
        <div key={k.l} className="bg-slate-50 rounded-lg py-2 text-center">
          <p className="text-base font-black text-slate-900 leading-none">{k.v}</p>
          <p className="text-[9px] text-slate-400 mt-1">{k.l}</p>
        </div>
      ))}
    </div>
  ),
]

export default function HowItWorks() {
  const t = useT()

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            {t(content.howItWorks.sectionTitle)}
          </h2>
          <p className="text-slate-500 text-base">
            {t(content.howItWorks.sectionSubtitle)}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {content.howItWorks.steps.map((step, i) => {
            const Visual = stepVisuals[i]
            return (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 text-sm font-black flex items-center justify-center">
                    {step.number}
                  </span>
                  <h3 className="font-black text-slate-900 text-base">
                    {t(step.headline)}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  {t(step.description)}
                </p>
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-4">
                  <Visual />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
