import * as z from 'zod';
// prettier-ignore
export const WorkflowDraftResultSchema = z.object({
    id: z.string(),
    workflowId: z.string(),
    nodes: z.unknown(),
    edges: z.unknown(),
    inputs: z.unknown(),
    variables: z.unknown(),
    message: z.string().nullable(),
    createdAt: z.date(),
    workflow: z.unknown()
}).strict();

export type WorkflowDraftResultType = z.infer<typeof WorkflowDraftResultSchema>;
