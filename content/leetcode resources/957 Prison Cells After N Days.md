---
title: 957 Prison Cells After N Days
date: 2025-03-17
tags:
  - medium
---

The core idea is that after simulating, there will be a time when the state of the array will be the same as some previous one. That means there is a cycle. So, lets look for the length of the cycle and reduce our input search space by that count.

This is huge, because of the fact that running the simulation $N$ times will give the same output as running it $N mod count$.

We use `tuple()` so that we are freezing its state in time. The `day` and `day1` variables directly rely on the `cells` input array, and because we modify the array in-place it would be a problem to check for equality `day == day1`.

# Code

### Python3

```python
def prisonAfterNDays(self, cells: List[int], n: int) -> List[int]:

    def getCount(cells):
        for _ in range(n):
            mask = cells.copy()

            for i, x in enumerate(cells):
                if i == 0 or i == len(cells)-1:
                    continue

                if mask[i-1] ^ mask[i+1] == 0:
                    cells[i] = 1
                else:
                    cells[i] = 0

            cells[0] = 0
            cells[-1] = 0

            return cells

    day1 = tuple(getCount(cells))
    n -= 1
    count = 0

    while n > 0:
        day = tuple(getCount(cells))

        count += 1
        n -= 1

        if day == day1:
            n = n % count


    return cells
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N mod C)$ where C is the length of the cycle.

- **Memory**

  The memory usage is $O(8)$ since the `getCount` function creates new arrays of only length 8 and then its garbage collected.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
