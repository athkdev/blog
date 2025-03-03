---
title: 1561 Maximum Number of Coins You Can Get
tags:
  - medium
---

The problem can come off as vague at the first glance since Alice gets the maximum piles, we get the second maximum piles and Bob gets the remaining ones. One would get confused as to thinking you are required to give one pile out of three to Bob, but that’s false.

We can choose to give the least ones to Bob. So, we sort the array, and start from $n/3$ because the first $n/3$ piles are reserved for Bob.

# Code:

### Java

```java
class Solution {
        public int maxCoins(int[] A) {
        Arrays.sort(A);
        int res = 0, n = A.length;
        for (int i = n / 3; i < n; i += 2)
            res += A[i];
        return res;
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` as since we would be iterating the array atleast once.
- Memory
  The memory usage is `O(1)` since we are not using any extra datastructure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
