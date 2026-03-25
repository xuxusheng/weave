import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SecretOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SecretOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretOrderByRelationAggregateInput>;
export const SecretOrderByRelationAggregateInputObjectZodSchema = makeSchema();
