---
title: 633 Sum of Square Numbers
date: 2024-06-17
tags:
  - medium
---

Instead of looking for both numbers $a^2$ and $b^2$ from 0 to c with a double for loop, we can save a lot of repeated calculations by using a two-pointer strategy.

Since our required expression is `a^2 + b^2 = c`, we know that the maximum value either a or b can have is `sqrt(c)`, because if any one (or both) exceeds `sqrt(c)`, the sum of both the squares of a and b would exceed c.

# Code:

### Python3

```python
def judgeSquareSum(self, c: int) -> bool:
    a, b = 0, int(sqrt(c))

    while a <= b:
         x = (a*a) + (b*b)
         if x == c: return True
         elif x < c: a += 1
         elif x > c: b -= 1

    return False
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(sqrt(c))$ since our sample space to look for would be `a - b` were `b = sqrt(c)`

- Memory

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
