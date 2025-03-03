---
title: 62 Unique Paths
date: 2024-09-11
tags:
  - medium
  - dynamic programming
---

This is a classic dynamic programming problem. We need to count how many ways exist when we start from the top-left cell in the grid and make way till the bottom-right cell.

Let's think about reduction. Reduction is the process of breaking down a problem into smaller sub-problems. To calculate the number of ways to reach cell `(m, n)` - is basically the number of ways to reach cell `(m-1, n)` PLUS the number of ways to reach cell `(m, n-1)`.

Note: the number of ways to go from `(0,0)` to `(m, n)` == the number of ways to go from `(m, n)` to `(0, 0)`.

# Code

### Python3

```python
  def uniquePaths(self, m: int, n: int) -> int:

      # (m-1, n) OR (m, n-1)

      @functools.cache
      def compute(i, j):
          if i == 0 or j == 0:
              return 1

          return compute(i-1, j) + compute(i, j-1)


      return compute(m-1, n-1)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ with the caching - without caching it's $O(2^N)$.

- **Memory**

  The memory usage is $O(N)$ since the caching mechanism would require some sort of dictionary.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
