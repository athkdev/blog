---
title: 1557 Minimum Number of Vertices to Reach All Nodes
date: 2024-07-21
tags:
  - medium
  - graph
  - dag
---

# Intuition
We are required to return the vertices that are starting points to other nodes such that all nodes could be visited.

This means, we are needed to compute nodes who do not have any incoming edges, rather only outgoing edges.

Technically speaking, the number of outgoing edges from a vertex is called `out-degree` and the number of incoming edges to a vertex is called `in-degree`.

We are interested in the in-degree of vertices. The `in-degree` of root vertices in a graph is always 0.

When we build an adjacency list, length of the neighbors list for any node - is basically the `in-degree` of that node. But for this problem, I do not build an adjacency list - rather we just store the children nodes and all nodes. Any node that is not a child node, but is also present in the `allnodes` set, is a starting node.


> Follow-up: try solving the problem using an adjacency list and not sets.


# Code

### Python3

```python
def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
    
    children = set()
    allnodes = set()

    for u, v in edges:
        children.add(v)
        
        allnodes.add(u)
        allnodes.add(v)
    
    return list(allnodes - children)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(V + E)$ since we would be visiting all vertices in the graph.

- **Memory**

  The memory usage is $O(N)$ since we use set to store child vertices and all vertices.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
