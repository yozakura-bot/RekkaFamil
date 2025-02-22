import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const sides = [
  {
    name: '焼き餃子（6個）',
    price: '¥400',
    image: '/images/sides/gyoza.jpg',
    description: '外はカリッと、中はジューシーな自家製餃子🥟',
  },
  {
    name: '半チャーハン',
    price: '¥450',
    image: '/images/sides/half-fried-rice.jpg',
    description: 'ラーメンのお供にぴったりな半サイズのチャーハン🍚',
  },
  {
    name: '唐揚げ（3個）',
    price: '¥500',
    image: '/images/sides/karaage.jpg',
    description: 'ジューシーでサクサクの鶏の唐揚げ🍗',
  },
  {
    name: '白ごはん',
    price: '¥200',
    image: '/images/sides/white-rice.jpg',
    description: 'ラーメンと一緒にどうぞ🍚',
  },
  {
    name: 'ミニチャーシュー丼',
    price: '¥550',
    image: '/images/sides/mini-chashu-bowl.jpg',
    description: 'とろけるチャーシューたっぷりの丼ぶり🥢',
  },
];

const Sides = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center">
        <h1 className="text-5xl font-bold flame-text mb-8">🥟 サイドメニュー</h1>
        <p className="text-lg text-softWhite mb-12">ラーメンと相性抜群のサイドメニューをどうぞ！🍜✨</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sides.map((side, index) => (
            <div
              key={index}
              className="menu-card bg-deepBlack border-goldAccent border-2 rounded-lg p-4 hover:shadow-flame transition-all"
            >
              <Image
                src={side.image}
                alt={side.name}
                width={300}
                height={200}
                className="rounded-md mx-auto"
              />
              <h2 className="text-2xl font-bold text-goldAccent mt-4">{side.name}</h2>
              <p className="text-lg text-softWhite">{side.price}</p>
              <p className="text-sm text-softWhite mt-2">{side.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Sides;
