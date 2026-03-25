import * as z from 'zod';
// prettier-ignore
export const WorkflowExecutionInputSchema = z.object({
    id: z.string(),
    workflowId: z.string(),
    releaseId: z.string(),
    kestraExecId: z.string(),
    inputValues: z.unknown(),
    state: z.string(),
    taskRuns: z.unknown(),
    triggeredBy: z.string(),
    startedAt: z.date().optional().nullable(),
    endedAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workflow: z.unknown(),
    release: z.unknown()
}).strict();

export type WorkflowExecutionInputType = z.infer<typeof WorkflowExecutionInputSchema>;
