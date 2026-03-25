import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { WorkflowCreateNestedOneWithoutReleasesInputObjectSchema as WorkflowCreateNestedOneWithoutReleasesInputObjectSchema } from './WorkflowCreateNestedOneWithoutReleasesInput.schema';
import { WorkflowExecutionCreateNestedManyWithoutReleaseInputObjectSchema as WorkflowExecutionCreateNestedManyWithoutReleaseInputObjectSchema } from './WorkflowExecutionCreateNestedManyWithoutReleaseInput.schema'

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
  workflow: z.lazy(() => WorkflowCreateNestedOneWithoutReleasesInputObjectSchema),
  executions: z.lazy(() => WorkflowExecutionCreateNestedManyWithoutReleaseInputObjectSchema).optional()
}).strict();
export const WorkflowReleaseCreateInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseCreateInput>;
export const WorkflowReleaseCreateInputObjectZodSchema = makeSchema();
