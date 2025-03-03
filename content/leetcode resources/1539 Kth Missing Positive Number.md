---
title: 1539 Kth Missing Positive Number
date: 2025-12-01
tags:
  - easy
---

# Intuition

The fundamental idea here is that we can calculate the number of missing integers on an index.

In an "ideal" list where no number is missing, `arr[i] = i+1`. So, if there's a mismatch in this logic, we can find number of missing numbers by `missing = arr[i] - (i+1)`.

# Code

### Python3

```python
def findKthPositive(self, arr: List[int], k: int) -> int:
    #   * * *     *        *
    # 1 2 3 4 5 6 7 8 9 10 11 12 13 14
    # ^

    if k > arr[-1] - len(arr):
        return k + len(arr)

    left, right = 0, len(arr)-1

    while left <= right:
        mid = (left + right) // 2
        missing = arr[mid] - (mid+1)

        if missing < k:
            left = mid + 1
        else:
            right = mid - 1

    return k + right + 1
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(log N)$ since binary search and reducing the sample space by half every step.

- **Memory**

  The memory usage is $O(1)$ since no extra data structure is being used.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
