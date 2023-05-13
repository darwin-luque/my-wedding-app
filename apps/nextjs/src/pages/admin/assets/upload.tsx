import { UploadButton } from '@uploadthing/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import type { AssetRouter } from '../../../utils/uploadthing';
import { AdminHeader } from '../../../components/admin/header';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { trpc } from '../../../utils/trpc';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Assets',
    href: '/admin/assets',
    icon: null,
  },
  {
    label: 'Upload',
    href: '/admin/assets/upload',
    icon: null,
  },
];

type UploadedAsset = {
  fileUrl: string;
  fileKey: string;
};

const AdminAssetUploadPage: NextPage = () => {
  const createMultipleAsset = trpc.assets.createMutliple.useMutation();

  const onUploadComplete = (files: UploadedAsset[] = []) => {
    createMultipleAsset.mutate(
      files.map((file) => ({
        key: file.fileKey,
        url: file.fileUrl,
      })),
    );
  };

  return (
    <>
      <Head>
        <title>Bessy & Darwin Wedding&apos;s Platform - Upload Assets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AdminHeader breadcrumbs={breadcrumbs} />
        <main className="flex flex-col items-center justify-between gap-10">
          <h1 className="prose flex-none text-xl font-bold">Upload an Asset</h1>
          <div className="flex-1">
            <UploadButton<AssetRouter>
              endpoint="imageUploader"
              onClientUploadComplete={onUploadComplete}
            />
          </div>
        </main>
      </>
    </>
  );
};

export default AdminAssetUploadPage;
