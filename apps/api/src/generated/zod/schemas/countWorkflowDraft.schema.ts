import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftOrderByWithRelationInputObjectSchema as WorkflowDraftOrderByWithRelationInputObjectSchema } from './objects/WorkflowDraftOrderByWithRelationInput.schema';
import { WorkflowDraftWhereInputObjectSchema as WorkflowDraftWhereInputObjectSchema } from './objects/WorkflowDraftWhereInput.schema';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './objects/WorkflowDraftWhereUniqueInput.schema';
import { WorkflowDraftCountAggregateInputObjectSchema as WorkflowDraftCountAggregateInputObjectSchema } from './objects/WorkflowDraftCountAggregateInput.schema';

export const WorkflowDraftCountSchema: z.ZodType<Prisma.WorkflowDraftCountArgs> = z.object({ orderBy: z.union([WorkflowDraftOrderByWithRelationInputObjectSchema, WorkflowDraftOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowDraftWhereInputObjectSchema.optional(), cursor: WorkflowDraftWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkflowDraftCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftCountArgs>;

export const WorkflowDraftCountZodSchema = z.object({ orderBy: z.union([WorkflowDraftOrderByWithRelationInputObjectSchema, WorkflowDraftOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowDraftWhereInputObjectSchema.optional(), cursor: WorkflowDraftWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkflowDraftCountAggregateInputObjectSchema ]).optional() }).strict();