---
title: 238 Product of Array Except Self
tags:
    - medium
---


# 238. Product of Array Except Self

We want the result to contain an array where $R[i] = \prod_{0}^{R.length} R[n]$ where $i != n$.

We can use a popular algorithm pattern: prefix and suffix product. Depending on a problem it could be a sum instead of product, or it could just be prefix or suffix alone.

The basic idea is to calculate the increasing cumulative product in an array.

$$
prefix[i] = prefix[i] * currentproduct
\newline where\;currentproduct = 1
$$

Then finally, we simply iterate over both: prefix and suffix to multiply the previous (i-1) prefix and next (i+1) suffix element.

# Code:

### Java

```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] prefix = new int[nums.length];
        int[] suffix = new int[nums.length];

        int prod = 1;
        for (int i=0;i<nums.length;++i) {
            prod *= nums[i];
            prefix[i] = prod;
        }

        prod = 1;
        for (int i=nums.length-1;i>=0;--i) {
            prod *= nums[i];
            suffix[i] = prod;
        }

        for (int i=1;i<nums.length-1;++i) {
            nums[i] = prefix[i-1] * suffix[i+1];
        }
        nums[0] = suffix[1];
        nums[nums.length-1] = prefix[nums.length-2];

        return nums;
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` .
    
- Memory
    
    The memory usage is `O(N)` since we use a prefix and suffix arrays of $N$.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)