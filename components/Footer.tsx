'use client'

import { useLang } from '@/context/LanguageContext'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-ink-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
            <span className="text-white text-xs font-black">K</span>
          </div>
          <span className="font-black text-white">KARAKURI</span>
          <span className="text-slate-500 text-sm">— Clay for Japan</span>
        </div>
        <p className="text-sm text-slate-500">
          © 2026 Karakuri. {lang === 'jp' ? '全著作権所有。' : 'All rights reserved.'}
        </p>
        <div className="flex gap-5 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">
            {lang === 'jp' ? 'プライバシー' : 'Privacy'}
          </a>
          <a href="#" className="hover:text-white transition-colors">
            {lang === 'jp' ? '利用規約' : 'Terms'}
          </a>
        </div>
      </div>
    </footer>
  )
}
