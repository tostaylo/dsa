## 1. Reachability & "All Paths" $\rightarrow$ DFS

If the problem asks if a path _exists_ or requires you to visit every single node to find something, **Depth-First Search** is your best friend.

- **Keywords:** "Find all possible paths," "Is there a way to get from A to B," "Backtracking," "Explore all configurations."
- **The Logic:** DFS is "optimistic." It picks a direction and goes until it hits a wall.
- **Implementation Tip:** Use recursion for cleaner code, but remember that the **Call Stack** is your limit. If the graph is massive, you might need an iterative approach with an explicit Stack.

---

## 2. Dependencies & Ordering $\rightarrow$ Topological Sort

This is a very specific type of graph problem involving **Directed Acyclic Graphs (DAGs)**.

- **Keywords:** "Course Schedule," "Build order," "Prerequisites," "Tasks must be completed before others."
- **The Logic:** You are looking for a linear ordering of vertices.
- **Heuristic:** If you see "A must happen before B," you are doing a Topological Sort.
- **Algorithm:** Usually **Kahn’s Algorithm** (using In-degree and a Queue) or DFS with a post-order stack.

---

## 3. Grouping & Connected Components $\rightarrow$ Union-Find (DSU)

Sometimes you don't need to traverse the graph; you just need to know who belongs to which "club."

- **Keywords:** "Number of provinces," "Friend circles," "Is it a valid tree," "Connected components," "Dynamic connectivity."
- **The Logic:** You are partitioning the graph into disjoint sets.
- **Heuristic:** If you are asked to "merge" groups or check if two nodes are in the same group _without_ needing the actual path between them, use **Disjoint Set Union (DSU)**. It’s $O(\alpha(N))$, which is basically constant time.

---

## 4. Weighted Shortest Path $\rightarrow$ Dijkstra’s Algorithm

You've already got BFS for unweighted graphs. But what if the "edges" have costs?

- **Keywords:** "Minimum cost," "Cheapest flight," "Shortest path with weights," "Non-negative edge weights."
- **The Logic:** BFS with a **Priority Queue** (Min-Heap).
- **Heuristic:** If the "steps" aren't equal (e.g., one road takes 5 mins, another takes 10), standard BFS fails. You need Dijkstra.
- **Complexity:** $O(E \log V)$ or $O(E + V \log V)$ with a Fibonacci heap (though usually $O(E \log V)$ on LeetCode).

---

## 5. Minimum Spanning Tree (MST) $\rightarrow$ Prim’s or Kruskal’s

This is subtly different from Dijkstra. Dijkstra finds the shortest path from _one_ point to _another_. MST finds the cheapest way to connect _all_ points together.

- **Keywords:** "Minimum total cost to connect all nodes," "Lay down cables with minimum length," "Connecting cities."
- **The Logic:**
- **Kruskal’s:** Sort all edges by weight and add them if they don't form a cycle (perfect if you already have a DSU/Union-Find class).
- **Prim’s:** Start from a node and greedily grow the tree (perfect if you're used to Dijkstra).

---

## Summary Cheat Sheet

| If you see...                    | The Pattern is...    | The Algorithm is...                 |
| -------------------------------- | -------------------- | ----------------------------------- |
| Shortest Path (Equal weights)    | **BFS**              | Queue                               |
| Shortest Path (Variable weights) | **Dijkstra**         | Priority Queue                      |
| Dependencies / Prerequisites     | **Topological Sort** | Kahn's (In-degree)                  |
| Grouping / Connectivity          | **Union-Find**       | Find / Union with Path Compression  |
| Exhaustive Search / "All Paths"  | **DFS**              | Recursion / Stack                   |
| Detect Cycles (Directed)         | **DFS**              | Recursion Stack / Visiting State    |
| Detect Cycles (Undirected)       | **Union-Find**       | Check if roots are already the same |

---

### Pro-Tip: The "Implicit Graph"

Sometimes there is no `adjList`. If you see a **2D Matrix** (like the "Islands" problem or the "Knight's Move"), the matrix _is_ the graph.

- **Vertices:** Each cell `(r, c)`.
- **Edges:** The 4 or 8 directions you can move.

**Would you like me to give you a specific LeetCode problem ID for each of these categories so you can practice the patterns?**
