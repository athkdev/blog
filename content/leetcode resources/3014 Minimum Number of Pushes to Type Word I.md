---
title: 3014 Minimum Number of Pushes to Type Word I
date: 2025-03-12
tags:
  - medium
---

To solve any low level algorithms problem, its necessary to know two of the following three - `algorithm`, `invariant` and `data structure`.

Lets mark the invariants:

- the fact that we have unique lowercase characters in the input - so at max, we would have only 26 characters.

The algorithm here:

- we need a way to map 26 characters over keys (2 to 9) which are 8 keys.
- lets greedily fix the first 8 characters on the keys, then the next 8 characters and so on until we reach characters less than 8.

PS: the reason we greedily put characters on the keys one by one is because it gives us the minimum number of keys to be pressed for the input.

# Code

### Python3

```python
def minimumPushes(self, word: str) -> int:

    def helper(w, i):
        if len(w) <= 8:
            return i * len(w)
        else:
            return i * 8 + helper(w[8:], i+1)

        '''
        one liner:

        return i * len(w) if len(w) <= 8 else i * 8 + helper(w[8:], i+1)
        '''

    return helper(word, 1)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N/8)$ since we reduce the input size with a factor of 8 each iteration.

- **Memory**

  The memory usage is $O(N/8)$ since the recursion stack increases by 1 for every 8 characters on the input.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
