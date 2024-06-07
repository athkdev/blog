---
title: 49 Group Anagrams
tags:
    - medium
---



Word A is an anagram of word B, if there exists a one-to-one relation for each character between the two words. In simple words, the bag of letters in word A must be identical to bag of letters in word B.

This problem is pretty straightforward, check if a word is an anagram. To do this, just sort both strings, if they are equal: they are an anagram pair. After that create a entry in a map with this sorted string and insert all the new future anagrams too.

# Code:

### Python3

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)

        for s in strs:
            k = ''.join(sorted(s))
            res[k].append(s)

        return res.values()
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N * M * log (M))$ since we sort for every iteration: where $N = len(strs)$ and $M = len(strs[i])$
    
- Memory
    
    The memory usage is `O(N)`  where $M = len(strs)$
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)