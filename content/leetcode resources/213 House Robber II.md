---
title: 213 House Robber II
tags:
    - medium
---



The constraint that they have inserted into this one just requires us to tweak the input arrays. We can just use the solution from House Robber, just change its inputs cleverly.

Since, the houses are now circular, we can’t take the first and the last house at the same time, because they are next to each other and it would sound an alarm.

We just calculate the scenario that we are skipping the first house, and a different scenario where we skip the last house. But wait, what about the scenario that the input array given to use was only one house. In this case, it would return 0 because we skipped this in both scenarios. For that, we add `nums[0]` to the max function as well.

# Code:

### Python3

```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        def dfs(i, memo, nums):
            if i in memo: return memo[i]
            if i >= len(nums): return 0

            include = nums[i] + dfs(i+2, memo, nums)
            exclude = dfs(i+1, memo, nums)

            memo[i] = max(include, exclude)

            return memo[i]
        
        ret1 = dfs(0, dict(), nums[:-1])
        ret2 = dfs(0, dict(), nums[1:])
        return max(ret1, ret2, nums[0])
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$. This is an example of a linear 1-dimensional DP, where we only iterate the input once. Had it been a nested iteration it could have been $O(N^2)$.
    
- Memory
    
    The memory usage is $O(N)$, since we require a dictionary to store previously calculated results.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)