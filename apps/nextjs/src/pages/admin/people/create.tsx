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

const AdminCreatePerson: NextPage = () => {
  const router = useRouter();

  const createPerson = trpc.people.create.useMutation({
    onSuccess: () => {
      router.push('/admin/people');
    },
  });

  const onInvalid = (error: any) => {
    console.error('Could not create family', error);
  };

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Create Person</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex flex-col items-center pb-10">
          <h1 className="prose text-xl font-bold">Create a Person</h1>
          <AdminPeopleCreateForm
            onSave={createPerson.mutate}
            onInvalid={onInvalid}
          />
        </main>
      </>
    </>
  );
};

export default AdminCreatePerson;
