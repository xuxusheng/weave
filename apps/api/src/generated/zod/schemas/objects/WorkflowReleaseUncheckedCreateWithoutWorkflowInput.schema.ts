import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { WorkflowExecutionUncheckedCreateNestedManyWithoutReleaseInputObjectSchema as WorkflowExecutionUncheckedCreateNestedManyWithoutReleaseInputObjectSchema } from './WorkflowExecutionUncheckedCreateNestedManyWithoutReleaseInput.schema'

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
  createdAt: z.coerce.date().optional(),
  executions: z.lazy(() => WorkflowExecutionUncheckedCreateNestedManyWithoutReleaseInputObjectSchema).optional()
}).strict();
export const WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseUncheckedCreateWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseUncheckedCreateWithoutWorkflowInput>;
export const WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectZodSchema = makeSchema();
