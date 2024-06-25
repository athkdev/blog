---
title: 646 Maximum Length of Pair Chain
date: 2024-06-24
tags:
  - medium
  - dynamic programming
  - memoise
  - pairs
---

This problem does have a greedy solution, but I wanted to practice me some good 'ol DP. But please feel free to go to leetcode solutions and understand the greedy solution too (it's linear) - [link](https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/225801/proof-of-the-greedy-solution/?envType=problem-list-v2&envId=x1k8lxi5).

## Intuition

All possibilities of pair combinations can be checked as far as the condition `p1[1] < p2[0]` is met to make a chain. Then keep track of the maxchain length.

Note: remember that when we check all possibilities, it's basically a decision tree. And how do we find the longest length (a.k.a depth) of any branch in a tree? By DFS-ing and increasing result by one.
```python
    leftDepth = 1 + dfs(node.left)
    rightDepth = 1 + dfs(node.right)
```


# Code

### Python3

```python
def findLongestChain(self, pairs: List[List[int]]) -> int:
    pairs.sort(key=lambda x: x[1])

    def dfs(arr, start: int, memo):
        if start in memo: return memo[start]

        if start >= len(arr):
            return
        
        maxChain = 1    # a single element is a valid chain <- so the minimum is 1

        for end in range(start+1, len(arr)):
            a, b = arr[start]
            c, d = arr[end]
            if b < c:
                maxChain = max(maxChain, 1 + dfs(arr, end, memo))

        memo[start] = maxChain
        
        return maxChain
    
    return dfs(pairs, 0, defaultdict(int))
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N^2)$ since although memoisation works, we are atmost visiting each element twice.

- Memory

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store memoised values.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
