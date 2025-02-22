import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

const MisoRamen = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center">
        {/* メインタイトル */}
        <h1 className="text-5xl font-bold text-goldAccent mb-4">🍜 濃厚 味噌ラーメン</h1>
        <p className="text-lg text-softWhite mb-6">深いコクと香りが自慢の一杯。</p>

        {/* 味噌ラーメン画像 */}
        <div className="mx-auto w-full sm:w-2/3 md:w-1/2">
          <Image
            src="/images/miso-ramen.jpg" // public/images に画像を配置
            alt="濃厚 味噌ラーメン"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* 商品説明 */}
        <div className="mt-8 text-left max-w-2xl mx-auto bg-deepBlack p-6 rounded-lg border border-goldAccent">
          <h2 className="text-3xl font-bold text-goldAccent mb-4">🍥 商品説明</h2>
          <p className="mb-4 leading-relaxed">
            数種類の味噌をブレンドした特製スープに、ニンニクの香ばしさをプラス。<br />
            濃厚なスープが自家製ちぢれ麺に絡み、食べ応え抜群の一杯です。<br />
            トッピングの炒め野菜とバターで、さらにコク深い味わいに。
          </p>

          <h3 className="text-2xl font-bold text-goldAccent mt-6">💴 価格: 1,000円</h3>
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

export default MisoRamen;
