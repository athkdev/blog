---
title: 2149 Rearrange Array Elements by Sign
date: 2025-03-03
tags:
  - medium
---

Similar to leetcode 86, and leetcode 2161.

Offload the positive and negative elements into separate lists, then merge.

# Code

### Python3

```python
def rearrangeArray(self, nums: List[int]) -> List[int]:

    pos, neg = [], []

    result = []

    for n in nums:
        if n >= 0:
            pos.append(n)
        else:
            neg.append(n)

    # merge
    for a, b in zip(pos, neg):
        result.append(a)
        result.append(b)

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements only once.

- **Memory**

  The memory usage is $O(N)$ since we use extra lists to offload positive and negative elements.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
