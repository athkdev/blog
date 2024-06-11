---
title: 1122 Relative Sort Array
tags:
  - easy 
---

Here, we can leverage a hashtable to store the positions of the element in `arr2` by their indices. This is done so while traversing `arr1` we have the ordering/index of a number at near constant time.


Once we have the indices, we just feed that data to a sort comparator function, which does the sorting for us.

```
NOTE: For the numbers in `arr1` that aren't in `arr2`, we give a sort comparator value of `len(arr1) + x`, so it's out of bounds and is positioned after all coinciding numbers.
```



# Code:

### Python3

```python
def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
    positions = {v: k for k, v in enumerate(arr2)}

    return sorted(arr1, key=lambda x: positions.get(x, len(arr1) + x))
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N * log (N) )$ since we are sorting an array.

- Memory

  The memory usage is $O(N)$ since we use the `dict` hashtable to store positions.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
