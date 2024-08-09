---
title: 2053 Kth Distinct String in an Array
date: 2024-08-09
tags:
  - medium
---

# Intuition

Pretty straighforward, we make a frequency table for all the elements in array. Then we extract only the distinct characters, and return `k-th` character.

# Code

### Python3

```python
from collections import Counter

class Solution:
    def kthDistinct(self, A: List[str], K: int) -> str:
        count = Counter(A)

        res = [key for key, value in count.items() if value == 1]
        
        return '' if len(res) < K else res[K-1]
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we use the Counter object which would require N time to create a frequency table.

- **Memory**

  The memory usage is $O(N)$ since we use the Counter which inherently is a python `dict`.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
