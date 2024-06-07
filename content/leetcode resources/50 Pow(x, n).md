---
title: 50 Pow(x, n)
tags:
    - medium
---



Here, we define a few base-cases that pertain to the rule of math. But the brute force approach to reduce n by 1 every function call and calculate the power gives a TLE. 

In this case, the optimization is to use math where ever we can. So, once we reach an even power, instead of decrementing n by 1, we half the value of n, and multiply x by itself. This way, by halving n at every function call, this linear input set is reduced to logarithmic input space.

> Fun fact: just returning `x**n` works, lol
> 

# Code:

### Python3 (brute force)

```python
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0: return 1

        return x * self.myPow(x, n-1)
```

### Python3 (optimized)

```python
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0: return 1

				if n < 0: return 1 / self.myPow(x, -n)

				if n % 2 != 0: return self.myPow(x*x, n/2)  # half the input space in half

        return x * self.myPow(x, n-1)
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(log(N))$. This is because once we reach even power ($n\%2 == 0$), we decrement $n$ by half and multiply x by itself in that particular function call. Since, we half the input n every call, it’s logarithmic optimization.
    
- Memory
    
    The memory usage is $O(1)$ , constant space.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)