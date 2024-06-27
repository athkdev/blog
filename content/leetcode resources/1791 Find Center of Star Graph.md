---
title: 1791 Find Center of Star Graph
date: 2024-06-26
tags:
  - easy
  - graph
---

Fairly, straight-forward problem. To find the center of the graph in this case where the center is a neighbor with every node other than itself - is the same as finding the node with the most neighbors.


# Code

### Go

```go
func findCenter(edges [][]int) int {
    adj := make(map[int][]int)

    for _, e := range edges {
        from, to := e[0], e[1]
        adj[from] = append(adj[from], to)
        adj[to] = append(adj[to], from)
    }

    res := -1
    maxNeighborLength := -1

    for node, neighbors := range adj {
        if len(neighbors) > maxNeighborLength {
            maxNeighborLength = len(neighbors)
            res = node
        }
    }

    return res
}
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where N is the number of vertices/nodes in the graph.

- **Memory**

  The memory usage is $O(N)$ since we use a map to store adjacency list.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
