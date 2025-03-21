---
title: 2661 First Completely Painted Row or Column
date: 2025-03-20
tags:
  - medium
---

The problem has quite obvious invariants - `arr` and `mat` has unique elements. Although, they have not explicitly mentioned it, but the way problem is framed, it can be assumed that all elements that exist in `arr` are in `mat`.

We need to detect whenever a row or column is fully painted and return the smallest index from `arr` that achieves this. Another way to frame this problem is: for every row and column in `mat` there will be a single index from `arr` that completely paints it.

We need to collect all of them, and then return the smallest of them all.

# Code

### Python3

```python
def firstCompleteIndex(self, arr: List[int], mat: List[List[int]]) -> int:

    '''
    invariant:
    - arr has unique elements

    algorithm:
    - iterate over mat (m*n) and check paint the current mat[i][j]
    - once you have past m or n elements, start checking
    - need to track backwards?

    questions:
    1. how to detect when a row or column is filled?

    '''

    m, n = len(mat), len(mat[0])
    idx = defaultdict(int)

    for i, n in enumerate(arr):
        idx[n] = i

    rows, cols = [], []

    res = math.inf

    for row in mat:
        cur = -math.inf
        for a in row:
            cur = max(cur, idx[a])

        res = min(res, cur)

    for col in zip(*mat):
        cur = -math.inf
        for a in col:
            cur = max(cur, idx[a])

        res = min(res, cur)

    return res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N^2)$ since we visit all elements in the matrix.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store multiple and modulos.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
