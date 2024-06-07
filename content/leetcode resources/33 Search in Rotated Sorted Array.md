---
title: 33 Search in Rotated Sorted Array
tags:
    - medium
---



In the problem, we are given a sorted array. But this array is rotated at some point. Rotating an array implies that at a random point, the array was broken off into two subarrays and their positions were exchanged while rejoining the subarrays.

That means there would be a pivot element. This pivot element divides the array into two sorted subarrays. So one approach to the problem is to find the pivot point and compare the target with it, then check accordingly.

Or, do a regular binary search but at every iteration check if that half that is currently in focus is sorted or not: if it is sorted, well no worries. If it is not sorted, look into the other half.

# Code:

### Java

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0,right = nums.length-1;
        int mid = (right-left)/2 + left;

        while (left <= right) {
            mid = (right-left)/2 + left;

            if (target == nums[mid]) return mid;

            if (nums[left] <= nums[mid]) { // left half is sorted
                if (target >= nums[left] && target <= nums[mid]) { // target is within bounds of the subarray
                    right = mid - 1;
                }
                else left = mid + 1;
            }
            else {   // right half is sorted
                if (target >= nums[mid] && target <= nums[right]) {  // target within bounds of the subarray
                    left = mid + 1;
                }
                else right = mid - 1;   // search other subarray if earlier subarr does not contain target
            }
        }

        return -1;
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