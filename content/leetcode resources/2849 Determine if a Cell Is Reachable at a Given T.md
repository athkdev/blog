---
title: 2849 Determine if a Cell Is Reachable at a Given T
tags:
  - medium
---

# 2849. Determine if a Cell Is Reachable at a Given Time

Here, no need to do actual simulations - as `t` and points `s, f` can be as great as `10^9`.

`(dx,dy)` is the absolute distance of points `s and f`.

You just basically check if `dx` and `dy` are both less than or equal to `t` - this represents that the path took the shortest possible path.

There’s an edge case though - so in case `s == f`, and `t > 0`, return `False`.

# Code:

### Python

```python
class Solution:
    def isReachableAtTime(self, sx: int, sy: int, fx: int, fy: int, t: int) -> bool:
        dx,dy = abs(sx-fx),abs(sy-fy)

        '''
        dx+dy == 0 means point is (0,0)
        if t == 1, obviously (0,0) can't reach (0,1) or (1,0)
        '''
        if dx+dy==0:
            return t != 1

        # if distances are smaller than t -> definitely (fx,fy) can be travelled to by (sx,sy)
        # in t steps
        return dx<=t and dy<=t
```

### Big O Analysis

- Runtime
  There are no loops, simulations, just math - so it’s `O(1)`.
- Memory
  No linear or non-linear data structures used - so memory is `O(1)`.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
