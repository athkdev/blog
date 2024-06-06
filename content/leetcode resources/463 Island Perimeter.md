---
title: 463 Island Perimeter
tags:
    - medium
---


# 463. Island Perimeter

We have seen countless other problems where we are given a grid and are required to traverse an island. But this is not as complex as a DFS in a matrix.
The trick to an efficient algorithm for this problem is understanding how we can get the running perimeter of the entire island as we traverse.

We are told that there is only one island as such - this means we do not have to worry about keeping track if an island stops and a new one begins.

The perimeter is the sum of lengths of outer sides. We are confident that an island consists of 1s and water consists of 0s. While traversing for each  cell, if we **keep track of how many 1s and 0s it has as its neighbors** - we are good to go. 

Since a cell would have four sides (we assume this is a square matrix and each cell has four sides), subtract the number of 1s (inner boundaries) from 4 to get outer boundaries. 

# Code:

### Python3

```python
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        def countSurroundingOnes(i: int, j: int) -> int:
            ones = 0

            if i > 0 and grid[i-1][j] == 1: ones += 1
            if j > 0 and grid[i][j-1] == 1: ones += 1
            if i < len(grid)-1 and grid[i+1][j] == 1: ones += 1
            if j < len(grid[i])-1 and grid[i][j+1] == 1: ones += 1

            return ones
        
        ret = 0

        for i,row in enumerate(grid):
            for j,col in enumerate(row):
                if col == 1: ret += (4 - countSurroundingOnes(i,j))
        
        return ret
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N * M)`  where `N = len(grid)` and `M = len(grid[i])`.
    
- Memory
    
    The memory usage is `O(N)` where N is the hashmap size.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)