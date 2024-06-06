---
title: 2373 Largest Local Values in a Matrix
tags:
    - medium
---


# 2373. Largest Local Values in a Matrix

Fairly easy to overthink this problem. I mean no issues if you want to further analyze it and but it’s an easy.

Think of the problem as in that you need to iterate 9 total values for every value in the result matrix `maxLocal`.

# Code:

### Python

```python
class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        n = len(grid)
        maxLocal = [[-1 for _ in range(n-2)] for _ in range(n-2)]

        for i in range(n-2):
            for j in range(n-2):
                for x in range(i, i+3):
                    for y in range(j, j+3):
                        maxLocal[i][j] = max(maxLocal[i][j], grid[x][y])
                

        return maxLocal
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N^2)$ , there’s a constant factor of 9 with each iteration, but we don’t usually count the constants.
    
- Memory
    
    The memory usage is `O(N-2)` where `N = rows * cols` for the original input matrix.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)