'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

// Hostinger-style hero visual: a polished product-shot of the workflow canvas
function HeroVisual() {
  const nodes = [
    { id: 'sansan', label: 'Sansan', sub: '名刺取込', color: '#0EA5E9', x: 8, y: 14 },
    { id: 'hubspot', label: 'HubSpot', sub: 'CRM', color: '#F97316', x: 38, y: 14 },
    { id: 'chatwork', label: 'Chatwork', sub: '承認', color: '#10B981', x: 68, y: 14 },
    { id: 'shopify', label: 'Shopify', sub: '顧客作成', color: '#7C3AED', x: 38, y: 52 },
    { id: 'line', label: 'LINE', sub: '通知', color: '#06C755', x: 68, y: 74 },
    { id: 'ai', label: 'AI Draft', sub: '下書き', color: '#D97706', x: 8, y: 74 },
  ]

  return (
    <div className="relative">
      {/* Decorative glow behind card */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-amber-200/40 via-orange-100/30 to-rose-100/20 blur-3xl rounded-[40px]" aria-hidden />

      <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-amber-300/20 bg-white">
        {/* Window chrome */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="ml-3 text-[11px] font-bold text-slate-700">商談獲得 → 顧客通知 ワークフロー</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-700">稼働中</span>
          </div>
        </div>

        {/* Canvas */}
        <div className="bg-slate-50 p-5 relative" style={{ minHeight: 380 }}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <marker id="hostarrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#94A3B8" />
              </marker>
            </defs>
            <path d="M 22 18 L 38 18" stroke="#94A3B8" strokeWidth="0.4" fill="none" markerEnd="url(#hostarrow)" />
            <path d="M 52 18 L 68 18" stroke="#94A3B8" strokeWidth="0.4" fill="none" markerEnd="url(#hostarrow)" />
            <path d="M 68 22 L 52 52" stroke="#94A3B8" strokeWidth="0.4" fill="none" markerEnd="url(#hostarrow)" />
            <path d="M 52 60 L 68 74" stroke="#94A3B8" strokeWidth="0.4" fill="none" markerEnd="url(#hostarrow)" />
            <path d="M 38 60 L 22 74" stroke="#94A3B8" strokeWidth="0.4" strokeDasharray="1 1" fill="none" markerEnd="url(#hostarrow)" />
          </svg>

          {nodes.map((n) => (
            <div
              key={n.id}
              className="absolute bg-white border-2 rounded-xl px-3 py-2 shadow-sm"
              style={{ left: `${n.x}%`, top: `${n.y}%`, borderColor: n.color, minWidth: 110 }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: n.color }} />
                <span className="text-[11px] font-black text-slate-900">{n.label}</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5">{n.sub}</p>
            </div>
          ))}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full border border-amber-200 px-3 py-1 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] font-bold text-amber-800">承認待ち · Chatwork</span>
          </div>
        </div>

        {/* Run history footer */}
        <div className="bg-white border-t border-slate-100 px-5 py-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { val: '247', label: '今月の実行' },
              { val: '99.2%', label: '成功率' },
              { val: '4.2h', label: '節約時間/週' },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-lg font-black text-slate-900 leading-none">{m.val}</p>
                <p className="text-[10px] text-slate-400 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge bottom-left */}
      <div className="absolute -bottom-5 -left-4 bg-white rounded-xl border border-slate-200 shadow-lg px-3 py-2 flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-emerald-100 flex items-center justify-center">
          <span className="text-emerald-700 text-xs">✓</span>
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-900 leading-tight">Sansan 名刺取込</p>
          <p className="text-[9px] text-slate-400">1.2秒で完了</p>
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

  const handleDemoClick = () => {
    trackEvent('demo_click', { product_name: 'karakuri' })
  }

  return (
    <section className="pt-24 pb-20 px-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left column */}
        <div>
          {/* Eyebrow with discount-style chip */}
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              {t(content.hero.eyebrow)}
            </span>
            <span className="hidden sm:inline-flex bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">
              {t(content.hero.guarantee)}
            </span>
          </div>

          <h1 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-black text-slate-900 leading-[1.02] tracking-tight mb-5 whitespace-pre-line">
            {t(content.hero.headline)}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
            {t(content.hero.subheadline)}
          </p>

          {/* Includes list — Hostinger pattern */}
          <ul className="space-y-2 mb-7">
            {content.hero.includes.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{t(item)}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <button
              onClick={handleCta}
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-amber-300/30"
            >
              {t(content.hero.cta)}
            </button>
            <button
              onClick={handleDemoClick}
              className="flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 font-bold px-7 py-4 rounded-xl text-base transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              {t(content.hero.secondaryCta)}
            </button>
          </div>

          {/* Tiny trust row */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <span>{t({ jp: 'APPI準拠', en: 'APPI compliant' })}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20" /></svg>
              <span>{t({ jp: '日本国内データ', en: 'JP-region data' })}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              <span>{t({ jp: '3分で導入', en: '3-min setup' })}</span>
            </span>
          </div>
        </div>

        {/* Right column — product visual */}
        <div className="lg:pl-4">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
