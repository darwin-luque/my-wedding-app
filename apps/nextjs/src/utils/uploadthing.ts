import { createUploadthing, type FileRouter } from 'uploadthing/next-legacy';
import type { NextApiRequest } from 'next/types';
import { getAuth } from '@clerk/nextjs/server';

const f = createUploadthing();

const auth = (req: NextApiRequest) => {
  return getAuth(req);
};

export const assetRouter = {
  imageUploader: f
    .fileTypes(['image', 'video'])
    .maxSize('1GB')
    .middleware(async (req) => {
      const user = auth(req);

      if (!user) throw new Error('Unauthorized');

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log('Upload complete for userId: ', metadata.userId);

      console.log('file url', file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof assetRouter;
