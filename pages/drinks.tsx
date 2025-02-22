import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const drinks = [
  {
    name: 'ウーロン茶',
    price: '¥250',
    image: '/images/drinks/oolong-tea.jpg',
    description: 'さっぱりとした後味でラーメンにぴったりの一杯🍵',
  },
  {
    name: 'コーラ',
    price: '¥300',
    image: '/images/drinks/cola.jpg',
    description: '爽快な炭酸が辛いラーメンと相性抜群🥤',
  },
  {
    name: 'オレンジジュース',
    price: '¥300',
    image: '/images/drinks/orange-juice.jpg',
    description: 'フレッシュで甘い味わい🍊',
  },
  {
    name: '緑茶（アイス／ホット）',
    price: '¥250',
    image: '/images/drinks/green-tea.jpg',
    description: '日本の伝統的な味わい。ホットもアイスも選べます🍃',
  },
  {
    name: 'レモンスカッシュ',
    price: '¥350',
    image: '/images/drinks/lemon-squash.jpg',
    description: '爽やかなレモンと炭酸が絶妙な一杯🍋✨',
  },
];

const Drinks = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center">
        <h1 className="text-5xl font-bold flame-text mb-8">🥤 ドリンクメニュー</h1>
        <p className="text-lg text-softWhite mb-12">お食事のお供にぴったりなノンアルコールドリンクをご用意しています🍹✨</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="menu-card bg-deepBlack border-goldAccent border-2 rounded-lg p-4 hover:shadow-flame transition-all"
            >
              <Image
                src={drink.image}
                alt={drink.name}
                width={300}
                height={200}
                className="rounded-md mx-auto"
              />
              <h2 className="text-2xl font-bold text-goldAccent mt-4">{drink.name}</h2>
              <p className="text-lg text-softWhite">{drink.price}</p>
              <p className="text-sm text-softWhite mt-2">{drink.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Drinks;
