import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // フォームの入力処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // フォーム送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('応募内容:', formData);
    setSubmitted(true);
    // 実際の送信処理はバックエンドAPIと連携
  };

  return (
    <Layout>
      <div className="py-16 px-6 max-w-3xl mx-auto text-softWhite">
        <h1 className="text-5xl font-bold flame-text text-center mb-8">📝 アルバイト応募フォーム</h1>

        {submitted ? (
          <div className="text-center">
            <h2 className="text-3xl text-goldAccent font-bold mb-4">ご応募ありがとうございます！🎉</h2>
            <p>担当者より後日ご連絡いたします。</p>
            <Link href="/">
              <button className="btn-primary mt-6">🏠 ホームへ戻る</button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* お名前 */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold">お名前</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-deepBlack border border-goldAccent focus:outline-none focus:ring-2 focus:ring-primaryRed"
                placeholder="例：山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-deepBlack border border-goldAccent focus:outline-none focus:ring-2 focus:ring-primaryRed"
                placeholder="例：taro@example.com"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label htmlFor="phone" className="block text-lg font-semibold">電話番号</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-deepBlack border border-goldAccent focus:outline-none focus:ring-2 focus:ring-primaryRed"
                placeholder="例：090-1234-5678"
              />
            </div>

            {/* メッセージ */}
            <div>
              <label htmlFor="message" className="block text-lg font-semibold">自己PR・質問等</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-deepBlack border border-goldAccent focus:outline-none focus:ring-2 focus:ring-primaryRed"
                placeholder="例：飲食店での勤務経験があります！"
              ></textarea>
            </div>

            {/* 送信ボタン */}
            <div className="text-center">
              <button type="submit" className="btn-primary text-lg w-1/2">📨 応募する</button>
            </div>
          </form>
        )}

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

export default ApplyForm;
