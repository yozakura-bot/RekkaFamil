import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Sitemap = () => {
  return (
    <Layout>
      <div className="py-20 px-6 text-softWhite max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-goldAccent mb-8 text-center">🗺️ サイトマップ</h1>

        <p className="mb-8 text-center text-lg">
          烈火家の全ページへのリンクを一覧でご案内します。🔥🍜
        </p>

        {/* サイトマップリスト */}
        <ul className="space-y-4 text-xl">
          {/* ホーム & 基本情報 */}
          <li><Link href="/" className="hover:text-primaryRed">🏠 ホーム</Link></li>
          <li><Link href="/about" className="hover:text-primaryRed">🥢 こだわり</Link></li>
          <li><Link href="/news" className="hover:text-primaryRed">📰 お知らせ</Link></li>

          {/* メニュー */}
          <li className="mt-4 font-bold text-goldAccent">🍜 メニュー</li>
          <ul className="ml-6 space-y-2">
            <li><Link href="/menu" className="hover:text-primaryRed">📋 メニュートップ</Link></li>
            <li><Link href="/menu/shoyu" className="hover:text-primaryRed">🍜 醤油ラーメン</Link></li>
            <li><Link href="/menu/miso" className="hover:text-primaryRed">🍜 味噌ラーメン</Link></li>
            <li><Link href="/menu/shio" className="hover:text-primaryRed">🍜 塩ラーメン</Link></li>
            <li><Link href="/menu/tonkotsu" className="hover:text-primaryRed">🍜 とんこつラーメン</Link></li>
            <li><Link href="/menu/gekikara" className="hover:text-primaryRed">🔥 激辛ラーメン</Link></li>
            <li><Link href="/toppings" className="hover:text-primaryRed">🥚 トッピング</Link></li>
            <li><Link href="/sides" className="hover:text-primaryRed">🥟 サイドメニュー</Link></li>
            <li><Link href="/drinks" className="hover:text-primaryRed">🥤 ドリンク</Link></li>
          </ul>

          {/* その他コンテンツ */}
          <li className="mt-4 font-bold text-goldAccent">🎯 その他</li>
          <ul className="ml-6 space-y-2">
            <li><Link href="/challenge" className="hover:text-primaryRed">🔥 辛さチャレンジ</Link></li>
            <li><Link href="/point-card" className="hover:text-primaryRed">🏅 ポイントカード案内</Link></li>
            <li><Link href="/payment" className="hover:text-primaryRed">💴 支払い方法</Link></li>
            <li><Link href="/faq" className="hover:text-primaryRed">❓ よくある質問（Q&A）</Link></li>
            <li><Link href="/contact" className="hover:text-primaryRed">📩 お問い合わせ</Link></li>
          </ul>

          {/* 採用情報 */}
          <li className="mt-4 font-bold text-goldAccent">💼 採用情報</li>
          <ul className="ml-6 space-y-2">
            <li><Link href="/recruit" className="hover:text-primaryRed">📋 採用トップ</Link></li>
            <li><Link href="/recruit/details" className="hover:text-primaryRed">📝 募集要項</Link></li>
            <li><Link href="/recruit/apply" className="hover:text-primaryRed">✉️ 応募フォーム</Link></li>
          </ul>

          {/* 法的情報 */}
          <li className="mt-4 font-bold text-goldAccent">⚖️ 法的情報</li>
          <ul className="ml-6 space-y-2">
            <li><Link href="/privacy" className="hover:text-primaryRed">🔒 プライバシーポリシー</Link></li>
            <li><Link href="/terms" className="hover:text-primaryRed">📋 利用規約</Link></li>
          </ul>

          {/* アクセス */}
          <li className="mt-4"><Link href="/access" className="hover:text-primaryRed">🚉 店舗情報・アクセス</Link></li>
        </ul>

        {/* 戻るボタン */}
        <div className="mt-12 text-center">
          <Link href="/">
            <button className="btn-primary">
              ホームに戻る 🏠
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Sitemap;
