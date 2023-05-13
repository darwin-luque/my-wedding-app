import { createAssetHandler } from '../handlers/assets/create';
import { listAssetsHandler } from '../handlers/assets/list';
import { router } from '../trpc';

export const assetsRouter = router({
  create: createAssetHandler,
  list: listAssetsHandler,
});
