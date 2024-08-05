---
title: 1773 Count Items Matching A Rule
date: 2024-08-05
tags:
  - easy
---

# Intuition

Straight forward string matching.

Follow-up: try the problem in a language known for it's advanced type and value matching syntax such as Rust or OCaml.

# Code

### Python3

```python
def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:

    ret = 0

    for t, c, n in items:
        if ruleKey == 'type':
            if t == ruleValue: ret += 1
        elif ruleKey == 'color':
            if c == ruleValue: ret += 1
        elif ruleKey == 'name':
            if n == ruleValue: ret += 1
    
    return ret
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are iterating over every item in the list.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
