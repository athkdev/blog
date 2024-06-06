---
title: 1046 Last Stone Weight
tags:
    - medium
---


# 1046. Last Stone Weight

USE A MAX HEAP. Since Python doesn't support max heaps fully (they do have a few private methods for max heaps, they are very unstable and are recommended not to use - it's not even in their documentation). So I used Java `PriorityQueue<Integer>`

Add all elements to the queue, and they will be sorted in a ascending manner. Then `maxHeap.poll()` the first two elements, check the conditions and `maxHeap.offer()` them to the queue.

Do this until `maxHeap.size() > 1`

![Untitled](1046%20Last%20Stone%20Weight%20f4be4ae7d7c44e1382fc80097fc28c6d/Untitled.png)

 

# Code:

Java

```cpp
class Solution {
    public int lastStoneWeight(int[] stones) {
       PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a,b) -> Integer.compare(b,a)); 

        for (int stone: stones) {
            maxHeap.offer(stone);
        }

        while (maxHeap.size() > 1) {
            int stone_1 = maxHeap.poll();
            int stone_2 = maxHeap.poll();

            maxHeap.offer(Math.abs(stone_1 - stone_2));
        } 

        return maxHeap.poll();

    }
}
```

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)