---
title: Dutch National Flag
date: 2024-06-12
tags:
  - leetcode 75
---

Leetcode 75 uses this algorithm and shows a practical implementation, check that out too - [[/leetcode resources/75 Sort Colors]]

The idea of this algorithm is to sort all low outliers and high outliers to either sides. Hence this is not a regular sorting algorithm, just a special case one since we are required to know the `low` and `high` beforehand.

## Basic idea

So we maintain three pointers - `low`, `mid` and `high`.

- Everything left of `low` (inclusive) are supposed to be the low values
- Everything right of `high` (inclusive) are supposed to be the high values
- Everything between `low` and `mid` (mid inclusive) are supposed to be the mid values (this means values that we have seen and are neither low nor high)
- Everything between `mid` and `high` (mid exclusive) are supposed to be the unknown values (yet to be classified)

This means that `mid` always points to the first element of the unknown subset i.e. between `mid` to `high`.

## Pseudocode

```python

A = [1, 2, 1, 0, 0, 2, 1, 0]

low = 0
mid = 0
high = N - 1

while mid < high:
    if A[mid] == 0:
        swap(A[mid], A[low])
        mid++
        low++
    elif A[mid] == 2:
        swap(A[mid], A[high])
        high--
    else:
        mid++

print(A)
# [0, 0, 0, 1, 1, 1, 2, 2]

```

## Runtime and memory analysis

The runtime here is $O(N)$ since we are doing only one pass over the input array.

The memory usage is $O(1)$ since we don't use any extra datastructure and change array in-place.

## On a sidenote

I highly recommend watching [CodeSmart's](https://www.youtube.com/@codesmart760) youtube [video](https://www.youtube.com/watch?v=9pdkbqGwUhs) where they explain the above algorithm with playing cards - it's so effective.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
