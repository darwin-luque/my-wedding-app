import { z } from 'zod';
import { publicProcedure } from '../../trpc';

export const createMultipleAssetsHandler = publicProcedure
  .input(
    z.array(
      z.object({
        url: z.string(),
        key: z.string(),
      }),
    ),
  )
  .mutation(({ ctx, input }) => {
    return ctx.prisma.asset.createMany({
      data: input,
    });
  });
