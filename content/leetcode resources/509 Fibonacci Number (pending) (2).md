---
title: 509 Fibonacci Number (pending) (2)
tags:
    - medium
---


# 509. Fibonacci Number (pending) (2)

[Problem link 🔗](https://leetcode.com/problems/min-cost-climbing-stairs/description/) 

(explaination pending)

# Code:

### C++ (unoptimized, brute-force)

```cpp
class Solution {
public:
    int fib(int n) {
        if (n == 0) return 0;
        if (n==1) return 1;

        return fib(n-1)+fib(n-2);
    }
};
```

### C++ (optimized for time)

```cpp
unordered_map<int,int> memo;

class Solution {
public:
    int fib(int n) {
        if (n==0) return 0;
        if (n==1) return 1;

        if (memo.count(n)) return memo[n];

        int prev1 = fib(n-1);
        int prev2 = fib(n-2);

        memo[n-1] = prev1;
        memo[n-2] = prev2;

        return prev1+prev2;
    }
};
```

### Big O Analysis

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)