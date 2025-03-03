---
title: 1011 Capacity To Ship Packages Within D Days
date: 2024-08-09
tags:
  - medium
---

# Intuition

A brute force approach to this is to test every possible capacity and track the lowest one.

We can optimize this by having a search space of all possible capacities and then reducing the capacities in half at every iteration so it the complexity of searching drops down to `O(log N)`.

But when we do this, for every capacity that we are guessing, we would require to iterate over the entire array to see if this `new` capacity works.

We have a `load_ship` function that takes in a possible capacity and simulates the process of loading the ship - if it's works we look in the left search space to see if we can go any smaller. Else if our capacity is to small to load the ship, we look into the right space - implying that we are increasing our capacity.

> To understand this better, read more about [[/leetcode resources/notes/Binary Search]]

## More problems like this

[[/leetcode resources/content/1482 Minimum Number of Days to Make m Bouquets]]

[[/leetcode resources/content/875 Koko Eating Bananas]]

# Code

### Python3

```python
def shipWithinDays(self, weights: List[int], D: int) -> int:

    def load_ship(capacity: int):
        '''
        simulate loading the ship

        return True if we can load the ship - else False
        '''

        days_required = 1
        loaded = 0

        for w in weights:
            loaded += w

            if loaded > capacity:
                loaded = w
                days_required += 1

        return days_required <= D


    left, right = max(weights), sum(weights)

    while left < right:
        cur_capacity = left + (right - left) // 2

        if load_ship(cur_capacity):
            right = cur_capacity
        else:
            left = cur_capacity + 1

        return left
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * log K)$ since we are reducing our search space of size K in half (capacities) but for every capacity that we test - we also iterate the entire array of size N.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
