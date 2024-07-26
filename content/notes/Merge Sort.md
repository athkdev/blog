---
title: Merge Sort
date: 2024-07-25
tags:
  - leetcode 912
---


Leetcode 912 uses this algorithm and shows a practical implementation, check that out too - [[/leetcode resources/912 Sort An Array]]

The merge sort algorithm is one of the most important algorithms to study in terms of understanding "programming". It's important as in, the concepts `(recursion, divide and conquer, sorting)` that one learns while implementing this algorithm is widely used in current programming scenarios - even LeetCode.


## Basic idea

Let's go from the basics, so Merge Sort is a [[/notes/Divide and Conquer]] algorithm. That means, we divide the algorithm into smaller subproblems - then gather the results of these subproblems to generate our final result. Don't get confused with Dynamic Programming. Remember, DP involves breaking down input in to smaller `overlapping` subproblems when Divide and Conquer is breaking down input into smaller `non-overlapping` subproblems. Also, DP is an optimization technique, divide and conquer not so much.


##### Algorithm:
> (1) Break down the input array into two smaller subarrays, and then break them down into two even smaller subarrays, and then break down into two even smaller subarrays, and then break down into even smaller subarrays, and then break... hahaha you get it. Ik, it gives recursion.

> (2) Once every smaller subarray has a single element, merge these 'single' elements into one large array by checking which comparing two elements at a time.

> (3) This fully formed array will now be sorted.

Note: Merge Sort creates a new array that is sorted, if you want in-place sorting for an array - you might want to check out QuickSort.

##### About the code:

We basically need two functions - one to break down the arrays into smaller subarrays, and one to join these atomic subarrays into one larger final array.

```python
divide(array)   # recursively break down a array into two arrays split from the middle, and then pass them to the merge(A, B) function

merge(A, B)     # recursively merge two subarrays A and B, and return a larger array R
```


## Pseudocode

```python

A = [1, 2, 6, 3, 4, 9, 7]


def mergeSort(ar: List[int]) -> List[int]: 
    '''
    driver function 
    '''
    return divide(ar)

def divide(ar: List[int]) -> List[int]:
    '''
    break down ar into two subarrays split from the middle
    '''
    if len(ar) <= 1: return ar

    mid = len(ar) // 2

    left = divide(ar[0:mid])
    right = divide(ar[mid:len(ar)])

    return merge(left, right)

def merge(A: List[int], B: List[int]) -> List[int]:
    '''
    insert elements from A and B into R by comparing two values at a time
    '''
    R = [0 for _ in range(len(A)+len(B))]   # R = result list

    x = 0   # iterator index for list A
    y = 0   # iterator index for list B
    z = 0   # iterator index for list R

    while x < len(A) and y < len(B):
        '''
        Simultaneously, iterate over A and B inserting A[x] or B[y] into R
        '''
        if A[x] <= B[y]:
            R[z] = A[x]
            x += 1
        else:
            R[z] = B[y]
            y += 1
        z += 1


    while x < len(A):
        '''
        Scenario 1: because list B was exhausted of all elements, now there are some elements remaining in list A
        '''
        R[z] = A[x]
        x += 1; z += 1

    while y < len(B):
        '''
        Scenario 2: because list A was exhausted of all elements, now there are some elements remaining in list B
        '''
        R[z] = B[y]
        y += 1; z += 1

    return R

```



## Runtime and memory analysis

We are breaking down input by half at every step (log N), but this happens for N times in an array with N elements. So the runtime becomes $O (N * logN)$.

The memory usage is $O(N)$, because remember that in the merge function, we generate new array and that is returned.

## On a sidenote

I highly recommend reading [Zhijun Liao's](https://leetcode.com/u/zhijun_liao/) [post](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/769703/python-clear-explanation-powerful-ultimate-binary-search-template-solved-many-problems/) on LeetCode.
He explains a series of problems on LeetCode that could be solved by understanding how and when to apply Binary Search. He also shows a wonderful template that I highly recommend following.


— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)

