---
title: 153 Find Minimum in Rotated Sorted Array
tags:
    - medium
---



This problem is similar to [leetcode 33](33%20Search%20in%20Rotated%20Sorted%20Array%201aebacf96c0d47639c3098c375fc83b1.md). We want the minimum element in a rotated sorted array, this rotation could have happened n times. Basically, we want to find the pivot or rotation point.

Well, we can use binary search and at every iteration check if the $A[mid]$ is greater than $A[right]$, if yes then reduce the search space to right side subarray. If no, the reduce search space to the left side subarray.

It’s important to understand that $A[mid] > A[right]$ implies that the pivot element/rotation point/smallest element lies somewhere in $[mid.....right]$. Similarly, if this isn’t the case, then the smallest element lies somewhere in $[left.....mid]$ subarray.

# Code:

### Java

```java
class Solution {
    public int findMin(int[] nums) {
        int left = 0, right = nums.length - 1;
        
        while (left < right) {
            int mid = (right-left) /2 + left;

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        return nums[left];
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(log N)$ since we reduce the search sample space by half at each point so it’s exponentially faster at every step.
    
- Memory
    
    The memory usage is `O(1)` since we are not using any extra datastructures.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)