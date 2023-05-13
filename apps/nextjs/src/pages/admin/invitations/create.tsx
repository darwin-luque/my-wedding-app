import Head from 'next/head';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AdminInvitationCreateForm } from '../../../components/admin/invitations/create-form';
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
    label: 'Invitations',
    href: '/admin/invitations',
    icon: null,
  },
  {
    label: 'Create',
    href: '/admin/invitations/create',
    icon: null,
  },
];

const AdminCreatePerson: NextPage = () => {
  const router = useRouter();

  const createInvitation = trpc.invitations.create.useMutation({
    onSuccess: () => {
      router.push('/admin/invitations');
    },
  });

  const onInvalid = () => {
    console.error('Could not create family');
  };

  return (
    <>
      <Head>
        <title>
          Bessy & Darwin Wedding&apos;s Platform - Create Invitation
        </title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex h-screen flex-col items-center">
          <h1 className="prose text-xl font-bold">Create an Invitation</h1>
          <AdminInvitationCreateForm
            onInvalid={onInvalid}
            onSave={createInvitation.mutate}
          />
        </main>
      </>
    </>
  );
};

export default AdminCreatePerson;
