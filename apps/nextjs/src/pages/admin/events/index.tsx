import Head from 'next/head';
import type { NextPage } from 'next';
import { AdminEventsTimeline } from '../../../components/admin/events/timeline';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';
import { trpc } from '../../../utils/trpc';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Events',
    href: '/admin/events',
    icon: null,
  },
];

const AdminEvents: NextPage = () => {
  const { data } = trpc.events.list.useQuery();

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Events</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex flex-col items-center">
          <h1 className="prose text-xl font-bold">Events</h1>
          <AdminEventsTimeline events={data ?? []} />
        </main>
      </>
    </>
  );
};

export default AdminEvents;
