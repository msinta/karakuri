'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

export default function ValueProps() {
  const t = useT()

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight whitespace-pre-line leading-tight">
            {t(content.valueProps.sectionTitle)}
          </h2>
          <p className="text-slate-500 text-base">
            {t(content.valueProps.sectionSubtitle)}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.valueProps.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-lg hover:shadow-amber-200/30 transition-all p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 text-2xl">
                {item.icon}
              </div>
              <h3 className="font-black text-slate-900 mb-2 text-lg leading-snug">
                {t(item.headline)}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
