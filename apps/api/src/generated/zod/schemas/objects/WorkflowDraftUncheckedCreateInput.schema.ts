import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  workflowId: z.string(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]),
  message: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const WorkflowDraftUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftUncheckedCreateInput>;
export const WorkflowDraftUncheckedCreateInputObjectZodSchema = makeSchema();
