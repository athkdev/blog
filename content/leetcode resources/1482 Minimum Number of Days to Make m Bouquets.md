---
title: 1482 Minimum Number of Days to Make m Bouquets
date: 2024-08-09
tags:
  - medium
  - binary search
---

# Intuition

A brute force approach to this is to test every possible day to build `m` bouquets and track the lowest one.

But we can optimize this process by iterating over the possible days and binary searching through it. This way we would test every possible day to build `m` bouquets, and if we are able to build them, then we reduce our search space into the left side. Meaning, we are looking if we can build the bouquets in any less days.

Similarly, if we are unable to build the bouquets that means we are underplaying the days and need to increase it - so look in the right search space.

> To understand this better, read more about [[/leetcode resources/notes/Binary Search]]

## More problems like this

[[/leetcode resources/content/875 Koko Eating Bananas]]

[[/leetcode resources/content/1011 Capacity To Ship Packages Within D Days]]

# Code

### Python3

```python
def minDays(self, bloomDay: List[int], m: int, k: int) -> int:

    '''
    search space = minimum number of days to build m bouquets

    5 days enough?

    '''

    def feasible(curDay):
        bouquets, flowers = 0, 0

        for day in bloomDay:
            if day > curDay:
                flowers = 0
            else:
                bouquets += (flowers + 1) // k   # simulate building bouquets
                flowers = (flowers + 1) % k   # once a bouqet is made, update flowers to remaining flowers since flowers cannot be reused

        return bouquets >= m

    left, right = 1, max(bloomDay)

    if len(bloomDay) < m * k:
        return -1

    while left < right:
        mid = left + (right - left) // 2

        if feasible(mid):
            right = mid
        else:
            left = mid + 1

    return left
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * log K)$ since we are reducing our search space of size K in half (days) but for every day that we test - we also iterate the entire array (flowers) of size N.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
