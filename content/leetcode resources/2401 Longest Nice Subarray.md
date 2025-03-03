---
title: 2401
date: 2024-08-21
tags:
  - medium
  - sliding window
---

# Intuition

The basic idea for our code is that - `(A + B) & C`. When `A & B == 0`, there are no digits that are same. So, `A + B` will have all the ones from both numbers A and B - they would have sort of merged.

Basically, the criteria they have mentioned of bitwise AND of two consecutive elements to be 0, is **_cumulative_**. To check, we can maintain a window sum and shrink window till the new number we are checking does not result in zero.

# Code

### Python3

```python
def longestNiceSubarray(self, A: List[int]) -> int:

    '''
    how to determine if a subarray is nice??

    enumerate all subarrays and check each subarray if they are "nice"
    '''

    n = len(A)

    result = 1

    window_sum = A[0]
    left = 0

    for right in range(1, n):
        while left != right and A[right] & window_sum != 0:
            window_sum -= A[left]
            left += 1

        result = max(result, right - left + 1)
        window_sum += A[right]

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are sliding a window over the array so this way every element is worked on only once.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
