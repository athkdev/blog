---
title: 1967 Number of Strings That Appear as Substrings i
tags:
  - medium
---

# 1967. Number of Strings That Appear as Substrings in Word

Brute force: iterate over `patterns` and check if `pattern[i]` is a substring of `word`.

# Code:

### Python3

```python
class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        ret = 0

        for w in patterns:
            if w in word: ret += 1

        return ret

```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(N^2)$ where N = length of list p.
- Memory
  The memory usage is `O(N)` since we use a `ret` string.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
