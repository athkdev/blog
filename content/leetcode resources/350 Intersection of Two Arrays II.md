---
title: 350 Intersection of Two Arrays II
date: 2024-07-02
tags:
  - easy
---

We are required to count and return occurences of elements that are present in both arrays.

# Code

### Python3

```python
def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:

    c1 = Counter(nums1)
    c2 = Counter(nums2)

    res = []

    for a in nums1:
        if a in c1 and a in c2:
            c1[a] -= 1
            c2[a] -= 1
            res.append(a)

            if c1[a] == 0:
                del c1[a]
            if c2[a] == 0:
                del c2[a]

    return res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.Counter` object to store frequencies.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
