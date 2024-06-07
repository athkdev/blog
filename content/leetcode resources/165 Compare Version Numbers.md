---
title: 165 Compare Version Numbers
tags:
    - medium
---



This problem asks use to compare two version strings and return an answer accordingly. These versions are inspired by software versions where a version string could be “1.0”, “1.0.1”, “2.3.4” and so on.

The problem also hints at comparing from left to right, this means we have to compare each character in both strings from left to right and arrive at the answer.

Return `-1 if version1 < version2` and `1 if version1 > version2`

The way I have solved below takes heavy inspiration from [21. Merge Two Sorted Lists](21%20Merge%20Two%20Sorted%20Lists%202d75ffd46ac14ba4bb57d84a89d62daa.md). We start comparing from the left and go to the smallest length. Then, if we haven’t found a concrete conclusion (`-1 or 1`), our current answer is still undecided (`0`). So we continue searching if our residual remaining list (a.k.a the longer version string) has any non-zero integers, this means this longer string is a higher version. If there are all zeros, that means both versions are equal.

# Code:

### Python3

```python
class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        V1 = version1.split('.')
        V2 = version2.split('.')

        V1 = [int(n) for n in V1]
        V2 = [int(n) for n in V2]

        ret = 0

        p1, p2 = 0, 0

        while p1 < len(V1) and p2 < len(V2):
            if V1[p1] < V2[p2]:
                ret = -1
                break
            if V1[p1] > V2[p2]:
                ret = 1
                break
            p1 += 1
            p2 += 1

        i = min(p1, p2)
        while len(V1) > len(V2) and ret == 0 and i < len(V1):
            if V1[i] != 0:
                ret = 1
                break
            i += 1

        i = min(p2, p1)
        while len(V2) > len(V1) and ret == 0 and i < len(V2):
            if V2[i] != 0:
                ret = -1
                break
            i += 1
        
        return ret
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$. This is an example of a linear 1-dimensional DP, where we only iterate the input once. Had it been a nested iteration it could have been $O(N^2)$.
    
- Memory
    
    The memory usage is $O(N)$, since we require a dictionary to store already calculated results.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)