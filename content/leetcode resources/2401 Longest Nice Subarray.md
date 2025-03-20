---
title: 2401 Longest Nice Subarray
date: 2025-03-19
tags:
  - medium
---

# Intuition

The basic idea for our code is that - `(A + B) & C`. When `A & B == 0`, there are no digits that are same. So, `A + B` will have all the ones from both numbers A and B - they would have sort of merged.

Basically, the criteria they have mentioned of bitwise AND of two consecutive elements to be 0, is **_cumulative_**. To check, we can maintain a window sum and shrink window till the new number we are checking does not result in zero.

> Another approach: instead of maintaining a sum to check, use the OR bitwise to add the current element to window, XOR to remove it from current window, and AND bitwise to check if the condition remains satisfied.

# Code

### Python3 (an even better solution)

```python
def longestNiceSubarray(self, nums: List[int]) -> int:

    res = -math.inf
    left = 0
    cur = 0

    for right in range(len(nums)):
        while cur & nums[right]: # check if condition is still valid
            cur ^= nums[left]    # remove from current window
            left += 1

        cur |= nums[right]    # add to current window

        res = max(res, right-left+1)

    return res
```

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
