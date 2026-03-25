import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.string(),
  config: z.union([JsonNullValueInputSchema, jsonSchema]),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  kestraFlowId: z.string(),
  disabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkflowTriggerCreateManyWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerCreateManyWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerCreateManyWorkflowInput>;
export const WorkflowTriggerCreateManyWorkflowInputObjectZodSchema = makeSchema();
