---
title: 53 Maximum Subarray
tags:
    - medium
---



So, at every new element in the array we make two choices A) either add the new element to the current running sum OR B) start a new current sum altogether. Now, starting a new current sum is equivalent to starting a new sub-array.

The solutions that seem the simplest are usually the hardest to grasp: because mainly they are abstracted over several complex concepts.

# Code:

### Python

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        cur_sum, sub_arr_max = -float('inf'), -float('inf')
        for n in nums:
            cur_sum = max(cur_sum + n, n)
            sub_arr_max = max(sub_arr_max, cur_sum)
        return sub_arr_max
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the array once.
    
- Memory
    
    The memory usage is `O(1)`
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)