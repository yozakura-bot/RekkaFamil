import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const About = () => {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="relative h-96">
        <Image
          src="/images/about-hero.jpg" // public/images に配置
          alt="烈火家のこだわり"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-goldAccent flame-text">烈火家のこだわり🔥</h1>
          <p className="mt-4 text-lg text-softWhite">最高の一杯をお届けするために。</p>
        </div>
      </section>

      {/* ストーリーセクション */}
      <section className="py-16 px-6 bg-deepBlack text-softWhite">
        <h2 className="section-title">🍜 創業の想い</h2>
        <p className="max-w-3xl mx-auto text-lg leading-8">
          烈火家は、辛さと旨さを極限まで追求したラーメンを提供することを使命に、創業しました。
          私たちの「激辛ラーメン🔥」は、ただ辛いだけではなく、コクと深みを兼ね備えた一杯です。
          お客様の「うまい！」の声が、何よりの励みです。
        </p>
      </section>

      {/* 素材へのこだわり */}
      <section className="py-16 px-6 bg-softWhite text-deepBlack">
        <h2 className="section-title">🥢 素材へのこだわり</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 麺 */}
          <div className="menu-card text-center">
            <Image src="/images/noodles.jpg" alt="特製自家製麺" width={300} height={200} className="rounded-md" />
            <h3 className="text-2xl font-bold mt-4">特製自家製麺</h3>
            <p className="mt-2 text-sm">毎日店舗で製麺し、コシと風味にこだわった特製麺。</p>
          </div>

          {/* スープ */}
          <div className="menu-card text-center">
            <Image src="/images/soup.jpg" alt="旨辛スープ" width={300} height={200} className="rounded-md" />
            <h3 className="text-2xl font-bold mt-4">旨辛スープ</h3>
            <p className="mt-2 text-sm">豚骨と鶏ガラをじっくり煮込んだベースに、秘伝の辛味ダレをブレンド。</p>
          </div>

          {/* トッピング */}
          <div className="menu-card text-center">
            <Image src="/images/toppings.jpg" alt="極上トッピング" width={300} height={200} className="rounded-md" />
            <h3 className="text-2xl font-bold mt-4">極上トッピング</h3>
            <p className="mt-2 text-sm">とろけるチャーシューや新鮮野菜でさらに美味しさ倍増。</p>
          </div>
        </div>
      </section>

      {/* チャレンジ告知 */}
      <section className="py-16 px-6 bg-primaryRed text-softWhite text-center">
        <h2 className="text-4xl font-bold flame-text">🔥 激辛チャレンジ 開催中！ 🔥</h2>
        <p className="mt-4">最強の辛さ「地獄レベル」を完食できるか！？</p>
        <a href="/challenge">
          <button className="mt-6 btn-secondary">チャレンジ詳細を見る</button>
        </a>
      </section>
    </Layout>
  );
};

export default About;
