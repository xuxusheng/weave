import ELK from "elkjs/lib/elk.bundled.js";
import type { Node, Edge } from "@xyflow/react";

const elk = new ELK();

const elkOptions = {
  "elk.algorithm": "layered",
  "elk.layered.spacing.nodeNodeBetweenLayers": "100",
  "elk.spacing.nodeNode": "80",
};

export async function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
  direction: "TB" | "LR" = "TB",
) {
  const nodeWidth = 200;
  const nodeHeight = 60;

  const graph = {
    id: "root",
    layoutOptions: {
      ...elkOptions,
      "elk.direction": direction === "TB" ? "DOWN" : "RIGHT",
    },
    children: nodes.map((node) => ({
      id: node.id,
      width: nodeWidth,
      height: nodeHeight,
    })),
    edges: edges.map((edge) => ({
      id: edge.id,
      sources: [edge.source],
      targets: [edge.target],
    })),
  };

  const layoutedGraph = await elk.layout(graph);

  const layoutedNodes = nodes.map((node) => {
    const layoutedNode = layoutedGraph.children?.find((n) => n.id === node.id);
    return {
      ...node,
      position: {
        x: (layoutedNode?.x ?? 0) - nodeWidth / 2,
        y: (layoutedNode?.y ?? 0) - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
}
