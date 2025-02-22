import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

const NewsDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-goldAccent mb-4">📰 お知らせ詳細</h1>
        <p className="text-softWhite text-lg">「{id}」のお知らせは現在準備中です。</p>
      </div>
    </Layout>
  );
};

export default NewsDetail;
