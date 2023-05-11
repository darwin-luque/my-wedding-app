import type { NextPage } from 'next';
import Head from 'next/head';
import type { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';
import { AdminPeopleTable } from '../../../components/admin/people/table';
import { trpc } from '../../../utils/trpc';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Guests',
    href: null,
    icon: null,
  },
  {
    label: 'People',
    href: '/admin/people',
    icon: null,
  },
];

const AdminPeople: NextPage = () => {
  const { data } = trpc.people.list.useQuery();

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - People</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex h-screen flex-col items-center">
          <AdminPeopleTable data={data ?? []} />
        </main>
      </>
    </>
  );
};

export default AdminPeople;
