---
title: 1653 Minimum Deletions to Make String Balanced
date: 2024-08-01
tags:
  - medium
---

# Intuition

Similar to leetcode 2124, now instead of just a flag, we need to keep count of the b's appearing before a's, and then once we get a's - we reduce the `bCount`, and increase our deletions.

PS: This problem is pre-requisite to [[/leetcode resources/2124 Check if All A's Appears Before All B's]] - so check that problem too.

> Make sure to checkout [[/leetcode resources/678 Valid Parenthesis String]] as it uses a similar strategy of counting


# Code

### Python3

```python
def minimumDeletions(self, s: str) -> int:
    deletions = bcount = 0

    for c in s:
        if c == 'b':
            bcount += 1
        elif bcount and c == 'a':
            '''
            checking bcount: checks if we have un-attended b's

            and if c == 'a', then let's delete the b's at the start
            '''

            deletions += 1
            bcount -= 1
    return deletions
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all characters in the input string of length N.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
