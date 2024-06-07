---
title: 1208 Get Equal Substrings Within Budget
tags:
    - medium
---



This problem can be done with DP but there’s no need for it because it can be done with just a sliding window that too in O(N) time. (I’ll update here with the DP solution some time in the future)

We maintain a sliding window and move it across over the string S. Whenever we move over our limit that is the `maxCost`, we decrease our window from the left.

# Code:

### Python3

```python
class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        L, R = 0, 0
        N = len(s)
        cost = 0
        ret = 0

        while R < N:
            cost += abs(ord(s[R]) - ord(t[R])) # increasing our window on the right

            while cost > maxCost:
                cost -= abs(ord(s[L]) - ord(t[L])) # decreasing our window from the left
                L += 1
            
            ret = max(ret, R - L + 1) # record the maximum length of windows
            R += 1
        
        return ret 
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the string once.
    
- Memory
    
    The memory usage is `O(1)`  since we do not use any datastructure.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)