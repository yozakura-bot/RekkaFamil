import React, { useState } from 'react';
import Layout from '../components/Layout';

type FAQItem = {
  question: string;
  answer: string;
};

const faqList: FAQItem[] = [
  {
    question: 'Q. 辛さのレベルは調整できますか？🌶️',
    answer: 'はい、全てのラーメンで辛さの調整が可能です。0（辛みなし）からMAX🔥（激辛）までお選びいただけます。',
  },
  {
    question: 'Q. テイクアウトはできますか？🥡',
    answer: 'はい、テイクアウトメニューをご用意しております。お気軽にスタッフへお声がけください。',
  },
  {
    question: 'Q. 予約はできますか？📅',
    answer: '申し訳ありませんが、当店は先着順のご案内となっております。混雑時はお待ちいただく場合がございます。',
  },
  {
    question: 'Q. 支払い方法は何がありますか？💴',
    answer: 'PayPayと現金がご利用いただけます。クレジットカードや電子マネーは対応しておりません。',
  },
  {
    question: 'Q. アレルギー対応はしていますか？⚠️',
    answer: '可能な限り対応いたします。ご注文時にスタッフへご相談ください。',
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="py-16 px-6 text-center text-softWhite">
        <h1 className="text-5xl font-bold text-goldAccent mb-8">❓ よくある質問（Q&A）</h1>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          お客様から寄せられるよくあるご質問をまとめました。<br />
          その他のご不明点は<a href="/contact" className="text-primaryRed underline">お問い合わせフォーム</a>よりお気軽にご相談ください！
        </p>

        {/* FAQ一覧 */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="border border-goldAccent rounded-lg p-4 text-left bg-deepBlack shadow-md"
            >
              <button
                className="w-full flex justify-between items-center text-lg font-bold text-goldAccent"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-softWhite">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* お問い合わせ誘導 */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primaryRed mb-4">📩 お問い合わせ</h2>
          <p className="text-lg">
            その他ご質問がございましたら、
            <a href="/contact" className="text-goldAccent underline">こちら</a>からお気軽にお問い合わせください！
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
