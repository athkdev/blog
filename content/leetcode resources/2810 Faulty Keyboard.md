---
title: 2810 Faulty Keyboard 
date: 2024-08-05
tags:
  - easy
---

# Intuition

Since we need reversing behaviors - more like, switching reversing behaviors this is a good instance of pulling out the good'ol `deque` OR a double ended queue. Basically, you can insert data via both the front and the back.

So in the problem, when you come across an `i` switch a flag - and now start inserting from the back into the deque. While returning, check with the flag to see which state it is on and return accordingly.

# Code

### Python3

```python
def finalString(self, s: str) -> str:

    flip = False

    d = deque()

    for c in s:
        if c == 'i':
            flip = not flip
            continue

        if not flip:
            d.append(c)
        else:
            d.appendleft(c)
    
    return ''.join(d) if not flip else ''.join(list(d)[::-1])
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all characters in the string of length N.

- **Memory**

  The memory usage is $O(N)$ since we are using a `deque` to store the string.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
