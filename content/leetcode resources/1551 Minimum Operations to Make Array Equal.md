---
title: 1551 Minimum Operations to Make Array Equal
tags:
  - medium
---

We are required to calculate the minimum number of operations required to make the array equal. Now, the input array that we are given always stays the same just that the length changes as per input. Every element in the array $ar[i] = (2*i) + 1$, so the array becomes $ar = [1, 3, 5, 7, 9, ...., (2 *(n - 1)) + 1]$.

This makes it easier to point out what every element has to be if the array needs to be equal - i.e. the median of all elements.

So, we use two pointers on opposite ends of the array and reduce elements one at a time until $left < right$.

But this solution is very inefficient, $O(N^2)$. For optimizing, we can get rid of one inner nested loop by subtracting the current $ar[left]\; or\; ar[right]$ from the median and adding it to the result.

> Note: there’s also a mathematical solution that I highly encourage going over since it’s constant time and space. I haven’t posted that here cuz it would require larger explanation and it’s less programming implementation. Feel free to go over this [leetcode solution](https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/1145082/simple-o-1-1-liner-easy-solution-w-explanation-beats-100).

# Code:

### Python

```python
class Solution:
    def minOperations(self, n: int) -> int:
        ar = []
        for i in range(n): ar.append((2 * i) + 1)

				# calculate median - this is what every element in array needs to be
        median = ar[0]
        if n % 2 == 0:  median = (ar[n//2] + ar[(n//2)-1]) // 2
        else:           median = ar[n//2]

        left, right = 0, n - 1

        res = 0
        while left <= right:
						# optimization - instead of a while loop to simulate reducing elements, do subtraction
            res += median - ar[left]
            ar[left] = median - ar[left]
            ar[right] = ar[right] - median
            left += 1
            right -= 1

        return res
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(N)$ .
- Memory
  The memory usage is $O(N)$ since we create an input space array of size N.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
