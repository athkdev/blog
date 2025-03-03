---
title: 1249 Minimum Remove to Make Valid Parentheses
date: 2025-01-20
tags:
  - medium
---

Keep a count variable and keep only the substring that is a 'valid parentheses string' i.e. `count >= 0` where count is incremented for `(` and decremented for `)`.

Any parentheses that makes the string 'invalid', just ignore it.

There need to be two passes, because when going from left to right we can ignore all closing parentheses, but there could be some opening ones that are just extra. For that, make a second pass as well on the reversed string.

# Code

### Python3

```python
def minRemoveToMakeValid(self, s: str) -> str:

    result = []
    count = 0

    for c in s:
        if c == '(':
            count += 1
            result.append(c)
        elif c == ')' and count > 0:
            count -= 1
            result.append(c)
        elif c != ')':
            # not increasing OR decreasing count implies we are ignoring the current count
            result.append(c)

    filtered = []
    for c in reversed(result):
        if c == "(" and count > 0:
            count -= 1
        else:
            filtered.append(c)

    return ''.join(reversed(filtered))
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(2N)$ since we visit each character in the string only once in one pass.

- **Memory**

  The memory usage is $O(N)$ since we use the `result` and `filtered` array to store.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
