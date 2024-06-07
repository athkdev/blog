---
title: 167 Two Sum II - Input Array Is Sorted
tags:
    - medium
---



Like 2Sum, instead of maintaining a hashmap (which would be $O(N)$ memory), try to use constant space. Now, unlike 2Sum the input array is sorted. Sure you can sort the array in the original 2Sum too, but it’s a famous problem for hashmaps.

Here, you must find a pair of numbers that would sum up to the `target`. Since the array is sorted, you know that the elements on the LHS of array are smaller than the elements in the RHS. That’s what we want. We can use the `two pointer` technique and initialize a pointer at the start and a pointer at the end of the array.

```markdown
1. If A[L] + A[R] == target, we got our pair
2. If A[L] + A[R] > target, we need a smaller value, so we decrease our R
3. If A[L] + A[R] < target, we need a larger value, so we increase our L
```

# Code:

### Java

```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int L=0,R=numbers.length-1;

        while (L<=R) {
            int sum = numbers[L]+numbers[R];
            if (sum==target) {
                return new int[] {L+1,R+1};
            }
            else if (sum > target) R--;
            else if(sum < target) L++;
        }
        return new int[]{};
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the array atleast once.
    
- Memory
    
    The memory usage is `O(1)` since we are not using any extra datastructure.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)