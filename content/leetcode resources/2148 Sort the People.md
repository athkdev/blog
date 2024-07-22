---
title: 2148 Sort the People
date: 2024-07-22
tags:
  - easy
  - arrays
---

# Intuition
(A) zip the names and corresponding heights
(B) sort array with respect to the heights
(C) return only the names

# Code

### Python3

```python
def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
    return [name[0] for name in sorted(zip(names, heights), key=lambda x: x[1], reverse=True)]
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * log N)$ since are sorting list of length N.

- **Memory**

  The memory usage is $O(N)$ since we use functions like `zip` and `sorted` which return lists of length N.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
