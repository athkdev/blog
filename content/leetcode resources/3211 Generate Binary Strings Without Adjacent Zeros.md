---
title: 3211 Generate Binary Strings Without Adjacent Zeros
date: 2024-07-30
tags:
  - medium
  - strings
  - backtrack
---

# Intuition

# Code

### Python3

```python
def validstrings(self, n: int) -> list[str]:

    result = []
    
    def helper(s):
        '''
        recursively build string s, append a zero only if previous char is not a zero
        
        append a one regardless
        '''
        if len(s) == n:
            result.append(s)
            return
        
        helper(s + '1')
        if s[-1] == '1':
            helper(s + '0')
        
    helper('0')  # for binary strings starting with zeros
    helper('1')  # for binary strings starting with ones

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N^2)$ since in worst case scenario for every call we would be making two new calls to generate a string.

- **Memory**

  The memory usage is $O(N)$ since we use a list to store the generated strings.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
