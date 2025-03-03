---
title: 1423 Maximum Points You Can Obtain from Cards
date: 2025-02-16
tags:
  - medium
---

This is very similar to leetcode 1509 - except we need to maintain a sliding window running sum of the elements on the edges of the array.

For that we can simply use a for loop that maintains a window, and moves it along.

# Code

### Python3

```python
def maxScore(self, C: List[int], k: int) -> int:
    n = len(C)
    window_sum = sum(C[n-k:])
    result = window_sum

    for i in range(k):
        window_size = n - k

        window_sum = window_sum - C[window_size + i] + C[i]
        result = max(window_sum, result)

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(1)$ since we do not use extra datastructure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
