---
title: 78 Subsets
tags:
    - medium
---



We are required to create all subsets in a given array including an empty subset.  This is a classic backtracking use case. Backtracking is an algorithm where you try out all possibilities. 

Since the time complexity for backtracking problems is quite inefficient $O(2^n)$, you would notice that the input size they provide you in leetcode is pretty small.

The idea is that you go till a possible solution and then “backtrack” you way back to a starting point and then start down a different path. Notice the for loop in the below solution? That loop is the secret for this: it helps generate indices sequentially.

> Note: this problem can also be solved without using the `visited` boolean array to keep track of indices we have visited. I have included to maintain symmetry since a lot of graph  problems use the technique.
Since, for every backtracking function call, we start our `for` loop with a `cur` index, and not from the start, the visited array is not required.
If the `cur` index was absent, the visited array was crucial else it would result in a stackoverflow error.
> 

# Code:

### Python3

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        visited = [False for _ in range(n)]
        res = []

        def backtrack(ar, cur_list, cur, vis):
            res.append(cur_list.copy())

            for i in range(cur, len(ar)):
                if not vis[i]:
                    cur_list.append(ar[i])
                    vis[i] = True
                    backtrack(ar, cur_list, i + 1, vis)
                    vis[i] = False
                    cur_list.pop(len(cur_list)-1)

        backtrack(nums, [], 0, visited)

        return res
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(2^N)$ since we try out all possibilites.
    
- Memory
    
    The memory usage is  $O (N)$  since we use the visited array (optional) and the result array. If you don’t take the result array into consideration, this could be a constant memory problem.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)