---
title: 64 Minimum Path Sum
date: 2024-09-11
tags:
  - medium
  - dynamic programming
---

We need to enumerate all paths and then keep track of the smallest path sum.

Again, let's use `reduction` to reduce this problem into smaller problems. To comupte the minimum path sum from `(0,0)` to `(m,n)`, we would first need to know the minimum path sum till `(m-1, n)` and `(m, n-1)`.

Once we have reduced our problem, we can put into a recursive statement and we are done.

# Code

### Python3

```python

def minPathSum(self, grid: List[List[int]]) -> int:
  m, n = len(grid), len(grid[0])

  for r in range(m):
    for c in range(n):
      if (r, c) == (0, 0):
        continue

      if r == 0:   # top row
        grid[r][c] += grid[r][c-1]
      elif c == 0:   # left row
        grid[r][c] += grid[r-1][c]
      else:   # all other rows that are not top or left
        grid[r][c] += min(grid[r-1][c], grid[r][c-1])

  return grid[m-1][n-1]

```

```python
  def minPathSum(self, grid: List[List[int]]) -> int:


      @functools.cache
      def compute_sum(i, j):
          if i < 0 or j < 0:
              return sys.maxsize

          # if i == 0 and j == 0:
          #     return grid[i][j]

          return grid[i][j] + min(compute_sum(i-1, j), compute_sum(i, j-1))


      m, n = len(grid), len(grid[0])

      return compute_sum(m-1, n-1)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since are caching - which reduces the $O(2^N)$ to linear time.

- **Memory**

  The memory usage is $O(N)$ since we are caching.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
