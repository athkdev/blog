---
title: 518 Coin Change II
date: 2024-06-23
tags:
  - medium
  - dynamic programming
---

This problem is the sequel problem to [[/leetcode resources/322 Coin Change]] and there's little difference between the two problems' requirements. The first one needed us to minimize the number of coins we could use to make up `amount`.

In here, we need to compute the number of different ways `amount` can be made from the given coins.

# Code

### Python3

```python
def change(self, amount: int, coins: List[int]) -> int:

    def dfs(balance: int, start: int, memo: Dict[int, int]):
        if (start, balance) in memo: return memo[(start, balance)]
        if balance == 0: return 1
        if balance < 0 or start == len(coins): return 0

        include = dfs(balance - coins[start], start, memo)
        exclude = dfs(balance, start + 1, memo)
        
        memo[(start, balance)] = include + exclude

        return memo[(start, balance)]

    return dfs(amount, 0, defaultdict(int))
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N)$ since we are memoising, needing to visit all elements only once.

- Memory

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store the memoised values.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
