'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

export default function SocialProof({ count = 80 }: { count?: number }) {
  const t = useT()
  const text = t(content.socialProof.statText).replace('{count}', String(count))
  const logos = [...content.socialProof.logos, ...content.socialProof.logos]

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-10 overflow-hidden">
      <p className="text-center text-sm text-slate-500 font-medium mb-6 px-5">
        {text}
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-10 animate-karakuri-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition">
              <div className="w-8 h-8 rounded-md bg-slate-200 flex items-center justify-center">
                <span className="text-slate-700 text-xs font-black">{logo.emoji}</span>
              </div>
              <span className="text-base font-bold text-slate-600 tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
