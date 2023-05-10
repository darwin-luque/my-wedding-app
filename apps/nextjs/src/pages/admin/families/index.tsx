import Head from 'next/head';
import type { NextPage } from 'next';
import { AdminFamiliesTable } from '../../../components/admin/families/table';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Guests',
    href: null,
    icon: null,
  },
  {
    label: 'Families',
    href: '/admin/families',
    icon: null,
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Families</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex h-screen flex-col items-center">
          <AdminFamiliesTable />
        </main>
      </>
    </>
  );
};

export default Home;
