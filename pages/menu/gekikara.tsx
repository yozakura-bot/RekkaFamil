import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

const GekikaraRamen = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center relative">
        {/* 炎の背景エフェクト */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900 opacity-40 animate-pulse -z-10"></div>

        {/* メインタイトル */}
        <h1 className="text-5xl font-bold flame-text mb-4">🔥 烈火 激辛ラーメン 🔥</h1>
        <p className="text-lg text-softWhite mb-6">辛さの極限を超える、挑戦者求む！🌶️💀</p>

        {/* 激辛ラーメン画像 */}
        <div className="mx-auto w-full sm:w-2/3 md:w-1/2">
          <Image
            src="/images/gekikara-ramen.jpg" // public/images に画像を配置
            alt="烈火 激辛ラーメン"
            width={600}
            height={400}
            className="rounded-lg shadow-flame"
          />
        </div>

        {/* 商品説明 */}
        <div className="mt-8 text-left max-w-2xl mx-auto bg-deepBlack p-6 rounded-lg border-2 border-primaryRed">
          <h2 className="text-3xl font-bold text-goldAccent mb-4">🌶️ 商品説明</h2>
          <p className="mb-4 leading-relaxed">
            唐辛子・山椒・特製激辛オイルをふんだんに使用した、究極の激辛ラーメン！🔥<br />
            スープの奥には旨味が凝縮され、ただ辛いだけではなく深い味わいを楽しめます。<br />
            挑戦者には「烈火認定証」をプレゼント！💥
          </p>

          <h3 className="text-2xl font-bold text-goldAccent mt-6">💴 価格: 1,200円</h3>
        </div>

        {/* 辛さチャレンジリンク */}
        <div className="mt-8">
          <Link href="/challenge">
            <button className="btn-primary animate-bounce">🔥 辛さチャレンジに挑戦！</button>
          </Link>
        </div>

        {/* メニューに戻る */}
        <div className="mt-4">
          <Link href="/menu">
            <button className="btn-secondary">メニュー一覧に戻る</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default GekikaraRamen;
