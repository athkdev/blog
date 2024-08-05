---
title: 3019 Number of Changing Keys
date: 2024-08-05
tags:
  - easy
---

# Intuition

Since `shift` and `capslock` does not affect, that's just a fancy way of saying the string is case in-sensitive. So this boils down the problem to detecting how many times are we changing adjacent characters in `s.lower()`.

For Python devs, we use `itertools.pairwise()` - this returns pairwise tuples of the entire array. Learn more about it [here](https://docs.python.org/3/library/itertools.html#itertools.pairwise)

# Code

### Python3

```python
def countKeyChanges(self, s: str) -> int:

    ret = 0

    for c, n in itertools.pairwise(list(s.lower())):
        ret += (1 if c != n else 0)
    
    return ret
```

### Python3 One Liner

```python
def countKeyChanges(self, s: str) -> int:
    return sum([1 for c, n in itertools.pairwise(list(s.lower())) if c != n])
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all characters in the string of length N.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
