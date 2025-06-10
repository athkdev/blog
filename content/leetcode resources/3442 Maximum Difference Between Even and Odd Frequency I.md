---
title: 3442 Maximum Difference Between Even and Odd Frequency I
date: 2025-06-10
tags:
  - easy
---

We need the difference between the highest odd frequency and the lowest even frequency since we need to maximize the difference.

One way to arrange this would be to sort the input chars sequence as per their frequency. We do this because then we get the higher frequency chars on the right, and lower frequency chars on the left.

To find our $a1$ start scanning from the R.H.S and check if the current char frequency is odd. To find $a2$,start scanning from the L.H.S and check if freq is even.

> [!summary] Note
>
> Make sure to `break` out of scan the moment any of the conditions are hit since we want to maintain our highest and lowest frequencies, and not want them to be overwritten by other ones.

# Code

### Python3

```python
def maxDifference(self, s: str) -> int:

    count = Counter(s)

    s = sorted(s, key=lambda x: count[x])

    i = 0
    a1, a2 = -1, -1
    while i < len(s):
        if count[s[i]] % 2 == 0:
            a2 = s[i]
            break
        i += 1


    i = len(s)-1
    while i > -1:
        if count[s[i]] % 2 != 0:
            a1 = s[i]
            break
        i -= 1

    return count[a1] - count[a2]
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N \; lg \; N)$ since we sort the array. We are sorting in order so that in the future we can simply scan from left and right to find $a2$ and $a1$ resp.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.Counter` object to store the frequency of the chars.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
