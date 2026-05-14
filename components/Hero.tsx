'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

// Hostinger-style dark mockup: grid-paper background + dark card +
// floating purple "Deploy" button hovering at the corner
function HeroVisual() {
  return (
    <div className="relative">
      {/* Grid-paper backdrop */}
      <div
        className="absolute inset-0 -m-8 rounded-3xl opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden
      />

      <div className="relative">
        {/* Main dark card showing enrichment status */}
        <div className="rounded-2xl border border-white/10 bg-ink-800/90 overflow-hidden shadow-2xl shadow-black/60">

          {/* Window chrome */}
          <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/15" />
              <span className="text-[11px] font-mono text-slate-400">karakuri.app/lists/tokyo-saas</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-400">● Enriching</span>
          </div>

          {/* Table preview */}
          <div className="px-5 py-5">
            {/* Column header pills */}
            <div className="flex items-center gap-2 mb-4">
              {[
                { l: '企業名', c: '#27273B' },
                { l: 'Sansan', c: '#0EA5E9' },
                { l: '帝国DB', c: '#7C3AED' },
                { l: 'TSR', c: '#F97316' },
                { l: 'AI下書き', c: '#673DE6' },
              ].map((col, i) => (
                <span
                  key={col.l}
                  className="text-[10px] font-black px-2.5 py-1 rounded-md text-white"
                  style={{ backgroundColor: col.c + (i === 0 ? '' : 'CC') }}
                >
                  {col.l}
                </span>
              ))}
            </div>

            {/* Three rows */}
            <div className="space-y-2">
              {[
                { co: '株式会社モチコ', s: '田中 健 (CMO)', t: '12.4億', r: '85名', ai: 'done' as const, msg: '田中様、貴社のCRM刷新...' },
                { co: '合同会社サクラ商事', s: '山田 美咲 (VP)', t: '3.8億', r: '32名', ai: 'done' as const, msg: '山田様、採用拡大とのこと...' },
                { co: '株式会社ヒカリ', s: '佐藤 直樹 (CEO)', t: '—', r: '14名', ai: 'running' as const, msg: '実行中...' },
              ].map((r, i) => (
                <div key={i} className="bg-ink-700/60 border border-white/5 rounded-lg px-3 py-2.5 flex items-center gap-3 text-[11px]">
                  <span className="font-bold text-white truncate w-28">{r.co}</span>
                  <span className="text-slate-300 truncate w-28">{r.s}</span>
                  <span className="text-slate-400 w-12">{r.t}</span>
                  <span className="text-slate-400 w-12">{r.r}</span>
                  <span className={`flex items-center gap-1.5 flex-1 truncate text-[10px] italic ${r.ai === 'running' ? 'text-brand-400' : 'text-emerald-400'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${r.ai === 'running' ? 'bg-brand-400 animate-pulse' : 'bg-emerald-400'}`} />
                    "{r.msg}"
                  </span>
                </div>
              ))}
            </div>

            {/* Status row */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400">クレジット 142 / 5,000</span>
              <span className="text-[10px] font-bold text-emerald-400">残り 23社 · 自動エンリッチ中</span>
            </div>
          </div>
        </div>

        {/* Floating purple Deploy-style button */}
        <button className="absolute -top-4 -right-2 sm:-right-6 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-2xl shadow-brand-600/50 transition-colors flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
          HubSpotにPush
        </button>

        {/* Cursor arrow next to button */}
        <svg
          className="absolute -top-7 -right-12 hidden sm:block"
          width="22" height="22" viewBox="0 0 24 24" fill="white"
          aria-hidden
        >
          <path d="M2 2l8 18 2-8 8-2z" />
        </svg>
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
    <section className="relative pt-32 pb-20 px-6 bg-ink-900 overflow-hidden">
      {/* Subtle radial glow behind hero */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #673DE6 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left column */}
        <div>
          {/* Eyebrow — purple text, no chip, just text like Hostinger */}
          <p className="text-brand-400 text-sm sm:text-base font-bold mb-5">
            {t(content.hero.eyebrow)}
          </p>

          {/* Huge headline */}
          <h1 className="text-[2.75rem] sm:text-[3.75rem] lg:text-[4.5rem] font-black text-white leading-[1.02] tracking-tight mb-6 whitespace-pre-line">
            {t(content.hero.headline)}
          </h1>

          {/* Sub */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
            {t(content.hero.subheadline)}
          </p>

          {/* Includes — Hostinger green-check list */}
          <ul className="space-y-2.5 mb-8">
            {content.hero.includes.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-slate-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>{t(item)}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <button
              onClick={handleCta}
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-brand-600/30"
            >
              {t(content.hero.cta)}
            </button>
            <button
              onClick={handleDemoClick}
              className="flex items-center justify-center gap-2 border border-white/15 hover:border-white/25 text-white font-bold px-7 py-4 rounded-xl text-base transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              {t(content.hero.secondaryCta)}
            </button>
          </div>

          {/* Guarantee + Trustpilot row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              {t(content.hero.guarantee)}
            </span>
            {/* Trustpilot widget */}
            <span className="inline-flex items-center gap-1.5">
              <span className="font-semibold text-white">Excellent</span>
              <span className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="w-4 h-4 bg-[#00B67A] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
                    </svg>
                  </span>
                ))}
              </span>
              <a href="#" className="underline underline-offset-2 text-slate-300">347 reviews</a>
              <span className="font-bold text-[#00B67A] flex items-center gap-1">
                <span className="w-3 h-3 bg-[#00B67A] inline-block" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                Trustpilot
              </span>
            </span>
          </div>
        </div>

        {/* Right column — Clay-style table on dark */}
        <div className="lg:pl-4">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
