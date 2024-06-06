---
title: 713 Subarray Product Less Than K
tags:
    - medium
---


# 713. Subarray Product Less Than K

This problem gives the impression of being difficult but is actually pretty chill. 🗿

The test cases make it look like you need some complex backtracking stuff, but it’s just sliding window. 

We move over the window and once product reaches over $k$, we start shrinking from the $left$ pointer. This code snippet is very common in dynamic sliding window patterns, you would see a lot of them.

# Code:

### Python3

```python
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        left = 0
        prod = 1
        res = 0
        for right, n in enumerate(nums):
            prod *= n

            # common sliding window code snippet
            while prod >= k and left <= right:
                prod /= nums[left]
                left += 1

            res += right - left + 1
        
        return res
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$ since we are visiting all elements once.
    
- Memory
    
    The memory usage is  $O (1)$.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)