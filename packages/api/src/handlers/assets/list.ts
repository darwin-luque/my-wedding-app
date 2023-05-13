import { publicProcedure } from '../../trpc';

export const listAssetsHandler = publicProcedure.query(({ ctx }) =>
  ctx.prisma.asset.findMany(),
);
