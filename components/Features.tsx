'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

function ConnectorGridMockup() {
  const apps = [
    { name: 'Sansan', sub: '名刺管理', color: '#0EA5E9' },
    { name: 'HubSpot', sub: 'CRM', color: '#F97316' },
    { name: 'Salesforce', sub: 'CRM', color: '#0EA5E9' },
    { name: 'Chatwork', sub: 'チャット', color: '#10B981' },
    { name: 'LINE WORKS', sub: '社内LINE', color: '#06C755' },
    { name: 'Slack', sub: 'チャット', color: '#4F46E5' },
    { name: 'freee', sub: '会計', color: '#2563EB' },
    { name: 'MoneyForward', sub: '経費', color: '#3B82F6' },
    { name: '楽楽精算', sub: '経費', color: '#F59E0B' },
  ]
  return (
    <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-slate-700">日本SaaSコネクタ</span>
        <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full">9 接続済</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {apps.map((a) => (
          <div key={a.name} className="bg-slate-50 rounded-lg p-2 flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: a.color }}>
              <span className="text-white text-[9px] font-black">{a.name.charAt(0)}</span>
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold text-slate-800 truncate">{a.name}</p>
              <p className="text-[8px] text-slate-400 truncate">{a.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[9px] text-slate-400 text-center mt-3">+ Shopify · LINE Messaging API · その他</p>
    </div>
  )
}

function TemplatesMockup() {
  const templates = [
    { name: 'Sansan → Shopify顧客作成', uses: 124 },
    { name: 'Shopify注文 → Chatwork通知', uses: 89 },
    { name: 'カート離脱 → HubSpot タスク', uses: 67 },
    { name: '配送完了 → LINE通知', uses: 142 },
  ]
  return (
    <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-slate-700">JP-GTMテンプレート</span>
        <span className="text-[9px] text-slate-400">人気順</span>
      </div>
      <div className="space-y-1.5">
        {templates.map((t, i) => (
          <div key={t.name} className="flex items-center gap-2 bg-slate-50 rounded-lg px-2 py-2 border-l-2" style={{ borderLeftColor: '#D97706' }}>
            <span className="w-5 h-5 rounded bg-brand-100 text-brand-700 text-[9px] font-black flex items-center justify-center">{i + 1}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-slate-800 truncate">{t.name}</p>
              <p className="text-[9px] text-slate-400">{t.uses}店舗が利用</p>
            </div>
            <button className="text-[9px] font-bold border border-brand-600 text-brand-700 px-2 py-0.5 rounded">使う</button>
          </div>
        ))}
      </div>
      <p className="text-[9px] text-slate-400 text-center mt-3 pt-2 border-t border-slate-100">ドラッグ＆ドロップで微調整可能</p>
    </div>
  )
}

function AiApprovalMockup() {
  return (
    <div className="rounded-2xl border-2 border-slate-900 bg-white shadow-lg overflow-hidden">
      <div className="bg-amber-50 px-3 py-2 flex items-center gap-2 border-b border-amber-100">
        <span className="text-[10px] font-bold text-amber-800">🤖 AI下書き → Chatwork承認</span>
      </div>
      <div className="p-3 space-y-2">
        <div className="bg-slate-50 rounded-lg p-2">
          <p className="text-[9px] text-slate-400 font-bold mb-1">AI下書き · 顧客対応メール</p>
          <p className="text-[10px] text-slate-700 leading-relaxed">田中さま、ご注文の#JP-4421につきまして、配送が完了しましたのでご報告いたします。LINEでも追跡情報をお送りしました...</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-2 py-1.5">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-bold text-amber-900">承認待ち · #カスタマーサクセス</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <button className="text-[10px] font-black bg-emerald-600 text-white py-1.5 rounded-md">✓ 承認・送信</button>
          <button className="text-[10px] font-semibold border border-slate-200 text-slate-600 py-1.5 rounded-md">編集</button>
        </div>
        <p className="text-[9px] text-slate-400 text-center pt-1">承認後にLINE・メールで自動配信</p>
      </div>
    </div>
  )
}

const mockups = [<ConnectorGridMockup key="0" />, <TemplatesMockup key="1" />, <AiApprovalMockup key="2" />]

export default function Features() {
  const t = useT()

  return (
    <section id="features">
      {content.features.items.map((item, i) => {
        const bgClass = i % 2 === 0 ? 'bg-white' : 'bg-slate-50'
        const reversed = i % 2 === 1

        return (
          <div key={i} className={`py-20 ${bgClass}`}>
            <div className="max-w-5xl mx-auto px-5">
              <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10`}>
                <div className="w-full lg:w-[55%]">
                  {item.tag && (
                    <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-4 border border-brand-100 uppercase tracking-widest">
                      {t(item.tag)}
                    </span>
                  )}
                  <h2 className="text-3xl font-black text-slate-900 mb-4 leading-snug tracking-tight">
                    {t(item.headline)}
                  </h2>
                  <p className="text-slate-500 leading-relaxed">
                    {t(item.description)}
                  </p>
                </div>
                <div className="w-full lg:w-[45%]">
                  {mockups[i]}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
