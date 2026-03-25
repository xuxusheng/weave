import * as z from 'zod';
// prettier-ignore
export const VariableResultSchema = z.object({
    id: z.string(),
    namespaceId: z.string(),
    key: z.string(),
    value: z.string(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    namespace: z.unknown()
}).strict();

export type VariableResultType = z.infer<typeof VariableResultSchema>;
