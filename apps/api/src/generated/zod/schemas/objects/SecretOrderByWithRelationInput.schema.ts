import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NamespaceOrderByWithRelationInputObjectSchema as NamespaceOrderByWithRelationInputObjectSchema } from './NamespaceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  namespaceId: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  namespace: z.lazy(() => NamespaceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SecretOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SecretOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretOrderByWithRelationInput>;
export const SecretOrderByWithRelationInputObjectZodSchema = makeSchema();
