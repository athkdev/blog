---
title: 1768 Merge Strings Alternatively
date: 2024-08-17
tags:
  - easy
---

# Intuition

We are required to merge two strings such that the resulting string has alternating characters both input strings.

Sounds straightforward, but what about the edge-case that one of the string is shorter than the other? In that case we do the alternating - till that index in both strings and then just concatenate the remainder of the substring from the longer string. Now does it sound straightforward? Worry not, it is from here.


# Code

### Python3

```python
def mergeAlternately(self, word1: str, word2: str) -> str:
    w = word1+word2

    p1, p2 = 0, 0
    res = ''

    while p1 < len(word1) and p2 < len(word2):
        res += w[p1] + w[p2 + len(word1)]
        p1 += 1
        p2 += 1

    # cleanup on word1
    while p1 < len(word1):
        res += word1[p1]
        p1 += 1

    # cleapup on word2
    while p2 < len(word2):
        res += word2[p2]
        p2 += 1
    

    return res

    '''

    a b c p q r s 
    0 1 2 3 4 5

    result = apbqcr
    '''
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are iterating for the shorter string duration.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
