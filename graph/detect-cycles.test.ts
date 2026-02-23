import { describe, it, expect } from "bun:test";
import { detectCyclesBFS } from "./detect-cycles";

describe("detectCycles - undirected graph", () => {
  describe("BFS", () => {
    it("returns true when the graph contains a cycle", () => {
      const adjWithCycle: number[][] = [[1, 2], [0, 2], [0, 1, 3], [2]];

      expect(detectCyclesBFS(adjWithCycle)).toBe(true);
    });

    it("returns true when the graph contains a cycle at end position", () => {
      const adjWithCycle: number[][] = [
        [1, 2],
        [0, 2],
        [1, 3],
        [2, 0],
      ];

      expect(detectCyclesBFS(adjWithCycle)).toBe(true);
    });

    it("returns false when the graph does not contain a cycle", () => {
      const adjWithoutCycle: number[][] = [[1], [0, 2], [1, 3], [2]];

      expect(detectCyclesBFS(adjWithoutCycle)).toBe(false);
    });

    it("handles trivial graphs without cycles", () => {
      const singleNodeNoEdges: number[][] = [[]];
      const simpleTree: number[][] = [[1, 2, 3], [0], [0], [0]];

      expect(detectCyclesBFS(singleNodeNoEdges)).toBe(false);
      expect(detectCyclesBFS(simpleTree)).toBe(false);
    });
  });
});
