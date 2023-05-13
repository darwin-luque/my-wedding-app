import { UploadDropzone } from '@uploadthing/react';
import { AiFillCloseCircle } from 'react-icons/ai';
import type { NextPage } from 'next';
import Head from 'next/head';
import { IBreadcrumb } from '../../../components/admin/header/breadcrumbs';
import { AdminHeader } from '../../../components/admin/header';
import type { AssetRouter } from '../../../utils/uploadthing';
import { trpc } from '../../../utils/trpc';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
  const router = useRouter();

  const createMultipleAsset = trpc.assets.createMutliple.useMutation({
    onSuccess: () => {
      router.push('/admin/assets');
    },
  });

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
          <div className="relative flex w-full items-center justify-center">
            <h1 className="prose text-xl font-bold">Upload Assets</h1>
            <Link
              href="/admin/assets"
              className="btn-error btn-sm btn absolute right-10 flex items-center gap-2"
            >
              <AiFillCloseCircle />
              <span>Cancel</span>
            </Link>
          </div>

          <div className="w-9/12 flex-1 justify-center">
            <UploadDropzone<AssetRouter>
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
