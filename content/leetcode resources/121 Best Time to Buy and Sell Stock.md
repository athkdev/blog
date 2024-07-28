---
title: 121 Best Time to Buy and Sell Stock
tags:
    - medium
---



We iterate over the array and then keep updating a maximum profit variable. This variable helps us to carry whatever the maximum profit is at every point. Because every index `i` in the array `prices` is a day, one can’t go back in time to sell stocks. This simplifies the problem, we only care what the next best day to sell stocks is, and for that, we maximize our profits. We also keep in track the current `lowest` (this is when we buy) and the `maxProfit` (this is when we sell)

# Code:

### Python

```python
def maxProfit(self, prices: List[int]) -> int:

    minBuy = 10**5
    profit = -10**5

    for p in prices:        
        '''
        instead of keeping track of buy and sell

        make use of properties of a for loop -> it ways moves forward

        with that in mind, keep track of current minimum buying rate -> update this minimum if a new minimum is found

        also update the current profit -> if a new better profit is found
        '''
        minBuy = min(p, minBuy)
        profit = max(profit, p - minBuy)
    
    return max(profit, 0)
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the array once.
    
- Memory
    
    The memory usage is `O(1)` since we are not using any extra datastructure.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
