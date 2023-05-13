import type { NextPage } from 'next';
import Head from 'next/head';
import { AdminHeader } from '../../../components/admin/header';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { trpc } from '../../../utils/trpc';
import { AdminAssetCard } from '../../../components/admin/assets/card';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Assets',
    href: '/admin/assets',
    icon: null,
  },
];

const AdminAssetsPage: NextPage = () => {
  const { data } = trpc.assets.list.useQuery();

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Assets</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex flex-col items-center">
          <div className="relative flex w-full items-center justify-center">
            <h1 className="prose text-xl font-bold">Assets Page</h1>
            <Link
              href="/admin/assets/upload"
              className="btn-primary btn-sm btn absolute right-10 flex items-center gap-2"
            >
              <FaPlus />
              <span>Upload</span>
            </Link>
          </div>
          <div className="flex w-full flex-1 flex-wrap items-start justify-between gap-10 p-10">
            {data?.map((asset) => (
              <AdminAssetCard
                asset={asset}
                key={`${asset.key}-${asset.createdAt.getTime()}`}
              />
            ))}
          </div>
        </main>
      </>
    </>
  );
};

export default AdminAssetsPage;
