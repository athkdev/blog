---
title: 402 Remove K Digits
tags:
    - medium
---


# 402. Remove K Digits

# Code:

### Python3

```python
class Solution:
    def removeKdigits(self,num, k):
        stack = []
        for digit in num:
            while k > 0 and stack and stack[-1] > digit:
                stack.pop()
                k -= 1
            stack.append(digit)
    
        # If k is still greater than 0, remove remaining digits from the end
        stack = stack[:-k] if k else stack
    
        # Remove leading zeros
        return ''.join(stack).lstrip('0') or '0'
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(n) \; where \; n=s.length$.
    
- Memory
    
    The memory usage is $O(1)$. Although we are using an array count, its always going to be of length 26, constant space!.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)