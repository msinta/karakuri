'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

const stepVisuals = [
  // 1: Import — CSV / HubSpot / Search options
  () => (
    <div className="space-y-1.5">
      {[
        { l: 'CSVをアップロード', sub: '1,247 行' },
        { l: 'HubSpotから同期', sub: 'Tokyo SaaS' },
        { l: '条件で検索', sub: '従業員50-200名' },
      ].map((opt, i) => (
        <div key={opt.l} className={`flex items-center gap-2 rounded-md px-2 py-1.5 border ${i === 0 ? 'bg-brand-50 border-brand-200' : 'bg-white border-slate-200'}`}>
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 0 ? 'bg-brand-600' : 'bg-slate-300'}`} />
          <span className="text-[11px] font-bold text-slate-700 flex-1">{opt.l}</span>
          <span className="text-[9px] text-slate-400">{opt.sub}</span>
        </div>
      ))}
    </div>
  ),
  // 2: Enrich columns — Clay-style column header chips
  () => (
    <div className="space-y-1.5">
      {[
        { src: 'S', name: 'Sansan', col: '#0EA5E9', label: '担当者を取得' },
        { src: 'T', name: '帝国DB', col: '#7C3AED', label: '売上規模' },
        { src: 'R', name: 'TSR', col: '#F97316', label: '取引先' },
        { src: 'W', name: 'Wantedly', col: '#10B981', label: 'カルチャー' },
      ].map((c) => (
        <div key={c.name} className="flex items-center gap-2 bg-white rounded-md px-2 py-1.5 border border-slate-200">
          <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: c.col }}>
            <span className="text-white text-[7px] font-black">{c.src}</span>
          </div>
          <span className="text-[10px] font-bold text-slate-700">{c.name}</span>
          <span className="text-[9px] text-slate-400 truncate">— {c.label}</span>
        </div>
      ))}
    </div>
  ),
  // 3: AI personalize + push to CRM
  () => (
    <div className="space-y-2">
      <div className="bg-amber-50 border border-amber-200 rounded-md p-2">
        <p className="text-[9px] font-black text-amber-800 uppercase tracking-widest mb-0.5">🤖 AI下書き</p>
        <p className="text-[10px] text-slate-700 italic leading-snug">
          田中様、貴社の新CRM導入のニュースを拝見し...
        </p>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <button className="text-[10px] font-black bg-emerald-600 text-white py-1.5 rounded-md">✓ HubSpotに登録</button>
        <button className="text-[10px] font-semibold border border-slate-200 text-slate-600 py-1.5 rounded-md">編集</button>
      </div>
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
