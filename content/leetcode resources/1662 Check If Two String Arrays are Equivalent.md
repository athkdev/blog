---
title: 1662 Check If Two String Arrays are Equivalent
date: 2024-08-05
tags:
  - easy
  - string
---

# Intuition

Join arrays into strings, compare if they are true and return.

# Code

### Python3

```python
def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
    return ''.join(word1) == ''.join(word2)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are iterating the string once.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure. It depends actually, since we are using the `join` function someone would say that it $O(N)$ memory - since `join` returns a string.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
