import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

const ShoyuRamen = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center">
        {/* メインタイトル */}
        <h1 className="text-5xl font-bold text-goldAccent mb-4">🍜 特製 醤油ラーメン</h1>
        <p className="text-lg text-softWhite mb-6">昔ながらの味わいを大切にした、懐かしの一杯。</p>

        {/* 醤油ラーメン画像 */}
        <div className="mx-auto w-full sm:w-2/3 md:w-1/2">
          <Image
            src="/images/shoyu-ramen.jpg" // public/images に画像を配置
            alt="特製 醤油ラーメン"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* 商品説明 */}
        <div className="mt-8 text-left max-w-2xl mx-auto bg-deepBlack p-6 rounded-lg border border-goldAccent">
          <h2 className="text-3xl font-bold text-goldAccent mb-4">🍥 商品説明</h2>
          <p className="mb-4 leading-relaxed">
            鶏ガラと豚骨をじっくり煮込んだ出汁に、香り豊かな醤油ダレをブレンド。<br />
            自家製の中太麺と相性抜群で、シンプルながらも深みのある味わいをお楽しみください。
          </p>

          <h3 className="text-2xl font-bold text-goldAccent mt-6">💴 価格: 950円</h3>
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

export default ShoyuRamen;
