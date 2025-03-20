---
title: 2563 Count the Number of Fair Pairs
date: 2025-03-19
tags:
  - medium
---

The concept is to simplify the given condition:

$$
lower <= nums[i] + nums[j] <= upper \\

Subtracting\:nums[j]\:from\:all\:sides, \\

lower - nums[j] <= nums[i] <= upper - nums[j]
$$

As per this simplification, for every $nums[i]$ we need to find the updated range $(nlower, nupper)$.

In Python, the `bisect` module has `bisect_left` and `bisect_right` functions that help up with this. They find an index within a subarray where any element `x` could be fitted. `_left` gives the leftmost index, and `_right` gives the rightmost index.

# Code

### Python3

```python
def countFairPairs(self, N: List[int], lower: int, upper: int) -> int:
    '''
    bisect_left: find the leftmost index where x could be inserted

    bisect_right: find the rightmost index where x could be inserted
    '''

    N.sort()
    count = 0

    for j in range(len(N)):

        left = bisect_left(N, lower - N[j], 0, j)

        right = bisect_right(N, upper - N[j], 0, j)

        count += (right - left)

    return count
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N lg N)$ since `bisect_left` and `bisect_right` take logarithmic time, which happen for each element N times.

- **Memory**

  The memory usage is $O(1)$ since there is no extra space used - unless you take the `N.sort()` into consideration.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
