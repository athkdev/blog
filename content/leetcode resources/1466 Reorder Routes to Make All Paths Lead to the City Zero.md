---
title: 1466 Reorder Routes to Make All Paths Lead to the City Zero
date: 2024-08-24
tags:
  - medium
  - graph
---

# Intuition

We are given a directed graph and want to count how many edges are not pointing toward the center (in our case the node 0).

Since this is a graph and graphs are recursive structures - think of solving a smaller sub-problem that will lead to the answer.

Such as the is the child of `Node(0)` is pointing toward it or not. How can we check this? Well - maintain another graph with reverse edges and check if the child node is a indegree connection for `Node(0)`.

If they are then count them (rememeber we are referencing the reversed graph to know if a child node points away from the parent node). This is the **_subproblem_** I was talking about.

The underline is that: all child nodes must be pointing toward their parent nodes (considering we are starting our DFS from 0).

# Code

### Python3

```python
def minReorder(self, n: int, connections: List[List[int]]) -> int:
    self.result = 0

    indegrees = [[] for _ in range(n)]
    graph = defaultdict(list)   # un-directed graph

    for u, v in connections:
        graph[u].append(v)
        graph[v].append(u)

        indegrees[v].append(u)

    visited = [False] * n

    def dfs(node, parent):
        nonlocal visited

        if visited[node]: return

        if not node in indegrees[parent]:
            self.result += 1

        for neighbor in graph[node]:
            visited[node] = True

            dfs(neighbor, node)
            visited[node] = False

    dfs(0, 0)
    return self.result - 1
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(V + E)$ where V = number of vertices and E = number of edges.

- **Memory**

  The memory usage is $O(N)$ since are storing the graph in an adjacency list and also that the DFS takes V + E memory.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
