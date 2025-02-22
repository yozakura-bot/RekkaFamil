import React, { useState } from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（API連携など）
    console.log('送信内容:', formData);
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="py-16 px-6 text-center text-softWhite">
        {/* タイトル */}
        <h1 className="text-5xl font-bold text-goldAccent mb-8">📨 お問い合わせ</h1>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          ご質問やご意見がございましたら、下記のフォームからお気軽にお問い合わせください。
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-deepBlack border-2 border-goldAccent rounded-lg p-8 shadow-lg">
            {/* お名前 */}
            <div className="mb-6 text-left">
              <label htmlFor="name" className="block text-softWhite mb-2">お名前</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-softWhite focus:outline-none focus:ring-2 focus:ring-goldAccent"
              />
            </div>

            {/* メールアドレス */}
            <div className="mb-6 text-left">
              <label htmlFor="email" className="block text-softWhite mb-2">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-softWhite focus:outline-none focus:ring-2 focus:ring-goldAccent"
              />
            </div>

            {/* メッセージ */}
            <div className="mb-6 text-left">
              <label htmlFor="message" className="block text-softWhite mb-2">お問い合わせ内容</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-softWhite focus:outline-none focus:ring-2 focus:ring-goldAccent"
              ></textarea>
            </div>

            {/* 送信ボタン */}
            <button type="submit" className="btn-primary w-full text-lg">
              📤 送信する
            </button>
          </form>
        ) : (
          // 送信完了メッセージ
          <div className="bg-deepBlack border-2 border-primaryRed rounded-lg p-8 max-w-lg mx-auto shadow-lg">
            <h2 className="text-3xl font-bold text-goldAccent mb-4">✅ 送信完了！</h2>
            <p className="text-lg">お問い合わせいただきありがとうございます。<br />担当者よりご連絡いたします。</p>
            <button onClick={() => setSubmitted(false)} className="btn-secondary mt-6">
              🔄 もう一度送信する
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ContactPage;
