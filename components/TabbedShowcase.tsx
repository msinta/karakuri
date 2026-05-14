'use client'

import { useState } from 'react'
import { useT } from '@/context/LanguageContext'
import content from '@/content'

function ToolRow({ name, sub, color }: { name: string; sub: string; color: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 bg-ink-800/60 hover:bg-ink-700/80 border border-white/8 hover:border-white/15 rounded-xl px-4 py-3 transition-colors group"
    >
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
        <span className="text-white text-xs font-black">{name.charAt(0)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-black text-white truncate">{name}</p>
        <p className="text-[11px] text-slate-400 truncate">{sub}</p>
      </div>
      <svg
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="text-slate-500 group-hover:text-white transition-colors flex-shrink-0"
      >
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </a>
  )
}

export default function TabbedShowcase() {
  const t = useT()
  const [activeTab, setActiveTab] = useState(content.tabbedShowcase.tabs[0].id)
  const [query, setQuery] = useState('')
  const active = content.tabbedShowcase.tabs.find(tab => tab.id === activeTab)!

  const filtered = active.tools.filter(tool =>
    !query || tool.name.toLowerCase().includes(query.toLowerCase()),
  )
  const trending = filtered.slice(0, 3)
  const other = filtered.slice(3)

  return (
    <section id="sources" className="py-28 px-6 bg-ink-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] sm:text-5xl font-black text-white mb-5 tracking-tight leading-[1.05]">
            {t(content.tabbedShowcase.sectionTitle)}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t(content.tabbedShowcase.sectionSubtitle)}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="inline-flex bg-ink-800/80 border border-white/8 rounded-full p-1 self-start">
            {content.tabbedShowcase.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-ink-700 text-white border border-white/15'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t(tab.label)}
              </button>
            ))}
          </div>

          <div className="relative sm:max-w-sm w-full">
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t({ jp: 'データソースを検索', en: 'Search data sources' })}
              className="w-full bg-ink-800/60 border border-white/8 text-sm text-white placeholder:text-slate-500 rounded-full pl-11 pr-4 py-2.5 focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-8">
          {trending.length > 0 && (
            <div>
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">
                {t({ jp: '人気', en: 'Trending' })}
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {trending.map((tool) => (
                  <ToolRow key={tool.name + tool.color} name={tool.name} sub={t(tool.sub)} color={tool.color} />
                ))}
              </div>
            </div>
          )}

          {other.length > 0 && (
            <div>
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">
                {t({ jp: 'その他', en: 'Other' })}
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {other.map((tool) => (
                  <ToolRow key={tool.name + tool.color} name={tool.name} sub={t(tool.sub)} color={tool.color} />
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 text-sm py-12">
              {t({ jp: '見つかりませんでした。リクエスト可能です。', en: 'No match — request it and we\'ll add it.' })}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
