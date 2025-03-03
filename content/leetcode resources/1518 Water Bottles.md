---
title: 1518 Water Bottles
date: 2024-07-07
tags:
  - easy
---

# Intuition

We are required to compute the number of bottles that is drinkable. A twist in the problem is that after every session of drinking all the bottles, we can exhange the empty bottles for more bottles (depending on the `numExchange`).

# Code

### Python3

```python
def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
    ret = 0

    while numBottles >= numExchange:
        numBottles, carry = divmod(numBottles, numWater)
        ret += numBottles
        numBottles += carry

    return ret
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where `N = numBottles` since we would be iterating the entire sample set of number of bottles.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
