import * as z from 'zod';
export const WorkflowTriggerAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    workflowId: z.number(),
    name: z.number(),
    type: z.number(),
    config: z.number(),
    inputs: z.number(),
    kestraFlowId: z.number(),
    disabled: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    workflow: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    workflowId: z.string().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    kestraFlowId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    workflowId: z.string().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    kestraFlowId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});