---
title: 2828 Check if a String Is an Acronym of Words
tags:
    - medium
---



Note: they say the order of the characters in the generated acronym matters, so one can’t just count frequencies. No need to overthink this solution, just store first letter of every `word` in `words`, and check if it’s similar to `s`.

# Code:

### Python3

```python
class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        ret = ''
        for w in words:
            ret += w[0]

        return ret == s

```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` where N = length of list `words`. 
    
- Memory
    
    The memory usage is `O(N)` since we use a `ret` string.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)