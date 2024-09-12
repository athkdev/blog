---
title: 63 Unique Paths II
date: 2024-09-11
tags:
  - medium
  - dynamic programming
---

This problem is a sequel to [[/leetcode resources/62 Unique Paths]] - so make sure to check that problem out first.


This problem is the same as it's predecessor, just that there are some obstacles in a grid. We just have to modify the part where if there's a obstacle at `grid[i][j]` we stop our search.

# Code

### Python3

```python
  def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
      
      @functools.cache
      def compute(i, j):
          if i < 0 or j < 0 or obstacleGrid[i][j] == 1:    
              '''
              if the obstacle check is happening - that means both the first two checks for i and j were false. Meaning, by the time obstacle is checked - both i and j are valid and in-bound
              '''
              return 0

          if i == 0 and j == 0:
              return 1  # 1 indicates we reached (0,0)
          
          return compute(i-1, j) + compute(i, j-1)
      
      m, n = len(obstacleGrid), len(obstacleGrid[0])
      
      return compute(m-1, n-1)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ same as the previous problem. It's actually $O(2^N)$ but caching makes it linear time.

- **Memory**

  The memory usage is $O(N)$ since we use the `cache` function that uses some dictionary internally for caching/memoising.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
