// components/MenuCard.tsx

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type MenuCardProps = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  type: 'gekikara' | 'shoyu' | 'miso' | 'shio' | 'tonkotsu'; // メニューの種類
  toppings?: string[];
};

const MenuCard: React.FC<MenuCardProps> = ({ title, description, price, imageUrl, type, toppings }) => {
  // メニューごとのスタイル設定
  const cardStyle = clsx(
    'menu-card rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105',
    {
      'bg-gradient-to-br from-red-700 to-yellow-500 text-softWhite shadow-flame': type === 'gekikara', // 激辛ラーメン
      'bg-gradient-to-br from-yellow-100 to-amber-400 text-deepBlack': type === 'shoyu', // 醤油ラーメン
      'bg-gradient-to-br from-orange-200 to-red-400 text-deepBlack': type === 'miso', // 味噌ラーメン
      'bg-gradient-to-br from-blue-100 to-white text-deepBlack': type === 'shio', // 塩ラーメン
      'bg-gradient-to-br from-gray-300 to-gray-600 text-deepBlack': type === 'tonkotsu', // とんこつラーメン
    }
  );

  const titleStyle = clsx('text-xl font-bold', {
    'flame-text': type === 'gekikara', // 激辛ラーメンだけ炎のエフェクト
    'text-primaryRed': type === 'shoyu',
    'text-orange-600': type === 'miso',
    'text-blue-500': type === 'shio',
    'text-gray-700': type === 'tonkotsu',
  });

  return (
    <div className={cardStyle}>
      {/* メニュー画像 */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* メニュー内容 */}
      <div className="p-4">
        {/* タイトル */}
        <h3 className={titleStyle}>{title}</h3>

        {/* 説明文 */}
        <p className="mt-2 text-sm">{description}</p>

        {/* トッピング表示 */}
        {toppings && toppings.length > 0 && (
          <div className="mt-2">
            <span className="font-semibold">トッピング:</span>
            <ul className="list-disc list-inside text-sm">
              {toppings.map((topping, index) => (
                <li key={index}>{topping}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 価格表示 */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold">¥{price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
