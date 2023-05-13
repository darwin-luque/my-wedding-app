import { createMultipleAssetsHandler } from '../handlers/assets/create-multiple';
import { createAssetHandler } from '../handlers/assets/create';
import { listAssetsHandler } from '../handlers/assets/list';
import { router } from '../trpc';

export const assetsRouter = router({
  create: createAssetHandler,
  createMutliple: createMultipleAssetsHandler,
  list: listAssetsHandler,
});
