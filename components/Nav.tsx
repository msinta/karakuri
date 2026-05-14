'use client'

import { useLang, useT } from '@/context/LanguageContext'
import content from '@/content'

export default function Nav({ onCtaClick }: { onCtaClick?: () => void }) {
  const { lang, toggle } = useLang()
  const t = useT()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink-900/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
            <span className="text-white text-sm font-black">K</span>
          </div>
          <span className="text-xl font-black tracking-tight text-white">KARAKURI</span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8">
          {content.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {t(link.label)}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center text-xs font-bold border border-white/10 rounded-full overflow-hidden"
          >
            <span className={`px-3 py-1.5 transition-colors ${lang === 'jp' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}>
              JP
            </span>
            <span className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}>
              EN
            </span>
          </button>

          <button
            onClick={onCtaClick}
            className="hidden sm:inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
          >
            {t(content.nav.cta)}
          </button>
        </div>
      </div>
    </nav>
  )
}
