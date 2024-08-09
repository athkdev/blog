---
title: 1508 Range Sum of Sorted Subarray Sums
date: 2024-08-09
tags:
  - medium
---

# Intuition

We need all possible subarrays of this array, add them all to a list, then extract elements on the basis of a range from this list, add them up and return - pretty straightforward.

This code generates all possible subarrays in an array of length n. Remember, subarrays are different from subsets which are different from subsequences.
```python
for i in range(n):
    for j in range(i, n):
        arr[i:j+1]    # <-- current subarray
```

In the below code we are computing the running sum in the range `left..right` - but we are also MOD-ing it with $10^9 + 7$.

Well because since the answers could be very huge, the question author asked us to do this.

Here's how it works:
```python
N mod X = [(A mod X) + (B mod X) + (C mod X)] mod X

where N = A + B + C
```

Usually this is done just so the author can verify our answers with theirs without actually dealing with large numbers since that's computationally heavy. Is there a change that our actual answer is incorrect but MOD-ing it turns it into a correct answer? Well, yes. But according to theory of cryptography and the Pigeonhole Principle - that's rare (but possible). Since we are not just verifying a single test cases but hundreds of them - it's near impossible for all test cases to just 'coincidentally' pass. Hence, this works.

# Code

### Python3

```python
class Solution:
    MOD = 10**9 + 7

    def rangeSum(self, A: List[int], n: int, left: int, right: int) -> int:

        sums = []
        
        for i in range(n):
            for j in range(i, n):
                '''
                enumerate all possible subarrays for any array A
                '''
                sums.append(sum(A[i:j+1]))

        sums.sort()

        res = 0
        for i in range(left-1, right):
            res = (res + sums[i]) % self.MOD

        return res % self.MOD
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N^2)$ since generating all subarrays is a quadratic operation.

- **Memory**

  The memory usage is $O(N)$ since we are using a list to store subarray sums.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
