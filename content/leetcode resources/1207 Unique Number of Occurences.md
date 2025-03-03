---
title: 1207 Unique Number of Occurences
date: 2025-01-20
tags:
  - easy
---

Convert the occurences `.values()` into a set, and check if it's same as the number of keys `.keys()`. If it's same that means there's no two frequencies that are same.

# Code

### Python3

```python
  def uniqueOccurrences(self, arr: List[int]) -> bool:

      counter = Counter(arr)

      return len(set(counter.values())) == len(counter.keys())
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since that's the cost of converting a list to a set.

- **Memory**

  The memory usage is $O(N)$ since we use `set()`.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
