import * as z from 'zod';
// prettier-ignore
export const VariableInputSchema = z.object({
    id: z.string(),
    namespaceId: z.string(),
    key: z.string(),
    value: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    namespace: z.unknown()
}).strict();

export type VariableInputType = z.infer<typeof VariableInputSchema>;
