import type { NextPage } from 'next';
import Head from 'next/head';
import { AdminInvitationsTable } from '../../../components/admin/invitations/table';
import type { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';
import { trpc } from '../../../utils/trpc';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Guests',
    href: null,
    icon: null,
  },
  {
    label: 'Invitations',
    href: '/admin/invitations',
    icon: null,
  },
];

const AdminPeople: NextPage = () => {
  const { data } = trpc.invitations.list.useQuery();

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Invitations</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex flex-col items-center">
          <AdminInvitationsTable data={data ?? []} />
        </main>
      </>
    </>
  );
};

export default AdminPeople;
