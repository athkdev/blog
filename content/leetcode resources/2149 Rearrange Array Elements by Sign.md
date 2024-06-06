---
title: 2149 Rearrange Array Elements by Sign
tags:
    - medium
---


# 2149. Rearrange Array Elements by Sign

We just brute force our way into the matrix, do bound checks for our values and just calculate the required hour glass sum, and finally update our max sum with every iteration.

# Code

### Python

```python
class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        pos, neg = 0, 1

        res = [0 for _ in range(len(nums))]

        for n in nums:
            if n > 0:
                res[pos] = n
                pos += 2
            if n < 0:
                res[neg] = n
                neg += 2
        
        return res
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$  since we visit all elements atleast once.
    
- Memory
    
    The memory usage is $O (N)$ since we are creating a new result array.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)