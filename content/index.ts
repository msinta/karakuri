export type Lang = 'jp' | 'en'

export interface Copy {
  jp: string
  en: string
}

export interface PricingTier {
  id: string
  name: Copy
  price: string
  originalPrice?: string
  discount?: Copy
  period: Copy
  description: Copy
  features: Copy[]
  highlighted: boolean
  badge?: Copy
}

export interface ProductContent {
  meta: { title: Copy; description: Copy }
  nav: { links: { label: Copy; href: string }[]; cta: Copy }
  hero: {
    eyebrow: Copy
    headline: Copy
    subheadline: Copy
    cta: Copy
    secondaryCta: Copy
    guarantee: Copy
    includes: Copy[]
  }
  socialProof: {
    statText: Copy
    logos: { name: string; emoji: string }[]
  }
  valueProps: {
    sectionTitle: Copy
    sectionSubtitle: Copy
    items: { headline: Copy; description: Copy; icon: string }[]
  }
  howItWorks: {
    sectionTitle: Copy
    sectionSubtitle: Copy
    steps: { number: string; headline: Copy; description: Copy }[]
  }
  tabbedShowcase: {
    sectionTitle: Copy
    sectionSubtitle: Copy
    tabs: { id: string; label: Copy; tools: { name: string; sub: Copy; color: string }[] }[]
  }
  demoCallout: {
    badge: Copy
    headline: Copy
    description: Copy
    cta: Copy
  }
  features: {
    sectionTitle: Copy
    items: { headline: Copy; description: Copy; tag?: Copy }[]
  }
  pricing: {
    sectionTitle: Copy
    sectionSubtitle: Copy
    tiers: PricingTier[]
    footnote: Copy
  }
  faq: {
    sectionTitle: Copy
    items: { q: Copy; a: Copy }[]
  }
  finalCta: { headline: Copy; subtext: Copy; cta: Copy }
  reveal: {
    headline: Copy
    subtext: Copy
    tierQuestion: Copy
    form: {
      name: Copy; storeUrl: Copy; email: Copy
      painPoint: Copy; painPointPlaceholder: Copy
      submit: Copy; disclaimer: Copy
    }
  }
}

