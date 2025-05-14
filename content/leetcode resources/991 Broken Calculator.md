---
title: 991 Broken Calculator
date: 2025-05-07
tags:
  - medium
---

Instead of looking trying to get `startValue` to `target`, try to get `target` to `startValue`.

This way, we convert the problem from being non-deterministic to deterministic.

# Code

### Python3

```python
def brokenCalc(self, startValue: int, target: int) -> int:
    
    if startValue >= target:
        return startValue - target

    steps=0

    while target > startValue:
        if target % 2 == 0:
            target //= 2
        else:
            target += 1
        steps+=1
    
    return steps + (startValue - target)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store multiple and modulos.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
