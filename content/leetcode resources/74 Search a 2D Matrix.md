---
title: 74 Search a 2D Matrix
date: 2025-03-13
tags:
  - medium
---

One way is to binary search the row, and then binary search the `target` inside that row.

Another way is to flatten the matrix into a 1D list. If we know how many columns our original matrix has, we can obtain the 2D coordinates.

`matrix[mid // column_count][mid % column_count]` gives the element from the 2D representation - this can be used to establish a condition for the binary search.

> Note: for the second approach - the core concept is that we are trying to map a 1D coordinate into a 2D coordinate.

# Code

### Python3

#### Treat the entire matrix as a list of sorted elements

```python


```

#### Binary search the row first, and then find the target inside that row

```python
def searchMatrix(self, M: List[List[int]], target: int) -> bool:

    '''

    first: find the row containing the target

    second: binary search the row to find the element

    '''

    m, n = len(M), len(M[0])

    lo, hi = 0, m-1
    upnext = math.inf

    while lo <= hi:
        mid = (lo + hi) // 2

        if target >= M[mid][0] and target <= M[mid][-1]:
            upnext = mid
            break
        elif target < M[mid][0]:
            hi = mid-1
        elif target > M[mid][0]:
            lo = mid+1

        upnext = mid

    lo, hi = 0, n-1

    while lo <= hi:
        mid = (lo+hi) // 2

        if target == M[upnext][mid]:
            return True
        elif target < M[upnext][mid]:
            hi = mid - 1
        elif target > M[upnext][mid]:
            lo = mid + 1

    return False
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(log(m) + log(n))$ since we first binary search the row and then binary search inside that row.

- **Memory**

  The memory usage is $O(1)$ since we do not use any extra datastructure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
