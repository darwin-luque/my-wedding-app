import { z } from 'zod';
import { publicProcedure } from '../../trpc';

export const createEventHandler = publicProcedure
  .input(
    z.object({
      name: z.string(),
      description: z.string(),
      startsAt: z.date(),
      endsAt: z.date(),
      googleMapsUrl: z.string(),
      pictures: z.array(z.string()),
    }),
  )
  .mutation(({ ctx, input }) => {
    return ctx.prisma.event.create({
      data: input,
    });
  });