const content: ProductContent = {
  meta: {
    title: {
      jp: 'Karakuri — 日本GTMスタック専用 ワークフロー自動化',
      en: 'Karakuri — Workflow automation for the Japanese GTM stack',
    },
    description: {
      jp: 'Sansan・HubSpot・Salesforce・Chatwork・Slack・LINEを日本のGTMテンプレートで繋ぐ。Shopifyストア専用のn8n。',
      en: 'Connect Sansan, HubSpot, Salesforce, Chatwork, Slack, and LINE with Japan-specific GTM workflow templates. n8n for Shopify, JP-stack ready.',
    },
  },

  nav: {
    links: [
      { label: { jp: '機能', en: 'Features' }, href: '/#features' },
      { label: { jp: 'コネクタ', en: 'Connectors' }, href: '/#connectors' },
      { label: { jp: '料金', en: 'Pricing' }, href: '/#pricing' },
      { label: { jp: 'FAQ', en: 'FAQ' }, href: '/#faq' },
    ],
    cta: { jp: 'プランを見る', en: 'View plans' },
  },

  hero: {
    eyebrow: { jp: '$0 ベータ — 利用料なし', en: 'From $0 beta — no usage fees' },
    headline: {
      jp: '日本のGTMスタックを\n繋いで自動化',
      en: 'Automate your Japanese\nGTM stack',
    },
    subheadline: {
      jp: 'あなたは設定するだけ、Karakuriが動かす。Sansan・Chatwork・Shopify・LINEを繋ぐワークフロー。コーディング不要、サプライズ請求なし、エンジニア不要。',
      en: 'You configure it, Karakuri runs it. Workflows across Sansan, Chatwork, Shopify, and LINE. No code, no surprise bills, zero engineering.',
    },
    cta: { jp: 'プランを見る', en: 'View plans' },
    secondaryCta: { jp: 'デモを見る', en: 'Watch the demo' },
    guarantee: { jp: '30日間返金保証', en: '30-day money-back guarantee' },
    includes: [
      { jp: '日本SaaSコネクタ 9種類', en: '9 Japanese SaaS connectors' },
      { jp: 'JP-GTMテンプレート無料', en: 'Free JP-GTM templates' },
      { jp: 'Chatwork承認ゲート', en: 'Chatwork approval gates' },
    ],
  },

  socialProof: {
    statText: {
      jp: '日本の{count}店舗のShopifyマーチャントが事前登録',
      en: 'Powering {count}+ Japanese Shopify merchants',
    },
    logos: [
      { name: 'Sansan', emoji: '名' },
      { name: 'HubSpot', emoji: 'H' },
      { name: 'Salesforce', emoji: 'S' },
      { name: 'Chatwork', emoji: 'C' },
      { name: 'LINE WORKS', emoji: 'L' },
      { name: 'Slack', emoji: '#' },
      { name: 'freee', emoji: 'f' },
      { name: 'MoneyForward', emoji: 'MF' },
      { name: '楽楽精算', emoji: '楽' },
      { name: 'Shopify', emoji: 'S' },
    ],
  },

  valueProps: {
    sectionTitle: {
      jp: '必要なものすべて。\n余計なものは一切なし',
      en: 'All the essentials.\nNone of the nonsense',
    },
    sectionSubtitle: {
      jp: '日本SaaSのコネクタ、JP-GTMテンプレート、Chatwork承認ゲートをすべて含む。',
      en: 'JP-SaaS connectors, GTM templates, and Chatwork approval gates — included.',
    },
    items: [
      {
        headline: { jp: '透明な料金', en: 'Transparent pricing' },
        description: {
          jp: '月額固定、実行回数の課金なし。Zapierの「タスク従量制」のような請求書ショックはありません。',
          en: 'One monthly price. No per-task fees. No Zapier-style invoice shock at the end of the month.',
        },
        icon: '💴',
      },
      {
        headline: { jp: '完全マネージド', en: 'Fully managed' },
        description: {
          jp: 'インフラ・スケーリング・セキュリティはこちら持ち。あなたはワークフローを組むだけ。',
          en: 'We run the infrastructure, scaling, and security. You just build the workflow.',
        },
        icon: '⚙️',
      },
      {
        headline: { jp: 'オールインワン', en: 'All-in-one' },
        description: {
          jp: '日本のCRM・営業・経理・コミュニケーションを一つに。複数ツールの組み合わせは不要。',
          en: 'Japanese CRM, sales, finance, and chat in one place. No multi-tool stitching required.',
        },
        icon: '🧩',
      },
      {
        headline: { jp: 'ノーコード優先', en: 'No-code first' },
        description: {
          jp: 'ドラッグ＆ドロップでフローを組み、エンジニアの手を借りずに本番運用。',
          en: 'Drag-and-drop flow builder. Ship to production without an engineer in the loop.',
        },
        icon: '🖱️',
      },
      {
        headline: { jp: 'AIによる日本語下書き', en: 'AI Japanese drafts' },
        description: {
          jp: 'AIがネイティブ日本語で顧客対応・社内通知を下書き。Chatworkで承認してから送信。',
          en: 'AI drafts customer replies and internal pings in native Japanese. Approve in Chatwork, then send.',
        },
        icon: '🤖',
      },
      {
        headline: { jp: '日本SaaSに対応', en: 'Works with your JP stack' },
        description: {
          jp: 'Sansan・freee・楽楽精算・MoneyForward・Chatwork・LINE WORKSなど。ロックインなし。',
          en: 'Sansan, freee, RakuRaku, MoneyForward, Chatwork, LINE WORKS — all supported. No lock-in.',
        },
        icon: '🇯🇵',
      },
    ],
  },

  howItWorks: {
    sectionTitle: {
      jp: '繋ぐだけ。あとはKarakuriが動かします',
      en: 'Connect it. Karakuri runs it from there',
    },
    sectionSubtitle: {
      jp: 'コード不要。Shopifyに追加して、JP-GTMテンプレートを選ぶだけ。',
      en: 'No code. Install on Shopify, pick a JP-GTM template, go.',
    },
    steps: [
      {
        number: '01',
        headline: { jp: '日本のSaaSを接続', en: 'Connect your JP tools' },
        description: {
          jp: 'Sansan・Chatwork・Shopify・LINEを1クリックでOAuth接続。日本語UIで認証完了。',
          en: 'OAuth into Sansan, Chatwork, Shopify, and LINE in one click — all with a Japanese-language auth flow.',
        },
      },
      {
        number: '02',
        headline: { jp: 'テンプレートを選ぶ', en: 'Pick a template' },
        description: {
          jp: '「Sansan → Shopify顧客作成 → Chatwork通知」など、JP-GTMに特化したテンプレートからすぐに動かせます。',
          en: 'Templates like "Sansan lead → Shopify customer → Chatwork ping" are ready out of the box.',
        },
      },
      {
        number: '03',
        headline: { jp: '本番運用と拡張', en: 'Run and scale' },
        description: {
          jp: '実行ログ・エラー通知・Chatwork承認ゲートで安心運用。チーム拡大時もそのまま使えます。',
          en: 'Run logs, error alerts, and Chatwork approval gates keep you in control. Scales with your team.',
        },
      },
    ],
  },

  tabbedShowcase: {
    sectionTitle: { jp: '日本SaaSコネクタライブラリ', en: 'JP-SaaS connector library' },
    sectionSubtitle: {
      jp: 'Zapierやn8nに無い、日本のGTMで本当に使われるツールに対応。',
      en: 'Tools the Japanese GTM stack actually runs on — the ones Zapier and n8n skip.',
    },
    tabs: [
      {
        id: 'crm',
        label: { jp: 'CRM・営業', en: 'CRM & sales' },
        tools: [
          { name: 'Sansan', sub: { jp: '名刺管理', en: 'Business cards' }, color: '#0EA5E9' },
          { name: 'HubSpot', sub: { jp: 'CRM', en: 'CRM' }, color: '#F97316' },
          { name: 'Salesforce', sub: { jp: 'CRM', en: 'CRM' }, color: '#0EA5E9' },
          { name: 'Shopify', sub: { jp: 'EC', en: 'Commerce' }, color: '#7C3AED' },
        ],
      },
      {
        id: 'comms',
        label: { jp: 'コミュニケーション', en: 'Comms' },
        tools: [
          { name: 'Chatwork', sub: { jp: 'チャット', en: 'Chat' }, color: '#10B981' },
          { name: 'LINE WORKS', sub: { jp: '社内LINE', en: 'JP-LINE for biz' }, color: '#06C755' },
          { name: 'Slack', sub: { jp: 'チャット', en: 'Chat' }, color: '#4F46E5' },
          { name: 'LINE', sub: { jp: '顧客通知', en: 'Customer alerts' }, color: '#06C755' },
        ],
      },
      {
        id: 'ops',
        label: { jp: '経理・運用', en: 'Finance & ops' },
        tools: [
          { name: 'freee', sub: { jp: '会計', en: 'Accounting' }, color: '#2563EB' },
          { name: 'MoneyForward', sub: { jp: '経費', en: 'Expenses' }, color: '#3B82F6' },
          { name: '楽楽精算', sub: { jp: '経費', en: 'Expenses' }, color: '#F59E0B' },
          { name: 'Sansan', sub: { jp: '請求書AI', en: 'Invoice AI' }, color: '#0EA5E9' },
        ],
      },
    ],
  },

  demoCallout: {
    badge: { jp: 'NEW', en: 'New' },
    headline: {
      jp: 'AIが日本語で下書き、Chatworkで承認',
      en: 'AI drafts in Japanese. You approve in Chatwork',
    },
    description: {
      jp: 'お客様への日本語メール・LINEメッセージ・Chatworkコメントの下書きをAIが作成。送信前にChatworkで承認、誤送信を防ぎながら時間を節約します。',
      en: 'AI drafts customer emails, LINE replies, and Chatwork messages in native Japanese. Each one routes through a Chatwork approval gate — speed without slip-ups.',
    },
    cta: { jp: 'デモを見る', en: 'Watch the demo' },
  },

  features: {
    sectionTitle: { jp: 'もっと深く', en: 'Go deeper' },
    items: [
      {
        headline: { jp: '日本SaaS専用のコネクタライブラリ', en: 'Connector library for Japanese SaaS' },
        description: {
          jp: 'Sansan・freee・楽楽精算・MoneyForward・Chatwork・LINE WORKS・Salesforce Japan・HubSpotなど、日本のGTMで使われる主要ツールに対応。新しいツールは追加可能です。',
          en: 'Native connectors for Sansan, freee, RakuRaku, MoneyForward, Chatwork, LINE WORKS, Salesforce Japan, HubSpot — every staple of the Japanese GTM stack. New tools added on request.',
        },
        tag: { jp: 'コネクタ', en: 'Connectors' },
      },
      {
        headline: { jp: 'JP-GTMテンプレート ＋ ビジュアルフロー', en: 'JP-GTM templates + visual flow editor' },
        description: {
          jp: '「Sansan → HubSpot → Chatwork承認 → Shopify顧客作成」のような日本のGTM特有のフローをテンプレ化。ドラッグ＆ドロップで微調整、コード不要です。',
          en: 'Templates encode JP-specific patterns like "Sansan → HubSpot → Chatwork approval → Shopify customer". Tune them with a visual builder; no code required.',
        },
        tag: { jp: 'テンプレート', en: 'Templates' },
      },
      {
        headline: { jp: 'AIによる下書き作成と承認フロー', en: 'AI drafts + human approval gates' },
        description: {
          jp: 'お客様への日本語メール・LINEメッセージ・Chatworkコメントの下書きをAIが作成。送信前にChatworkで承認、誤送信を防ぎながら時間を節約します。',
          en: 'AI drafts Japanese customer emails, LINE replies, and Chatwork messages. Each goes through a Chatwork approval gate before it ships — speed without slip-ups.',
        },
        tag: { jp: 'AI＋承認', en: 'AI + approval' },
      },
    ],
  },

  pricing: {
    sectionTitle: { jp: '料金プラン', en: 'Pricing' },
    sectionSubtitle: {
      jp: '創業者価格は先着順。リリース時に値上がりします。',
      en: 'Founder pricing is first-come, first-served. Prices rise at launch.',
    },
    tiers: [
      {
        id: 'beta',
        name: { jp: 'ベータ', en: 'Beta' },
        price: '$0',
        period: { jp: '/月', en: '/mo' },
        description: { jp: '創業者枠で全機能を試す', en: 'Founder access — all features' },
        features: [
          { jp: '日本SaaS全コネクタ', en: 'All JP connectors' },
          { jp: 'JP-GTMテンプレート', en: 'JP-GTM templates' },
          { jp: 'ベータ期間中は無制限', en: 'Unlimited during beta' },
          { jp: 'コミュニティサポート', en: 'Community support' },
        ],
        highlighted: false,
      },
      {
        id: 'starter',
        name: { jp: 'スターター', en: 'Starter' },
        price: '$29',
        originalPrice: '$59',
        discount: { jp: '50% OFF 創業者価格', en: '50% off founder price' },
        period: { jp: '/月', en: '/mo' },
        description: { jp: '小さなチームの本格運用', en: 'Production-ready for small teams' },
        features: [
          { jp: 'ベータの全機能', en: 'Everything in Beta' },
          { jp: '最大3つのワークフロー', en: 'Up to 3 active workflows' },
          { jp: '実行ログ・エラー通知', en: 'Run logs + error alerts' },
          { jp: 'Chatwork承認ゲート', en: 'Chatwork approval gates' },
          { jp: 'メールサポート', en: 'Email support' },
        ],
        highlighted: true,
        badge: { jp: '人気', en: 'Most popular' },
      },
      {
        id: 'growth',
        name: { jp: 'グロース', en: 'Growth' },
        price: '$79',
        originalPrice: '$159',
        discount: { jp: '50% OFF 創業者価格', en: '50% off founder price' },
        period: { jp: '/月', en: '/mo' },
        description: { jp: '無制限フロー + AI下書き', en: 'Unlimited flows + AI drafts' },
        features: [
          { jp: 'スターターの全機能', en: 'Everything in Starter' },
          { jp: 'ワークフロー無制限', en: 'Unlimited workflows' },
          { jp: 'AIによる下書き作成', en: 'AI message drafts' },
          { jp: 'カスタムコネクタ', en: 'Custom connectors' },
          { jp: '優先サポート', en: 'Priority support' },
        ],
        highlighted: false,
      },
    ],
    footnote: {
      jp: '税抜価格。30日間返金保証。クレジットカード不要でベータ参加可能。',
      en: 'Prices exclude tax. 30-day money-back guarantee. No credit card required to join beta.',
    },
  },

  faq: {
    sectionTitle: { jp: 'よくある質問', en: 'FAQ' },
    items: [
      {
        q: { jp: 'Zapierやn8nとの違いは何ですか？', en: 'How is Karakuri different from Zapier or n8n?' },
        a: {
          jp: 'Zapierとn8nは英語前提のツールで、Sansan・Chatwork・freee・楽楽精算のような日本のSaaSのネイティブコネクタがありません。Karakuriは日本のGTMスタックに特化し、日本のテンプレートを最初から提供します。',
          en: 'Zapier and n8n are English-first and have no native Sansan, Chatwork, freee, or RakuRaku connectors. Karakuri is built specifically for the Japanese GTM stack with JP templates out of the box.',
        },
      },
      {
        q: { jp: 'コードを書く必要はありますか？', en: 'Do I need to write any code?' },
        a: {
          jp: 'いいえ。ドラッグ＆ドロップのフロービルダーで全て完結します。条件分岐・タイマー・タグ付けもUI上で設定できます。',
          en: 'No. Everything runs through a drag-and-drop flow builder. Branching, timers, and tagging are all UI-driven.',
        },
      },
      {
        q: { jp: 'データはどこに保存されますか？セキュリティは？', en: 'Where is my data stored? What about security?' },
        a: {
          jp: '日本国内リージョン（AWS Tokyo / GCP Tokyo）に保存。通信はすべてTLS暗号化、認証情報は分離されたシークレットストアで管理します。GDPR・APPI準拠。',
          en: 'Data is stored in Japan-region infrastructure (AWS Tokyo / GCP Tokyo). All traffic is TLS-encrypted, credentials live in a segregated secrets store. GDPR and APPI compliant.',
        },
      },
      {
        q: { jp: '対応していないSaaSがあったらどうなりますか？', en: 'What if my tool isn\'t supported yet?' },
        a: {
          jp: 'スターター以上のプランではリクエストいただいたコネクタを優先的に追加します。汎用HTTPコネクタもあるので、API経由で接続可能なツールはほぼ何でも繋がります。',
          en: 'On Starter and above we prioritize requested connectors. A generic HTTP connector also lets you wire up nearly any tool with an API.',
        },
      },
      {
        q: { jp: 'ベータ期間はいつまでですか？', en: 'How long does beta last?' },
        a: {
          jp: '2026年後半までを予定しています。ベータ参加者は創業者価格（50% OFF）で永続的にロックインされます。',
          en: 'Beta runs through late 2026. Beta participants lock in founder pricing (50% off) for life.',
        },
      },
    ],
  },

  finalCta: {
    headline: { jp: '手作業を\n自動化する', en: 'Stop doing\nit by hand' },
    subtext: {
      jp: 'ベータに登録して、創業者価格と優先アクセスを確保してください。',
      en: 'Join the beta to lock in founder pricing and get early access.',
    },
    cta: { jp: 'プランを見る', en: 'View plans' },
  },

  reveal: {
    headline: { jp: 'もうすぐリリース', en: "You're early" },
    subtext: {
      jp: 'ベータに登録して、創業者価格と優先アクセスを確保してください。',
      en: 'Join the beta to lock in founder pricing and get early access.',
    },
    tierQuestion: { jp: 'どのプランを使いますか？', en: 'Which plan would you use?' },
    form: {
      name: { jp: 'お名前', en: 'Name' },
      storeUrl: { jp: 'ShopifyストアURL', en: 'Shopify store URL' },
      email: { jp: 'メールアドレス', en: 'Email' },
      painPoint: { jp: '今GTM運営で一番困っていること', en: 'Your biggest GTM-ops pain right now' },
      painPointPlaceholder: {
        jp: '例：SansanからHubSpotへの手動コピペ、Chatwork承認に時間がかかる、Zapierに日本のSaaSがない、など',
        en: 'e.g. manual Sansan-to-HubSpot copy-paste, slow Chatwork approvals, no JP SaaS connectors in Zapier...',
      },
      submit: { jp: '早期アクセスに参加する', en: 'Join the waitlist' },
      disclaimer: { jp: 'スパムはありません。リリース時にご連絡します。', en: 'No spam. Launch notification only.' },
    },
  },
}

export default content
