---
title: 2610 Convert an Array Into a 2D Array With Conditions
tags:
  - medium
---

Since every row in our result array can have only distinct elements, we need a data structure that is known for holding distinct values - **drumrolls** - a set or a hashtable. Let's use a hashtable since we need the frequencies of each elements as well. 

The number of rows in the result array would be the maximum frequency of an element.



# Code:

### Python3

```python
def findMatrix(self, nums: List[int]) -> List[List[int]]:
    c = collections.Counter(nums)

    k = max(c.values())
    A = list(c.elements())

    ret = [A[i::k] for i in range(k)]

    return ret
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N)$ since all operations we are doing are linear time - `Counter()`, `max()`, `list()`.

- Memory

  The memory usage is $O(n)$ since we use the `collections.Counter` object to store frequencies.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
