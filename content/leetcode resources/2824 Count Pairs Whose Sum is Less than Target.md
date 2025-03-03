---
title: 2824 Count Pairs Whose Sum is Less than Target
date: 2025-01-26
tags:
  - medium
---

Naieve way is a double for loop. A linear approach is two pointers on a sorted array, and check if addition of the current pairs is less than, equal to OR greater than `target`.

Very important note: when you come across a valid pair, it's not enough to just `result += 1`, instead you should add all possible pairs in it `result += right - left`.

# Code

### Python3

```python
def countPairs(self, A: List[int], target: int) -> int:

    result = 0

    left, right = 0, len(A)-1

    A.sort()

    while left < right:
        if A[left] + A[right] < target:
            result += right - left
            left += 1
        else:
            right -=1

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visit all elements at most once.

- **Memory**

  The memory usage is $O(1)$ since we do not use any data structures that grow with input size.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
