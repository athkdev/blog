---
title: 1910 Remove All Occurrences of a Substring
date: 2025-02-10
tags:
  - medium
---

We use a recursive function to search for the `part` in `s` and if it exists, we replace `part` with an empty string with an in-built function.

Note: in Python, the `str.replace` function replaces all occurrences the `part` in the main string - so that messes up our logic for the problem. If you only need to replace the first occurrence - provide a `count` argument. It states 'how many occurrences need to be replaced'.

You can implement the same algorithm without recursion - just a straight while loop.

# Code

### Python3

```python
def removeOccurrences(self, s: str, part: str) -> str:

    def remove(s, part):
        if part not in s:
            return s

        s = s.replace(part, '', 1)
        print(s)

        return remove(s, part)

    return remove(s, part)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * M)$ where N is the variable (reducing) length of the string `s` and M is the number of occurrences of `part` in `s`.

- **Memory**

  The memory usage is $O(N)$ since we use recursion - so N is the length of the recursion stack.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
