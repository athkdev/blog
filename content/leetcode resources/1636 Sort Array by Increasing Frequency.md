---
title: 1636 Sort Array by Increasing Frequency
date: 2024-07-23
tags:
  - easy
---

# Intuition

Build a frequency table of the list elements, then sort with respect to the frequency and return.

Note: For Python programmers, if two elements with same frequency comes up, then it's asked that the elements with same frequency are ordered in an descending order.

To do this, provide with a tuple to the key function instead of the regular comparator. Here, ordering will take place w.r.t `tuple[0]`, but if this is same for multiple values, then Python uses `tuple[1]` for ordering.

# Code

### Python3

```python
def frequencySort(self, nums: List[int]) -> List[int]:
    freq = collections.Counter(nums)

    return sorted(nums, key = lambda x: (freq[x], -x))
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all elements in the list of size N.

- **Memory**

  The memory usage is $O(N)$ since we are using the `sorted` function that returns a list of size N.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
