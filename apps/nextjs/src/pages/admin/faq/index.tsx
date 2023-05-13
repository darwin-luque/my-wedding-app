import Head from 'next/head';
import type { NextPage } from 'next';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';
import { trpc } from '../../../utils/trpc';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'FAQ',
    href: '/admin/faq',
    icon: null,
  },
];

const AdminFamilies: NextPage = () => {
  const { data } = trpc.faq.list.useQuery();

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Families</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex h-screen flex-col items-center">
          <h1 className="prose text-xl font-bold">
            Frequently Asked Questions
          </h1>
        </main>
      </>
    </>
  );
};

export default AdminFamilies;
