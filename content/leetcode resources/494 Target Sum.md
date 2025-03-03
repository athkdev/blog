---
title: 494 Target Sum
date: 2024-09-14
tags:
  - medium
  - dp
---

# Intuition

One can see that this problem is of the type "include - exclude" OR "knapsack" dynamic programming. The "include - exclude" OR "knapsack" are problems where we need to enumerate all possible possibilities by choosing some elements or not.

So, this boils the problem down to a decision tree. If you think about it, to get to our result i.e. the number of different subsequences can be made from our array whose sum is equal to `target` - we must check all possible subsequences. Well, this is called a decision tree.

A decision tree, the program execution has an option to do two things for each recursive call - either `include` the current element and see if it generates the correct output OR `exclude` the current element and check the same.

For each recursive, if we have two choices - meaning the program will grow the decision tree with two children at a time. This is a runtime of $O(2^N)$. There are indeed a lot of repeated calculations done, so we can memoise them to bring down the complexity so that each subsequence is atmost calculated once (or constant time looked up multiple times).

# Code

### Python3

```python
def findTargetSumWays(self, nums: List[int], target: int) -> int:

    @functools.cache
    def dfs(i, cur_sum):
        if i == len(nums):
            return 1 if cur_sum == target else 0

        '''
        build a decision tree where it branches into a reality where current element is excluded or included
        '''

        include = dfs(i+1, cur_sum + nums[i])
        exclude = dfs(i+1, cur_sum - nums[i])

        return include + exclude

    return dfs(0, 0)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we use caching/memoising to store sub-decision trees that are calculated more than once. Without caching, it's a $O(2^N)$ solution.

- **Memory**

  The memory usage is $O(N)$ since we are using recursion (inherent call stack) + memoising (some dictionary).

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
