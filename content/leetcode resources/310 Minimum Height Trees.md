---
title: 310 Minimum Height Trees
tags:
    - medium
---



One approach that might come to your head (at least it did for me) is to do a BFS from each node $0...(N-1)$. Doing BFS will gives us the maximum distance between two nodes in each of the graphs. But this gives a TLE, and fails like 10 cases for the problem as of April 23$^{th}$ 2024.

To improve onto this solution, we use Topological Sort implemented something sort of a BFS, but this time we keep track of the indegrees for each node, and modify it as we move closer to the answer.

The indegrees for the leaf nodes would be 1. So, we start our traversal at the leaves by only adding the nodes whose `indegrees[i] == 1` to the BFS neighbors queue. As we move on to a leaf node, we decrement it’s indegree value - this is essential and is the equivalent of removing if from our sample set. Now there would be new leaves with `indegrees[i] == 1`.

Simplifying this, it just means that you are basically removing layers of leaves in each iteration until you are left with one (in case of odd number of nodes) or two (in case of even number of nodes) in the center.

# Code:

### Python3

```python
class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        if n == 1: return [0]

        adj = defaultdict(List[int])
        indegree = [0 for _ in range(n)]

        for u, v in edges:
            if u not in adj: adj[u] = []
            if v not in adj: adj[v] = []
            adj[u].append(v)
            adj[v].append(u)
            indegree[u] += 1
            indegree[v] += 1
        
        Q = deque()

        for i, ii in enumerate(indegree):
            if ii == 1: Q.appendleft(i) ; indegree[i] -= 1
        
        ret = []
        while Q:
            N = len(Q)
            del ret[:]
            
            for i in range(N):
                cur = Q.pop()
                ret.append(cur)

                # add the neighbouring leaves now
                for neighbor in adj[cur]:
                    indegree[neighbor] -= 1
                    if indegree[neighbor] == 1: Q.appendleft(neighbor)
        
        return rets
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(V + E)$ where V = number of vertices/nodes and E = number of edges.
    
- Memory
    
    The memory usage is $O(V)$ excluding the adjacency list because that counts as the input, including the adjacency list would be $O(V+E)$.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)