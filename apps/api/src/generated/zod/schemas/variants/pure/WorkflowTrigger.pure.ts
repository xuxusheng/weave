import * as z from 'zod';
// prettier-ignore
export const WorkflowTriggerModelSchema = z.object({
    id: z.string(),
    workflowId: z.string(),
    name: z.string(),
    type: z.string(),
    config: z.unknown(),
    inputs: z.unknown(),
    kestraFlowId: z.string(),
    disabled: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workflow: z.unknown()
}).strict();

export type WorkflowTriggerPureType = z.infer<typeof WorkflowTriggerModelSchema>;
