---
title: 3211 Generate Binary Strings Without Adjacent Zeros
date: 2024-07-30
tags:
  - medium
  - strings
  - backtrack
---

# Intuition

# Code

### Python3

```python
def validstrings(self, n: int) -> list[str]:

    result = []

    def helper(s):
        '''
        recursively build string s, append a zero only if previous char is not a zero

        append a one regardless
        '''
        if len(s) == n:
            result.append(s)
            return

        helper(s + '1')
        if s[-1] == '1':
            helper(s + '0')

    helper('0')  # for binary strings starting with zeros
    helper('1')  # for binary strings starting with ones

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(2^N)$ since there can be $2^N$ combinations.

- **Memory**

  The memory usage is $O(N)$ since we use a list to store the generated strings.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
