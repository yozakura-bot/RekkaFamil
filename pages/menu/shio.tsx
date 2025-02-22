import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

const ShioRamen = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center">
        {/* メインタイトル */}
        <h1 className="text-5xl font-bold text-goldAccent mb-4">🧂 あっさり 塩ラーメン</h1>
        <p className="text-lg text-softWhite mb-6">澄んだスープと素材の旨みを堪能できる一杯。</p>

        {/* 塩ラーメン画像 */}
        <div className="mx-auto w-full sm:w-2/3 md:w-1/2">
          <Image
            src="/images/shio-ramen.jpg" // public/images に画像を配置
            alt="あっさり 塩ラーメン"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* 商品説明 */}
        <div className="mt-8 text-left max-w-2xl mx-auto bg-deepBlack p-6 rounded-lg border border-goldAccent">
          <h2 className="text-3xl font-bold text-goldAccent mb-4">🍥 商品説明</h2>
          <p className="mb-4 leading-relaxed">
            鶏ガラと魚介のダシを絶妙にブレンドした澄み切った塩スープ。<br />
            自家製の細麺がスープとよく絡み、あっさりとした味わいの中に深いコクを感じられます。<br />
            トッピングには柔らかい鶏チャーシューと新鮮な青ネギを使用しています。
          </p>

          <h3 className="text-2xl font-bold text-goldAccent mt-6">💴 価格: 900円</h3>
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

export default ShioRamen;
