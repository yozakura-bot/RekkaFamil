import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const ChallengePage = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center text-softWhite">
        {/* タイトル */}
        <h1 className="text-5xl font-bold flame-text mb-8">🔥 激辛チャレンジ 🔥</h1>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          当店自慢の「超激辛ラーメン」に挑戦しませんか？完食できれば<span className="text-goldAccent font-bold">無料</span>＆豪華特典あり！🔥🍜
        </p>

        {/* チャレンジ画像 */}
        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <Image
            src="/images/challenge-ramen.jpg" // public/images に画像を配置
            alt="激辛チャレンジラーメン"
            width={800}
            height={500}
            className="rounded-lg shadow-flame"
          />
        </div>

        {/* ルール */}
        <section className="bg-deepBlack border-2 border-primaryRed rounded-lg p-6 max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-goldAccent mb-4">🔥 チャレンジルール</h2>
          <ul className="text-left space-y-3 text-lg">
            <li>🌶️ <strong>制限時間：</strong> 15分以内</li>
            <li>🌶️ <strong>スープも完飲で完食認定</strong></li>
            <li>🌶️ <strong>途中で水の補給は1杯まで</strong></li>
            <li>🌶️ <strong>完食特典：</strong> 無料＋記念写真を店内に掲示📸</li>
            <li>⚠️ <strong>注意：</strong> 辛さに自信のある方のみご参加ください</li>
          </ul>
        </section>

        {/* 挑戦者ギャラリー */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-goldAccent mb-6">💪 挑戦者ギャラリー(まだいないです！)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 仮の画像を表示 */}
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="relative w-full h-40 bg-deepBlack border-2 border-goldAccent rounded-lg">
                <Image
                  src={`/images/challenger-${num}.jpg`} // 仮画像（public/images に配置）
                  alt={`挑戦者${num}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 挑戦するボタン（予約なしでOK） */}
        <div className="mt-8">
          <p className="text-xl mb-4">🔥 あなたも挑戦してみませんか？🔥</p>
          <Link href="/menu/gekikara">
            <button className="btn-primary text-lg">👺 激辛ラーメンを見る</button>
          </Link>
        </div>

        {/* 戻るリンク */}
        <div className="mt-6">
          <Link href="/">
            <button className="btn-secondary">← ホームへ戻る</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ChallengePage;
