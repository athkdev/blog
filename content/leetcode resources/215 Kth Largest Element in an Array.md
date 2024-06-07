---
title: 215 Kth Largest Element in an Array
tags:
    - medium
---



As we have seen earlier, questions that require you the k-th minimum/maximum/largest/smallest are a great way to exercise your heap datastructure skills.

A heap is a data structure that rearranges itself after each insertion or deletion in such a way that you can always get the maximum or minimum element from a dataset in constant time.

In this scenario we need a min heap, where the root is the minimum value node. So, if we maintain k largest elements in it, the root will be the k-th largest element.

By maintaining k elements, I mean that after insertion if the $heap.size()$ exceeds k, just $heap.poll()$ - this will remove the current root.

# Code:

### Java

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> kTh = new PriorityQueue<>();

        for (int a : nums) {
            kTh.add(a);
            if (kTh.size() > k) kTh.poll();
        }
        
        return kTh.peek();
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O (n * log(n))$ as since the heap insertion and deletion takes $O (log(n))$ time and we would do that for all the $n$ elements in the array.
    
- Memory
    
    The memory usage is $O (k)$ since we are maintaining a priority queue (heap) of k elements.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)