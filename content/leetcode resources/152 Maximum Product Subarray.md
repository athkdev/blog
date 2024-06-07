---
title: 152 Maximum Product Subarray
tags:
    - medium
---



We need to find the maximum product subarray present in a given input array. This has a very sweet linear solution which is fundamental to a lot of problems on leetcode.

Think of different test cases that could prevent you from obtaining the maximum product. An odd number of negative numbers in the subarray could affect the product making it negative, a zero in the subarray would make the product zero, an even number of negative elements would make it the new maximum subarray, etc.

For this, we use the common prefix and suffix sum technique where we calculate the running cumulative product of an array from left to right (prefix) and right to left (suffix).

**Why is this such an effective technique?**

It will preserve the positive/negative state of each product at every step. We don’t have to keep track of whether there are odd or even negative elements present.

There’s one issue in this approach though, that is when we encounter a zero. A zero turns the subarray sum to zero. To counter this we just add reset to a new subarray from the $zero^{th}$ element index. We do this by setting $prefix[z] = suffix[z] = 0$ where $z = index\; of\; zero^{th} \;element$. 

# Code

### Python

```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        N = len(nums)
        prefix = nums
        suffix = nums[::-1]

        for i in range(1, N):
            prefix[i] *= prefix[i-1] or 1
            suffix[i] *= suffix[i-1] or 1
        

        return max(suffix + prefix)
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O( N)$ . There’s just one for loop that calculates the prefix and suffix values.
    
- Memory
    
    The memory usage is $O(N)$ since we use the prefix and suffix arrays of size $N = nums.length$.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)