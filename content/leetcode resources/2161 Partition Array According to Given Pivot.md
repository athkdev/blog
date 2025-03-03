---
title: 2161 Partition Array According to Given Pivot
date: 2025-03-03
tags:
  - medium
---

Since the problem says that we need to keep the relative order of the elements as per the input - sorting is not an option. If this was not the case, just sorting was a valid answer.

For the two pointer solution, the idea is that we have a result array of the same length of input, and place the elements greedily at the index that seems best. For every iteration, we start from the left and from the right, therefore looking at complementary elements `(i)` and `(len(A) - i - 1)`.

For the three array solution, do a one pass and keep track of elements that are smaller, greater and equal to the pivot in separate lists. Finally, just extend them to the result array and return the result array.



# Code

### Python3 (two pointers)

```python
def pivotArray(self, A: List[int], pivot: int) -> List[int]:

    N = len(A)

    result = [0] * len(A)
    left, right = 0, len(A)-1

    for i, j in zip(range(N), range(N-1, -1, -1)):
        if A[i] < pivot:
            result[left] = A[i]
            left += 1

        if A[j] > pivot:
            result[right] = A[j]
            right -= 1

    while left <= right:
        result[left] = pivot
        left += 1

    return result
```

### Python3 (using three lists)

```python
def pivotArray(self, N: List[int], P: int) -> List[int]:

    lt, eq, gt = [], [], []  # O(N) space

    for n in N:
        if n < P:
            lt.append(n)
        elif n == P:
            eq.append(n)
        else:
            gt.append(n)

    res = []
    res.extend(lt)
    res.extend(eq)
    res.extend(gt)

    return res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(N)$ since have the three arrays. Could be $O(1)$ for the two pointer solution if you do not count the result array.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
