import Head from 'next/head';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AdminPeopleCreateForm } from '../../../components/admin/people/create-form';
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
    label: 'People',
    href: '/admin/people',
    icon: null,
  },
  {
    label: 'Create',
    href: '/admin/people/create',
    icon: null,
  },
];

const AdminCreateFamily: NextPage = () => {
  const router = useRouter();

  const createFamily = trpc.families.create.useMutation({
    onSuccess: () => {
      router.push('/admin/families');
    },
  });

  const onInvalid = () => {
    console.error('Could not create family');
  };

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Create Family</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex h-screen flex-col items-center">
          <h1 className="prose text-xl font-bold">Create a Family</h1>
          <AdminPeopleCreateForm
            onSave={createFamily.mutate}
            onInvalid={onInvalid}
          />
        </main>
      </>
    </>
  );
};

export default AdminCreateFamily;
