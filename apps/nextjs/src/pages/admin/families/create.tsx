import Head from 'next/head';
import type { NextPage } from 'next';
import { AdminFamilyCreateForm } from '../../../components/admin/families/create-form';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';
import { trpc } from '../../../utils/trpc';
import { useRouter } from 'next/router';

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
  {
    label: 'Create',
    href: '/admin/families/create',
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
          <AdminFamilyCreateForm
            onSave={createFamily.mutate}
            onInvalid={onInvalid}
          />
        </main>
      </>
    </>
  );
};

export default AdminCreateFamily;
