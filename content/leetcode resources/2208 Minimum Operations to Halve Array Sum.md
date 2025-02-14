---
title: 2208 Minimum Operations to Halve Array Sum
date: 2025-02-13
tags:
  - medium
---

# Code

### Python3

```python
def halveArray(self, A: List[int]) -> int:

    S = sum(A)
    H = S / 2

    heap = [-n for n in A]   # max heap
    heapq.heapify(heap)

    result = 0
    while S > H:
        cur = -heappop(heap)

        heappush(heap, -cur / 2)

        S -= (cur / 2)

        result += 1

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where N is $sum(nums) - [sum(nums) / 2]$.

- **Memory**

  The memory usage is $O(N)$ since we use a heap.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
