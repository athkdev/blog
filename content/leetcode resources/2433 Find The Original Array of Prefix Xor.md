---
title: 2433 Find The Original Array of Prefix Xor
tags:
  - medium
---

Lately, I have been solving and getting more into understanding XOR solutions on Leetcode and how XOR's a pretty important concept.
This problem is medium because you need to know a crucial XOR characteristic that if you don't know you cannot solve the problem.

XOR is a reversible operation.
Let's prove this logically.

Properties of XOR:
```python
    A ^ A = 0    ___ eq(1)

    A ^ 0 = A    ___ eq(2)
```

Suppose, `A ^ B = C`

`C ^ A = B` and `C ^ B = A`

**How?**
`A ^ B ^ A = C ^ A` 
`B ^ 0 = C ^ A`     - from eq(1)
`B = C ^ A`         - from eq(2)

Similarly, 
`A ^ B ^ B = C ^ B` 
`A ^ 0 = C ^ B`     - from eq(1)
`A = C ^ B`         - from eq(2)

So, just by using this property, we keep track of prefix XORs in `pref[i-1]` and update `pref[i]`

# Code:

### Python3

```python
class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        res = 0
        for i in range(1, len(pref)):
            res ^= pref[i-1]
            pref[i] ^= res

        return pref
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- Memory
  The memory usage is $O(1)$ since we don't use any extra data structure, we are replacing the input array in placesince we don't use any extra data structure, we are replacing the input array in place.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
