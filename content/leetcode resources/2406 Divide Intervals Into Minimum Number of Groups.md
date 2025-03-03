---
title: 2406 Divide Intervals Into Minimum Number of Groups
date: 2025-02-17
tags:
  - medium
---

# Code

### Python3

```python
def minGroups(self, intervals: List[List[int]]) -> int:
  I = sorted(intervals, key=lambda x:x[0])

  heap = []

  for start, end in I:
    if heap and heap[0] < start:  # implies a range has been eaten (expanded by another range)
      heapppop(heap)
    heappush(heap, end)

  return len(heap)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all intervals exactly once.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store multiple and modulos.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
