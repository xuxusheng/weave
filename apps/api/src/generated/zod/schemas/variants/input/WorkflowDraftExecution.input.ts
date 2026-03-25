import * as z from 'zod';
// prettier-ignore
export const WorkflowDraftExecutionInputSchema = z.object({
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
    startedAt: z.date().optional().nullable(),
    endedAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workflow: z.unknown()
}).strict();

export type WorkflowDraftExecutionInputType = z.infer<typeof WorkflowDraftExecutionInputSchema>;
