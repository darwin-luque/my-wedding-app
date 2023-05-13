import { createNextPageApiHandler } from 'uploadthing/next-legacy';
import { assetRouter } from '../../utils/uploadthing';

const handler = createNextPageApiHandler({
  router: assetRouter,
});

export default handler;
