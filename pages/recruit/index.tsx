import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const Recruit = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center">
        <h1 className="text-5xl font-bold flame-text mb-6">🔥 採用情報</h1>
        <p className="text-lg text-softWhite mb-8">
          「烈火家」では一緒にお店を盛り上げてくれる仲間を募集しています！<br />
          ラーメンが好きな方、接客が好きな方、大歓迎です🍜✨
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* アルバイト募集リンク */}
          <Link href="/recruit/details">
            <div className="menu-card cursor-pointer hover:scale-105 transition-transform">
              <h2 className="text-3xl font-bold text-goldAccent mb-4">💼 アルバイト募集</h2>
              <p className="text-softWhite">
                時給 ¥1,090〜 🔥<br />
                シフト自由・未経験歓迎！<br />
                詳細はこちらから👉
              </p>
            </div>
          </Link>

          {/* 応募フォームリンク */}
          <Link href="/recruit/apply">
            <div className="menu-card cursor-pointer hover:scale-105 transition-transform">
              <h2 className="text-3xl font-bold text-goldAccent mb-4">📝 応募フォーム</h2>
              <p className="text-softWhite">
                気になった方はこちらから簡単応募！<br />
                あなたのご応募をお待ちしています😊
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-12">
          <Link href="/">
            <button className="btn-primary">🏠 ホームへ戻る</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Recruit;
