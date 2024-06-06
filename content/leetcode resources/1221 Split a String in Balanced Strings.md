---
title: 1221 Split a String in Balanced Strings
tags:
    - medium
---


# 1221. Split a String in Balanced Strings

We need to come up with the maximum number of substrings with an equal number of ‘L’ and ‘R’ characters. There would be multiple answers but since they have mentioned **maximum** we need to find the smallest substrings with equal number of ‘L’s and ‘R’s.

We increment an L counter and an R counter whenever we encounter a corresponding character. We reset them once $L == R$, as per required.

> Note: having a left pointer as in the code below is not mandatory for the problem, it’s only crucial if one needs to maintain all the substrings. For eg. return all balanced substrings
> 

# Code:

### Java

```java
class Solution {
    public int balancedStringSplit(String s) {
        int res = 0;
        int L = 0, R = 0;
        int left = 0;
        for (int right=0;right<s.length();++right) {
            if (s.charAt(right) == 'L') L++;
            if (s.charAt(right) == 'R') R++;

            if (L == R) {
                left = right;    // maintain only if you want to keep track of substrings
                res++;
                L = 0;
                R = 0;
            }

        }

        return res;
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(n)$ as since we would be visiting all characters in the string atleast once.
    
- Memory
    
    The memory usage is $O(1)$ since we are not using any extra datastructure.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)