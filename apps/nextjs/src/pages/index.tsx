import type { NextPage } from 'next';
import Head from 'next/head';
import { MainHero } from '../components/main/hero';
import { MainOurStory } from '../components/main/our-story';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col items-center">
        <MainHero />
        <div id="our-story">
          <MainOurStory />
        </div>
      </main>
    </>
  );
};

export default Home;
