import * as z from 'zod';
// prettier-ignore
export const WorkflowReleaseResultSchema = z.object({
    id: z.string(),
    workflowId: z.string(),
    version: z.number().int(),
    name: z.string(),
    nodes: z.unknown(),
    edges: z.unknown(),
    inputs: z.unknown(),
    variables: z.unknown(),
    yaml: z.string(),
    publishedAt: z.date(),
    createdAt: z.date(),
    workflow: z.unknown(),
    executions: z.array(z.unknown())
}).strict();

export type WorkflowReleaseResultType = z.infer<typeof WorkflowReleaseResultSchema>;
