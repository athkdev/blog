---
title: 387 First Unique Character in a String
tags:
    - medium
---



We need to find the first unique character in the given input string. For this, we iterate over the string and create a frequency map/array. I usually like to use a size 26 array, if I am given only lowercase or only uppercase string. A map is easier to go with if it's a case-sensitive string.

We first create the frequency map. Then iterate over string again and check if the the current letter has a frequency of $1$, if so return this index.

> Note: in Python, `ord()` is used for getting the integer Unicode representation of a character. See [docs](https://docs.python.org/3.4/library/functions.html#ord).
> 

# Code:

### Python

```python
class Solution:
    def firstUniqChar(self, s: str) -> int:
        count = [0] * 26

        for c in s:
            count[ord(c) - ord('a')] += 1
        
        for i,c in enumerate(s):
            if count[ord(c) - ord('a')] == 1:
                return i

        return -1
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N) \; where \; n=len(input\_arr)$ as there are no nested loops and we have visited the characters of source and target strings once in a loop.
    
- Memory
    
    The memory usage is $O(26) = O(1)$  since we have arrays of size 26: so, constant space!
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)