---
title: Divide and Conquer
date: 2024-06-25
tags:
  - leetcode 69
---


Leetcode 69 uses this algorithm and shows a practical implementation, check that out too - [[/leetcode resources/69 Sqrt(x)]]

This is one of the most important techniques while solving algorithmic techniques because A) so many problems use it B) it's very efficient.

## Basic idea

It's called Binary Search because, at every step of the algorithm, the search space is divided into two parts conditionally. Then in the next step we decide where to look into `left` to `mid` OR `mid` to `right`.

Reducing our search space into half at every step defines the runtime Binary Search to be of the order of `log N`.

So we maintain three pointers - `left`, `mid` and `right`. 

- `left` keeps track of the **start** of the left partition.
- `mid` keeps track of the **end** of the left partition and `mid + 1` keeps track of the **start** of the right partition.
- `right` keeps track of the **end** of the right partition.

Depending on the condition, if our intended _to_be_searched_ element lies in the left partition - we update our `right` to `mid`. Similarly, if it's in the right partition - we update our `left` to the `mid + 1`.


## Pseudocode

```python

A = [1, 2, 6, 3, 4, 9, 7]

left, right = 0, len(A)

while left < high:
    mid = left + (right-left) // 2
    if A[mid] == to_be_searched:
        return mid
    elif to_be_searched > A[mid]:
        left = mid + 1
    elif to_be_searched < A[mid]:
        right = mid
    
    return -1

```

Note: we return -1 if we didn't find the element in the search space. But if we wanted the closest element to to_be_searched, our `left` pointer will be pointing to it. So, in that case return `A[left]`.


## Runtime and memory analysis

The runtime here is $O(log N)$ since at every step we half our search space.

The memory usage is $O(1)$ since we don't use any extra datastructure.

## On a sidenote

I highly recommend reading [Zhijun Liao's](https://leetcode.com/u/zhijun_liao/) [post](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/769703/python-clear-explanation-powerful-ultimate-binary-search-template-solved-many-problems/) on LeetCode.
He explains a series of problems on LeetCode that could be solved by understanding how and when to apply Binary Search. He also shows a wonderful template that I highly recommend following.


— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)

