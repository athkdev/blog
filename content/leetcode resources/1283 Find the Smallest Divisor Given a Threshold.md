---
title: 1283 Find the Smallest Divisor Given a Threshold
date: 2024-08-19
tags:
  - medium
  - binary search
---

# Intuition

The problem is very similar infact identical to 875. Koko Eating Bananas. We need to minimize the divisor here, so that the condition stays true. The condition is that after dividing all the elements in the array, the sum of them all must be `less than or equal to the threshold`.

# Code

### Python3

```python
def smallestDivisor(self, nums: List[int], threshold: int) -> int:

    left, right = 1, max(nums)

    while left < right:
        divisor = (left + right) // 2

        if sum([ceil(n / divisor) for n in nums]) <= threshold: # this divisor works for us
            right = divisor
        else:
            left = divisor + 1


    return left
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * log K)$ since we are reducing our search space of size K in half (divisors) but for every divisor that we test - we also iterate the entire array of size N.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
