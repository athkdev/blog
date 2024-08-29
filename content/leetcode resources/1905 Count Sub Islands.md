---
title: 1905 Count Sub Islands
date: 2024-08-28
tags:
  - medium
  - dfs
---

# Intuition

The basic idea is exactly like [[/leetcode resources/200 Number of Islands]]. The change is in how we structure our DFS finding function. We are given `grid1` which already contains a few islands. While looking into `grid2` we need to see if the current cell `(i, j)` is land (1) in `grid1` and `grid2` - then that is a valid sub-island.

But if any part of our island in `grid2` is water (0) in `grid1` although other cells are land - that's not valid.

So in a way - we need to design our function so it accumulates the results of all cells and returns True or False.

# Code

### Python3

```python
def minEatingSpeed(self, piles: List[int], h: int) -> int:

    def feasible(rate):
        return sum(ceil(p / rate) for p in piles) <= h

    left, right = 1, max(piles)

    while left < right:
        speed = left + (right-left) // 2

        if feasible(speed):
            right = speed
        else:
            left = speed + 1

    return left
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(R * C)$ since we are visiting each cell once.

- **Memory**

  The memory usage is $O(R * C)$ since have recursion. Recursion can cause a maximum call stack height of $R*C$ - one call for each cell `(i, j)`.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
