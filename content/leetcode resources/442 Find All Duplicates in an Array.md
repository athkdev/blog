---
title: 442 Find All Duplicates in an Array
tags:
    - medium
---


# 442. Find All Duplicates in an Array

The problem asks us to find the duplicates in the array - which is a not so difficult problem but it’s a medium, so there must be some thing else. They want us to find duplicates, but in constant space.

To which, the solution is not as complex as you might think it is. Normally, if this constraint wasn’t there, we would solve the problem using a hashmap and be done with it. In this condition of constant space, we will do the same thing - but instead of a new hashmap, we’ll just use the current input array as our hashmap.

We use the $nums[i]$ as index, and set it to a negative value. While moving forward with other element, if we come across negative values again, we know there’s been a duplicate.

> KEY INFO: Remember, although we iterate over the array linearly, we access the values of our current index in a linked-list-ish manner - basically we use the current value as our index (hashing input)
> 

# Code:

### Python

```java
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        res = []

        for x in nums:
            if nums[abs(x) - 1] < 0:    res.append(abs(x))
            else:                       nums[abs(x)-1] *= -1
        
        return res
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(n) \; where \; n=nums.length$.
    
- Memory
    
    The memory usage is $O(1)$. Usually, the result array does not count in for the space complexity.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)