---
title: 441 Arranging Coins
date: 2024-05-14
tags:
  - easy
---

To find the nnumber of rows, we can simulate the process of dropping a coin in each row incrementally.

Repeat the process until n is greater than or equal to 0.

> PS: Think about if this can be achieved faster or not? Maybe via some mathematical way? : )

# Code

### Python3

```python
def arrangeCoins(self, n: int) -> int:
    
    c = 0

    while n >= 0:
        c += 1
        n -= c

    return c - 1
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are simulating the process of dropping a coin on every single level.

- **Memory**

  The memory usage is $O(1)$ since we do not use any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
