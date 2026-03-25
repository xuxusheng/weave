import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { WorkflowDraftUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema as WorkflowDraftUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema } from './WorkflowDraftUncheckedCreateNestedManyWithoutWorkflowInput.schema';
import { WorkflowReleaseUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema as WorkflowReleaseUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUncheckedCreateNestedManyWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUncheckedCreateNestedManyWithoutWorkflowInput.schema';
import { WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema as WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema } from './WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput.schema'

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
  updatedAt: z.coerce.date().optional(),
  drafts: z.lazy(() => WorkflowDraftUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema).optional(),
  releases: z.lazy(() => WorkflowReleaseUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema).optional(),
  executions: z.lazy(() => WorkflowDraftExecutionUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema).optional(),
  prodExecutions: z.lazy(() => WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema).optional()
}).strict();
export const WorkflowUncheckedCreateWithoutTriggersInputObjectSchema: z.ZodType<Prisma.WorkflowUncheckedCreateWithoutTriggersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUncheckedCreateWithoutTriggersInput>;
export const WorkflowUncheckedCreateWithoutTriggersInputObjectZodSchema = makeSchema();
