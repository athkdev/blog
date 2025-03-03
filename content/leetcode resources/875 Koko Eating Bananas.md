---
title: 875 Koko Eating Bananas
date: 2024-08-09
tags:
  - medium
---

# Intuition

A brute force approach to this is to test every possible rates.

But it would be quadratic time - so to optimize it we use binary search over the possible rates because of which we are skipping a few rates.

So we design a function `feasible` that determines if the current rate that we are testing fits our criteria or not.

If it does (i.e. `return True`) - we narrow our search space to the left side. This implies that our guessed rate was too high and we look into the left side to see if there are any smaller rates that we can find.

If it does not (i.e. `return False`) - we narrow our search space to the right side. This implies that our guessed rate was too low and we ran our of hours. So now we need to find a higher rate that would fit our criteria.

Here's a little info about binary search: since we are not required to _find_ anything (that's usually the common use case for binary search that is taught) - how do we determine the result? What are we searching for? What is the purpose of this algo in this use case?

So reading the question again, we are required to find the smallest possible rate (since Koko enjoys eating bananas) that Koko eats bananas that would help her eat all bananas within `H` hours. That means this is a minimizing/maximizing problem. We are minimizing the rate of eating bananas.

So once this algorithm is finished running, our `left` pointer would be pointing to the smallest rate.

> To understand this better, read more about [[/leetcode resources/notes/Binary Search]]

## More problems like this

[[/leetcode resources/content/1482 Minimum Number of Days to Make m Bouquets]]

[[/leetcode resources/content/1011 Capacity To Ship Packages Within D Days]]

# Code

### Python3

```python
def minEatingSpeed(self, piles: List[int], h: int) -> int:

    def feasible(rate):
        return sum(ceil(p / rate) for p in piles) <= h

    left, right = 1, max(piles)

    while left < right:
        speed = left + (right-left) // 2

        if feasible(speed):
            right = speed
        else:
            left = speed + 1

    return left
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * log K)$ since we are reducing our search space of size K in half (rates) but for every rate that we test - we also iterate the entire array of size N.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
