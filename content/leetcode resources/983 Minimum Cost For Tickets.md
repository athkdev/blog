---
title: 983 Minimum Cost For Tickets
date: 2024-06-23
tags:
  - medium
  - dynamic programming
  - memoization
---

Since dynamic programming is just solving smaller sub problems to achieve a larger goal - recursion is a perfect starting mental model for solving such problems.

## Intuition

First off, inorder to achieve a minimum cost from each day, we need to try out all passes (daily, weekly, and monthly) to see at which step chosing which brings us to the minimum cost.
So, when we are tasked to search all possible options, it's pretty evident that it's a dynamic programming problem. This is often called a decision tree, where at every step we have a decision to chose and chosing each of them leads us to different outcomes. If you are think "Ooohh, this is just DFS" you are correct, it's literally DFS. In our case, at each step (day) the decision sample set is {daily_pass, weekly_pass, monthly_pass}.

We make all decisions and at each step return the minimum that we get from all three sources. For smaller inputs, this would be doable but as our input size increases it would be very compute-heavy since a lot of computations are getting re-computed.

We have a fix for it: just memo the outputs of sub-problems.

# Code

### Python3

```python
def mincostTickets(self, days: List[int], costs: List[int]) -> int:
    N = len(days)

    def dfs(arr: List[int], start: int, memo: Dict[int, int]) -> int:
        '''
        compute and return the minimum cost of tickets by exploring all three possibilities (daily/weekly/monthly pass) on a day
        '''

        if start in memo: return memo[start]

        if start >= N:
            return 0

        daily = costs[0] + dfs(arr, start + 1, memo)

        currentDay = start
        while currentDay < N and days[currentDay] < days[start] + 7: currentDay += 1

        weekly = costs[1] + dfs(arr, currentDay, memo)

        currentDay = start
        while currentDay < N and days[currentDay] < days[start] + 30: currentDay += 1

        monthly = costs[2] + dfs(arr, currentDay, memo)


        memo[start] = min(daily, weekly, monthly)

        return memo[start]


    return dfs(days, 0)




```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N)$ since we memoise smaller subproblems and hence they are not re-computed as the input increases.

  Let's do a little analysis as to what would be the runtime without memoisation. Since at every step, we have three choices (daily, weekly, monthly) - our decision tree computation would grow exponentially with an order of N. So that would be $O(3^N)$, which is exponential time and often considered not-very-optimal.

- Memory
  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store memoised values.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
