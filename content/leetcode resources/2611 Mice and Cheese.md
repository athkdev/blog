---
title: 2611 Mice and Cheese
date: 2025-01-25
tags:
  - medium
---

Mouse 1 can eat `k` types of cheese. Mouse 2 can eat all of them. Cheese at index `i` can only be eaten by one of the two mice at a time.


That means, if mouse 1 eats `rewards1[2]`, mouse 2 cannot eat cheese at index 2.


Since our goal is maximising - mouse 1 should eat the top k rewarding cheeses, and the remaining ones are automatically eaten by mouse 2.

# Code

### Python3

```python
def miceAndCheese(self, reward1: List[int], reward2: List[int], k: int) -> int:
    if k == 0: return sum(reward2)
    
    indices = set(
        i for _, i in sorted(
            ((a - b, i) for i, (a, b) in enumerate(zip(reward1, reward2))),
            key=lambda x: x[0],
        )[-k:]
    )
    return sum(
        (a if i in indices else b) for i, (a, b) in enumerate(zip(reward1, reward2))
    )
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are using functions like `enumerate`, `zip`, and `sum`.

- **Memory**

  The memory usage is $O(N)$ since we create lists with functions like `enumerate`, and `zip`. Also, `set()`.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
