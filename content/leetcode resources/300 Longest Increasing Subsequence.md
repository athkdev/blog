---
title: 300 Longest Increasing Subsequence
date: 2024-06-25
tags:
  - medium
  - dynamic programming
  - classics
---

This is a classic problem people solve to teach themselves with the core understandings of DP. It's also solved using binary search in `n*log (n)` time so do check the solutions, for now I wanted to focus on the DP part.

## Intuition

Since you are required to select increasing subsequences, the question that arises is that 'should the next element be chosen or not?'. If it's smaller or equal to the current element, let's skip it else add it to our subsequence.

As you would have recognized that this makes a decision tree so the runtime would be `n!`. How do we reduce repeated computations in a decision tree? By caching i.e. memoisation.

# Code

### Python3

```python
def lengthOfLIS(self, nums: List[int]) -> int:

    def dfs(start: int, memo):
        if start in memo: return memo[start]
        if start >= len(nums):
            return 0

        res = 1

        for end in range(start+1, len(nums)):
            if nums[start] < nums[end]:
                res = max(res, 1 + dfs(end, memo))

        memo[start] = res

        return res

    memo = defaultdict(int)
    ret = 0
    for i in range(len(nums)):
        ret = max(dfs(i, memo), ret)

    return ret
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N^2)$ since we are running the `dfs()` function (which takes `N` time itself) for every element in the array.

- Memory

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store memoised values.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
