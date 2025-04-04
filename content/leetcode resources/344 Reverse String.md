---
title: 344 Reverse String
date: 2025-04-03
tags:
  - easy
---

Straight forward algorithm to reverse strings, arrays, lists. Just make sure that you are modifying the memory location, and not just creating a copy.

> In Python, `s = s[::-1]` will not work, because you are not modifying the string slice/in-memory location, you are just modifying the pointer that gives access to that string. Use `s[:] = s[::-1]` instead.

# Code

### Python3

```python
def reverseString(self, s: List[str]) -> None:
    """
    Do not return anything, modify s in-place instead.
    """

    l, r = 0, len(s)-1

    while l < r:
        s[l], s[r] = s[r], s[l]
        l += 1
        r -= 1
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would have to traverse the entire string.

- **Memory**

  The memory usage is $O(1)$ since we do it in-place.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
