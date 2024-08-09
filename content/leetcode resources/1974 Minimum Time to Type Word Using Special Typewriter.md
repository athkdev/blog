---
title: 1974 Minimum Time to Type Word Using Special Typewriter
date: 2024-08-09
tags:
  - easy
---

# Intuition

We use a greedy approach to find minimum key pushes - since the keys are in a circular manner, there are two distances between any two keys. We always prefer the shortest distance.

To visualize it, think of a circle with a chord through it that divides the circle into two arcs - one arc is going to be larger than the other. If the both arcs are equal, that means our chord is a diameter that divides the circle into two equal halves.

# Code

### Python3

```python
def minTimeToType(self, word: str) -> int:
    first_dist = abs(ord('a') - ord(word[0]))

    seconds = 0

    seconds += min(26 - first_dist, first_dist)
    seconds += 1   # enter first key 

    for i in range(1, len(word)):
        dist = abs(ord(word[i]) - ord(word[i-1]))
        
        seconds += min(26 - dist, dist)  # time taken to get to key
        seconds += 1  # time taken to enter key
    
    return seconds
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all characters in the string of length N.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
