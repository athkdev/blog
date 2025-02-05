---
title: 1790 Check if One String Swap Can Make String Equal
date: 2025-02-05
tags:
  - easy
---

We need to find a pair of element that could be swapped to make the strings equal. Emphasis on 'pair'. So, we can find two indices, and store the elements.

Finally we need to check if the pair of element is 'swappable`.

# Code

### Python3

```python
def areAlmostEqual(self, s1: str, s2: str) -> bool:

    p1, p2 = 0, 0

    ineq = 0
    diff = []

    while p1 != len(s1):

        if s1[p1] != s2[p2]:
            diff.append([s1[p1], s2[p2]])

            if len(diff) > 2:
                return False

        p1 += 1
        p2 += 1

    if len(diff) == 0:
        return True

    if len(diff) == 2:
        return diff[0] == diff[1][::-1]

    return False
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array once.

- **Memory**

  The memory usage is $O(1)$. We use the `diff` list to store the element pair, but we exit if it ever goes over a length of 2. So it's constant space.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
