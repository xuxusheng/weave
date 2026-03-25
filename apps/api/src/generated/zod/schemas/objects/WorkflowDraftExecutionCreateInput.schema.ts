import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { WorkflowCreateNestedOneWithoutExecutionsInputObjectSchema as WorkflowCreateNestedOneWithoutExecutionsInputObjectSchema } from './WorkflowCreateNestedOneWithoutExecutionsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  kestraExecId: z.string(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]),
  inputValues: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  state: z.string(),
  taskRuns: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  triggeredBy: z.string().optional(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  workflow: z.lazy(() => WorkflowCreateNestedOneWithoutExecutionsInputObjectSchema)
}).strict();
export const WorkflowDraftExecutionCreateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionCreateInput>;
export const WorkflowDraftExecutionCreateInputObjectZodSchema = makeSchema();
