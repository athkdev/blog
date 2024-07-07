---
title: 2582 Pass the Pillwo
date: 2024-07-06
tags:
  - easy
  - simulation
---

We can just simulate the process mentioned in the description by maintaining a variable for the direction.

# Code

### Python3

```python
def passThePillow(self, n: int, time: int) -> int:
    if n > time:
        return time + 1
    if n == time: return n - 1

    direction = True
    nn = 1
    for i in range(time):
        if nn == 1:
            direction = True
        elif nn == n:
            direction = False
        if direction: nn += 1
        else:         nn -= 1
    
    return nn
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(T)$ since we are simulating the process for each second till (T-1).

- **Memory**

  The memory usage is $O(1)$ since no explicit data-structure is used in place.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
