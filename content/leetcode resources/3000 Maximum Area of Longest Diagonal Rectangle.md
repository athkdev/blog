---
title: 3000 Maximum Area of Longest Diagonal Rectangle
date: 2025-03-31
tags:
  - medium
---

The problem is fairly straightforward, apart from a couple testcases. The logic for when we come across a larger diagonal vs. coming across the same diagonal length - are two different logics.

Because two different lengths and widths, can have the same diagonal length. But their area could be different.

# Code

### Python3

```python
def areaOfMaxDiagonal(self, dimensions: List[List[int]]) -> int:

    result = -math.inf
    cur = -math.inf

    for d in dimensions:
        if sqrt(d[0]**2 + d[1]**2) > cur:
            cur = sqrt(d[0]**2 + d[1]**2)
            result = d[0] * d[1]
        elif sqrt(d[0]**2 + d[1]**2) == cur:
            cur = sqrt(d[0]**2 + d[1]**2)
            result = max(result, d[0] * d[1])

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we visit every pair of dimension only once.

- **Memory**

  The memory usage is $O(1)$ since we do not use any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
