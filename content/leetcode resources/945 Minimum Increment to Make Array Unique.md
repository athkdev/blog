---
title: 945 Minimum Increment to Make Array Unique
date: 2024-06-14
tags:
  - medium
---

This is a problem that requires simulation. But one thing needs to be carefully taken care off, that is we can't use a dictionary to keep frequencies.

I made a mistake of using a dictionary and whenever the current frequency is not 1 (which means it's not unique), I updated the next key with `freq[current] - 1` and updated the current frequency.

You might have noticed the flaw in this - if I have consecutive numbers this would have worked. But since I don't I mustn't update the next key, rather the next **number** must be added with `freq[current] - 1`.

This way, we are making sure that we are accurately counting the number of steps to make array unique - and most importantly - not counting the steps multiple times.

# Code:

### Java

```java
class Solution {
    public int minIncrementForUnique(int[] arr) {
        if (arr == null || arr.length == 0)
            return 0;

        int maxVal = 0;
        for (int x : arr) {
            maxVal = Math.max(maxVal, x);
        }

        int moves = 0;
        int[] freq = new int[arr.length + maxVal];
        for (int num : arr)
            freq[num]++;

        for (int i = 0; i < freq.length - 1; i++) {
            if (freq[i] <= 1) //no need to move anything!
                continue;

            moves += freq[i] - 1;
            freq[i + 1] += freq[i] - 1;
        }

        return moves;
    }
}
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- Memory
  The memory usage is $O(len(arr) + maxVal)$ since we use array to store frequencies.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
