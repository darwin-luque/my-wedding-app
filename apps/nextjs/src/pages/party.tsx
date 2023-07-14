import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { useMemo } from 'react';
import { partySplitter } from '../utils/party-splitter';

const Party: NextPage = () => {
  const { data: party, isLoading } = trpc.people.listParty.useQuery();

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
      <main className=""></main>
    </>
  );
};

export default Party;
