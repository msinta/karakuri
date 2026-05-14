'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

export default function ValueProps() {
  const t = useT()
  const items = content.valueProps.items

  return (
    <section className="py-28 px-6 bg-ink-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] sm:text-5xl font-black text-white mb-5 tracking-tight whitespace-pre-line leading-[1.05]">
            {t(content.valueProps.sectionTitle)}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t(content.valueProps.sectionSubtitle)}
          </p>
        </div>

        {/* Hostinger borderless grid — only thin internal lines */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
          {items.map((item, i) => {
            const colInRow = i % 3
            const isLastRow = i >= items.length - 3
            return (
              <div
                key={i}
                className={`px-6 sm:px-8 py-10 ${!isLastRow ? 'border-b border-white/10' : ''} ${colInRow !== 2 ? 'lg:border-r lg:border-white/10' : ''} ${i % 2 === 1 ? 'sm:border-l sm:border-white/10 lg:border-l-0' : ''}`}
              >
                <div className="text-2xl mb-5">{item.icon}</div>
                <h3 className="font-black text-white mb-3 text-xl leading-snug">
                  {t(item.headline)}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t(item.description)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
