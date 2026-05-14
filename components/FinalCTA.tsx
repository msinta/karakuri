'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

export default function FinalCTA({ onCtaClick }: { onCtaClick: () => void }) {
  const t = useT()

  const handleCta = () => {
    trackEvent('cta_click', { product_name: 'karakuri' })
    onCtaClick()
  }

  return (
    <section className="relative py-28 px-6 bg-ink-900 overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 60%, #673DE6 0%, transparent 60%)' }}
        aria-hidden
      />
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-black text-white whitespace-pre-line mb-6 tracking-tight leading-[1.05]">
          {t(content.finalCta.headline)}
        </h2>
        <p className="text-slate-400 mb-9 text-base sm:text-lg max-w-md mx-auto">
          {t(content.finalCta.subtext)}
        </p>
        <button
          onClick={handleCta}
          className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-10 py-4 rounded-xl text-base transition-colors shadow-lg shadow-brand-600/30"
        >
          {t(content.finalCta.cta)}
        </button>
      </div>
    </section>
  )
}
