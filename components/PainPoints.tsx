'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

function IconBrokenChain() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="#FFFBEB" />
      <rect x="11" y="22" width="10" height="8" rx="2" fill="#D97706" />
      <rect x="31" y="22" width="10" height="8" rx="2" fill="#D97706" />
      <path d="M21 26L24 26M28 26L31 26" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      <path d="M25 18L26 22M27 30L26 34" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="26" r="3" fill="#EF4444" />
      <path d="M24.5 25L25.5 26L27.5 24M24.5 27L27.5 27" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function IconHandsOnly() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="#F0FDF4" />
      <rect x="11" y="14" width="9" height="9" rx="2" fill="#0EA5E9" />
      <rect x="32" y="14" width="9" height="9" rx="2" fill="#F97316" />
      <rect x="11" y="29" width="9" height="9" rx="2" fill="#10B981" />
      <rect x="32" y="29" width="9" height="9" rx="2" fill="#7C3AED" />
      <path d="M20 18.5L32 18.5M20 33.5L32 33.5M15.5 23L15.5 29M36.5 23L36.5 29" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="2 2" />
      <text x="14" y="20" fontSize="5" fill="white" fontWeight="bold">S</text>
      <text x="35" y="20" fontSize="5" fill="white" fontWeight="bold">H</text>
      <text x="14" y="35" fontSize="5" fill="white" fontWeight="bold">C</text>
      <text x="35" y="35" fontSize="5" fill="white" fontWeight="bold">P</text>
      <text x="20" y="28" fontSize="5" fill="#EF4444" fontWeight="bold">手作業</text>
    </svg>
  )
}

function IconExpensive() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="#FEF2F2" />
      <rect x="13" y="20" width="26" height="18" rx="3" fill="#D97706" />
      <rect x="13" y="20" width="26" height="4" rx="1" fill="#92400E" />
      <text x="20" y="34" fontSize="9" fill="white" fontWeight="bold">¥¥¥</text>
      <circle cx="40" cy="14" r="6" fill="#EF4444" />
      <path d="M37 14L43 14M40 11L40 17" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M28 12L32 16L36 12" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

const icons = [<IconBrokenChain key="b" />, <IconHandsOnly key="h" />, <IconExpensive key="e" />]

export default function PainPoints() {
  const t = useT()

  return (
    <section className="py-24 px-5" style={{ backgroundColor: '#FFFBEB' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-14 tracking-tight">
          {t(content.painPoints.sectionTitle)}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {content.painPoints.items.map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-white"
              style={{ border: '1.5px solid #1e293b' }}
            >
              <div className="mb-5">{icons[i]}</div>
              <h3 className="font-black text-slate-900 mb-3 text-base leading-snug">
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
