---
title: 3075 Maximize Happiness of Selected Children
tags:
  - medium
---

The problem requires us to maximize happiness of a group with `k` children. The caveat is that for every child included in the group, the happiness for all other children decrements by 1, though it caps at 0 and cannot be negative.

Thinking logically, we can see that the children order is not our concern, we can sort the input array. Since, we need to maximize happiness, by sorting we would have access to increasing or decreasing values. This is one of the helpful patterns in problems asking top `k` or bottom `k` values.

We iterate from the back of the array (highest happiness), and traverse till `(n-k)` (since we want only the top k children. We also maintain a increasing counter, that we subtract from every children - to simulate turns.

# Code:

### Python

```python
class Solution:
    def maximumHappinessSum(self, happiness: List[int], k: int) -> int:
        # to calculate the happiness at a particular time after k turns
        # happi = (k - someCounter)

        # since order does not matter, we can sort O (n * logN)

        # ar[i] = max(ar[i] - happi, 0)

        turns = 0

        happiness.sort()

        n = len(happiness)
        i = n - 1
        ret = 0
        while i >= n - k:
            ret += max(0, happiness[i] - turns)
            i -= 1
            turns += 1

        return ret
```

### Big O Analysis

- Runtime
  The runtime here is $O(N * log (N))$ since we are sorting the array.
- Memory
  Constant space!

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
