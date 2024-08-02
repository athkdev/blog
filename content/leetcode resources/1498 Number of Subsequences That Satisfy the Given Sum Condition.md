---
title: 1498 Number of Sequences That Satisfy the Given Sum Condition
date: 2024-08-01
tags:
  - medium
  - two pointers
---

# Intuition

Since we want a subsequences whose minimum and maximum element add up to less than or equal to `target` - we can just `sort` the array and use two pointers on both ends shrinking toward the middle.

This way we have access to the maximum and minimum element at the same time. `A[left]` will be the minimum number, `A[right]` will be the maximum number and `A[left:right]` will be our desired subsequence.

But the thing if `A[left:right]` is our desired subarray because `A[left] + A[right] <= target`, all elements and subsequences inside this subarray will also fulfill the criteria and must be taken into consideration.

For eg.

```python

A = [3, 4, 5, 6]
target = 9

# the range 3...6 is a valid answer, but then so is [3, 4], and [3, 5] and [4, 5] and [3, 4, 5]

```

So this reduces the problem to a counting problem. The number of subsequences in a range of length `(right - left)` is

$$
    2^{right - left}
$$

OR Python-ically speaking, `pow(2, right-left, MOD)` where MOD is (10\*\*9 + 7) and not mandatory. According to Python docs, `pow(2, right-left, MOD)` is more performant than `pow(2, right-left) % MOD`.

PS: This problem is very similar to the famous [[/leetcode resources/1 Two Sum]] - take a look at that too.

# Code

### Python3

```python
def numSubseq(self, A: List[int], target: int) -> int:

    A.sort()
    '''
    we will sort, because this way we have access to the minimum and maximum elements

    if the max and min elements fulfill our conditions, the subarray A[min:max+1] must also fulfill
    '''

    left, right = 0, len(A)-1
    MOD = 10**9 + 7

    res = 0

    while left <= right:
        x = A[left] + A[right]
        if x <= target:
            res += pow(2, right - left, MOD)
            '''
            to get number of possible subsequences between a range L...R

            we can use pow(2, R-L) OR pow(2, R-L, MOD)

            2 -> because in the subsequence each element has two choices - to be picked or to be ignored
            '''
            left += 1
        elif x > target:
            right -= 1

    return res % MOD
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * log N)$ since sort the array in the beginning.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
