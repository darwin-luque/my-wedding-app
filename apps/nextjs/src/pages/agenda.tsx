import { Parisienne } from 'next/font/google';
import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { MainAgendaTimeline } from '../components/main/agenda/timeline';

const parisienne = Parisienne({
  weight: '400',
  style: 'normal',
});

const Agenda: NextPage = () => {
  const { data } = trpc.events.list.useQuery();

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col items-center">
        <div className="mt-5 mb-10">
          <h2
            className={`px-10 text-4xl font-black leading-8 tracking-normal ${parisienne.className}`}
          >
            Agenda
          </h2>
        </div>
        <MainAgendaTimeline events={data ?? []} />
      </main>
    </>
  );
};

export default Agenda;
