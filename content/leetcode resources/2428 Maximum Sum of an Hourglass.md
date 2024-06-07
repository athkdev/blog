---
title: 2428 Maximum Sum of an Hourglass
tags:
    - medium
---



We just brute force our way into the matrix, do bound checks for our values and just calculate the required hour glass sum, and finally update our max sum with every iteration.

# Code:

### Java

```java
class Solution {
    public int maxSum(int[][] grid) {
        int max = Integer.MIN_VALUE;
        for (int i=0;i<grid.length;++i) {
            for (int j=0;j<grid[i].length;++j) {
                if (i == 0 || i >= grid.length-1 || j == 0 || j >= grid[i].length-1) continue;

                int sum = grid[i][j] + 
                        grid[i-1][j-1] +
                        grid[i-1][j+1] + 
                        grid[i-1][j] + 
                        grid[i+1][j] + 
                        grid[i+1][j-1] +
                        grid[i+1][j+1];
                max = Math.max(max,sum);
            }
        }
        return max;
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N^2)$ .
    
- Memory
    
    The memory usage is `O(1)` .
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)