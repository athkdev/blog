---
title: 2391 Minimum Amount of Time to Collect Garbage
tags:
  - medium
---

This problem uses the technique of prefix sum as well like a few of other problems you might have come across in this list.

We are given a travel array that consists of distance in minutes from house i to house i+1. Simply put, this is a cumulative sequence. The time taken to reach i+n house is just sum of all distances until i.

We want to keep track of what the last house visited by each garbage truck is. We can use an array or a hashmap for this. Finally, we get the time taken by garbage truck for ‘G’, ‘P’ and ‘M’ from the truck and their corresponding entry in the travel array.

> Note: Remember the travel array can be used universally by all the trucks.

# Code:

### Java

```java
class Solution {
    public int garbageCollection(String[] garbage, int[] travel) {
        int prefixSum[] = new int[garbage.length];
        int k=0;
        for (int t : travel) {
            prefixSum[k+1] = prefixSum[k++] + t;
        }

        Map<Character,Integer> lastSeen = new HashMap<>();

        int pickupTime = 0;
        for (int i=0;i<garbage.length;++i) {
            for (char c : garbage[i].toCharArray()) {
                pickupTime++;
                lastSeen.put(c,prefixSum[i]);
           }
        }

        return pickupTime + lastSeen.values().stream().mapToInt(i->i).sum();
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(N)$ .
- Memory
  The memory usage is `O(N)` . We do have a prefixSum array that varies as per travel.length → which varies as per garbage.length. Although, we are using an hashmap - the number of entries would always be the types of garbaghe which in this case is glass, paper and metal.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
