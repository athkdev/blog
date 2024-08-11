---
title: 209 Minimum Size Subarray Sum
date: 2024-08-10
tags:
  - medium
  - sliding window
---

# Intuition

We are required to find the length of the smallest subarray whose sum is greater than or equal to `target`.

A naieve approach to this is to check all subarrays to see if their sum equals target. That would be $O(N^2)$.

A more optimized approach would be to move a variable size sliding window over our array and check the sum of our current sliding window. Here a technical challenge is, how will we obtain the sum of the variable sliding window.

Well, there are two approaches - we can have a variable `cur_sum` and add the elements that enter into the window to it. Also, subtract elements from `cur_sum` as they go out of the window.o

Another approach is to have a prefix sum array which helps us compute range/subarray sums in constant time. The former approach is more desirable here since the prefix array will require $O(N)$ memory while the former approach is constant memory.

# Code

### Python3 (compute running sum)

```python
def minSubArrayLen(self, target: int, A: List[int]) -> int:
    
    ret = 10**6
    left = 0 
    cur_sum = 0

    for right in range(len(A)):
        cur_sum += A[right]

        while cur_sum >= target:
            ret = min(right-left+1, ret)
            cur_sum -= A[left]
            left += 1


    return ret if ret != 10**6 else 0
```

### Python3 (using a prefix array for constant time range sums)

```python
def minSubArrayLen(self, target: int, A: List[int]) -> int:
    n = len(A)
    
    # Create the prefix sum array
    prefix = [0] * (n + 1)
    for i in range(1, n + 1):
        prefix[i] = prefix[i - 1] + A[i - 1]

    ret = 10**6
    left = 0
    
    for right in range(1, n + 1):
        # Use binary search or linear scan to find the smallest left such that
        # prefix[right] - prefix[left] >= target
        while prefix[right] - prefix[left] >= target:
            ret = min(ret, right - left)
            left += 1
    
    return ret if ret != 10**6 else 0
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are traversing every element once.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure. $O(N)$ for the prefix sum approach.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
