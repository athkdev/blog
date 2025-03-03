---
title: 684 Redundant Connection
date: 2025-01-30
tags:
  - medium
---

The problem wants us to find the last edge in the input which when removed, would make the cyclic graph into a tree.

This is the textbook definition problem for a `Minimum Spanning Tree` or an `MST`. The MST refers to the set of vertices of a graph which A) do not contain any cycles, and B) is a tree which can be used to traverse to all vertices in the graph.

That means when we are traversing the edges (and hence the vertices), we need a way to find if adding the current edge **creates a cycle or not**. If it does, we do not add it. This is also the gist of the Kruskal's MST algorithm.

Union-find is the perfect datastructure to use here. The `Union` function takes two nodes, and creates a parent-child relationship amongst them, at the same time maintaining a rank for each node. The `Find` function returns the parent (which 'group' a vertice belongs to) of a vertex.

The Kruskal's algorithm also uses the Union-Find datastructure to determine if adding a new edge to our MST creates a cycle or not.

# Code

### Python3

```python
def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
    n = len(edges)
    parent = list(range(n + 1))
    rank = [1] * (n+1)   # default rank for all nodes is 1

    def find(node):
        if parent[node] != node:
            parent[node] = find(parent[node])
        return parent[node]

    def union(x, y):
        rootX = find(x)
        rootY = find(y)

        if rootX == rootY:   # implies a cycle has been found
            return False

        if rank[rootX] > rank[rootY]:
            parent[rootY] = rootX
        elif rank[rootX] < rank[rootY]:
            parent[rootX] = rootY
        else:
            parent[rootY] = rootX
            rank[rootX] += 1

        return True

    for a, b in edges:
        if not union(a, b):
            return [a, b]

    return []
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(V+E)$ since we are visiting nodes in the graph.

- **Memory**

  The memory usage is $O(N)$ since we use `list` to store parents, and ranks of each vertex.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
