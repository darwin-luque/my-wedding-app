import Head from 'next/head';
import type { NextPage } from 'next';
import { AdminFamiliesTable } from '../../../components/admin/families/table';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';
import { trpc } from '../../../utils/trpc';

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

const AdminFamilies: NextPage = () => {
  const { data, isLoading } = trpc.families.list.useQuery();

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Families</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex flex-col items-center">
          <AdminFamiliesTable data={data ?? []} loading={isLoading} />
        </main>
      </>
    </>
  );
};

export default AdminFamilies;
