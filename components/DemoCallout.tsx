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
    <section className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-900 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left — copy */}
            <div className="p-10 sm:p-14 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 bg-brand-500/20 text-brand-100 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-widest border border-brand-500/30 mb-5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                {t(content.demoCallout.badge)}
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight tracking-tight">
                {t(content.demoCallout.headline)}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-7 max-w-md">
                {t(content.demoCallout.description)}
              </p>

              <button
                onClick={handleClick}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-black px-6 py-3 rounded-xl text-sm transition-colors w-fit"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                {t(content.demoCallout.cta)}
              </button>
            </div>

            {/* Right — mini chat preview */}
            <div className="relative p-8 sm:p-10 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Chatwork-style header */}
                <div className="bg-emerald-600 px-4 py-2.5 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-white/90 flex items-center justify-center">
                    <span className="text-emerald-700 text-[10px] font-black">CW</span>
                  </div>
                  <span className="text-white text-xs font-bold">#カスタマーサクセス</span>
                </div>

                {/* AI outbound draft preview */}
                <div className="p-4 space-y-3">
                  {/* Target company context */}
                  <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-700">株式会社モチコ</span>
                      <span className="text-[9px] text-slate-400">担当: 田中 健 (CMO)</span>
                    </div>
                    <div className="flex gap-1 mt-1">
                      <span className="text-[8px] bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded font-bold">Sansan</span>
                      <span className="text-[8px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold">帝国DB 12.4億</span>
                      <span className="text-[8px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">TSR 85名</span>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-[9px] font-black text-amber-800 uppercase tracking-widest">🤖 AI日本語アウトバウンド</span>
                    </div>
                    <p className="text-[11px] text-slate-700 leading-relaxed">
                      田中様、貴社のCRM刷新プロジェクトのニュースを拝見しました。日本のB2Bデータエンリッチメントをご提案できればと存じます...
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-700">Chatwork で承認待ち</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button className="text-[10px] font-black bg-emerald-600 text-white py-1.5 rounded-md">✓ HubSpotに送信</button>
                      <button className="text-[10px] font-semibold border border-slate-200 text-slate-600 py-1.5 rounded-md">編集</button>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 text-center pt-1">承認後 HubSpotシーケンスに自動登録</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
