import * as z from 'zod';
// prettier-ignore
export const WorkflowDraftExecutionModelSchema = z.object({
    id: z.string(),
    workflowId: z.string(),
    kestraExecId: z.string(),
    nodes: z.unknown(),
    edges: z.unknown(),
    inputs: z.unknown(),
    variables: z.unknown(),
    inputValues: z.unknown(),
    state: z.string(),
    taskRuns: z.unknown(),
    triggeredBy: z.string(),
    startedAt: z.date().nullable(),
    endedAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workflow: z.unknown()
}).strict();

export type WorkflowDraftExecutionPureType = z.infer<typeof WorkflowDraftExecutionModelSchema>;
