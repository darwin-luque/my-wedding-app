import type { NextPage } from 'next';
import Head from 'next/head';
import { MainHero } from '../components/main/hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex h-screen flex-col items-center">
        <MainHero />
      </main>
    </>
  );
};

export default Home;
