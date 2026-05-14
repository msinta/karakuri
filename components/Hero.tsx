'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

// Clay-style enrichment table — rows are Japanese companies,
// columns are JP data sources + AI personalization steps
function ClayStyleTable() {
  const columns = [
    { key: 'company', label: '企業名', sub: 'Company', source: null, w: 'min-w-[150px]' },
    { key: 'sansan', label: 'Sansan', sub: '担当者', source: { color: '#0EA5E9', initial: 'S' }, w: 'min-w-[140px]' },
    { key: 'tdb', label: '帝国DB', sub: '売上規模', source: { color: '#7C3AED', initial: 'T' }, w: 'min-w-[100px]' },
    { key: 'tsr', label: 'TSR', sub: '従業員数', source: { color: '#F97316', initial: 'R' }, w: 'min-w-[100px]' },
    { key: 'ai', label: 'AI下書き', sub: '日本語パーソナライズ', source: { color: '#D97706', initial: 'AI' }, w: 'min-w-[180px]' },
  ]

  const rows = [
    {
      company: '株式会社モチコ',
      url: 'mochico.jp',
      sansan: { name: '田中 健', role: 'CMO', state: 'done' as const },
      tdb: { val: '12.4億', state: 'done' as const },
      tsr: { val: '85名', state: 'done' as const },
      ai: { preview: '田中様、貴社の新CRM導入のニュースを拝見し...', state: 'done' as const },
    },
    {
      company: '合同会社サクラ商事',
      url: 'sakura-trade.co.jp',
      sansan: { name: '山田 美咲', role: 'VP Sales', state: 'done' as const },
      tdb: { val: '3.8億', state: 'done' as const },
      tsr: { val: '32名', state: 'done' as const },
      ai: { preview: '山田様、Wantedlyで採用拡大中とのこと...', state: 'done' as const },
    },
    {
      company: '株式会社ヒカリ',
      url: 'hikari.io',
      sansan: { name: '佐藤 直樹', role: 'CEO', state: 'done' as const },
      tdb: { val: '—', state: 'pending' as const },
      tsr: { val: '14名', state: 'done' as const },
      ai: { preview: '実行中...', state: 'running' as const },
    },
    {
      company: 'テクノ株式会社',
      url: 'techno.jp',
      sansan: { name: '—', role: '', state: 'queued' as const },
      tdb: { val: '—', state: 'queued' as const },
      tsr: { val: '—', state: 'queued' as const },
      ai: { preview: '—', state: 'queued' as const },
    },
  ]

  return (
    <div className="relative">
      {/* Decorative glow */}
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
            <span className="ml-3 text-[11px] font-bold text-slate-700">東京 SaaS リスト · 1,247社</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-slate-400 hidden sm:inline">クレジット使用: 142 / 5,000</span>
            <span className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded">+ 列を追加</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/60">
                {columns.map((c) => (
                  <th key={c.key} className={`${c.w} px-3 py-2.5`}>
                    <div className="flex items-center gap-1.5">
                      {c.source && (
                        <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: c.source.color }}>
                          <span className="text-white text-[8px] font-black">{c.source.initial}</span>
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-[11px] font-black text-slate-800 leading-none">{c.label}</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">{c.sub}</p>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="px-3 py-2.5">
                    <div>
                      <p className="text-[11px] font-bold text-slate-900 truncate">{r.company}</p>
                      <p className="text-[9px] text-slate-400 truncate">{r.url}</p>
                    </div>
                  </td>
                  <td className="px-3 py-2.5">
                    {r.sansan.state === 'done' ? (
                      <div>
                        <p className="text-[11px] font-semibold text-slate-700 truncate">{r.sansan.name}</p>
                        <p className="text-[9px] text-slate-400 truncate">{r.sansan.role}</p>
                      </div>
                    ) : (
                      <span className="text-[10px] text-slate-300">待機中</span>
                    )}
                  </td>
                  <td className="px-3 py-2.5">
                    {r.tdb.state === 'done' ? (
                      <span className="text-[11px] font-semibold text-slate-700">{r.tdb.val}</span>
                    ) : r.tdb.state === 'pending' ? (
                      <span className="text-[10px] text-amber-600 font-bold">未公開</span>
                    ) : (
                      <span className="text-[10px] text-slate-300">—</span>
                    )}
                  </td>
                  <td className="px-3 py-2.5">
                    {r.tsr.state === 'done' ? (
                      <span className="text-[11px] font-semibold text-slate-700">{r.tsr.val}</span>
                    ) : (
                      <span className="text-[10px] text-slate-300">—</span>
                    )}
                  </td>
                  <td className="px-3 py-2.5">
                    {r.ai.state === 'done' ? (
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <p className="text-[10px] text-slate-600 truncate italic">"{r.ai.preview}"</p>
                      </div>
                    ) : r.ai.state === 'running' ? (
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                        <span className="text-[10px] text-amber-700 font-semibold">{r.ai.preview}</span>
                      </div>
                    ) : (
                      <span className="text-[10px] text-slate-300">キューに登録済</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer status bar */}
        <div className="bg-slate-50 border-t border-slate-100 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-700">エンリッチメント実行中 · 残り 23社</span>
          </div>
          <button className="text-[10px] font-black bg-brand-600 text-white px-3 py-1 rounded">
            HubSpotにPush →
          </button>
        </div>
      </div>

      {/* Floating credit-cost badge */}
      <div className="absolute -bottom-5 -left-4 bg-white rounded-xl border border-slate-200 shadow-lg px-3 py-2 flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-amber-100 flex items-center justify-center">
          <span className="text-amber-700 text-xs">💴</span>
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-900 leading-tight">1社あたり 4クレジット</p>
          <p className="text-[9px] text-slate-400">Sansan + TDB + TSR + AI</p>
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

        <div>
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

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
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
              <span>{t({ jp: 'クレジット制', en: 'Credit-based billing' })}</span>
            </span>
          </div>
        </div>

        <div className="lg:pl-4">
          <ClayStyleTable />
        </div>
      </div>
    </section>
  )
}
