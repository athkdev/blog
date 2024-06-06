---
title: 198 House Robber
tags:
    - medium
---


# 198. House Robber

This is one of the fundamental dynamic programming problems - it’s like learning the alphabet, but for dynamic programming, it’s like “hello, world” but for DP.

We are required to calculate the maximum number of “things” that a robber can rob from a series of houses given, the robber can’t rob from adjacent houses, or else the alarm would go off.

Dynamic programming is an algorithmic paradigm that excels in solving optimization problems. Since this problem requires us to “maximize” something, this could be categorized as optimization.

In this problem, there is no special trick that would do the job. We HAVE to go through all the possible answer choices to select the best one. This is where DP comes into play. As we calculate parts of the solution, we “remember” them just in case future calculations require them. This way we don’t have to re-calculate sub-problems, we have them in a “memo” or a “table”. Yes, this is where the names *memoization* and *tabulation* come from.

This memo usually is implemented in the form of a dictionary or an array - both of them have constant time $O(1)$ lookup and retrieval. DP allows us to exploit this very property of arrays and dictionaries, hence reducing the calculation of subproblems to just constant time lookups.

# Code:

### Python3

```python
class Solution:
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

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$. This is an example of a linear 1-dimensional DP, where we only iterate the input once. Had it been a nested iteration it could have been $O(N^2)$.
    
- Memory
    
    The memory usage is $O(N)$, since we require a dictionary to store already calculated results.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)