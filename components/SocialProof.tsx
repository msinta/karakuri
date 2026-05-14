'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

export default function SocialProof({ count = 80 }: { count?: number }) {
  const t = useT()
  const text = t(content.socialProof.statText).replace('{count}', String(count))
  const logos = [...content.socialProof.logos, ...content.socialProof.logos]

  return (
    <section className="bg-ink-900 py-14 overflow-hidden">
      <p className="text-center text-sm text-slate-500 font-medium mb-8 px-5">
        {text}
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink-900 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-14 animate-karakuri-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-white/70 text-[10px] font-black">{logo.emoji}</span>
              </div>
              <span className="text-base font-bold text-white/60 tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
