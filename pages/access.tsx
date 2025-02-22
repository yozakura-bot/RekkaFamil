import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const AccessPage = () => {
  return (
    <Layout>
      <div className="py-20 px-6 text-center text-softWhite">
        <h1 className="text-5xl font-bold text-goldAccent mb-8">🚉 店舗情報・アクセス</h1>
        <p className="text-lg mb-6">申し訳ありません。現在このページは準備中です。🙇‍♂️</p>
        <p className="text-lg">公開まで今しばらくお待ちください。</p>

        <div className="mt-12">
          <Link href="/">
            <button className="btn-primary">
              ホームに戻る 🏠
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AccessPage;
