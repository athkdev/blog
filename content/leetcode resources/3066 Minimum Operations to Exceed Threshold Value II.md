---
title: 3066 Minimum Operations to Exceed Threshold Value II
date: 2025-02-14
tags:
  - medium
---

Straight forward heap solution. A heap will give access to the minimum OR maximum element in constant time. Also, the worst case time complexity of insertion in a heap is $log (N)$ - which makes it a very efficient data structure.

Feel free to use heaps whenever you feel like, because they are highly efficient, intelligent data structures.

Here, we heapify our list such that we have the minimum element at `heap[0]`. We go till the smallest value in the heap is _just_ smaller than `k`.

> Note: the `heapq` module in Python by default produces a min-heap. For some reason, if a max-heap is expected, just multiply the values before inserting by -1.

# Code

### Python3

```python
def minOperations(self, A: List[int], k: int) -> int:

    heap = A.copy()
    heapify(heap)    # min heap    root < root+1

    cur = heap[0]
    result = 0
    while cur < k:
        x = heappop(heap)
        y = heappop(heap)

        heappush(heap, min(x, y) * 2 + max(x, y))

        cur = heap[0]
        result += 1

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(K * log N)$ since insertion in a heap is logarithmic.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store multiple and modulos.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
