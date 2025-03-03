---
title: 476 Number Complement
date: 2024-08-22
tags:
  - easy
  - recursion
---

# Intuition

The process of converting a decimal number to binary is a recursive technique in itself - by dividing the decimal number by 2 (`// 2`) until it's less than or equal to 1 - and recording all the `% 2` at the same time.

Note: `int()` also take a argument `base = X` where X is the base you want conversion in. For eg. want a octal number? use `base = 8`. Want a hexadecimal number? `base = 16`. Binary? `base = 2`. You get it.

# Code

### Python3

```python
    def findComplement(self, num: int) -> int:

        def helper(num: int):
            if num <= 1: return '0'

            return helper(num // 2) + str(0 if num%2 == 1 else 1)

        result = helper(num)

        return int(result, base=2)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(log N)$ since we are reducing our input number by half every function call.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
