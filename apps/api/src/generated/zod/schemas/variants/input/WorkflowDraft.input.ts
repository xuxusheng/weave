import * as z from 'zod';
// prettier-ignore
export const WorkflowDraftInputSchema = z.object({
    id: z.string(),
    workflowId: z.string(),
    nodes: z.unknown(),
    edges: z.unknown(),
    inputs: z.unknown(),
    variables: z.unknown(),
    message: z.string().optional().nullable(),
    createdAt: z.date(),
    workflow: z.unknown()
}).strict();

export type WorkflowDraftInputType = z.infer<typeof WorkflowDraftInputSchema>;
