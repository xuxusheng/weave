import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkflowOrderByRelationAggregateInputObjectSchema as WorkflowOrderByRelationAggregateInputObjectSchema } from './WorkflowOrderByRelationAggregateInput.schema';
import { VariableOrderByRelationAggregateInputObjectSchema as VariableOrderByRelationAggregateInputObjectSchema } from './VariableOrderByRelationAggregateInput.schema';
import { SecretOrderByRelationAggregateInputObjectSchema as SecretOrderByRelationAggregateInputObjectSchema } from './SecretOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  kestraNamespace: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  workflows: z.lazy(() => WorkflowOrderByRelationAggregateInputObjectSchema).optional(),
  variables: z.lazy(() => VariableOrderByRelationAggregateInputObjectSchema).optional(),
  secrets: z.lazy(() => SecretOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const NamespaceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.NamespaceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceOrderByWithRelationInput>;
export const NamespaceOrderByWithRelationInputObjectZodSchema = makeSchema();
