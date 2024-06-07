---
title: 2785 Sort Vowels in a String
tags:
    - medium
---



We iterate over the input string and keep track of all indices and their vowels. Then we sort them lexicographically so that characters with lower ASCII are ordered first than their counterparts with greater ASCII.

Then we iterate over the string again and when we come across vowels, we fetch from our sorted list of vowels.

# Code:

### Python3

```python
class Solution:
    def sortVowels(self, s: str) -> str:
        indices = defaultdict(int)
        vowels = 'aeiouAEIOU'

        for i, c in enumerate(s):               # n
            if c in vowels:
                indices[i] = c

        if not len(indices): return s
        
        sortedVowels = sorted(indices.values())     # n log n
        
        ret = [''] * len(s)             # n
        j = 0
        for i, c in enumerate(s):       # n
            if i in indices.keys():
                ret[i] = sortedVowels[j]
                j += 1
                continue
            ret[i] = s[i]
        
        return ''.join(ret)             # n
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N\;*\;logN)$ since we are using sort.
    
- Memory
    
    The memory usage is $O(N)$ since we use a dictionary to store indices from input string, which would be of length $N$.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)