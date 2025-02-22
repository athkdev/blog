---
title: 2779 Maximum Beauty of an Array After Applying Operation
date: 2025-02-22
tags:
  - medium
---

Our goal is to pick a number that we can agree on - that is the maximum occurrences in the array, but we can only convert an element to this number if we have the bandwidth i.e. if the new number is less than $A[i] + k$ and greater than $A[i] - k$ - for all `i`.

Sounds complex - truly, I spent a good 30 minutes before giving in and looking at solutions.

We can sort the array, and then slide a (variable) window across it. Why though? Because in a sorted array, the range of any window i.e. smallest (`A[start]`) and largest (`A[end]`) elements are going to encapsulate all elements between that range. Try to maintain the difference between extreme elements _less than OR equal to k_. When it exceeds k, shrink the window.

So, we get this information in linear time, that's pretty great (obv given that we sort which is linearithmic time, but still better than quadratic).

**what is this `A[end] - A[start] > k * 2`**
The most crucial link of the problem. We maintain that the window length should never exceed $k * 2$. Remember that for every element, we can replace it with anything between `A[i] + k` and `A[i] - k`.

# Code

### Python3

```python
def maximumBeauty(self, A: List[int], k: int) -> int:

    '''
    variable sliding window

    where keep on increasing the window if the range permits,
    else shrink it.

    prerequisite: sort
    '''

    A.sort()

    start = 0
    for end, _ in enumerate(A):
        if A[end] - A[start] > k * 2:
            start += 1

    return end - start + 1
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N lg N)$ since we sort the input.

- **Memory**

  The memory usage is $O(1)$ since we do not use any extra datastructure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
