'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

// Inline workflow node-graph mockup: Sansan → HubSpot → Chatwork → Shopify → LINE
function WorkflowMockup() {
  const nodes = [
    { id: 'sansan', label: 'Sansan', sub: '名刺取込', color: '#0EA5E9', x: 12, y: 18 },
    { id: 'hubspot', label: 'HubSpot', sub: 'CRM', color: '#F97316', x: 38, y: 18 },
    { id: 'chatwork', label: 'Chatwork', sub: '承認', color: '#10B981', x: 64, y: 18 },
    { id: 'shopify', label: 'Shopify', sub: '顧客作成', color: '#7C3AED', x: 38, y: 58 },
    { id: 'line', label: 'LINE', sub: '通知', color: '#06C755', x: 64, y: 78 },
    { id: 'ai', label: 'AI', sub: '下書き', color: '#D97706', x: 12, y: 78 },
  ]

  return (
    <div className="rounded-2xl overflow-hidden border-[6px] border-slate-900 shadow-2xl shadow-slate-300/60 bg-white text-left">
      {/* Window chrome */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="ml-3 text-[10px] font-bold text-slate-700">商談獲得 → 顧客通知 ワークフロー</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-bold text-emerald-700">稼働中</span>
        </div>
      </div>

      {/* Canvas */}
      <div className="bg-slate-50 p-4 relative" style={{ minHeight: 360 }}>
        {/* Connecting lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#94A3B8" />
            </marker>
          </defs>
          <path d="M 22 22 L 38 22" stroke="#94A3B8" strokeWidth="0.4" fill="none" markerEnd="url(#arrowhead)" />
          <path d="M 48 22 L 64 22" stroke="#94A3B8" strokeWidth="0.4" fill="none" markerEnd="url(#arrowhead)" />
          <path d="M 64 28 L 48 58" stroke="#94A3B8" strokeWidth="0.4" fill="none" markerEnd="url(#arrowhead)" />
          <path d="M 48 64 L 64 78" stroke="#94A3B8" strokeWidth="0.4" fill="none" markerEnd="url(#arrowhead)" />
          <path d="M 38 62 L 22 78" stroke="#94A3B8" strokeWidth="0.4" strokeDasharray="1 1" fill="none" markerEnd="url(#arrowhead)" />
        </svg>

        {/* Nodes */}
        {nodes.map((n) => (
          <div
            key={n.id}
            className="absolute bg-white border-2 rounded-lg px-2.5 py-1.5 shadow-sm"
            style={{ left: `${n.x}%`, top: `${n.y}%`, borderColor: n.color, minWidth: 92 }}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: n.color }} />
              <span className="text-[10px] font-black text-slate-900">{n.label}</span>
            </div>
            <p className="text-[9px] text-slate-500 mt-0.5">{n.sub}</p>
          </div>
        ))}

        {/* Status pill bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full border border-slate-200 px-3 py-1 flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-[9px] font-bold text-slate-700">承認待ち · Chatwork</span>
        </div>
      </div>

      {/* Run history footer */}
      <div className="bg-white border-t border-slate-100 px-4 py-3">
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { val: '247', label: '今月の実行' },
            { val: '99.2%', label: '成功率' },
            { val: '4.2h', label: '節約時間/週' },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-base font-black text-slate-900 leading-none">{m.val}</p>
              <p className="text-[9px] text-slate-400 mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero({ onCtaClick }: { onCtaClick: () => void }) {
  const t = useT()

  const handleCta = () => {
    trackEvent('cta_click', { product_name: 'karakuri' })
    onCtaClick()
  }

  const headline = t(content.hero.headline)
  const lines = headline.split('\n')
  const lastLine = lines[lines.length - 1]
  const prevLines = lines.slice(0, -1)

  return (
    <section className="pt-24 pb-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        <div className="w-full lg:w-[48%] shrink-0">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-full border border-brand-100 mb-4">
            {t(content.hero.badge)}
          </span>
          <h1 className="text-[2.6rem] sm:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight mb-5">
            {prevLines.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
            <span className="relative inline-block">
              {lastLine}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 8 C50 2, 100 10, 150 6 C200 2, 250 10, 298 6"
                  stroke="#D97706"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-slate-500 text-base leading-relaxed mb-7 max-w-md">
            {t(content.hero.subheadline)}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <button
              onClick={handleCta}
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-7 py-3 rounded-full text-sm transition-colors shadow-md shadow-brand-200"
            >
              {t(content.hero.cta)}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-1.5">
              {[
                { color: '#D97706', initial: 'T' },
                { color: '#F59E0B', initial: 'S' },
                { color: '#B45309', initial: 'Y' },
                { color: '#D97706', initial: 'K' },
                { color: '#FCD34D', initial: 'M' },
              ].map((av, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold" style={{ backgroundColor: av.color }}>
                  {av.initial}
                </div>
              ))}
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-bold text-slate-800">80+</span>
              {' '}{t({ jp: '店舗が事前登録中', en: 'Japanese stores on the waitlist' })}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[52%]">
          <WorkflowMockup />
        </div>
      </div>
    </section>
  )
}
