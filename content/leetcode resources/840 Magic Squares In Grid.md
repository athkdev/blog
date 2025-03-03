---
title: 840 Magic Squares In Grid
date: 2024-08-09
tags:
  - medium
---

# Intuition

This problem asks us to find the number of _magic_ sub-matrices. We approach this with a straight forward approach - by iterating over the entire matrix whilst maintaining a sub-grid of 3x3.

We keep track of current diagonal, anti-diagonal, sums of rows, sums of columns and all the 9 numbers currently in the sub-grid.

We need to check if all the sums are same - so we put them all in set and check if the set length is 1.

Also, we need to check if all 9 numbers in the sub-grid are unique or not. This can be done by putting them in a set too - and then check if `len(set) == 9`.

# Code

### Python3

```python
def numMagicSquaresInside(self, grid: List[List[int]]) -> int:

    m, n = len(grid), len(grid[0])

    ret = 0

    for i in range(m):
        for j in range(n):
            if i + 2 < m and j + 2 < n:
                mat = [grid[x][y] for x in range(i, i+3) for y in range(j, j+3) if 1 <= grid[x][y] <= 9]  # all elements
                d1 = [grid[i+x][j+x] for x in range(3)]           # diagonal
                d2 = [grid[i+x][j+(2-x)] for x in range(3)]        # anti diagonal

                sums = set()
                sums.add(sum(d1))
                sums.add(sum(d2))
                sums.add(sum(grid[i][j:j+3]))    # row 1
                sums.add(sum(grid[i+1][j:j+3]))  # row 2
                sums.add(sum(grid[i+2][j:j+3]))  # row 3

                sums.add(sum([x[j] for x in grid[i:i+3]]))  # col 1
                sums.add(sum([x[j+1] for x in grid[i:i+3]]))  # col 2
                sums.add(sum([x[j+2] for x in grid[i:i+3]]))  # col 3

                if len(set(mat)) == 9 and len(sums) == 1: ret += 1

    return ret
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N^2)$ since the steps to find a magic sub-grid are applied to all elements in the matrix.

- **Memory**

  The memory usage is $O(N)$ since we use set inside the for loops. But if can be argued if the memory usage is constant $O(9)$ since at a time the set and lists would contain only 3x3 = 9 elements.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
