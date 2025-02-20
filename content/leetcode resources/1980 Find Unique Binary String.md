---
title: 1980 Find Unique Binary Strings
date: 2025-07-20
tags:
  - medium
---

Since we need any one of the numbers not present in the list - we can assume iterate over the input, and pick out the first misplaced combination whereint(N[i], 2) != i.

PS: it's crucial to give the second argument2to theint(), so as to convert the binary strings to decimal numbers.

Then finally, pad the required numbers of zeros on the left side using thestr.rjust()built-in python function.

# Code

### Python3

```python
def findDifferentBinaryString(self, N: List[str]) -> str:
    n = len(N)

    N.sort()   # N lg N

    for i in range(n+1):   # N+1
        if i >= n or int(N[i], 2) != i:
            res = bin(i)[2:]
            return res.rjust(n, '0')

    return ''
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting over a range of $0...N+1$.

- **Memory**

  The memory usage is $O(1)$ since we do not use any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
