---
title: 55 Jump Game
tags:
    - medium
---


# 55. Jump Game

`Tag: starting at the back of the array`

Here we think creatively, one thing is for sure there’s a linear relationship between all the elements. Meaning, there’s a continuity between one index and another element. If the continuity is absent (any element is 0), we can return False. 

So we start at the last index and consider it as a goal. As mentioned in the prompt, we can take at most `nums[i]` steps from `i` towards the goal. Similarly, if we iterate back, as long as any element is not zero, 

# Code:

### Python (greedy solution)

```python
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        goal = len(nums)-1

        for i in range(len(nums)-1,-1,-1):
            if i + nums[i] >= goal:
                goal = i
        

        return True if goal==0 else False
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the array once.
    
- Memory
    
    The memory usage is `O(1)`
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)