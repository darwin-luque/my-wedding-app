import type { NextPage } from 'next';
import Head from 'next/head';
import { AdminHeader } from '../../components/admin/header';
import { IBreadcrumb } from '../../components/admin/header/breadcrumbs';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: null,
  },
];

const AdminDashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex flex-col items-center">
          <h1>My Wedding Platform</h1>
        </main>
      </>
    </>
  );
};

export default AdminDashboard;
