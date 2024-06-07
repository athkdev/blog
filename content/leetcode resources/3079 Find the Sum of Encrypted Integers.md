---
title: 3079 Find the Sum of Encrypted Integers
tags:
    - medium
---



Fairly straightforward, the problem wants us to find the sum of the array elements but before calculating, the elements must be “encrypted.” As per their definition, a number is encrypted if all the digits in the number are replaced by the maximum digit in that number.

# Code:

### Python3

```python
class Solution:
    def sumOfEncryptedInt(self, nums: List[int]) -> int:
        ret = 0

        for n in nums:
            ret += int(max(str(n)) * len(str(n)))
            
        return ret
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N * M)` where N = length of list `nums` and M = length of number `nums[i]`. 
    
- Memory
    
    Constant space! Since we don’t use any extra data structure.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)