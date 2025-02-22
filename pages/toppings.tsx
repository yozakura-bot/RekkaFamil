import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const toppings = [
  {
    name: '煮卵',
    price: '¥150',
    image: '/images/toppings/egg.jpg', // 画像は public/images/toppings に配置
  },
  {
    name: 'チャーシュー',
    price: '¥300',
    image: '/images/toppings/char-siu.jpg',
  },
  {
    name: 'ネギ',
    price: '¥100',
    image: '/images/toppings/green-onion.jpg',
  },
  {
    name: 'バター',
    price: '¥120',
    image: '/images/toppings/butter.jpg',
  },
  {
    name: '海苔',
    price: '¥80',
    image: '/images/toppings/nori.jpg',
  },
  {
    name: '激辛唐辛子',
    price: '¥200',
    image: '/images/toppings/spicy-pepper.jpg',
  },
];

const Toppings = () => {
  return (
    <Layout>
      <div className="py-16 px-6 text-center">
        <h1 className="text-5xl font-bold flame-text mb-8">🍥 トッピング一覧</h1>
        <p className="text-lg text-softWhite mb-12">お好みのトッピングでラーメンを自分好みにカスタマイズ！🍜✨</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {toppings.map((topping, index) => (
            <div
              key={index}
              className="menu-card bg-deepBlack border-goldAccent border-2 rounded-lg p-4 hover:shadow-flame transition-all"
            >
              <Image
                src={topping.image}
                alt={topping.name}
                width={300}
                height={200}
                className="rounded-md mx-auto"
              />
              <h2 className="text-2xl font-bold text-goldAccent mt-4">{topping.name}</h2>
              <p className="text-lg text-softWhite">{topping.price}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Toppings;
