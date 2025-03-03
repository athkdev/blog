---
title: 2958 Length of Longest Subarray With at Most K Fre
tags:
  - medium
---

# 2958. Length of Longest Subarray With at Most K Frequency

This is a very common subarray technique, remember since it’s a subarray it has to be a sliding window. If it were a $subsequence$, it becomes a DP or greedy solution.

We just keep track of current elements and their increasing/decreasing frequencies in a dict/table. At every iteration, if the frequency of the current element `($freq[nums[right]]$)` goes beyond k, we start shrinking the window from the left.

# Code:

### Python

```python
class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        res = 0
        freq = dict()

        left = 0

        for right, n in enumerate(nums):
            if n in freq.keys():
                freq[n] += 1
                if freq[n] > k:
                    while freq[nums[right]] > k:
                        freq[nums[left]] -= 1
                        left += 1
            else:
                freq[n] = 1

            res = max(right - left + 1, res)

        return res
```

### Big O Analysis

- Runtime
  The runtime here is $O(N)$ since we are visiting each element once.
- Memory
  We use a frequency table so the memory order is $O(N)$

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
