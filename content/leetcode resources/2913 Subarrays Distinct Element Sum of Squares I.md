---
title: 2913 Subarrays Distinct Element Sum of Squares I
tags:
  - medium
---

The problem asks us to find calculate the sum of squares of distinct number of characters in each subarray in the input array `nums`.

To find subarrays, we can use backtracking, or simply two for loops if we do not care about the order in the way the subsets are generated.

I would strongly recommend checking out another way to generate subsets explained beautifully in this book - [Competitive Programming by Antti Laaksonen](https://cses.fi/book/book.pdf) - page 58 of the pdf, section titled “Method 2”.

Generating subsets in the way I have mentioned below is an easy way to do so, but one must be careful to use this code only in situations where the order of the subsets generated does not matter. In our case for this problem, we only care about the subsets, and count the distinct elements inside it, not it’s order.

# Code:

### Python3

```python
class Solution:
    def sumCounts(self, nums: List[int]) -> int:
        ret = 0
        for i in range(len(nums)):
            for j in range(len(nums)):
                if len(nums[i:j+1]) >= 1:
                    ret += len(set(nums[i:j+1])) ** 2

        return ret
```

### Big O Analysis

- Runtime
  The runtime complexity here is `$O (N^N)$` where N = length of list `nums` .
- Memory
  Constant space! Since we don’t use any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
