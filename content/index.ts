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
      jp: 'Karakuri — 日本のB2Bデータエンリッチメント。Clayの日本版',
      en: 'Karakuri — B2B prospect enrichment for Japan. Clay, built for the JP stack',
    },
    description: {
      jp: 'Sansan・Wantedly・帝国データバンク・TSRから企業データを取得し、AIが日本語でパーソナライズ。HubSpot・SalesforceにそのままPush。日本のB2BセールスチームのClay。',
      en: 'Pull prospect data from Sansan, Wantedly, Teikoku Databank, and TSR. AI personalizes in Japanese. Push to HubSpot or Salesforce. Clay, built for Japanese B2B sales teams.',
    },
  },

  nav: {
    links: [
      { label: { jp: '機能', en: 'Features' }, href: '/#features' },
      { label: { jp: 'データソース', en: 'Data sources' }, href: '/#sources' },
      { label: { jp: '料金', en: 'Pricing' }, href: '/#pricing' },
      { label: { jp: 'FAQ', en: 'FAQ' }, href: '/#faq' },
    ],
    cta: { jp: 'プランを見る', en: 'View plans' },
  },

  hero: {
    eyebrow: { jp: '日本のB2Bリスト構築・エンリッチメント', en: 'B2B list-building & enrichment for Japan' },
    headline: {
      jp: '日本のB2Bデータを\nエンリッチして\nアウトバウンド',
      en: 'Enrich Japanese\nB2B prospects.\nOutreach at scale',
    },
    subheadline: {
      jp: 'Sansan・Wantedly・帝国データバンク・TSRから企業データを取得。AIが日本語でパーソナライズし、HubSpot・SalesforceにPush。北米のClayが日本のセールスチーム向けに。',
      en: 'Pull prospect and company data from Sansan, Wantedly, Teikoku Databank, and TSR. AI writes native-Japanese personalization. Sync to HubSpot or Salesforce. Clay, rebuilt for Japanese B2B teams.',
    },
    cta: { jp: 'プランを見る', en: 'View plans' },
    secondaryCta: { jp: 'デモを見る', en: 'Watch the demo' },
    guarantee: { jp: '30日間返金保証', en: '30-day money-back guarantee' },
    includes: [
      { jp: '日本のB2Bデータソース 6種類', en: '6 Japanese B2B data sources' },
      { jp: 'AIによる日本語パーソナライズ', en: 'Native-Japanese AI personalization' },
      { jp: 'HubSpot・SalesforceへPush', en: 'Push to HubSpot or Salesforce' },
    ],
  },

  socialProof: {
    statText: {
      jp: '日本のB2Bセールスチーム {count}社が事前登録中',
      en: 'Powering {count}+ Japanese B2B sales teams',
    },
    logos: [
      { name: 'Sansan', emoji: '名' },
      { name: 'Wantedly', emoji: 'W' },
      { name: '帝国DB', emoji: 'TDB' },
      { name: 'TSR', emoji: '商' },
      { name: '法人番号', emoji: '法' },
      { name: 'HubSpot', emoji: 'H' },
      { name: 'Salesforce', emoji: 'SF' },
      { name: 'Mazrica', emoji: 'M' },
      { name: 'Chatwork', emoji: 'C' },
      { name: 'LINE WORKS', emoji: 'L' },
    ],
  },

  valueProps: {
    sectionTitle: {
      jp: '日本のB2Bデータを\nスプレッドシートのように扱う',
      en: 'Japanese B2B data,\nstructured like a spreadsheet',
    },
    sectionSubtitle: {
      jp: 'Sansan・帝国DB・TSRなどの企業データソースを1つのテーブルに統合。各列にエンリッチメントを設定。',
      en: 'Unify Sansan, Teikoku Databank, TSR and more into one table. Each column is an enrichment step.',
    },
    items: [
      {
        headline: { jp: '日本専用のデータソース', en: 'Japan-native data sources' },
        description: {
          jp: 'Clayが繋ぐApolloやClearbitは日本企業を網羅できません。KarakuriはSansan・Wantedly・帝国DB・TSR・法人番号公表サイトに対応。',
          en: 'Clay\'s Apollo and Clearbit miss most Japanese companies. Karakuri taps Sansan, Wantedly, Teikoku Databank, TSR, and the public corporate registry.',
        },
        icon: '🇯🇵',
      },
      {
        headline: { jp: 'スプレッドシート型UI', en: 'Spreadsheet-style table' },
        description: {
          jp: 'Clayと同じ操作感。各行は企業またはコンタクト、各列はデータソース or エンリッチメント。ノーコードで組み立て可能。',
          en: 'The same table-first UX as Clay. Rows are companies or contacts; columns are sources or enrichments. No-code from end to end.',
        },
        icon: '📊',
      },
      {
        headline: { jp: 'AIによる日本語パーソナライズ', en: 'Native-Japanese AI personalization' },
        description: {
          jp: '海外AIの翻訳臭いアウトバウンドではなく、日本のビジネス慣習に沿ったメッセージをAIが下書き。敬語・件名・締め方まで自然。',
          en: 'No more translation-flavored outbound. AI drafts copy that respects Japanese business norms — keigo, subject lines, sign-offs.',
        },
        icon: '✍️',
      },
      {
        headline: { jp: 'HubSpot・SalesforceにPush', en: 'Push to HubSpot or Salesforce' },
        description: {
          jp: 'エンリッチ完了後、ワンクリックで日本版HubSpot/Salesforce/MazricaにPush。CSVエクスポートも対応。',
          en: 'Once enriched, push rows into HubSpot JP, Salesforce JP, or Mazrica with one click. CSV export also supported.',
        },
        icon: '🔁',
      },
      {
        headline: { jp: 'クレジット制 + 透明な料金', en: 'Credit-based, transparent pricing' },
        description: {
          jp: '使った分だけ消費するクレジット制。Clayと同じ料金構造ですが、日本のチーム向けにJPY/USD両建てで提供。',
          en: 'A credit model — pay only for what you enrich. Same shape as Clay, billed in either USD or JPY for Japanese teams.',
        },
        icon: '💴',
      },
      {
        headline: { jp: 'APPI準拠 + 日本国内データ', en: 'APPI compliant, JP-region data' },
        description: {
          jp: '個人情報保護法（APPI）に準拠し、データは日本国内（AWS Tokyo / GCP Tokyo）に保存。法務監査にも対応。',
          en: 'APPI-compliant by design. Data stored in Japan (AWS Tokyo / GCP Tokyo). Audit-ready for your legal team.',
        },
        icon: '🛡️',
      },
    ],
  },

  howItWorks: {
    sectionTitle: {
      jp: 'リスト → エンリッチ → アウトバウンド',
      en: 'List → enrich → outreach',
    },
    sectionSubtitle: {
      jp: 'Clayと同じ3ステップ。違いは「日本のデータソースで動く」こと。',
      en: 'Same three steps as Clay. The difference: it actually runs on Japanese data.',
    },
    steps: [
      {
        number: '01',
        headline: { jp: '企業リストをインポート', en: 'Import your prospect list' },
        description: {
          jp: 'CSV・HubSpot・Salesforceから既存リストを取り込み、または「東京の従業員50-200名のSaaS」のような条件でゼロから検索。',
          en: 'Import a CSV, sync from HubSpot/Salesforce, or search from scratch with filters like "Tokyo SaaS, 50–200 employees".',
        },
      },
      {
        number: '02',
        headline: { jp: '列ごとにエンリッチ', en: 'Enrich column-by-column' },
        description: {
          jp: 'Sansanで担当者情報、帝国DBで売上規模、TSRで取引先、WantedlyでカルチャーデータをAIで取得。各列が一つのエンリッチメント。',
          en: 'Add a column to pull contact data from Sansan, revenue bands from TDB, key customers from TSR, culture signals from Wantedly. Each column is one enrichment.',
        },
      },
      {
        number: '03',
        headline: { jp: 'AIでパーソナライズして送信', en: 'Personalize with AI, then send' },
        description: {
          jp: 'AIが日本語で1社1社に合わせたメッセージを下書き。HubSpot/Salesforceにシーケンスとして登録、またはChatworkで承認後にメール配信。',
          en: 'AI drafts a per-company message in native Japanese. Push as a sequence to HubSpot/Salesforce, or route through Chatwork for approval before sending.',
        },
      },
    ],
  },

  tabbedShowcase: {
    sectionTitle: { jp: '日本専用データソース', en: 'Japan-native data sources' },
    sectionSubtitle: {
      jp: 'Clayが繋ぐ海外データソースでは見えない日本企業。Karakuriは日本のB2Bを網羅。',
      en: 'The data sources Clay can\'t reach. Karakuri taps the ones that actually map Japanese B2B.',
    },
    tabs: [
      {
        id: 'sources',
        label: { jp: 'データソース', en: 'Data sources' },
        tools: [
          { name: 'Sansan', sub: { jp: '名刺・連絡先', en: 'Contacts' }, color: '#0EA5E9' },
          { name: 'Wantedly', sub: { jp: '採用・カルチャー', en: 'Hiring & culture' }, color: '#10B981' },
          { name: '帝国DB', sub: { jp: '財務データ', en: 'Financial data' }, color: '#7C3AED' },
          { name: 'TSR', sub: { jp: '取引先・与信', en: 'Customers & credit' }, color: '#F97316' },
        ],
      },
      {
        id: 'crm',
        label: { jp: 'CRM', en: 'CRMs' },
        tools: [
          { name: 'HubSpot JP', sub: { jp: 'CRM', en: 'CRM' }, color: '#F97316' },
          { name: 'Salesforce JP', sub: { jp: 'CRM', en: 'CRM' }, color: '#0EA5E9' },
          { name: 'Mazrica', sub: { jp: '国産CRM', en: 'JP-native CRM' }, color: '#EC4899' },
          { name: 'kintone', sub: { jp: 'カスタムDB', en: 'Custom DB' }, color: '#3B82F6' },
        ],
      },
      {
        id: 'outreach',
        label: { jp: 'アウトリーチ', en: 'Outreach' },
        tools: [
          { name: 'Chatwork', sub: { jp: '承認', en: 'Approvals' }, color: '#10B981' },
          { name: 'LINE WORKS', sub: { jp: '社内通知', en: 'Internal' }, color: '#06C755' },
          { name: 'Slack', sub: { jp: '社内通知', en: 'Internal' }, color: '#4F46E5' },
          { name: 'Gmail / Outlook', sub: { jp: 'メール配信', en: 'Email send' }, color: '#EF4444' },
        ],
      },
    ],
  },

  demoCallout: {
    badge: { jp: 'NEW', en: 'New' },
    headline: {
      jp: 'AIが日本語で1社ずつ書く。\n翻訳臭さゼロ。',
      en: 'AI writes one-to-one in\nnative Japanese. No translation tells.',
    },
    description: {
      jp: '相手企業のSansan担当者情報・帝国DB財務・最新ニュースをコンテキストに、AIが日本のビジネスマナーに沿ったメッセージを下書き。Chatworkで承認後、HubSpotのシーケンスに自動登録します。',
      en: 'AI grounds each message in the prospect\'s Sansan contact, TDB financials, and latest news, then drafts in tone-appropriate Japanese. Approve in Chatwork, drop into a HubSpot sequence — done.',
    },
    cta: { jp: 'デモを見る', en: 'Watch the demo' },
  },

  features: {
    sectionTitle: { jp: 'もっと深く', en: 'Go deeper' },
    items: [
      {
        headline: { jp: 'スプレッドシート型エンリッチメントテーブル', en: 'Spreadsheet-style enrichment table' },
        description: {
          jp: 'Clayと同じ操作感のテーブルUI。各行が企業、各列が日本のデータソースやAIエンリッチメント。条件分岐・If文・カスタムプロンプトもセル単位で設定可能。',
          en: 'The same table-first UX as Clay. Each row is a company; each column is a JP data source or AI enrichment. Conditionals, if-statements, and custom prompts at the cell level.',
        },
        tag: { jp: 'テーブルUI', en: 'Table UI' },
      },
      {
        headline: { jp: '日本のB2Bデータソース統合', en: 'Built-in Japanese B2B data sources' },
        description: {
          jp: 'Sansan API・Wantedly公開データ・帝国データバンク・東京商工リサーチ・法人番号公表サイトを統合済み。海外ツールでは取得できない日本企業データを1クリックでエンリッチ。',
          en: 'Native integrations with Sansan API, Wantedly public data, Teikoku Databank, Tokyo Shoko Research, and the public corporate registry. Enrich Japanese companies foreign tools can\'t see.',
        },
        tag: { jp: 'JP-ソース', en: 'JP sources' },
      },
      {
        headline: { jp: 'AI日本語パーソナライズ ＋ Chatwork承認', en: 'AI Japanese personalization + Chatwork approval' },
        description: {
          jp: '相手企業のコンテキストをもとに、AIが日本のビジネスマナーに沿ったメッセージを下書き。送信前にChatworkで承認、誤送信を防ぎながら時間を節約します。',
          en: 'AI drafts personalized Japanese outbound grounded in each prospect\'s context. Each draft routes through a Chatwork approval gate — speed without slip-ups.',
        },
        tag: { jp: 'AI＋承認', en: 'AI + approval' },
      },
    ],
  },

  pricing: {
    sectionTitle: { jp: '料金プラン', en: 'Pricing' },
    sectionSubtitle: {
      jp: '創業者価格は先着順。リリース時に値上がりします。Clay型のクレジットモデル。',
      en: 'Founder pricing is first-come, first-served. Credit-based, Clay-style billing. Prices rise at launch.',
    },
    tiers: [
      {
        id: 'beta',
        name: { jp: 'ベータ', en: 'Beta' },
        price: '$0',
        period: { jp: '/月', en: '/mo' },
        description: { jp: '創業者枠で全機能を試す', en: 'Founder access — all features' },
        features: [
          { jp: '月500クレジット', en: '500 credits/month' },
          { jp: '日本のデータソース全て', en: 'All JP data sources' },
          { jp: 'AIエンリッチメント無制限', en: 'Unlimited AI enrichment' },
          { jp: 'コミュニティサポート', en: 'Community support' },
        ],
        highlighted: false,
      },
      {
        id: 'starter',
        name: { jp: 'スターター', en: 'Starter' },
        price: '$149',
        originalPrice: '$299',
        discount: { jp: '50% OFF 創業者価格', en: '50% off founder price' },
        period: { jp: '/月', en: '/mo' },
        description: { jp: '小規模セールスチーム向け', en: 'For small sales teams' },
        features: [
          { jp: '月5,000クレジット', en: '5,000 credits/month' },
          { jp: '5シート含む', en: '5 seats included' },
          { jp: 'HubSpot・Salesforce連携', en: 'HubSpot + Salesforce sync' },
          { jp: 'AI日本語パーソナライズ', en: 'AI Japanese personalization' },
          { jp: 'メールサポート', en: 'Email support' },
        ],
        highlighted: true,
        badge: { jp: '人気', en: 'Most popular' },
      },
      {
        id: 'growth',
        name: { jp: 'グロース', en: 'Growth' },
        price: '$499',
        originalPrice: '$999',
        discount: { jp: '50% OFF 創業者価格', en: '50% off founder price' },
        period: { jp: '/月', en: '/mo' },
        description: { jp: 'RevOps本格運用', en: 'For full RevOps teams' },
        features: [
          { jp: '月25,000クレジット', en: '25,000 credits/month' },
          { jp: '無制限シート', en: 'Unlimited seats' },
          { jp: 'カスタムデータソース', en: 'Custom data sources' },
          { jp: 'Chatwork承認ワークフロー', en: 'Chatwork approval workflows' },
          { jp: '優先サポート', en: 'Priority support' },
        ],
        highlighted: false,
      },
    ],
    footnote: {
      jp: '税抜価格。1クレジット = 1エンリッチメント実行。30日間返金保証。',
      en: 'Prices exclude tax. 1 credit = 1 enrichment run. 30-day money-back guarantee.',
    },
  },

  faq: {
    sectionTitle: { jp: 'よくある質問', en: 'FAQ' },
    items: [
      {
        q: { jp: 'Clayと何が違うのですか？', en: 'How is this different from Clay?' },
        a: {
          jp: '同じ「テーブル型エンリッチメント」のコンセプトですが、日本市場専用です。Clayが繋ぐApollo・Clearbit・LinkedInは日本のB2Bデータをほぼ網羅できません。KarakuriはSansan・Wantedly・帝国DB・TSR・法人番号公表サイトなど、日本企業を本当に網羅するソースに接続します。AIも日本のビジネスマナーで書きます。',
          en: 'Same table-shaped enrichment concept — but tuned for Japan. Clay\'s data sources (Apollo, Clearbit, LinkedIn) miss most Japanese companies. Karakuri taps Sansan, Wantedly, Teikoku Databank, TSR, and the corporate registry — the sources that actually map JP B2B. The AI writes in tone-appropriate Japanese too.',
        },
      },
      {
        q: { jp: 'コードを書く必要はありますか？', en: 'Do I need to write any code?' },
        a: {
          jp: 'いいえ。Clayと同じくスプレッドシート風のUIで操作します。各列をクリックしてデータソースやAIプロンプトを選ぶだけです。',
          en: 'No. Just like Clay, the whole product is a spreadsheet-style UI. Click a column header, pick a data source or AI prompt, done.',
        },
      },
      {
        q: { jp: 'データはどこに保存されますか？APPIは？', en: 'Where is data stored? Is it APPI compliant?' },
        a: {
          jp: '日本国内リージョン（AWS Tokyo / GCP Tokyo）に保存。個人情報保護法（APPI）に準拠し、データ取得元の利用規約も自動で確認します。法務監査にも対応可能なログを保持しています。',
          en: 'Data lives in Japan-region infrastructure (AWS Tokyo / GCP Tokyo). APPI-compliant. We also enforce each source\'s ToS automatically and keep audit-ready logs for your legal team.',
        },
      },
      {
        q: { jp: 'クレジット制とは？', en: 'How does the credit model work?' },
        a: {
          jp: 'Clayと同じく、1クレジット = 1エンリッチメント実行。Sansanで担当者を1件取得 = 1クレジット、AIで1メッセージを下書き = 1クレジット、というシンプルな従量。プラン内のクレジットが余ったら翌月に繰り越せます。',
          en: 'Same as Clay: 1 credit = 1 enrichment run. Pulling one Sansan contact = 1 credit. Drafting one AI message = 1 credit. Unused credits roll over to the next month.',
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
    headline: { jp: '日本のB2Bを\nエンリッチして送る', en: 'Enrich Japanese B2B.\nSend at scale' },
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
      storeUrl: { jp: '会社のWebサイトURL', en: 'Company website URL' },
      email: { jp: 'メールアドレス', en: 'Email' },
      painPoint: { jp: '今のアウトバウンドで一番困っていること', en: 'Your biggest outbound pain right now' },
      painPointPlaceholder: {
        jp: '例：Clayは日本企業データが取れない、Sansanの活用が手作業、AIの日本語が不自然、など',
        en: 'e.g. Clay misses Japanese companies, manual Sansan lookups, AI Japanese sounds translated...',
      },
      submit: { jp: '早期アクセスに参加する', en: 'Join the waitlist' },
      disclaimer: { jp: 'スパムはありません。リリース時にご連絡します。', en: 'No spam. Launch notification only.' },
    },
  },
}

export default content
