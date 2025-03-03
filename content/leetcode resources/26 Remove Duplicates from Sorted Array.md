---
title: 26 Remove Duplicates from Sorted Array
date: 2025-02-20
tags:
  - easy
---

Very common technique use for counting number of unique elements in a list. But there's a prerequisite that the niput array must be sorted.

Assume that the zero-th index is a unique element and initialize a `k` on it.

In a loop going from $1...len(N)$, if element at `k` is equal to element at `i`, that means no change has been detected. When vice-versa, update the `k` and override the value of `N[k]` with `N[i]`.

# Code

### Python3

```python
def removeDuplicates(self, N: List[int]) -> int:

    k = 0

    for i,x in enumerate(N[1:]):
        if N[k] == x:
            continue
        else:
            k += 1
            N[k] = x

    return k+1
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(1)$ since we dont use any extra linear datastructure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
