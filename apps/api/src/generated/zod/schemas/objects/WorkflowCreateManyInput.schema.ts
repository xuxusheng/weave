import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  flowId: z.string(),
  namespaceId: z.string(),
  description: z.string().optional().nullable(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  disabled: z.boolean().optional(),
  publishedVersion: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkflowCreateManyInputObjectSchema: z.ZodType<Prisma.WorkflowCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateManyInput>;
export const WorkflowCreateManyInputObjectZodSchema = makeSchema();
