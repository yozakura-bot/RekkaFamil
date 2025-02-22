import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const MenuIndex = () => {
  // メニューリスト
  const menuItems = [
    { name: '特製 醤油ラーメン', path: '/menu/shoyu', emoji: '🍜' },
    { name: '濃厚 味噌ラーメン', path: '/menu/miso', emoji: '🥢' },
    { name: 'あっさり 塩ラーメン', path: '/menu/shio', emoji: '🧂' },
    { name: '本格 とんこつラーメン', path: '/menu/tonkotsu', emoji: '🐷' },
    { name: '激辛ラーメン🔥', path: '/menu/gekikara', emoji: '🔥' }, // 看板メニュー
  ];

  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-goldAccent mb-6">🍥 メニュー一覧</h1>
        <p className="text-lg text-softWhite mb-10">烈火家自慢のラーメンをぜひご堪能ください！</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <div className="menu-card cursor-pointer hover:scale-105 transition-transform">
                <h2 className="text-2xl font-bold text-goldAccent mb-2">
                  {item.emoji} {item.name}
                </h2>
                <p className="text-softWhite">詳しく見る ➔</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MenuIndex;
