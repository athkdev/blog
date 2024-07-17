---
title: I Wanna Be The Guy
date: 2024-07-16
tags:
  - contest 469
---

[Problem link](https://codeforces.com/contest/469/problem/A)

Pretty straightforward, we maintain a set of all the current levels and deduct the levels played by Little X and Little Y from them. If the set is empty, all levels were completed, else not.

A good application here would be set arithmetic too.



# Code

### Python3

```python
n = int(input())

line1 = input()

line1 = line1.split(' ')
p = int(line1[0])

pLevels = [int(a) for a in line1[1:] ]

line2 = input()
line2 = line2.split(' ')
q = int(line2[0])

qLevels = [int(a) for a in line2[1:]]


nn = {i+1 for i in range(n)}

pLevels.extend(qLevels)
for x in pLevels:
    if x in nn: nn.remove(x)

if nn:
    print("Oh, my keyboard!")
else:
    print("I become the guy.")
```

### Code (with set arithmetic)

```python

```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would make N iterations.

- **Memory**

  The memory usage is $O(N)$ since we use a Python Set to keep track of levels.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
