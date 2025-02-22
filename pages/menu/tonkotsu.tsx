import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

const TonkotsuRamen = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center">
        {/* メインタイトル */}
        <h1 className="text-5xl font-bold text-goldAccent mb-4">🐷 本格 とんこつラーメン</h1>
        <p className="text-lg text-softWhite mb-6">濃厚でクリーミーな豚骨スープが自慢の一杯。</p>

        {/* とんこつラーメン画像 */}
        <div className="mx-auto w-full sm:w-2/3 md:w-1/2">
          <Image
            src="/images/tonkotsu-ramen.jpg" // public/images に画像を配置
            alt="本格 とんこつラーメン"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* 商品説明 */}
        <div className="mt-8 text-left max-w-2xl mx-auto bg-deepBlack p-6 rounded-lg border border-goldAccent">
          <h2 className="text-3xl font-bold text-goldAccent mb-4">🍥 商品説明</h2>
          <p className="mb-4 leading-relaxed">
            じっくり炊き上げた濃厚な豚骨スープに、特製の細麺が絡みます。<br />
            トッピングにはとろけるチャーシュー、キクラゲ、紅生姜、青ネギを使用し、<br />
            クリーミーなスープとの絶妙なバランスをお楽しみいただけます。
          </p>

          <h3 className="text-2xl font-bold text-goldAccent mt-6">💴 価格: 980円</h3>
        </div>

        {/* アクションボタン */}
        <div className="mt-8">
          <Link href="/menu">
            <button className="btn-primary">メニュー一覧に戻る</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default TonkotsuRamen;
