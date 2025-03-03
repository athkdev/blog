---
title: 1903 Largest Odd Number in String
tags:
  - medium
---

A number would be odd if the number at the unit place `num[-1]` is odd. Check from the end of the string, once we come across an odd number, we stop and return.

# Code:

### Python3

```python
class Solution:
    def largestOddNumber(self, num: str) -> str:
        curMax = -1

        i = len(num)-1
        while i > -1:
            if int(num[i]) % 2 != 0:
                break
            i -= 1

        return num[:i+1] if i != -1 else ''
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(N)$ where N = length of string `num`.
- Memory
  The memory usage is `O(1)` since we don’t use any linear or non-linear data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
