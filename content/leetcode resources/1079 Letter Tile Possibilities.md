---
title: 1079 Letter Tile Possibilities
date: 2025-02-17
tags:
  - medium
---

# Code

### Python3

```python
def numTilePossibilities(self, T: str) -> int:
  count = Counter(T)

  def bt():
    total = 0

    for c in count:
      if count[c] > 0:
        count[c] -= 1
        total += 1 + bt()
        count[c] += 1

    return total
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(2^N)$ since we are checking all permutations of the string.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.Counter` object to store character frequencies.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
