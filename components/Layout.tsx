import React, { ReactNode } from 'react';
import Header from './Header';  // 修正
import Footer from './Footer';  // 修正

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-deepBlack text-softWhite">
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
};

export default Layout;
