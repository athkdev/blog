---
title: 1992 Find All Groups of Farmland
tags:
    - medium
---



The problem is straightforward and since the constraints are smaller, one can brute force through it.

A good hint that is present in the problem in the problem is that all farmlands are rectangular and there won't be irregular sizes of farmlands adjacent to each other. If you would remember this is identical to the problem of finding how many ways to get from point `(R1, C1)`  to point `(R2, C2)`  where you can go only right or bottom directions. In that problem, we make DFS calls in only right and bottom directions. Something like this:

```python
bottom = dfs(i + 1, j)
right = dfs(i, j + 1)
```

We have to the identical in our current problem. When we come across a 1 or a farmland, we start DFS on it. But not the conventional four directional DFS, just the two directional one.

### Why to use DFS anyway? We just need to get to the bottom end of the farmland.

That’s true that we only care about the top-left and bottom-right of the farmland. But our algorithm works on the basis of checking if the current cell is 1 or 0, and then continuing the DFS (or even starting a new DFS, since we change the 1’s to 0’s, so that we don’t get caught up in infinite computation - this is the equivalent of having a `visited` set).

That’s why, it is crucial we mark all the 1’s in the farmland we have visited to 0’s, and to do this, just surfing over the boundary of the farmland won’t cut it. Since we have to visit all cells in the farmland, we use DFS.

# Code:

### Python3

```python
class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        m,n = len(land), len(land[0])
        ret = []

        def dfs(i, j, land):
            if i < 0 or j < 0 or i >= m or j >= n or land[i][j] == 0:
                return (0,0)
            
            land[i][j] = 0

            right = dfs(i+1, j, land)
            bottom = dfs(i, j+1, land)

            return (max(right[0], bottom[0], i), max(right[1], bottom[1], j))
        
        for i in range(m):
            for j in range(n):
                if land[i][j] == 0: continue

                x, y = dfs(i, j, land)

                ret.append([i,j,x,y])
        
        return ret
            

```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the array atleast once.
    
- Memory
    
    The memory usage is `O(1)` since we are not using any extra datastructure.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)