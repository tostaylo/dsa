// https://www.youtube.com/watch?v=6ZRhq2oFCuo
// Solve it breadth and depth first search

// Given an adjacency list adj[][] representing an undirected graph, determine whether the graph contains a cycle/loop or not.
// A cycle is a path that starts and ends at the same vertex without repeating any edge.

// Examples:

// Input: adj[][]= [[1, 2], [0, 2], [0, 1, 3], [2]]

/// Graph Traversals only differ by searching technique (recursion, while loop) and data structures involved, and invariants

// Examples:

// Input: adj[][]= [[1, 2], [0, 2], [0, 1, 3], [2]]

// [
// [0],
// [],
// [],
// ]

// 0     -   1

// |       /
// |       |
// |       |
//  \    /
//    2 ------- 3

// Output: true
// Explanation: There is a cycle 0 → 2 → 1  → 0

// Input: adj[][] = [[1], [0, 2], [1, 3], [2]]

// 1-----2------3
// |
// |
// |
// 0

// THE key is asking yourself what is a cycle. A cycle is not a node pointing back to the previous node. It is a node that points back to a previously visited node other than that.

// type of problem: graph traversal (but why pick depth over breath and vice versa)
// invariant:  cycle is a node which points to a previously vistited node if that node is not the current nodes parent
// time/space:
export function detectCyclesBFS(adj: number[][]) {
  type Node = {
    node: number[];
    parent: number;
    pos: number;
  };
  const queue: Node[] = [{ node: adj[0] as number[], parent: -1, pos: 0 }];

  while (queue.length) {
    const { node, parent, pos } = queue.shift() as Node;
    if (!node?.length) return false;
    for (const edge of node) {
      if (edge !== parent && edge < pos - 1) {
        return true;
      } else if (edge > pos) {
        queue.push({ node: adj[edge], parent: pos, pos: edge } as Node);
      }
    }
  }
  return false;
}
