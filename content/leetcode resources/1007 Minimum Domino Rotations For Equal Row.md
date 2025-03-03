---
title: 1007 Minimum Domino Rotations For Equal Row
date: 2025-02-14
tags:
  - medium
---

This solution I came across by [Grace Meng](https://leetcode.com/u/gracemeng/) - I think it's just genius. \

We basically check if `T[0]` and `B[0]` fits all elements of either `T` or `B`. We also check the other way by trying to fit `T[0]` and `B[0]` into `B` or `T`. \

Here's the genius:

> Since we need to check if an element can be fit into all elements of the array - we can just check `T[0]` the first element itself. Because, if all elements are same, so would be `A[0]`.

# Code

### Python3

```python
def minDominoRotations(self, T: List[int], B: List[int]) -> int:

    def f(target, A, B):
        swap = 0

        for i in range(len(A)):
            if A[i] != target:
                if B[i] != target:
                    return float('inf')
                else:
                    swap+=1

        return swap

    ans = min(
        f(T[0], T, B),    # checking T[0] is genius
        f(B[0], T, B),
        f(T[0], B, T),
        f(B[0], B, T)
    )

    return -1 if ans == float('inf') else ans
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(4N)$ since we are making 4 array passes, which could be extrapolated to linear.

- **Memory**

  The memory usage is $O(1)$.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
