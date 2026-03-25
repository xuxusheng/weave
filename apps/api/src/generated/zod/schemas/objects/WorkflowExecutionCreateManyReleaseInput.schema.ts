import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  workflowId: z.string(),
  kestraExecId: z.string(),
  inputValues: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  state: z.string(),
  taskRuns: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  triggeredBy: z.string().optional(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkflowExecutionCreateManyReleaseInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionCreateManyReleaseInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionCreateManyReleaseInput>;
export const WorkflowExecutionCreateManyReleaseInputObjectZodSchema = makeSchema();
