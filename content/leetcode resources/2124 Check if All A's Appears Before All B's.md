---
title: 2124 Check if All A's Appears Before All B's
date: 2024-08-01
tags:
  - easy
---

# Intuition

The problem needs us to find if there are any a's before any b's. So we can keep track of when b's start to appear. So once this flag is true and any a's appear - we return True.

PS: This problem is pre-requisite to [[/leetcode resources/1653 Minimum Deletions to Make String Balanced]] - so check that problem too.

> Make sure to checkout [[/leetcode resources/678 Valid Parenthesis String]] as it uses a similar strategy of counting

# Code

### Python3

```python
def checkString(self, s: str) -> bool:

    secondPhase = False

    for c in s:
        if c == 'b':
            secondPhase = True

        if secondPhase and c == 'a':
            return False

    return True
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all characters in the string of length N.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
