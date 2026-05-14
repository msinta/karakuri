'use client'

import { useState } from 'react'
import { useT } from '@/context/LanguageContext'
import content from '@/content'

export default function TabbedShowcase() {
  const t = useT()
  const [activeTab, setActiveTab] = useState(content.tabbedShowcase.tabs[0].id)
  const active = content.tabbedShowcase.tabs.find(tab => tab.id === activeTab)!

  return (
    <section id="sources" className="py-24 px-5 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            {t(content.tabbedShowcase.sectionTitle)}
          </h2>
          <p className="text-slate-500 text-base">
            {t(content.tabbedShowcase.sectionSubtitle)}
          </p>
        </div>

        {/* Tab strip */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full border border-slate-200 p-1">
            {content.tabbedShowcase.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {t(tab.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panel — connector cards */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {active.tools.map((tool) => (
              <div key={tool.name + tool.color} className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-sm" style={{ backgroundColor: tool.color }}>
                  <span className="text-white text-lg font-black">{tool.name.charAt(0)}</span>
                </div>
                <p className="text-sm font-black text-slate-900">{tool.name}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{t(tool.sub)}</p>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-2">
                  {t({ jp: '接続済', en: 'Connected' })}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-8 pt-6 border-t border-slate-100">
            {t({ jp: '+ Shopify · 汎用HTTPコネクタ · リクエスト可', en: '+ Shopify · generic HTTP connector · requestable' })}
          </p>
        </div>
      </div>
    </section>
  )
}
