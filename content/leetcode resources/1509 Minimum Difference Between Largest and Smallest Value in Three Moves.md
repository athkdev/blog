---
title: 1509 Minimum Difference Between Largest and Smallest Value in Three Moves
date: 2025-02-16
tags:
  - medium
---

Pretty cool problem. I struggled in understanding exactly how and why - 'replacing' the numbers could be interpreted as simply 'removing' them - until I re-read the problem. Our objective is to minimize the $D$ where

$$
D = max(A) - min(A)
$$

To achieve this, we can try to shrink the array in all sides, and just check which combinations of $max(A) - min(A)$, is the minimum - this is our answer.

Note:

> the regular problem is solved via sorting (so that we get access to the top 4 and bottom 4 values) - which would take $N lg N$ time. A better approach is the use the heap's `nlargest` and `nsmallest` functions which return iterables.

Note2:

> the heap functions are faster for smaller values of N, for larger values please use the `A.sort()`.

# Code

### Python3 (Heap - faster than sort)

```python
def minDifference(self, A: List[int]) -> int:

    if len(A) <= 3: return 0

    return min(b - a for a, b in zip(nsmallest(4, A), nlargest(4, A)[::-1]))
```

### Python3 (Sort)

```python
def minDifference(self, A: List[int]) -> int:

    if len(A) <= 3: return 0

    A.sort()

    return min(b - a for a, b in zip(A[:4], A[-4:]))
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N + k lg K)$ for the heap solution since heapify takes N time. The sorting solution takes $O(N lg N)$.

- **Memory**

  The memory usage is $O(N)$ since we use the zip function which returns an iterable.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
