---
title: 523 Continuous Subarray Sum
date: 2024-06-07
tags:
  - medium
---

This problem is very satisfying to solve once you understand the underlying concept behind it.

It uses the concept of hashing and hash collision and actually leverages it's characteristics. Hash collision is also explained with the [Pigeon Hole Principle](https://en.wikipedia.org/wiki/Pigeonhole_principle) - I highly recommend reading more about it as it's a widely talked about principle in hashing, and cryptography.

You store the modulo operator results for all elements, and once a hash collision has been detected that means we have come across a `multiple` before. We simply check if the length `left - right + 1` between current index and the last known index for the same multiple is 2 (as per problem parameters), we return True else False.

# Code

### Python3

```python
def checkSubarraySum(self, nums: List[int], k: int) -> bool:
    WINDOW_LEN = 2

    remainders = collections.defaultdict(int)
    remainders[0] = -1

    cur_sum = 0
    for i,n in enumerate(nums):
        cur_sum += n

        if cur_sum % k in remainders:
            if i - remainders[cur_sum % k] >= WINDOW_LEN: return True
        else:
            remainders[cur_sum % k] = i


    return False
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- Memory

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store multiple and modulos.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
