---
title: 703 Kth Largest Element in a Stream
tags:
    - medium
---


# 703. Kth Largest Element in a Stream

Here, the `stream` means that numbers could be added onto it.

Since we are asked K-th largest, we use a min-heap keep track of the current largest element `heap[0]`.

We don't really care when our `len(heapq)` exceeds `k` because those element are anyway too small. So since we are doing the `def add(self, val)` operation, elements are only going to get added not subtracted.

Then in our `def add(self, val)` method, we remove the smallest element when a

*Note:* `python3` by default has a min-heap implemented `heapq`

![Untitled](703%20Kth%20Largest%20Element%20in%20a%20Stream%207dcbd59567fe4bfc842fbcfcf3139d3e/Untitled.png)

 

# Code:

Python

```cpp
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.heap, self.k = nums, k 
        heapify(self.heap)

        while len(self.heap) > self.k:
            heappop(self.heap)

    def add(self, val: int) -> int:
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.k:
            heappop(self.heap)
        return self.heap[0]
        

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
```

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)