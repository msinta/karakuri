'use client'

import { useLang, useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

function Check({ light }: { light?: boolean }) {
  return (
    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${light ? 'bg-white/20' : 'bg-emerald-100'}`}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={light ? 'white' : '#059669'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
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
    <section id="pricing" className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            {t(content.pricing.sectionTitle)}
          </h2>
          <p className="text-slate-500 text-base">
            {t(content.pricing.sectionSubtitle)}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {content.pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-7 flex flex-col transition-all ${
                tier.highlighted
                  ? 'bg-slate-900 text-white ring-1 ring-slate-900 shadow-2xl shadow-slate-300/40 lg:scale-[1.02]'
                  : 'bg-white border border-slate-200 hover:border-slate-300'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 right-6">
                  <span className="bg-brand-600 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {t(tier.badge)}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${tier.highlighted ? 'text-brand-300' : 'text-slate-400'}`}>
                  {t(tier.name)}
                </p>

                {/* Dual price row */}
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className={`text-5xl font-black ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm font-medium ${tier.highlighted ? 'text-slate-400' : 'text-slate-400'}`}>
                    {t(tier.period)}
                  </span>
                </div>

                {tier.originalPrice && tier.discount && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-sm line-through ${tier.highlighted ? 'text-slate-500' : 'text-slate-400'}`}>
                      {tier.originalPrice}
                    </span>
                    <span className="text-[10px] font-black bg-brand-600 text-white px-2 py-0.5 rounded uppercase">
                      {t(tier.discount)}
                    </span>
                  </div>
                )}

                <p className={`text-sm ${tier.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                  {t(tier.description)}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f, i) => (
                  <li key={i} className={`flex items-start gap-2.5 text-sm ${tier.highlighted ? 'text-slate-100' : 'text-slate-700'}`}>
                    <Check light={tier.highlighted} />
                    <span>{t(f)}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCta(tier.id)}
                className={`w-full py-3.5 rounded-xl text-sm font-black transition-colors ${
                  tier.highlighted
                    ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-amber-700/40'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                {lang === 'jp' ? 'プランを選ぶ' : 'Choose plan'}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8 max-w-xl mx-auto">
          {t(content.pricing.footnote)}
        </p>
      </div>
    </section>
  )
}
