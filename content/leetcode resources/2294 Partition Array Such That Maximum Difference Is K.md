---
title: 2294 Partition Array Such That Maximum Difference Is K
date: 2025-02-22
tags:
  - medium
---

Very similar to [[/leetcode resources/2779 Maximum Beauty of an Array After Applying Operation]].

Sort the array, and maintain a sliding window that only increases when constraints allow, else shrink. In the context of this problem, we need to keep track of the number of such `partitions` that could be made.

PS: every element is considered a valid subsequence in itself, hence the `result` is initialized at 1.

# Code

### Python3

```python
def partitionArray(self, A: List[int], k: int) -> int:

    '''

    1 2 3 5 6
    ^

    A[e] - A[s] >= k

    notes:
    a. subsequence can be of length 1
    '''

    A.sort()

    start = 0
    result = 1

    for end, _ in enumerate(A):
        if A[end] - A[start] > k:
            start = end
            result += 1

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N lg N)$ since we sort the array before moving the sliding window over, which takes linear time.

- **Memory**

  The memory usage is $O(1)$ since no extra datastructure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
