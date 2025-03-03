---
title: 3174 Clear Digits
date: 2025-02-07
tags:
  - medium
---

The idea here is pretty straight forward - once we put every alphabet in the stack, when we come across a numeric value - pop from the stack.

# Code

### Python3

```python
    def clearDigits(self, s: str) -> str:
        if not s:
            return ''

        st = []

        st.append(s[0])

        p = 1
        while p < len(s):
            if s[p].isnumeric():
                st.pop()
            else:
                st.append(s[p])
            p += 1

        return ''.join(st)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(N)$ since we are using a stack.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
