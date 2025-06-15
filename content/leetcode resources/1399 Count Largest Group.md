---
title: 1399 Count Largest Group
date: 2025-06-15
tags:
  - easy
---

Convert each number from $1...N$ to string, and get its sum. Then keep track of how many times that sum repeats.

Using a counter, count the one with the largest value and return it.

# Code

### Python3

```python
class Solution:
    def countLargestGroup(self, n: int) -> int:

        check = defaultdict(int)

        res = 0
        for i in range(1, n+1):
            S = sum(map(int, list(str(i))))

            if S in check:
                check[S] += 1
            else:
                check[S] = 1

        return Counter(check.values())[max(check.values())]
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are operating on every number from $1...N$.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store the repeat occurences.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
