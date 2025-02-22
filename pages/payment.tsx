import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const PaymentPage = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center text-softWhite">
        {/* タイトル */}
        <h1 className="text-5xl font-bold text-goldAccent mb-8">💴 お支払い方法</h1>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          当店では以下のお支払い方法をご利用いただけます。<br />
          スムーズなお会計で、美味しいラーメンをお楽しみください🍜✨
        </p>

        {/* 支払い方法一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* PayPay 支払い */}
          <div className="bg-deepBlack border-2 border-goldAccent rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-primaryRed mb-4">📱 PayPay</h2>
            <p className="text-lg mb-4">簡単＆スピーディーなスマホ決済が可能です！</p>
            <Image
              src="/images/paypay-logo.png" // PayPayロゴの画像パスを指定
              alt="PayPay"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>

          {/* 現金支払い */}
          <div className="bg-deepBlack border-2 border-goldAccent rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-primaryRed mb-4">💵 現金</h2>
            <p className="text-lg mb-4">昔ながらの現金払いも大歓迎です！</p>
            <Image
              src="/images/cash-icon.png" // 現金アイコンの画像パスを指定
              alt="現金支払い"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
        </div>

        {/* 注意書き */}
        <div className="mt-12 bg-deepBlack border-2 border-primaryRed rounded-lg p-6 max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold text-primaryRed mb-4">⚠️ ご注意</h3>
          <ul className="list-disc list-inside text-left text-lg leading-8">
            <li>💳 クレジットカードや電子マネーはご利用いただけません。</li>
            <li>🙇‍♂️ ご不便をおかけしますが、何卒ご理解のほどよろしくお願いいたします。</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;
