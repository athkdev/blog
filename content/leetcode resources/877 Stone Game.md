---
title: 877 Stone Game
date: 2024-06-23
tags:
  - medium
  - dynamic programming
  - memoise
  - two pointer
---

So we have to maximize Alice's moves and minimize Bob's moves. But a greedy approach won't fully suffice, simply because in a move taking the largest element between `arr[0]` AND `arr[-1]` won't guarantee that Bob gets the smallest in the next round. Meaning, we would have to consider all possible routes. Hmmm smells like DP in here.

# Code

### Python3

```python
def stoneGame(self, piles: List[int]) -> bool:

    def dfs(arr: List[int], playerTurn: int, start: int, end: int, memo):
        if (start, end) in memo: return memo[(start, end)]
        if start > end: return 0

        if start == end: return arr[start]

        stones = 0
        if playerTurn == 0:  # alice
            stones = max(piles[start] + dfs(arr, 1, start+1, end, memo), \
                            piles[end] + dfs(arr, 1, start, end-1, memo))

        else:
            stones = min(dfs(arr, 0, start+1, end, memo) -piles[start], \
                            dfs(arr, 0, start, end-1, memo) -piles[end])

        memo[(start, end)] = stones

        return stones

    return dfs(piles, 0, 0, len(piles)-1, defaultdict()) > 0
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N)$ since by memoisation we reduce the duplicate calculations and each element is visited at most once.

- Memory

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store memoised values.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
