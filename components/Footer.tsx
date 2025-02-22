import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-deepBlack text-softWhite py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* 店舗情報 */}
        <div>
          <h3 className="text-primaryRed text-2xl font-bold mb-4">烈火家 🔥</h3>
          <p>📍 準備中</p>
          <p>📞 準備中</p>
          <p>🕒 営業時間: 11:00 - 23:00 (年中無休)</p>
        </div>

        {/* ナビゲーションリンク */}
        <div>
          <h4 className="text-goldAccent text-xl font-semibold mb-4">ナビゲーション</h4>
          <ul className="space-y-2">
            <li><Link href="/menu" className="hover:text-primaryRed">メニュー</Link></li>
            <li><Link href="/recruit" className="hover:text-primaryRed">採用情報</Link></li>
            <li><Link href="/access" className="hover:text-primaryRed">アクセス</Link></li>
            <li><Link href="/contact" className="hover:text-primaryRed">お問い合わせ</Link></li>
            <li><Link href="/privacy" className="hover:text-primaryRed">プライバシーポリシー</Link></li>
            <li><Link href="/terms" className="hover:text-primaryRed">利用規約</Link></li>
          </ul>
        </div>

        {/* SNSリンク */}
        <div>
          <h4 className="text-goldAccent text-xl font-semibold mb-4">フォローする</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="hhttps://x.com/xUVkwEgah387894" target="_blank" rel="noopener noreferrer" className="hover:text-primaryRed">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* 著作権表示 */}
      <div className="text-center text-goldAccent mt-10 border-t border-primaryRed pt-4">
        © {new Date().getFullYear()} 烈火家. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
