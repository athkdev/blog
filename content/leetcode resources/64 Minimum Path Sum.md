---
title: 64 Minimum Path Sum
date: 2024-08-09
tags:
  - medium
  - dp
---

# Intuition

The sub-problem here is computing the minimum sum from the previous elements. There are two ways you can arrive at a new element - it's from a previous top element or a previous left element.

There's an exception for top row and left most row - there you can only get to an element from the left (for the top row) or from the top (for the left row).

Well, since computing minimum sum from previous (top or left) is an overlapping subproblem - this problem is categorized as a dynamic programming problem.

> Note: another way to look at this is - from my current element, where can I go next? Well you can go to the right element or the bottom element.

# Code

### Python3

```python
def minPathSum(self, grid: List[List[int]]) -> int:
    
    m, n = len(grid), len(grid[0])

    for i in range(1, m):
        grid[i][0] += grid[i-1][0]
    
    for i in range(1, n):
        grid[0][i] += grid[0][i-1]

    for i in range(1, m):
        for j in range(1, n):
            grid[i][j] = grid[i][j] + min(grid[i-1][j], grid[i][j-1])

    return grid[-1][-1]
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N^2)$ since we would be visiting all elements in the matrix.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure - we are modifying the matrix in place.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
