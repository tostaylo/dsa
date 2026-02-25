# Matrixes generally fall into two categories

## Graph

- what type of graph, directed or undirected, cycles or no cycles, there are templates for each of these conditions
- for example there is a dag algorithm

## Greedy with Heap or some other data structure Or Dynamic Programming

## Problem: Minimum Steps for Knight to Get to Target Position ( The below is a template to solve graph problems)

https://www.youtube.com/watch?v=UqFXSGeFHTI&t=2s

### Step 1. Understanding the problem.

What information is encoded in the problem.
For every cell we have acceptable moves and non acceptable moves
acceptable = [ul,ur, rd, ru, etcc] = 8 legal moves
candidates = [[i - 2, j - 1], [i - 2, j + 1], [row, col], etc... ]

### Step 2. What Type of Problem

Graph Problem ( Shortest Path so BFS) Why does a BFS guaranteed finding the shortest path? answer this in Graphs.md, it's a level by level search and since we add to queue and don't revisit any nodes the first time we see the node has to be the shortest path. So we don't need to keep track of the steps to take to each node. We just need to keep track of what level we are on in the tree.

We have a graph. each cell is node and candidate cell is node and edge is how they are connected in as straight line

### Approach 1:

// This is the crux of the poroblem
Build Graph then do BFS for shortest path
const generatedGraph = func generateGraph
for i,j < n
graph[i,j] = set(generate_legal_moves(n, n, i, j))

// BFS is a template
func bfs(generatedGraph, start, end)

### Approach 2:

Don't build graph but do BFS with generate_legal_moves as the way to get the neighbors for each node on the fly
func bfs(start, end)

### Invariant

Generate Legal Moves Function?

Research ParentDictionary and Backtracking approach to finding shortest path with BFS

## PROBLEM: Snake and Ladder Problem #4816 on geeks for geeks (should be able to use template above to solve)
