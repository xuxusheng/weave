import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  namespaceId: z.literal(true).optional(),
  key: z.literal(true).optional(),
  value: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const SecretMinAggregateInputObjectSchema: z.ZodType<Prisma.SecretMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SecretMinAggregateInputType>;
export const SecretMinAggregateInputObjectZodSchema = makeSchema();
