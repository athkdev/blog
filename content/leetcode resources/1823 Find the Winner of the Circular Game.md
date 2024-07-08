---
title: 1823 Find the Winner of the Circular Game
date: 2024-07-08
tags:
  - medium
  - simulation
---

# Intuition

The problem wants us to eliminate in every round, an index and return the last person standing.

The criteria is that the contenders are standing in a circular line, and we are given an int `k`. Starting from contender 0, we eliminate the contender at index `k`. If `k` goes beyond `len(ar)` we start from 0 again (remember it's a circular list).

This is the perfect use case of the `modulo` operator. The nature of the modulo operator simulates a circular list, which is exactly what we want.

> If `A` < `B`, 
then `A` % `B` = `A`

> If `A` > `B`, 
then `A` % `B` = `C`
where `C` is the remainder of `A` and `B`



# Code

### Python3

```python
def findTheWinner(self, n: int, k: int) -> int:
    ar = [i + 1 for i in range(n)]

    roundLoser = 0

    while len(ar) > 1:
        roundLoser = (roundLoser + k - 1) % len(ar)

        del ar[roundLoser]
    
    return ar[-1]
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since are simulating the rules of the game.

- **Memory**

  The memory usage is $O(N)$ since we utilise an array to store current contenders.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
