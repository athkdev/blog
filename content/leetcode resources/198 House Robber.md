---
title: 198 House Robber
tags:
  - medium
---

# 198. House Robber

# Intuition

Dynamic programming and divide and conquer algorithms are similar in one way: both of them require solving smaller sub-problems to solve larger problem(s). But this is how they differ: DP solves smaller _overlapping_ sub-problems (eg. fibonacci) while divide and conquer algo solves smaller _non-overlapping_ sub-problems (eg. merge sort).

### Top down

This is one of the fundamental dynamic programming problems - it’s like learning the alphabet, but for dynamic programming, it’s like “hello, world” but for DP.

We are required to calculate the maximum number of “things” that a robber can rob from a series of houses given, the robber can’t rob from adjacent houses, or else the alarm would go off.

Dynamic programming is an algorithmic paradigm that excels in solving optimization problems. Since this problem requires us to “maximize” something, this could be categorized as optimization.

In this problem, there is no special trick that would do the job. We HAVE to go through all the possible answer choices to select the best one. This is where DP comes into play. As we calculate parts of the solution, we “remember” them just in case future calculations require them. This way we don’t have to re-calculate sub-problems, we have them in a “memo” or a “table”. Yes, this is where the names _memoization_ and _tabulation_ come from.

This memo usually is implemented in the form of a dictionary or an array - both of them have constant time $O(1)$ lookup and retrieval. DP allows us to exploit this very property of arrays and dictionaries, hence reducing the calculation of subproblems to just constant time lookups.

### Bottom up

Well, as the name suggests in bottom up we collect smaller sub-problems to solve larger subproblems. Top down approach has the larger problem, that is broken down into smaller pieces and queued to be solved.

So, let's define the state. Here `dp[i]`, represents the maximum value of items robbed from house at index `i`.

The transition equation, is how the sub-problems are connected to each other. The value of total items that can be robbed from a house, is the maximum value that has been robbed in the previous houses from `0...(i-2)`, plus the current house value. Note: we have to exclude `(i-1)` because robbing in adjacent houses in not allowed (it'll trigger the alarm).

The base case is that the first two houses can be robbed individually, so we fill `dp[0] = nums[0]` and `dp[1] = nums[1]`.

# Code:

### Python3 (top down recursion + memoisation)

```python
def rob(self, nums: List[int]) -> int:
    memo = {}
    def solve(idx):
        if idx in memo: return memo[idx]
        if idx >= len(nums): return 0

        take_next                       = solve(idx+1)
        take_current_and_next_of_next   = solve(idx + 2) + nums[idx]

        memo[idx] = max(take_next, take_current_and_next_of_next)

        return memo[idx]

    return solve(0)
```

### Python3 (bottom up 1D table)

```python
def rob(self, nums: List[int]) -> int:

    if len(nums) <= 2:
        return max(nums)

    dp = [0] * len(nums)

    dp[0] = nums[0]
    dp[1] = nums[1]

    for i in range(2, len(dp)):
        dp[i] = nums[i] + max(dp[:i-1])

    return max(dp)
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(N)$. This is an example of a linear 1-dimensional DP, where we only iterate the input once. Had it been a nested iteration it could have been $O(N^2)$.
- Memory
  The memory usage is $O(N)$, since we require a dictionary to store already calculated results.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
