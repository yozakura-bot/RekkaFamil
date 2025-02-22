gekikaraya/
├── components/               # UIコンポーネント
│   ├── Header.tsx            # ヘッダー（ナビゲーション含む）
│   ├── Footer.tsx            # フッター
│   ├── Layout.tsx            # 全体レイアウト用コンポーネント
│   ├── HeroBanner.tsx        # ホーム用ビジュアルバナー
│   └── MenuCard.tsx          # メニュー表示用カード
│
├── pages/                    # Next.js ページルーティング
│   ├── index.tsx             # 1. ホームページ
│   ├── about.tsx             # 2. こだわり
│   ├── news/                 
│   │   ├── index.tsx         # 3. お知らせ一覧
│   │   └── [id].tsx          # 4. お知らせ詳細
│   │
│   ├── menu/                 # 5-10. メニューページ
│   │   ├── index.tsx         # メニュートップページ
│   │   ├── shoyu.tsx         # 醤油ラーメン
│   │   ├── miso.tsx          # 味噌ラーメン
│   │   ├── shio.tsx          # 塩ラーメン
│   │   ├── tonkotsu.tsx      # とんこつラーメン
│   │   └── gekikara.tsx      # 激辛ラーメン🔥（看板メニュー）
│   │
│   ├── toppings.tsx          # 11. トッピング一覧
│   ├── sides.tsx             # 12. サイドメニュー（餃子・チャーハンなど）
│   ├── drinks.tsx            # 13. ドリンクメニュー
│
│   ├── recruit/              # 14-16. 採用情報
│   │   ├── index.tsx         # 採用トップページ
│   │   ├── details.tsx       # アルバイト募集詳細（時給¥1,090）
│   │   └── apply.tsx         # 応募フォーム
│
│   ├── challenge.tsx         # 17. 辛さチャレンジ🔥
│   ├── point-card.tsx        # 18. ポイントカード案内
│   ├── payment.tsx           # 19. 支払い方法（PayPay & 現金のみ）
│   ├── faq.tsx               # 20. よくある質問（Q&A）
│   ├── contact.tsx           # 21. お問い合わせフォーム
│   ├── access.tsx            # 22. 店舗情報・アクセス
│   ├── privacy.tsx           # 23. プライバシーポリシー
│   ├── terms.tsx             # 24. 利用規約
│   └── sitemap.tsx           # 25. サイトマップ
│
├── public/                   # 静的ファイル（写真除外）
│   └── favicon.ico           # ファビコン
│
├── styles/                   # スタイル関連
│   ├── globals.css           # グローバルCSS（Tailwind適用済み）
│   └── variables.scss        # SCSS用のカラーパレット設定
│
├── tailwind.config.js        # TailwindCSS 設定
├── tsconfig.json             # TypeScript 設定
├── package.json              # パッケージ設定
└── README.md                 # プロジェクト概要
"# -" 
