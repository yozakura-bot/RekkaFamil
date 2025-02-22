import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section className="relative bg-hero-image bg-cover bg-center h-[70vh] flex items-center justify-center text-center text-softWhite">
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* メインコンテンツ */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-primaryRed drop-shadow-lg animate-pulse">
          烈火家 🔥
        </h1>
        <p className="text-2xl md:text-3xl mt-4 text-goldAccent">
          「激辛ラーメン」で心も体も燃え上がれ！
        </p>
        <Link href="/menu/gekikara">
          <button className="mt-6 px-8 py-4 bg-primaryRed text-softWhite text-xl font-bold rounded-full shadow-lg hover:bg-goldAccent transition duration-300">
            激辛ラーメンを見る🔥
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
