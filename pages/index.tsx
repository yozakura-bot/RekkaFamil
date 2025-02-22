import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>烈火家🔥 | 激辛ラーメン専門店</title>
        <meta name="description" content="激辛ラーメンなら烈火家！学生や家族連れに大人気。烈火のような辛さをお楽しみください！" />
      </Head>

      {/* ヒーローセクション */}
      <section className="relative h-screen bg-hero-image bg-cover bg-center flex items-center justify-center">
        <div className="hero-overlay p-8 rounded-lg text-center">
          <h1 className="text-6xl font-bold text-goldAccent flame-text drop-shadow-lg">
            烈火家🔥
          </h1>
          <p className="mt-4 text-xl text-softWhite">
            烈火のような辛さが自慢のラーメン専門店🍜🔥
          </p>
          <div className="mt-6">
            <Link href="/menu/gekikara">
              <button className="btn-primary">🔥 激辛ラーメンを見る</button>
            </Link>
            <Link href="/about">
              <button className="btn-secondary ml-4">こだわりを見る</button>
            </Link>
          </div>
        </div>
      </section>

      {/* メニューセクション */}
      <section className="py-16 px-6 text-center">
        <h2 className="section-title">🍜 メニュー紹介</h2>
        <p className="mb-8 text-lg">
          醤油・味噌・塩・とんこつ・魚介系の多彩なラーメンをご用意！<br />
          看板メニューの「🔥激辛ラーメン🔥」にも挑戦してみてください！
        </p>
        <Link href="/menu">
          <button className="btn-primary">全メニューを見る</button>
        </Link>
      </section>

      {/* アクセス（準備中） */}
      <section className="py-16 px-6 bg-deepBlack text-softWhite text-center">
        <h2 className="section-title">📍 アクセス</h2>
        <p className="mt-4 text-lg">現在、アクセス情報を準備中です。<br />公開まで今しばらくお待ちください🙇‍♂️</p>
        <button
          className="mt-6 px-8 py-3 bg-gray-500 text-softWhite font-bold rounded-lg cursor-not-allowed"
          disabled
        >
          詳細を見る（準備中）
        </button>
      </section>

      {/* フッターの前にキャンペーン案内 */}
      <section className="py-12 px-6 bg-primaryRed text-softWhite text-center">
        <h2 className="text-3xl font-bold">🔥 辛さチャレンジ開催中！</h2>
        <p className="mt-4">完食したら次回無料クーポン進呈🎉</p>
        <Link href="/challenge">
          <button className="btn-secondary mt-4">詳細を見る</button>
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
