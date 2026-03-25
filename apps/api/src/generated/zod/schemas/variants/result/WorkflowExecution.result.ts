import * as z from 'zod';
// prettier-ignore
export const WorkflowExecutionResultSchema = z.object({
    id: z.string(),
    workflowId: z.string(),
    releaseId: z.string(),
    kestraExecId: z.string(),
    inputValues: z.unknown(),
    state: z.string(),
    taskRuns: z.unknown(),
    triggeredBy: z.string(),
    startedAt: z.date().nullable(),
    endedAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workflow: z.unknown(),
    release: z.unknown()
}).strict();

export type WorkflowExecutionResultType = z.infer<typeof WorkflowExecutionResultSchema>;
