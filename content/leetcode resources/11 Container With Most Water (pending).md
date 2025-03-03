---
title: 11 Container With Most Water (pending)
tags:
  - medium
---

# Code:

### Python

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        i, j = 0, len(height) - 1
        a = 0
        while i < j:
            a = max(a, (j - i) * min(height[i], height[j]))
            if height[i] < height[j]:
                i += 1
            elif height[i] > height[j]:
                j -= 1
            else:
                i += 1
                j -= 1

        return a
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` as since we would be iterating the array once.
- Memory
  The memory usage is `O(1)`

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
