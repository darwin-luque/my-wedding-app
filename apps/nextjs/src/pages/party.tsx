import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { useMemo } from 'react';
import { partySplitter } from '../utils/party-splitter';
import { MainPartySection } from '../components/main/party/section';

const Party: NextPage = () => {
  const { data: party } = trpc.people.listParty.useQuery();

  const parsedParty = useMemo(
    () => (!!party ? partySplitter(party) : undefined),
    [party],
  );

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col items-center py-10">
        <MainPartySection
          people={parsedParty?.bridesParents ?? []}
          title="Los papas de Bessy"
        />
        <div className="divider mx-auto my-8 w-11/12" />
        <MainPartySection
          people={parsedParty?.groomsParents ?? []}
          title="Los papas de Darwin"
        />
      </main>
    </>
  );
};

export default Party;
