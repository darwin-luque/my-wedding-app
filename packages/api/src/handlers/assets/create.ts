import { z } from 'zod';
import { publicProcedure } from '../../trpc';

export const createAssetHandler = publicProcedure
  .input(
    z.object({
      url: z.string(),
      key: z.string(),
    }),
  )
  .mutation(({ ctx, input }) => {
    ctx.prisma.asset.create({
      data: {
        url: input.url,
        key: input.key,
      },
    });
  });
