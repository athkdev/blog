---
title: 1572 Matrix Diagonal Sum
tags:
    - medium
---



The problem asks to find the sum of both diagonals in a square matrix. This is fairly straightforward. Now, if you are a programmer who knows concepts such as DFS, BFS you would realize that you don’t need to traverse the matrix in a $O(N^2)$ manner, you can just get the diagonals.

After that there just arises one edge case, if the length of either `row` or `col` is odd, the middle value would be calculated twice. In that case, just subtract the middle value once from the final answer.

# Code:

### Python

```python
class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        R, C = len(mat), len(mat[0])
        mid = 0
        ans = 0

        i, j = 0, 0
        while i < R:
            if i == R // 2: mid = mat[i][j]
            ans += mat[i][j]
            i += 1
            j += 1

        i, j = 0, R - 1 
        while i < R: 
            ans += mat[i][j]
            i += 1
            j -= 1

        if R % 2 != 0: ans -= mid

        return ans
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(n)$ as since we would be visiting all characters in the string at least once.
    
- Memory
    
    The memory usage is $O(1)$ since we are using a set to store visited points.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)