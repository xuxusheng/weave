import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { NamespaceScalarRelationFilterObjectSchema as NamespaceScalarRelationFilterObjectSchema } from './NamespaceScalarRelationFilter.schema';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './NamespaceWhereInput.schema';
import { WorkflowDraftListRelationFilterObjectSchema as WorkflowDraftListRelationFilterObjectSchema } from './WorkflowDraftListRelationFilter.schema';
import { WorkflowReleaseListRelationFilterObjectSchema as WorkflowReleaseListRelationFilterObjectSchema } from './WorkflowReleaseListRelationFilter.schema';
import { WorkflowDraftExecutionListRelationFilterObjectSchema as WorkflowDraftExecutionListRelationFilterObjectSchema } from './WorkflowDraftExecutionListRelationFilter.schema';
import { WorkflowExecutionListRelationFilterObjectSchema as WorkflowExecutionListRelationFilterObjectSchema } from './WorkflowExecutionListRelationFilter.schema';
import { WorkflowTriggerListRelationFilterObjectSchema as WorkflowTriggerListRelationFilterObjectSchema } from './WorkflowTriggerListRelationFilter.schema'

const workflowwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowWhereInputObjectSchema), z.lazy(() => WorkflowWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowWhereInputObjectSchema), z.lazy(() => WorkflowWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  flowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  namespaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  nodes: z.lazy(() => JsonFilterObjectSchema).optional(),
  edges: z.lazy(() => JsonFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonFilterObjectSchema).optional(),
  variables: z.lazy(() => JsonFilterObjectSchema).optional(),
  disabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  publishedVersion: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  namespace: z.union([z.lazy(() => NamespaceScalarRelationFilterObjectSchema), z.lazy(() => NamespaceWhereInputObjectSchema)]).optional(),
  drafts: z.lazy(() => WorkflowDraftListRelationFilterObjectSchema).optional(),
  releases: z.lazy(() => WorkflowReleaseListRelationFilterObjectSchema).optional(),
  executions: z.lazy(() => WorkflowDraftExecutionListRelationFilterObjectSchema).optional(),
  prodExecutions: z.lazy(() => WorkflowExecutionListRelationFilterObjectSchema).optional(),
  triggers: z.lazy(() => WorkflowTriggerListRelationFilterObjectSchema).optional()
}).strict();
export const WorkflowWhereInputObjectSchema: z.ZodType<Prisma.WorkflowWhereInput> = workflowwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowWhereInput>;
export const WorkflowWhereInputObjectZodSchema = workflowwhereinputSchema;
