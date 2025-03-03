---
title: 1844 Replace All Digits with Characters
date: 2024-08-05
tags:
  - easy
---

# Intuition

Pretty straightforward, have a mutable form of the string like a list (or create new string and append to it). Then when you encounter a digit, calculate character for that index using the previous character and current digit.

> Hint: for Python devs, use `ord()` to get ASCII value of a character and `chr()` to convert a digit into a character.

# Code

### Python3

```python
def replaceDigits(self, s: str) -> str:
    v = list(s)

    for i in range(1, len(s)):
        if s[i].isdigit():
            v[i] = chr(ord(s[i-1]) + int(s[i]))
            continue

    return ''.join(v)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all characters in the string of length N.

- **Memory**

  The memory usage is $O(V)$ since we convert the input string into a list `v`.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
