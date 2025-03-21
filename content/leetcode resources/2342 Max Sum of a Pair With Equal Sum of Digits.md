---
title: 2342 Max Sum of a Pair With Equal Sum of Digits
date: 2025-03-20
tags:
  - medium
---

The core idea is that instead of checking all pairs of (i, j) where $i != j$, we can store the already seen digit sums. If any new sums are seen, then check in the dictionary to see if we already have candidates for that digit sum. If we do, then add it to list, or else create a new one.

> Optimization: instead of storing lists, just store the current largest sum seen so far, for that particular `digit_sum`.

# Code

### Python3 (a bit more optimized)

```python
def maximumSum(self, nums: List[int]) -> int:

    def digit_sum(x):
        s = 0
        while x > 0:
            s += x % 10
            x //= 10

        return s

    freq = defaultdict(int)
    res = -math.inf

    for n in nums:
        ds = digit_sum(n)

        if ds in freq:
            res = max(res, freq[ds] + n)
            freq[ds] = max(freq[ds], n)
        else:
            freq[ds] = n

    return -1 if res == -math.inf else res
```

### Python3

```python
def maximumSum(self, nums: List[int]) -> int:

    def digit_sum(x):
        s = 0
        while x > 0:
            s += x % 10
            x //= 10

        return s

    freq = defaultdict(list)

    for n in nums:      # O (N)
        ds = digit_sum(n)

        if ds in freq:
            freq[ds].append(n)
        else:
            freq[ds] = [n]

    res = -math.inf
    for k in freq:       # O (K)   where K <= N
        v = freq[k]
        if len(v) == 1:
            continue

        for a, b in pairwise(sorted(v)):      # O (M lg M)  where M <= N
            res = max(res, a + b)


    return -1 if res == -math.inf else res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N lg N)$ since we are sorting. The `for k in freq` operation can be deemed as constant time operation since the maximum `digit_sum` will ever go to 81. (999999999) (actually, less than that).

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store the seen numbers.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
