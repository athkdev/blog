---
title: 1143 Longest Common Subsequence
tags:
  - medium
---

# Code:

### Python3

```python
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        ret = [[0 for _ in range(len(text2) + 1)] for _ in range(len(text1) + 1)]

        for i in range(len(text1)):
            for j in range(len(text2)):
                ret[i+1][j+1] =  ret[i][j] + 1 if text1[i] == text2[j] else max(ret[i+ 1][j], ret[i][j + 1])

        return ret[len(text1)][len(text2)]
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(nm)$ where $n == len(text1)$ and $m == len(text2)$
- Memory
  The memory usage is $O(1)$ since we are not using any extra datastructure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
