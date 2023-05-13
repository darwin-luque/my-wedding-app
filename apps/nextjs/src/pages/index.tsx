import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex h-screen flex-col items-center">
        <h1>My Wedding Platform</h1>
      </main>
    </>
  );
};

export default Home;
