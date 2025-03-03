---
title: 703 Kth Largest Element in a Stream
tags:
  - medium
---

# Intuition

Here, the `stream` means that numbers could be added onto it.

Since we are asked K-th largest, we use a min-heap keep track of the current largest element `heap[0]`.

We don't really care when our `len(heapq)` exceeds `k` because those element are anyway too small. So since we are doing the `def add(self, val)` operation, elements are only going to get added not subtracted.

Then in our `def add(self, val)` method, we remove the smallest element when a

> PS: `python3` by default has a min-heap implemented `heapq`

# Code:

### Python

```python
class KthLargest:

    def __init__(self, k: int, nums: List[int]):     # overall takes O(N)
        self.heap, self.k = nums, k
        heapify(self.heap)    # linear operation

        while len(self.heap) > self.k:
            heappop(self.heap)

    def add(self, val: int) -> int:     # overall takes O(log N)
        heapq.heappush(self.heap, val)    # logarithmic time

        if len(self.heap) > self.k:
            heappop(self.heap)    # logarithic time

        return self.heap[0]     # smallest element in the heap a.k.a k-th largest element in current stream


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since `heapify` takes linear time, the `add` function takes $0(log N)$ time.:w

- **Memory**

  The memory usage is $O(K)$ since we are maintaining a heap of K elements.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
