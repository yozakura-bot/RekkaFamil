import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const RecruitDetails = () => {
  return (
    <Layout>
      <div className="py-16 px-6 max-w-3xl mx-auto text-softWhite">
        <h1 className="text-5xl font-bold flame-text text-center mb-8">💼 アルバイト募集詳細</h1>

        {/* 募集概要 */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-goldAccent mb-4">📋 募集要項</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>職種：</strong> ホールスタッフ・キッチン補助</li>
            <li><strong>時給：</strong> ¥1,090〜（昇給あり🔥）</li>
            <li><strong>勤務地：</strong> 千葉県</li>
            <li><strong>勤務時間：</strong> 9:00 〜 22:00（シフト制・週2日〜OK）</li>
            <li><strong>交通費：</strong> 支給（上限あり）</li>
            <li><strong>待遇：</strong> まかない付き🍜、制服貸与、従業員割引あり</li>
          </ul>
        </section>

        {/* 求める人材 */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-goldAccent mb-4">👀 こんな方を歓迎！</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ラーメンが大好きな方🍥</li>
            <li>人と接するのが好きな方😊</li>
            <li>未経験でもやる気のある方🔥</li>
            <li>学生・主婦（夫）・フリーター大歓迎！</li>
          </ul>
        </section>

        {/* 募集メッセージ */}
        <section className="mb-8 text-center">
          <p className="text-lg">
            「烈火家」で一緒に働きませんか？<br />
            活気あるお店で、楽しい仲間と一緒に成長できる環境です✨<br />
            少しでも興味を持ったらお気軽にご応募ください！
          </p>
        </section>

        {/* 応募ボタン */}
        <div className="text-center">
          <Link href="/recruit/apply">
            <button className="btn-primary text-lg">📝 応募フォームへ</button>
          </Link>
        </div>

        {/* 戻るリンク */}
        <div className="mt-6 text-center">
          <Link href="/recruit">
            <button className="btn-secondary">← 採用トップへ戻る</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default RecruitDetails;
