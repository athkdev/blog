---
title: 2697 Lexicographically Smallest Palindrome
date: 2024-08-05
tags:
  - easy
---

# Intuition

We can run a basic palindrome checker, but to get a lexicographically smaller string, it's crucial that while building a palindrome - we select the lexicographically smaller character amongst `s[left]` and `s[right]`.

> A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.

# Code

### Python3

```python
def makeSmallestPalindrome(self, s: str) -> str:

    left, right = 0, len(s)-1

    v = list(s)

    while left < right:
        if v[left] != v[right]:
            v[left] = v[right] = min(v[right], v[left])
        
        left += 1; right -= 1
    
    return ''.join(v)
```


### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all characters in the string of length N.

- **Memory**

  The memory usage is $O(N)$ since we are converting the input string `s` to a list `v`.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
