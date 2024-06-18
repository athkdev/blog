---
title: 826 Most Profit Assigning Work
date: 2024-06-18
tags:
  - medium
  - dynamic programming
  - prefix array
---

The problem comes off as pretty difficult at the start but the idea is very straight-forward, we just generate a lookup table for all difficulties.

We do this because the abilities of the workers can be anything from 0 to `max(difficulty)` where difficulty is the array given to us containing all the difficulty to profit mappings.

Since it's told in the description that if any ability of a worker does not have a corresponding difficulty in the input, then to consider the smallest closest difficulty.

For eg.
| Difficulty | Profit  |
| -------- | ------- |
| 3 | 20 |
| 5 | 35     |
| 8    |  45   |


Then a worker with ability of 3 will bring a profit of 20, and a worker with ability of 4 will **also** bring a profit of 20.

A worker with ability of 2 will bring 0 profit.

# Code:

### Python3

```python
def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
    maxDiff = max(difficulty)

    profitLookup = [0] * (maxDiff + 1)

    for i in range(len(difficulty)):
        profitLookup[difficulty[i]] = max(profitLookup[difficulty[i]], profit[i])
    
    for i in range(1, maxDiff + 1):
        profitLookup[i] = max(profitLookup[i], profitLookup[i-1])
    
    maxProfit = 0
    for ability in worker:
        maxProfit += profitLookup[min(maxDiff, ability)]
    
    return maxProfit
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(maxDiff)$ where `maxDiff = max(difficulty)`

- Memory
  The memory usage is $O(N)$ since we use the `profitLookup` array to store cumulative profits for all difficulties up until maxDiff.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
