import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]),
  message: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const WorkflowDraftCreateWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftCreateWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftCreateWithoutWorkflowInput>;
export const WorkflowDraftCreateWithoutWorkflowInputObjectZodSchema = makeSchema();
