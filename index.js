import Head from 'next/head';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('../components/BTCDashboard'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>BTC 자동매매 대시보드</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
      </Head>
      <main>
        <Dashboard />
      </main>
    </>
  );
}