---
title: 69 Sqrt(x)
date: 2024-06-19
tags:
  - medium
---

This problem is a classic binary search application. Well there's a template that is supposed to be used with problems solved with binary search - you can find it here [[/notes/Binary Search]]

# Code

### Python3

```python
def mySqrt(self, x: int) -> int:
    left, right = 0, x

    if x == 0: return 0
    if x == 1: return 1

    while left < right:
        mid = left + (right-left) // 2

        if mid * mid == x: return mid
        elif mid * mid > x:
            right = mid
        elif mid * mid < x:
            left = mid + 1

    return left - 1
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- Memory
  The memory usage is $O(n)$ since we use the `collections.defaultdict` object to store multiple and modulos.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
