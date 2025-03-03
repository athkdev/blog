---
title: 349 Intersection of Two Arrays
date: 2024-11-28
tags:
  - easy
---

The problem confuses the solver into thinking they need to compute the _Longest Common Subsequence_ between the two arrays.

But the intersection that they mean, is just the set intersection of the two arrays. This can be proved by looking at the first test-case.
Instead of the output being [2, 2] - the output is just [2].

# Code

### Python3

```python
def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:

    return list(set(nums1) & set(nums2))
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since converting a list to set is a linear operation.

- **Memory**

  The memory usage is $O(N)$ since we use the `set()` function to convert list to set.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
