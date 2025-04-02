---
title: 3131 Find the Integer Added to Array I
date: 2025-03-26
tags:
  - easy
---

The jist of the problem is to find the difference between smallest element in array 1, and smallest element in array 0.

A) Either sort the arrays, and get the elements at index 0. -> $O(N lg N)$
B) Get the smallest elements in each with the `min()` function. -> $O(N)$

# Code

### Python3

```python
def addedInteger(self, nums1: List[int], nums2: List[int]) -> int:

    # nums1.sort();nums2.sort();return nums2[0] - nums1[0]

    smallest0, smallest1 = math.inf, math.inf

    for a,b in zip(nums1, nums2):
        smallest0 = min(smallest0, a)
        smallest1 = min(smallest1, b)

    return smallest1-smallest0
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(1)$ since we do not use any extra datastructure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
