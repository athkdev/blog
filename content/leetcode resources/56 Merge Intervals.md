---
title: 56 Merge Intervals
date: 2025-02-16
tags:
  - medium
---

`Tag: sort array, check if interval merge into previous interval`

We solve this problem as it states itself. There’s no catch, but the solution is pretty intuitive.

First sort the intervals array with increasing starting times. Then traverse the array one element at a time, and check if the current interval comes in between the previous interval, if so then update our `previous` interval's end time (`ret[-1][1]`) to the `current` interval’s end time (`interval[1]`).

Hope the picture below helps visualize the problem better.

# Code:

### Python

```python
def merge(self, I: List[List[int]]) -> List[List[int]]:

    I.sort(key=lambda x: x[0])

    res = [I[0]]

    for i in range(1, len(I)):
        if res[-1][1] >= I[i][0]:
            res[-1][1] = max(I[i][1], res[-1][1])
        else:
            res.append(I[i])

    return res
```

### Big O Analysis

- **Runtime**
  The runtime complexity here is $O(N)$ as since we visit every interval only once.
- **Memory**
  The memory usage is $O(1)$ excluding the result array `res`.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
