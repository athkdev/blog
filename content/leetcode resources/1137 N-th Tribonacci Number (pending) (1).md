---
title: 1137 N-th Tribonacci Number (pending) (1)
tags:
    - medium
---



[Problem link 🔗](https://leetcode.com/problems/min-cost-climbing-stairs/description/) 

(explaination pending)

# Code:

### C++ (unoptimized, brute-force)

```cpp
class Solution {
public:
    int tribonacci(int n) {
        if (n == 0) return 0;
        if (n==1 || n==2) return 1;

        return tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3);
    }
};
```

### C++ (optimized for time)

```cpp
unordered_map<int,int> memo;

class Solution {
public:
    int tribonacci(int n) {
        if (n == 0) return 0;
        if (n==1 || n==2) return 1;

        if (memo.count(n)) return memo[n];

        int prev1 = tribonacci(n-1);
        int prev2 = tribonacci(n-2);
        int prev3 = tribonacci(n-3);

        memo[n-1] = prev1;
        memo[n-2] = prev2;
        memo[n-3] = prev3;
        
        return prev1+prev2+prev3;
    }
};
```

### Big O Analysis

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)