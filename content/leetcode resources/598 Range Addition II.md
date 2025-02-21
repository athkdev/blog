---
title: 598 Range Addition II
date: 2025-02-21
tags:
  - easy
---

When you try to implement just the bare bones, it runs out of memory for larger values of m, and n.


The optimization here is the realization that the ranges go from $0...a_i$ and $0...b_i$. That means the resultant matrix we are looking for will always be in the top left corner.


So, we need to find the dimensions of the smallest sub-matrix that could be formed from the operations given - that will have gone through the most number of increments.

# Code

### Python3

```python
def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:

    if not ops: return m * n

    x = min(op[0] for op in ops)
    y = min(op[1] for op in ops)

    return x * y
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where N is the number of operations.

- **Memory**

  The memory usage is $O(N)$ since the `min` function internally uses some list buffer.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
