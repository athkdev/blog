---
title: 42 Trapping Rain Water
tags:
    - medium
---


# 42. Trapping Rain Water

This is the famously dreaded problem which is also asked quiet frequently in interviews. It’s dreaded because of how it manages engineers to overthink a solution because it has a leetcode hard tag. 

I mean the intuition behind it is not exactly easy, but the solution is to it is very elegant once you understand the basic idea behind it.

The basic idea is: that rainwater will be trapped between two bars that are taller than `height[i]`. But we need to maximize the rainwater that will be trapped between two tall bars. So, we store the tallest bars on the left and right of every $i^{th}$ position in the list `height`.

Water will flow down from a shorter bar, so we take the **minimum** of the two maximum bars (one on the left, one on the right), minus the current bar height, that’s the amount (units) of water that would be stored at position $i$.

# Code:

### Python

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        maxL, maxR = [0] * n, [0] * n

        for i in range(1, n):
            maxL[i] = max(height[i-1], maxL[i-1])
        for i in range(n-2, -1, -1):
            maxR[i] = max(height[i+1], maxR[i+1])
        
        ret = 0
        for i,h in enumerate(height):
            cur_height = min(maxL[i], maxR[i])

            if cur_height >= h:
                ret += cur_height - h
        
        return ret
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be visiting each height at least once.
    
- Memory
    
    The memory usage is `O(N)`  because we are using lists to store prefix and suffix heights.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)