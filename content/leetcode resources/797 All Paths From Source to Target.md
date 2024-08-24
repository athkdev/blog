---
title: 797 All Paths From Source to Target
date: 2024-08-23
tags:
  - medium
  - graph
  - backtracking
---

# Intuition



# Code

### Python3

```python
def allPathsSourceTarget(self, G: List[List[int]]) -> List[List[int]]:

    n = len(G)
    result = []

    def dfs(node, cur_path):
        if node == n - 1:
            cur_path.append(node)
            result.append(cur_path.copy())
            return

        cur_path.append(node)

        for neighbor in G[node]:
            dfs(neighbor, cur_path.copy())

        cur_path.pop()

        return

    dfs(0, [])

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N!)$ since we backtracking and checking all possible paths - where N is (E + V).

- **Memory**

  The memory usage is $O(N)$ where N is the max length of any of the paths.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
