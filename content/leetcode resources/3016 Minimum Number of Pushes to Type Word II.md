---
title: 3016 Minimum Number of Pushes to Type Word II
date: 2024-08-05
tags:
  - easy
---

# Intuition

The basic intuition here is that to compute the `minimum` pushes - we need to assign the highest frequency characters to initial (first) push of keys. 

We do that greedily over elements in descending order of their frequencies.

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

    times = 1  # position for a key
    keys = 8
    for k, v in count.items():
        if keys <= 0:
            keys = 8
            times += 1
        
        res += (v * times)
        keys -= 1

    return res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * log N)$ since we are sorting the array.

- **Memory**

  The memory usage is $O(N)$ since we use a dictionary to store frequencies of characters.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
