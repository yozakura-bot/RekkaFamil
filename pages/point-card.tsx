import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const PointCardPage = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center text-softWhite">
        {/* タイトル */}
        <h1 className="text-5xl font-bold text-goldAccent mb-8">🏅 ポイントカードのご案内</h1>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          美味しいラーメンを食べて、ポイントを貯めよう！<br />
          貯めたポイントでお得な特典をゲットできます✨🍜
        </p>

        {/* ポイントカード画像 */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/point-card.png" // 適切な画像パスに変更してください
            alt="ポイントカード"
            width={400}
            height={250}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* 特典内容 */}
        <div className="bg-deepBlack border-2 border-goldAccent rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
          <h2 className="text-3xl font-bold text-goldAccent mb-4">🎁 特典内容</h2>
          <ul className="text-left text-lg leading-8">
            <li>🍜 ラーメン1杯ごとに <span className="text-primaryRed font-bold">1ポイント</span> 獲得！</li>
            <li>🔥 <span className="text-goldAccent font-bold">10ポイント</span> で <span className="text-goldAccent font-bold">ラーメン1杯無料！</span></li>
            <li>🎂 お誕生日月には <span className="text-primaryRed font-bold">+2ポイント</span> プレゼント！</li>
            <li>👫 お友達紹介で <span className="text-primaryRed font-bold">+3ポイント</span> 進呈！</li>
          </ul>
        </div>

        {/* 取得方法 */}
        <div className="mt-12 bg-deepBlack border-2 border-primaryRed rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
          <h2 className="text-3xl font-bold text-primaryRed mb-4">📋 ポイントカード取得方法</h2>
          <p className="text-lg leading-8">
            店舗でのお会計時にスタッフまでお声がけください。<br />
            初回発行は <span className="text-goldAccent font-bold">無料</span> です！🙌
          </p>
        </div>

        {/* お問い合わせボタン */}
        <div className="mt-10">
          <Link href="/contact">
            <button className="btn-primary text-lg">
              📩 お問い合わせはこちら
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PointCardPage;
