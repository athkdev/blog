---
title: 56 Merge Intervals
tags:
    - medium
---



`Tag: sort array, check if interval merge into previous interval`

We solve this problem as it states itself. There’s no catch, but the solution is pretty intuitive.

First sort the intervals array with increasing starting times. Then traverse the array one element at a time, and check if the current interval comes in between the previous interval, if so then update our `previous`  interval's end time (`ret[-1][1]`) to the `current` interval’s end time (`interval[1]`).

Hope the picture below helps visualize the problem better.

![Untitled](56%20Merge%20Intervals%20fb6e5292326447e4a7c3c43768acfe77/Untitled.png)

# Code:

### Python

```python
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key = lambda x: x[0])

        ret = [intervals[0]]

        for interval in intervals[1:]:
            if interval[0] <= ret[-1][1]:
                ret[-1][1] = max(interval[1], ret[-1][1])

            else:
                ret.append(interval)
            

        return ret

```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the array once.
    
- Memory
    
    The memory usage is `O(1)` excluding the result array `ret`
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)