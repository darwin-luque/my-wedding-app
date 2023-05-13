import type { NextPage } from 'next';
import Head from 'next/head';
import { AdminHeader } from '../../../components/admin/header';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { trpc } from '../../../utils/trpc';
import { AdminAssetCard } from '../../../components/admin/assets/card';

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex flex-col items-center">
          <h1 className="prose text-xl font-bold">Assets Page</h1>
          <div className="flex w-full flex-1 items-start justify-start px-4 py-10">
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
