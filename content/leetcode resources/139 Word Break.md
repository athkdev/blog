---
title: 139 Word Break
date: 2024-06-13
tags:
  - medium
  - dynamic programming
---

No, you can't solve it using a sliding window. I mean you can, but you would require several nested for loops to keep track of decisions and that would mean a sub-optimal or non-optimial runtime.

The problem is asking us if every portion of the input string `s` could be divided in such a way that every substring is found in the dictionary.

Logically speaking,
```python

S = "abcdef"

# One possible partition group
P1 = S[0:2]
P2 = S[3:4]
P3 = S[5:5]

if P1 in wordDict and P2 in wordDict and P3 in wordDict:
    return True

```

## Intuition
So, since now we know it's a decision tree problem where the results of the entire string contributes to the final answer, we are sure to use DFS with memo or dynamic programming.


> Generally speaking tabular DP produces little code, although some may argue it's more abstracted and difficult to get around at first.


Whenever working with DP ensure that you are first defining the `state` and `transition equation`.

> `state` = `dp[i]` = Is the substring `s[0:i+1]` a valid substring? Meaning, is `s[0:i+1]` itself in the dictionary **OR** could it be broken down into smaller substrings **WHICH** are found in the dictionary?

> `transition` = To determine the value of `dp[i]`, we check if `s[i - len(w)]` was successfully segmented **OR** `s[i - len(w) + 1: i] == w`. 


# Code

### Python3

```python
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    '''
    try combinations of words in wordDict return True if any_comb == s

    @param s (input string to check if it can be segmented)
    @param wordDict (dictionary of available words)
    @return bool (if s can be segemented)
    '''

    dp = [False for _ in range(len(s))]

    for i in range(len(s)):
        for w in wordDict:
            if s[i-len(w)+1:i] == w and (s[i-len(w)] or i - len(w) == -1):
                dp[i] = True

    return dp[-1]
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N * M)$ where N is length of `s` and M is length of `wordDict`.

- Memory

  The memory usage is $O(N)$ since we use an array to cache results.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
