---
title: 2368 Reachable Nodes With Restrictions
date: 2024-08-22
tags:
  - medium
  - graph
---

# Intuition

It's pretty straightforward, we do a DFS from the node 0 and just count the total nodes reachable. Once we reach a `restricted` node, we return 0.

Optimization: I've not implemented it in this code, but if you just do not add the vertices that are `restricted`, the runtime improves because you save all the function calls on those nodes.

# Code

### Python3

```python
def reachableNodes(self, n: int, edges: List[List[int]], restricted: List[int]) -> int:

    graph = defaultdict(list)

    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)


    restricted = set(restricted)
    visited = [False for _ in range(n)]

    def dfs(node):
        if node in restricted or visited[node]:
            return 0

        visited[node] = True

        res = 1
        for neighbor in graph[node]:
            res += dfs(neighbor)

        return res

    return dfs(0)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(V + E)$ where V = number of vertices and E is number of edges.

- **Memory**

  The memory usage is $O(N)$ since we use a set to store restricted nodes that facilitates constant time lookups.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
