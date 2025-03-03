---
title: 1380 Lucky Numbers in a Matrix
date: 2024-07-21
tags:
  - easy
  - matrix
---

# Intuition

We pre-compute all column values and store it in a set for near constant time lookup. Then calculate the minimum element in every row and check if it's in the column set.

This code works only on the assumption that there could not exist more than 1 lucky number in the matrix. [See proof here](https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/comments/2525061).

Had there been a case of having multiple lucky numbers, we would have needed a hashmap instead of a set to also verify corresponding row and column indices.

# Code

### Python3

```python
def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:

    colMax = set(map(max, zip(*matrix)))
    '''
    calculate the maximum in each column

    zip(*matrix) computes the matrix transpose -> *matrix unpacks the 2D list and zip, well, zips the elements in the unpacked list sequentially

    map(max, zip(*matrix)) computes the max value in every column (column, not row since we transposed our matrix)

    set makes the lookup near constant time
    '''

    for row in matrix:
        rowMin = min(row)
        if rowMin in colMax: [rowMin]

    return []
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(R * C)$ since we use a `min` function for every row.

- **Memory**

  The memory usage is $O(N)$ since we use a set to store column maxes.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
