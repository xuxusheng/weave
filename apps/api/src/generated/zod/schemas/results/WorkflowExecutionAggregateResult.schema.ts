import * as z from 'zod';
export const WorkflowExecutionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    workflowId: z.number(),
    releaseId: z.number(),
    kestraExecId: z.number(),
    inputValues: z.number(),
    state: z.number(),
    taskRuns: z.number(),
    triggeredBy: z.number(),
    startedAt: z.number(),
    endedAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    workflow: z.number(),
    release: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    workflowId: z.string().nullable(),
    releaseId: z.string().nullable(),
    kestraExecId: z.string().nullable(),
    state: z.string().nullable(),
    triggeredBy: z.string().nullable(),
    startedAt: z.date().nullable(),
    endedAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    workflowId: z.string().nullable(),
    releaseId: z.string().nullable(),
    kestraExecId: z.string().nullable(),
    state: z.string().nullable(),
    triggeredBy: z.string().nullable(),
    startedAt: z.date().nullable(),
    endedAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});