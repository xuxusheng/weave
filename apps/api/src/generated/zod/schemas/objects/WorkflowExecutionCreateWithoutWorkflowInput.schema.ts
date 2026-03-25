import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { WorkflowReleaseCreateNestedOneWithoutExecutionsInputObjectSchema as WorkflowReleaseCreateNestedOneWithoutExecutionsInputObjectSchema } from './WorkflowReleaseCreateNestedOneWithoutExecutionsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  kestraExecId: z.string(),
  inputValues: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  state: z.string(),
  taskRuns: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  triggeredBy: z.string().optional(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  release: z.lazy(() => WorkflowReleaseCreateNestedOneWithoutExecutionsInputObjectSchema)
}).strict();
export const WorkflowExecutionCreateWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionCreateWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionCreateWithoutWorkflowInput>;
export const WorkflowExecutionCreateWithoutWorkflowInputObjectZodSchema = makeSchema();
