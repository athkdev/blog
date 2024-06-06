---
title: 1442 Count Triplets That Can Form Two Arrays of Eq
tags:
    - medium
---


# 1442. Count Triplets That Can Form Two Arrays of Equal XOR

This problem uses a few core properties of the XOR operators as show below.

![Untitled](1442%20Count%20Triplets%20That%20Can%20Form%20Two%20Arrays%20of%20Eq%20e2d09a9dbb8d46169b5617dec1d8a70a/Untitled.png)

This means that we can deduce that we two sequences of XOR re equal to each other their XOR is 0.

We use a prefix XOR array for storing cumulative XORs for every index. This allows us fast retrieval of XOR of a sequence up until a particular index.

Then we enumerate for every index `i` over the input and every index `k` up until `i+1`. This way we check all possible pairs in one direction without counting duplicates.

Check (unidirectionally, remember we are not enumerating all subsequences) if `prefix[i]==prefix[k+1]` .

# Code:

### Python3

```python
class Solution:
    def countTriplets(self, A: List[int]) -> int:
        n = len(A)
        prefix = [0 for _ in range(n+1)]

        for i in range(n):
            prefix[i+1] = prefix[i] ^ A[i]
            
        
        ret = 0
        for i in range(n):
            for k in range(i+1, n):
                if prefix[i] == prefix[k+1]: ret += (k-i)
        
        return ret
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N * K)` .
    
- Memory
    
    The memory usage is `O(N)`  since we use the prefix array that uses linear space.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)