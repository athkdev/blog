---
title: 735 Asteroid Collision
date: 2025-03-26
tags:
  - medium
---

We use a stack for a simulation. Add all asteroids to the stack by default - and check if the latest two asteroids are in different directions. If they are not, simply ignore and move on to the next asteroid.

If they are different directions (inward, because a left asteroid and then a right asteroid would never meet), then pop them both. And append the larger one. Because the smaller one gets destroyed.

> Note: larger and smaller could not be determined via the signs, because the signs only represent their directions. To compare, use their `abs()` values.

# Code

### Python3

```python
def asteroidCollision(self, asteroids: List[int]) -> List[int]:

    def diff_directions(a, b):
        return (a < 0 and b > 0)

    res = []

    for a in asteroids:
        res.append(a)

        while len(res) > 1 and diff_directions(res[-1], res[-2]):
            if abs(res[-1]) == abs(res[-2]):
                res.pop(); res.pop()
            elif abs(res[-1]) > abs(res[-2]):
                a = res[-1]
                res.pop(); res.pop()
                res.append(a)
            elif abs(res[-1]) < abs(res[-2]):
                b = res[-2]
                res.pop(); res.pop()
                res.append(b)

    return res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visit every asteroid only once.

- **Memory**

  The memory usage is $O(N)$ since we use a stack to simulate the asteroids.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
