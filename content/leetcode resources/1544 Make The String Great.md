---
title: 1544 Make The String Great
tags:
    - medium
---



This is an easy question and a pretty straightforward one at that. So you want to remove all instances of string sequences that are in the format `‘lower, upper’` OR `‘upper, lower’` adjacent to each other.

There are multiple ways to do it, but a very intuitive one is to use a stack. Start putting all elements in the stack one by one. 

Before each insertion, check if the current element in the `for` loop is an upper/lower complementary character of the `S[-1]` or `S.peek()` character. This is checked by XOR-ing both characters. `ord(S[-1]) ^ ord(c)`.

If a complementary is found, remove it from the stack and move on to the next character in the string.

# Code:

### Python

```python
class Solution:
    def makeGood(self, s: str) -> str:
        if len(s) == 0: return s

        S = []

        for c in s:
            # A -> 65
            # a -> 97
            # ord(A) ^ ord(a) = 65 ^ 97 = 32
            if len(S) > 0 and ord(S[-1]) ^ ord(c) == 32:
                S.pop()
            else: S.append(c)

        
        return ''.join(S)
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the string once.
    
- Memory
    
    The memory usage is `O(N)`  since we use a stack.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)