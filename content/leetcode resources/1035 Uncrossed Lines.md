---
title: 1035 Uncrossed Lines
date: 2024-10-03
tags:
  - medium
  - dp
---



# Code

### Python3

```python
def maxUncrossedLines(self, nums1: List[int], nums2: List[int]) -> int:
    
    def helper(n1, n2, i, j, memo):
        if (i, j) in memo: return memo[(i,j)]

        if i >= len(n1) or j >= len(n2):
            return 0

        result = 1 if n1[i] == n2[j] else 0

        if n1[i] == n2[j]:
            result += helper(n1, n2, i+1, j+1, memo)
        else:
            left = helper(n1, n2, i, j+1, memo)
            right = helper(n1, n2, i+1, j, memo)
            result += max(left,right)

        memo[(i, j)] = result

        return result
    
    memo = defaultdict(int)

    return helper(nums1, nums2, 0, 0, memo)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N^2)$ after memoizing. Before memoizing it's $O(2^N)$ since there are two functions calls for every call. After memoizing, since we store a pair `(i, j)`.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store memoized results.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
