---
title: Permutation Transformation
date: 2024-07-16
tags:
  - contest 1490
---

[Problem link](https://codeforces.com/contest/1490/problem/D)


The problem provides us with an array, and we are required to build a binary tree with a certain criteria. 

The criteria is that we first choose the maximum element, make that the root of a subtree, the do the same for remainder of the array.

Naturally, the basic intuition behind this is a recursive approach since - trees! So we define a recursive program, where we for every array, we find max element, and make two recursive calls on subarrays.

The ranges of these subarrays are: `0...max-1` and `max+1...len(ar)-1` where `max` is the index of the current max element and `ar` is the current subarray.

# Code

### Python3

```python
def build(arr, depth, res):
    if not arr: return depth

    # find the maximum
    # return the depth for each vertex from the root
    # call function on left half 0...maximum-1 and right half maximum+1...len(arr)-1

    m = max(arr)
    inx = arr.index(m)

    build(arr[:inx], depth+1, res)

    res.append(depth)

    build(arr[inx+1:], depth+1, res)

    return depth

tests = int(input())

res = []

for i in range(tests):
    input()
    tmp = []
    line = input().split(' ')
    ar = [int(a) for a in line]
    build(ar, 0, tmp)
    res.append(tmp)

for ans in res:
    for a in ans:
        print(a, end=" ")
    print()

```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N^2)$ since for every subarray we find the maximum element - which in itself is a linear TC.

- **Memory**

  The memory usage is $O(N)$ since we use a Python List to store results.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
