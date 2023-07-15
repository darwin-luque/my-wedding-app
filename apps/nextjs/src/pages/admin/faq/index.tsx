import Head from 'next/head';
import type { NextPage } from 'next';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';
import { trpc } from '../../../utils/trpc';
import { AdminFaqCollapsable } from '../../../components/admin/faq/collapsable';
import { FaPlus } from 'react-icons/fa';
import { useMemo } from 'react';
import { RollingBarrelLoader } from '../../../components/ui/loaders/rolling-barrel';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'FAQ',
    href: '/admin/faq',
    icon: null,
  },
];

const AdminFamilies: NextPage = () => {
  const { data, refetch } = trpc.faq.list.useQuery();

  const createFaq = trpc.faq.create.useMutation({
    onSuccess: () => refetch(),
  });

  const updateFaq = trpc.faq.update.useMutation({
    onSuccess: () => refetch(),
  });

  const deleteFaq = trpc.faq.delete.useMutation({
    onSuccess: () => refetch(),
  });

  const isMutationLoading = useMemo(
    () => createFaq.isLoading || updateFaq.isLoading || deleteFaq.isLoading,
    [createFaq.isLoading, deleteFaq.isLoading, updateFaq.isLoading],
  );

  const createEmptyFaq = () => {
    createFaq.mutate({
      question: '',
      answer: '',
    });
  };

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Families</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex flex-col items-center">
          <h1 className="prose text-xl font-bold">
            Frequently Asked Questions
          </h1>
          <div className="mt-10 flex w-11/12 flex-col gap-5">
            {data?.map((faq) => (
              <AdminFaqCollapsable
                {...faq}
                key={faq.id}
                onEdit={(data) => updateFaq.mutate({ id: faq.id, data })}
                onDelete={() => deleteFaq.mutate({ id: faq.id })}
              />
            ))}
            <button
              onClick={createEmptyFaq}
              disabled={isMutationLoading}
              className="btn-outline btn gap-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isMutationLoading ? (
                <RollingBarrelLoader invert size={24} />
              ) : (
                <>
                  <FaPlus />
                  <span>Add new question</span>
                </>
              )}
            </button>
          </div>
        </main>
      </>
    </>
  );
};

export default AdminFamilies;
