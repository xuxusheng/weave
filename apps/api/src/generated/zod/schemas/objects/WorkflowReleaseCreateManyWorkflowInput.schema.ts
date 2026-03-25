import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  version: z.number().int(),
  name: z.string(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]),
  yaml: z.string(),
  publishedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const WorkflowReleaseCreateManyWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseCreateManyWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseCreateManyWorkflowInput>;
export const WorkflowReleaseCreateManyWorkflowInputObjectZodSchema = makeSchema();
