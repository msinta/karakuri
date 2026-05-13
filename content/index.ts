export type Lang = 'jp' | 'en'

export interface Copy {
  jp: string
  en: string
}

export interface PricingTier {
  id: string
  name: Copy
  price: string
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
    badge: Copy
    headline: Copy
    subheadline: Copy
    cta: Copy
    demoCta: Copy
  }
  socialProof: { text: Copy }
  painPoints: {
    sectionTitle: Copy
    items: { headline: Copy; description: Copy }[]
  }
  howItWorks: {
    sectionTitle: Copy
    sectionSubtitle: Copy
    steps: { number: string; headline: Copy; description: Copy }[]
  }
  features: {
    sectionTitle: Copy
    items: { headline: Copy; description: Copy; tag?: Copy }[]
  }
  pricing: {
    sectionTitle: Copy
    sectionSubtitle: Copy
    tiers: PricingTier[]
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
      { label: { jp: '料金', en: 'Pricing' }, href: '/#pricing' },
    ],
    cta: { jp: 'ベータに参加する', en: 'Join the beta' },
  },

  hero: {
    badge: {
      jp: '日本GTMスタック × Shopify',
      en: 'Japanese GTM stack × Shopify',
    },
    headline: {
      jp: 'Sansan・HubSpot・\nChatwork・LINEを\n繋ぐ',
      en: 'Connect Sansan,\nHubSpot, Chatwork,\nand LINE',
    },
    subheadline: {
      jp: 'n8nやZapierは日本のGTMツールを理解しません。Karakuriなら、SansanからHubSpot、Chatworkで承認、Shopify注文、LINE通知まで、日本のセールス・運営フロー専用のテンプレートで一気通貫。',
      en: 'n8n and Zapier don\'t speak the Japanese stack. Karakuri ships pre-built templates connecting Sansan → HubSpot → Chatwork approval → Shopify order → LINE notification — the full JP GTM loop.',
    },
    cta: { jp: 'ベータに参加する', en: 'Join the beta' },
    demoCta: { jp: 'デモを見る', en: 'See a demo' },
  },

  socialProof: {
    text: {
      jp: '{count} 店舗のShopifyマーチャントが事前登録中',
      en: '{count} Japanese Shopify stores on the waitlist',
    },
  },

  painPoints: {
    sectionTitle: { jp: 'こんな課題、ありませんか？', en: 'Sound familiar?' },
    items: [
      {
        headline: { jp: '日本のSaaSは英語のZapierに繋がらない', en: 'Japan-only SaaS doesn\'t connect to Zapier' },
        description: {
          jp: 'Sansan・Chatwork・freee・楽楽精算など、日本のGTMで必須なツールはZapierやn8nの英語コネクタにありません。手動コピペで時間が消えます。',
          en: 'Sansan, Chatwork, freee, RakuRaku — the SaaS that runs Japanese GTM has no Zapier or n8n connector. The work falls back to manual copy-paste.',
        },
      },
      {
        headline: { jp: '商談→発注→出荷→通知が手作業', en: 'Lead → order → fulfilment → alert is all manual' },
        description: {
          jp: 'SansanからHubSpot、Chatworkで承認、Shopifyで処理、LINEで顧客通知 — どこかで人手が止まると全体が止まります。日本のEC運営は分断されたツールの集まりです。',
          en: 'Sansan to HubSpot, Chatwork approval, Shopify order, LINE customer notification — every handoff is human. Drop the baton anywhere and the chain stalls.',
        },
      },
      {
        headline: { jp: 'カスタム開発は高くて遅い', en: 'Custom builds are expensive and slow' },
        description: {
          jp: '内製で繋ぐと開発費は数百万円、エンジニアの時間も消耗。それでもツールが変わるたびにメンテナンスが必要です。',
          en: 'Building it in-house runs into hundreds of man-hours and millions of yen, then every vendor change forces a rewrite.',
        },
      },
    ],
  },

  howItWorks: {
    sectionTitle: { jp: '3分でJP-GTMワークフローが動く', en: 'Your JP-stack workflow, live in 3 minutes' },
    sectionSubtitle: {
      jp: 'コード不要。Shopifyに追加して、JP-GTMテンプレートを選ぶだけ。',
      en: 'No code. Install on Shopify, pick a JP-GTM template, go.',
    },
    steps: [
      {
        number: '01',
        headline: { jp: 'Shopifyアプリをインストール', en: 'Install from Shopify' },
        description: {
          jp: 'アプリストアから1クリック。注文・顧客・在庫イベントが自動でKarakuriに流れます。',
          en: 'One click from the Shopify App Store. Order, customer, and inventory events stream into Karakuri.',
        },
      },
      {
        number: '02',
        headline: { jp: '日本のSaaSをOAuth接続', en: 'OAuth into your Japanese SaaS' },
        description: {
          jp: 'Sansan・HubSpot・Salesforce・Chatwork・Slack・LINEをワンクリックで接続。日本語UIで認証完了。',
          en: 'Sansan, HubSpot, Salesforce, Chatwork, Slack, LINE — connect each in one click via a JP-language auth flow.',
        },
      },
      {
        number: '03',
        headline: { jp: 'JP-GTMテンプレートを選んで稼働', en: 'Pick a JP-GTM template and launch' },
        description: {
          jp: '「商談獲得→Shopify顧客作成→Chatwork通知」など、日本のEC運営に特化したテンプレートからすぐに動かせます。',
          en: 'Templates like "Sansan lead → Shopify customer → Chatwork ping" are ready out of the box for Japanese operations.',
        },
      },
    ],
  },

  features: {
    sectionTitle: { jp: '主な機能', en: 'What you get' },
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
      jp: 'ベータ期間中は無料。創業者価格はリリース時にロック。',
      en: 'Free during beta. Lock in founder pricing before launch.',
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
        badge: { jp: '人気', en: 'Popular' },
      },
      {
        id: 'growth',
        name: { jp: 'グロース', en: 'Growth' },
        price: '$79',
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
  },

  finalCta: {
    headline: { jp: '手作業を\n自動化する', en: 'Stop doing\nit by hand' },
    subtext: {
      jp: 'ウェイトリストに登録して、創業者価格と優先アクセスを確保してください。',
      en: 'Join the waitlist to lock in founder pricing and get early access.',
    },
    cta: { jp: 'ベータに参加する', en: 'Join the beta' },
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
