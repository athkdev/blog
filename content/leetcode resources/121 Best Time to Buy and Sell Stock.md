---
title: 121 Best Time to Buy and Sell Stock
tags:
    - medium
---


# 121. Best Time to Buy and Sell Stock

We iterate over the array and then keep updating a maximum profit variable. This variable helps us to carry whatever the maximum profit is at every point. Because every index `i` in the array `prices` is a day, one can’t go back in time to sell stocks. This simplifies the problem, we only care what the next best day to sell stocks is, and for that, we maximize our profits. We also keep in track the current `lowest` (this is when we buy) and the `maxProfit` (this is when we sell)

# Code:

### Python

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit,lowest=0,float('inf')

        for i,price in enumerate(prices):
            lowest=min(lowest,price)
            maxProfit=max(maxProfit,price-lowest)
        return maxProfit
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the array once.
    
- Memory
    
    The memory usage is `O(1)` since we are not using any extra datastructure.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)