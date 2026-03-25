import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkflowOrderByWithRelationInputObjectSchema as WorkflowOrderByWithRelationInputObjectSchema } from './WorkflowOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  nodes: SortOrderSchema.optional(),
  edges: SortOrderSchema.optional(),
  inputs: SortOrderSchema.optional(),
  variables: SortOrderSchema.optional(),
  message: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  workflow: z.lazy(() => WorkflowOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WorkflowDraftOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkflowDraftOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftOrderByWithRelationInput>;
export const WorkflowDraftOrderByWithRelationInputObjectZodSchema = makeSchema();
