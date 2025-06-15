---
title: 3423 Maximum Difference Between Adjacent Elements in a Circular Array
date: 2025-06-12
tags:
  - easy
---

Fairly straightforward, try not to directly jump into the $mod$ operator looking at the 'circular' array wording.

We can scan the array regularly and keep track of the max abs difference - but this time also check the last and the first element because in a circular setting that is the only combination which would be missed and all others will be duplicate.

# Code

### Python3

```python
class Solution:
    def maxAdjacentDistance(self, nums: List[int]) -> int:
        if not nums:
            return 0

        nums.append(nums[0])

        res = -math.inf
        for a, b in itertools.pairwise(nums):
            res = max(abs(a - b), res)

        return res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(1)$ since we do not use any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
