---
title: 70 Climbing Stairs
date: 2024-07-27
tags:
  - easy
  - dp
---

# Intuition

Think of the problem this way, at every iteration we have two options - which is to take one step OR two steps. Now we need to count the total ways how `n` can be formed. This is identical to finding the number of paths between (0,0) to (m,n) in a rectangular grid where (0,0) is top-left corner and (m,n) is bottom-right corner.

This is achieved by the DFS code `dfs(m-1, n) + dfs(m, n-1)`. Similarly, instead of a recursive solution lets do a DP table approach.

Let's define the state and transition:

> State: let dp[i] be the number of ways to reach i-th element from 0.

> Transition: number of ways to reach i-th element, is the number of ways to reach (i-1)th element + number of ways to reach (i-2)th element. For this we define dp[0] and dp[1] to be 1.

If this feels very similar to a Fibonacci sequence - it's because it is :)

# Code

### Python3

```python

def climbStairs(self, n: int) -> int:

    '''
    at each step we have two choices: two take the next step, OR take the next-to-next step

    step(i+1) OR step(i+2)
    '''

    '''
    state: the number of ways that could reach i-th position from i-1 + i-2

    transition: update dp[i] such that it is a sum of dp[i-1] and dp[i-2]

    this is basically the fibonacci sequence
    '''

    dp = [0 for _ in range(n+1)]

    dp[0] = dp[1] = 1

    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting elements in the DP table of length N+1.

- **Memory**

  The memory usage is $O(N)$ due to the DP table.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
