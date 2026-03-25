import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NamespaceCreateNestedOneWithoutWorkflowsInputObjectSchema as NamespaceCreateNestedOneWithoutWorkflowsInputObjectSchema } from './NamespaceCreateNestedOneWithoutWorkflowsInput.schema';
import { WorkflowDraftCreateNestedManyWithoutWorkflowInputObjectSchema as WorkflowDraftCreateNestedManyWithoutWorkflowInputObjectSchema } from './WorkflowDraftCreateNestedManyWithoutWorkflowInput.schema';
import { WorkflowReleaseCreateNestedManyWithoutWorkflowInputObjectSchema as WorkflowReleaseCreateNestedManyWithoutWorkflowInputObjectSchema } from './WorkflowReleaseCreateNestedManyWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionCreateNestedManyWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionCreateNestedManyWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionCreateNestedManyWithoutWorkflowInput.schema';
import { WorkflowTriggerCreateNestedManyWithoutWorkflowInputObjectSchema as WorkflowTriggerCreateNestedManyWithoutWorkflowInputObjectSchema } from './WorkflowTriggerCreateNestedManyWithoutWorkflowInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  flowId: z.string(),
  description: z.string().optional().nullable(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  disabled: z.boolean().optional(),
  publishedVersion: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  namespace: z.lazy(() => NamespaceCreateNestedOneWithoutWorkflowsInputObjectSchema),
  drafts: z.lazy(() => WorkflowDraftCreateNestedManyWithoutWorkflowInputObjectSchema).optional(),
  releases: z.lazy(() => WorkflowReleaseCreateNestedManyWithoutWorkflowInputObjectSchema).optional(),
  executions: z.lazy(() => WorkflowDraftExecutionCreateNestedManyWithoutWorkflowInputObjectSchema).optional(),
  triggers: z.lazy(() => WorkflowTriggerCreateNestedManyWithoutWorkflowInputObjectSchema).optional()
}).strict();
export const WorkflowCreateWithoutProdExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowCreateWithoutProdExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateWithoutProdExecutionsInput>;
export const WorkflowCreateWithoutProdExecutionsInputObjectZodSchema = makeSchema();
