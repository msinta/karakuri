'use client'

import { useLang, useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Pricing({ onCtaClick }: { onCtaClick: () => void }) {
  const t = useT()
  const { lang } = useLang()

  const handleCta = (tierId: string) => {
    trackEvent('cta_click', { product_name: 'karakuri', tier: tierId })
    onCtaClick()
  }

  return (
    <section id="pricing" className="py-28 px-6 bg-ink-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-[2.5rem] sm:text-5xl font-black text-white tracking-tight mb-5 leading-[1.05]">
            {lang === 'jp' ? '月額固定、隠れた料金なし' : 'One monthly price, no hidden fees'}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {lang === 'jp'
              ? '安心してスタート。30日間返金保証付きでリスクゼロ。'
              : 'Get started in complete confidence. 30-day money-back guarantee means it\'s risk-free.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 items-start">
          {content.pricing.tiers.map((tier) => {
            const num = parseFloat(tier.price.replace(/[^0-9.]/g, ''))
            const orig = tier.originalPrice ? parseFloat(tier.originalPrice.replace(/[^0-9.]/g, '')) : null
            const pctOff = orig ? Math.round((1 - num / orig) * 100) : null

            return (
              <div key={tier.id} className="relative">
                {tier.highlighted && (
                  <div className="bg-brand-600 text-white text-center text-[11px] font-black uppercase tracking-widest py-2.5 rounded-t-2xl">
                    {lang === 'jp' ? '人気No.1' : 'Most Popular'}
                  </div>
                )}

                <div
                  className={`rounded-2xl p-7 flex flex-col bg-ink-800/60 border ${
                    tier.highlighted
                      ? 'border-brand-600 rounded-t-none'
                      : 'border-white/10'
                  }`}
                >
                  {pctOff && (
                    <div className="flex justify-end mb-2">
                      <span className="text-[10px] font-black bg-brand-500/15 text-brand-300 px-2.5 py-1 rounded">
                        {pctOff}% off
                      </span>
                    </div>
                  )}

                  <div className="mb-3">
                    <p className="text-white font-black text-xl mb-1">
                      {t(tier.name)}
                    </p>
                    <p className="text-sm text-slate-400">
                      {t(tier.description)}
                    </p>
                  </div>

                  {tier.originalPrice && (
                    <p className="text-sm line-through text-slate-500 mb-0.5">
                      {tier.originalPrice}
                    </p>
                  )}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-black text-white">
                      {tier.price}
                    </span>
                    <span className="text-sm font-medium text-slate-400">
                      {t(tier.period)}
                    </span>
                  </div>

                  {tier.discount && (
                    <p className="text-sm font-black text-brand-400 mb-5">
                      {t(tier.discount)}
                    </p>
                  )}
                  {!tier.discount && <div className="mb-5" />}

                  <button
                    onClick={() => handleCta(tier.id)}
                    className={`w-full py-3.5 rounded-xl text-sm font-black mb-5 transition-colors ${
                      tier.highlighted
                        ? 'bg-white text-ink-900 hover:bg-slate-200'
                        : 'border border-white/15 text-white hover:bg-white/5'
                    }`}
                  >
                    {lang === 'jp' ? 'プランを選ぶ' : 'Choose plan'}
                  </button>

                  <p className="text-[11px] text-slate-500 leading-relaxed mb-6">
                    {tier.id === 'beta'
                      ? (lang === 'jp' ? 'ベータ期間中は無料。リリース時に値上がりします。' : 'Free during beta. Prices rise at launch.')
                      : tier.originalPrice
                        ? (lang === 'jp' ? `年払いで割引。通常価格 ${tier.originalPrice}/月。` : `Save with yearly billing. Renews at ${tier.originalPrice}/mo.`)
                        : ''}
                  </p>

                  <ul className="space-y-2.5 mb-2">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                        <Check />
                        <span>{t(f)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-xs text-slate-500 mt-8 max-w-2xl mx-auto">
          {t(content.pricing.footnote)}
        </p>
      </div>
    </section>
  )
}
