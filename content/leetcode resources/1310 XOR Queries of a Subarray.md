---
title: 1310 XOR Queries of a Subarray
date: 2024-09-12
tags:
  - medium
  - xor
---

This problem is quite crucial in the journey of someone studying data structures and algorithms. It is because it uses two important concepts i.e. prefix sum and the XOR operation.

Firstly, whenever you need a constant time window sum in an array, think of a `prefix sum array`. A prefix sum array is calculated by adding all the previous elements until `i-1` and storing the current cumulative sum at `prefix_sum[i]`.

Second, an XOR operation is reversible. Learn more about XOR here - [[/leetcode resources/2433 Find the Original Array of Prefix Xor]]

# Code

### Python3

```python
def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:

    result = [0] * len(queries)

    # create a prefix array
    prefix = [0] * (len(arr) + 1)

    # prepare prefix XOR array
    for i in range(1, len(arr) + 1):
        prefix[i] = prefix[i-1] ^ arr[i-1]

    # populate the result by quering the prefix array
    for i, (l, r) in enumerate(queries):
        result[i] = prefix[r+1] ^ prefix[l]

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(N)$ since we use are using a list to store prefix XORs and the result.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
