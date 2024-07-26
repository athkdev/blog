---
title: 912 Sort An Array
date: 2024-07-25
tags:
  - medium
  - sorting
---

# Intuition

Problem wants us to solve without using any library sorting functions such as `arr.sort()` in Python or `Arrays.sort(arr)` in Java.

So let's implement a Merge Sort - since it fits the description of a `n * log (n)` algorithm. Remember, bubble sort, insertion sort take quadratic $n^2$ time, we need something faster.

Please refer my breaking down and analysis of how [[/notes/Merge Sort]] works.


# Code

### Python3

```python
def sortArray(self, nums: List[int]) -> List[int]:
    
    def merge(A, B):
        R = [0 for _ in range(len(A) + len(B))]

        x, y, z = 0, 0, 0

        while x < len(A) and y < len(B):
            if A[x] <= B[y]:
                R[z] = A[x]
                x += 1
            else:
                R[z] = B[y]
                y += 1
            z += 1
        
        while x < len(A):
            R[z] = A[x]
            x += 1; z += 1
         
        while y < len(B):
            R[z] = B[y]
            y += 1; z += 1
        

        return R[:]
        

    def mergeSort(ar):
        if len(ar) <= 1: return ar

        mid = len(ar)//2

        left = mergeSort(ar[0:mid])
        right = mergeSort(ar[mid:len(ar)])

        return merge(left, right)

    return mergeSort(nums)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * log N)$ since we are using Merge Sort.

- **Memory**

  The memory usage is $O(N)$ since we are using Merge Sort :)

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
