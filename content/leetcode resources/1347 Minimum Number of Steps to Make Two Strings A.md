---
title: 1347 Minimum Number of Steps to Make Two Strings A
tags:
    - medium
---


# 1347. Minimum Number of Steps to Make Two Strings Anagram

Use a frequency array/hashtable to keep track of frequencies in string `s`, then iterate over string `t` and subtract occurrences.

Finally, add up all extra occurrences that are greater than 0.

# Code:

### Python

```python
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        sFreq = [0] * 26

        for c in s:
            inx = ord('a') - ord(c)
            sFreq[inx] += 1
        
        for c in t:
            inx = ord('a') - ord(c)
            if c in s:
                sFreq[inx] -= 1
        
        ret = 0
        for i in sFreq:
            if i > 0: ret += i
        
        return ret
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the string once.
    
- Memory
    
    The memory usage is `O(26)`  since we u frequency array.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)