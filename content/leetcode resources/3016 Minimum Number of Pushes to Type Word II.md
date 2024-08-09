---
title: 3016 Minimum Number of Pushes to Type Word II
date: 2024-08-09
tags:
  - medium
---

# Intuition

This problem is sequel problem to [[/leetcode resources/1974 Minimum Time to Type Word Using Special Typewriter]] - check that out first so this problem will get easy.

We greedily assign the most frequently typed characters to the starting positions of the keys (eg. first, second, etc). 

# Code

### Python3

```python
def minimumPushes(self, word: str) -> int:

    '''
    to get minimum number of presses - we need to assign first presses to highest frequency characters
    '''

    count = Counter(word)

    count = {k:count[k] for k in  sorted(count, key= lambda x: -count[x])}

    res = 0

    times = 1
    keys = 8
    for k, v in count.items():
        if keys <= 0:
            keys = 8 # if all keys are exhausted, replenish the keys
            times += 1  # start assigning the keys to the next positions
        
        res += (v * times)
        keys -= 1

    return res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(U)$ where U is the unique characters in the input string `word`.

- **Memory**

  The memory usage is $O(N)$ since we are using a `collections.Counter` which inherently is a dictionary.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
