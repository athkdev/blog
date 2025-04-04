---
title: 997 Find the Town Judge
date: 2025-04-03
tags:
  - easy
---

The problem's input is very openly a graph problem where it gives you the number of vertices (number of total people) and the edges between each vertex (trust relationship).

We have to find a person who is trusted by all, but trusts no one. In technical jargon, we have to find a person whose indegrees is $n-1$ and outdegrees is $0$.

# Code

### Python3

```python
def findJudge(self, n: int, trust: List[List[int]]) -> int:
    if len(trust) == 1:
        return trust[0][1]

    outdegrees = defaultdict(int)
    indegrees = defaultdict(int)

    for u, v in trust:
        outdegrees[u] += 1
        indegrees[v] += 1

    for person in range(1, n+1):
        if outdegrees[person] == 0 and indegrees[person] == n-1:
            return person

    return -1
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(E)$ since we would visit every edge/relationship in the edge list to make the indegrees and outdegrees.

- **Memory**

  The memory usage is $O(N)$ since we use the indegrees and outdegrees arrays.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
