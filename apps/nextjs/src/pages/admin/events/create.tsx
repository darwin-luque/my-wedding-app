import Head from 'next/head';
import type { NextPage } from 'next';
import { AdminEventCreateForm } from '../../../components/admin/events/create-form';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';
import { trpc } from '../../../utils/trpc';
import { useRouter } from 'next/router';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Events',
    href: '/admin/events',
    icon: null,
  },
  {
    label: 'Create',
    href: '/admin/events/create',
    icon: null,
  },
];

const AdminCreateEvent: NextPage = () => {
  const router = useRouter();
  const createEvent = trpc.events.create.useMutation({
    onSuccess: () => router.push('/admin/events'),
  });

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Events</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex flex-col items-center">
          <h1 className="prose text-xl font-bold">Create an Event</h1>
          <AdminEventCreateForm
            onInvalid={() => null}
            onSave={createEvent.mutate}
          />
        </main>
      </>
    </>
  );
};

export default AdminCreateEvent;
