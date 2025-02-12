---
title: 2364 Count Number of Bad Pairs
date: 2025-02-12
tags:
  - medium
---

Brute force solution is to use double for loops to look for all combinations. But that is a lot of redundant lookups.


A better approach is to re-arrange the equation,
$$
j - i = nums[j] - nums[i]
$$

to 

$$
nums[i] - i = nums[j] - j
$$

This way, we can store the differences of `nums[i] - i` to check how many such occurrences are found. Note: that these are the good pairs.

We need to find bad pairs, for that we can remove number of good pairs from total pairs. 


Total pairs are given by: 
$$
N * (N-1) / 2
$$

# Code

### Python3

```python
def countBadPairs(self, A: List[int]) -> int:

    count = defaultdict(int)
    good = 0

    for i, n in enumerate(A):
        key = i - n

        good += count[key]
        count[key] += 1

    tot = len(A) * (len(A) - 1) // 2

    return tot - good
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store the seen diffs.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
