---
title: 1816 Truncate Sentence
date: 2024-08-05
tags:
  - easy
  - string
---

# Intuition

Split sentence with `' '` space delimiter, truncate the array and return the string using `join`.

# Code

### Python3

```python
def truncateSentence(self, s: str, k: int) -> str:
    words = s.split(' ')

    if len(words) < k: return ''

    return ' '.join(words[:k])
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are using `split` - which uses N time.

- **Memory**

  The memory usage is $O(N)$ since we are using `join` function which returns a string.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
