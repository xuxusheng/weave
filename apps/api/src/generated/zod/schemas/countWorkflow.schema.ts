import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowOrderByWithRelationInputObjectSchema as WorkflowOrderByWithRelationInputObjectSchema } from './objects/WorkflowOrderByWithRelationInput.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './objects/WorkflowWhereInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './objects/WorkflowWhereUniqueInput.schema';
import { WorkflowCountAggregateInputObjectSchema as WorkflowCountAggregateInputObjectSchema } from './objects/WorkflowCountAggregateInput.schema';

export const WorkflowCountSchema: z.ZodType<Prisma.WorkflowCountArgs> = z.object({ orderBy: z.union([WorkflowOrderByWithRelationInputObjectSchema, WorkflowOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowWhereInputObjectSchema.optional(), cursor: WorkflowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkflowCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowCountArgs>;

export const WorkflowCountZodSchema = z.object({ orderBy: z.union([WorkflowOrderByWithRelationInputObjectSchema, WorkflowOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowWhereInputObjectSchema.optional(), cursor: WorkflowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkflowCountAggregateInputObjectSchema ]).optional() }).strict();