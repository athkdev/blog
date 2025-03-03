---
title: 1496 Path Crossing
tags:
  - medium
---

This is a problem that involves just simulating what’s stated in the problem. There’s no hidden trick, or optimization - simply simulate a point moving from $(0,0)$ to the directions given in the string. We use a set to store all visited points starting with $(0,0)$. If we come across any point that’s already visited, we return True, else False.

# Code:

### Python

```python
class Solution:
    def isPathCrossing(self, path: str) -> bool:
        vis = set()

        dx, dy = 0, 0
        vis.add((dx,dy))
        for di in path:
            if di == 'N':   dy += 1
            elif di == 'E': dx -= 1
            elif di == 'W': dx += 1
            elif di == 'S': dy -= 1

            if (dx, dy) in vis: return True
            else: vis.add((dx,dy))


        return False
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(n)$ as since we would be visiting all characters in the string at least once.
- Memory
  The memory usage is $O(n)$ since we are using a set to store visited points.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
