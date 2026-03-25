import type { WorkflowNode } from "@/types/workflow";
import { diff, type UltraPatchTypes } from "ultrapatch";

type Operation = {
  op: "add" | "remove" | "replace" | "move" | "copy" | "test";
  path: string;
  value?: UltraPatchTypes.Diffable;
  from?: string;
};

export interface NodeDiffResult {
  added: WorkflowNode[];
  removed: WorkflowNode[];
  modified: Array<{
    oldNode: WorkflowNode;
    newNode: WorkflowNode;
    patches: Operation[];
  }>;
}

export function diffNodes(oldNodes: WorkflowNode[], newNodes: WorkflowNode[]): NodeDiffResult {
  const oldMap = new Map(oldNodes.map((n) => [n.id, n]));
  const newMap = new Map(newNodes.map((n) => [n.id, n]));

  const added: WorkflowNode[] = [];
  const removed: WorkflowNode[] = [];
  const modified: NodeDiffResult["modified"] = [];

  for (const [id, newNode] of newMap) {
    if (!oldMap.has(id)) {
      added.push(newNode);
    }
  }

  for (const [id, oldNode] of oldMap) {
    if (!newMap.has(id)) {
      removed.push(oldNode);
    }
  }

  for (const [id, oldNode] of oldMap) {
    const newNode = newMap.get(id);
    if (!newNode) continue;

    const patches = diff(
      oldNode as unknown as UltraPatchTypes.Diffable,
      newNode as unknown as UltraPatchTypes.Diffable,
    );
    if (patches.length > 0) {
      modified.push({ oldNode, newNode, patches });
    }
  }

  return { added, removed, modified };
}
