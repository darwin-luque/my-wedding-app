import type { NextPage } from 'next';
import Head from 'next/head';
import { MainFaqsList } from '../components/main/faqs/list';
import { trpc } from '../utils/trpc';

const Faq: NextPage = () => {
  const { data: faqs } = trpc.faq.list.useQuery();

  console.log({ faqs });

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col items-center">
        <MainFaqsList faqs={faqs ?? []} />
      </main>
    </>
  );
};

export default Faq;
