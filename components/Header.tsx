import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menuName: string) => {
    setDropdownOpen(dropdownOpen === menuName ? null : menuName);
  };

  return (
    <header className="bg-deepBlack shadow-lg shadow-primaryRed sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/" className="text-primaryRed text-3xl font-bold flex items-center">
          烈火家 <span className="ml-2 text-goldAccent text-xl">🔥</span>
        </Link>

        {/* ハンバーガーメニュー（モバイル用） */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-softWhite text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* ナビゲーションメニュー */}
        <nav className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex space-y-4 lg:space-y-0 lg:space-x-8 text-lg text-goldAccent">
            {/* ホーム */}
            <li>
              <Link href="/" className="hover:text-primaryRed">
                ホーム
              </Link>
            </li>

            {/* メニュー（ドロップダウン） */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('menu')}
                className="flex items-center hover:text-primaryRed"
              >
                メニュー <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen === 'menu' && (
                <ul className="absolute bg-deepBlack text-softWhite mt-2 shadow-md p-2 space-y-2">
                  <li><Link href="/menu/shoyu" className="hover:text-primaryRed">醤油ラーメン</Link></li>
                  <li><Link href="/menu/miso" className="hover:text-primaryRed">味噌ラーメン</Link></li>
                  <li><Link href="/menu/shio" className="hover:text-primaryRed">塩ラーメン</Link></li>
                  <li><Link href="/menu/tonkotsu" className="hover:text-primaryRed">とんこつラーメン</Link></li>
                  <li><Link href="/menu/gekikara" className="hover:text-primaryRed">激辛ラーメン🔥</Link></li>
                  <li><Link href="/toppings" className="hover:text-primaryRed">トッピング</Link></li>
                  <li><Link href="/sides" className="hover:text-primaryRed">サイドメニュー</Link></li>
                  <li><Link href="/drinks" className="hover:text-primaryRed">ドリンク</Link></li>
                </ul>
              )}
            </li>

            {/* 採用情報（ドロップダウン） */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('recruit')}
                className="flex items-center hover:text-primaryRed"
              >
                採用情報 <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen === 'recruit' && (
                <ul className="absolute bg-deepBlack text-softWhite mt-2 shadow-md p-2 space-y-2">
                  <li><Link href="/recruit" className="hover:text-primaryRed">採用トップ</Link></li>
                  <li><Link href="/recruit/details" className="hover:text-primaryRed">募集要項</Link></li>
                  <li><Link href="/recruit/apply" className="hover:text-primaryRed">応募フォーム</Link></li>
                </ul>
              )}
            </li>

            {/* サービス・イベント */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center hover:text-primaryRed"
              >
                サービス <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen === 'services' && (
                <ul className="absolute bg-deepBlack text-softWhite mt-2 shadow-md p-2 space-y-2">
                  <li><Link href="/challenge" className="hover:text-primaryRed">辛さチャレンジ🔥</Link></li>
                  <li><Link href="/point-card" className="hover:text-primaryRed">ポイントカード</Link></li>
                  <li><Link href="/payment" className="hover:text-primaryRed">支払い方法</Link></li>
                </ul>
              )}
            </li>

            {/* その他のページ */}
            <li><Link href="/about" className="hover:text-primaryRed">こだわり</Link></li>
            <li><Link href="/news" className="hover:text-primaryRed">お知らせ</Link></li>
            <li><Link href="/faq" className="hover:text-primaryRed">よくある質問</Link></li>
            <li><Link href="/access" className="hover:text-primaryRed">アクセス</Link></li>
            <li><Link href="/contact" className="hover:text-primaryRed">お問い合わせ</Link></li>

            {/* 法的情報 */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('legal')}
                className="flex items-center hover:text-primaryRed"
              >
                法的情報 <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen === 'legal' && (
                <ul className="absolute bg-deepBlack text-softWhite mt-2 shadow-md p-2 space-y-2">
                  <li><Link href="/privacy" className="hover:text-primaryRed">プライバシーポリシー</Link></li>
                  <li><Link href="/terms" className="hover:text-primaryRed">利用規約</Link></li>
                  <li><Link href="/sitemap" className="hover:text-primaryRed">サイトマップ</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
