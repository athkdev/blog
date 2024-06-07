---
title: 278 First Bad Version
tags:
    - medium
---



Given `n` versions we are required to find the first bad version since every following version after the first bad version is bad. We know for a fact that `n`th version is bad, we need to find out when did it start going bad.

This problem is identical to finding the pivot in a rotated sorted array. Searching in a linear manner can sure find the first bad version, but it won’t be very efficient. If  $n = 10^{10}$, searching is going to be time-consuming. Instead, lets just do a binary search - 

```markdown
1. Calculate pivot (mid)
2. Check if version at mid is bad.
		2.1. If yes, then check to it's left because we don't know if this is the first bad version
		2.2. If no, check to the right of pivot (mid)
3. Finally, if we would arrive at a point where both left and right pointers would coincide - this is the first bad version
```

# Code:

### Java

```java
/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int L=0,R=n;

        while (L<=R) {
            int mid = L + (R-L) / 2;

            if (R==L) return R;

            if (isBadVersion(mid)) {
                R = mid;                 // move search window to the left
            }
            else{
                L = mid + 1;             // move search window to the right
            }
        }
        return 0;
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(log N)`  - Binary Search!.
    
- Memory
    
    The memory usage is `O(1)` since we no linear/non-linear data structure used.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)