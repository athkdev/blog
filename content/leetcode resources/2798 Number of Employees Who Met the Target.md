---
title: 2798 Number of Employees Who Met the Target
tags:
  - easy
---

Just count the number of employees who are `>=` `target`

# Code:

### Python3

```python
def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
    return sum(1 for h in hours if h >= target)
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N)$.

- Memory
  The memory usage is $O(n)$ since we are building an array first and then summing it up.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
