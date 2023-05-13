import Head from 'next/head';
import type { NextPage } from 'next';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Events',
    href: '/admin/events',
    icon: null,
  },
];

const AdminFamilies: NextPage = () => {
  // const { data, refetch } = trpc.eve.list.useQuery();

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex h-screen flex-col items-center">
          <h1 className="prose text-xl font-bold">Events</h1>
        </main>
      </>
    </>
  );
};

export default AdminFamilies;
