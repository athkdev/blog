---
title: 1614 Maximum Nesting Depth of the Parentheses
tags:
    - medium
---



This is a straightforward question and very similar to the [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/) problem. Except it’s way easier because you don’t have to worry about different parentheses, you only have the `(` parentheses.

We use a stack to keep track of starting and ending parentheses and remember the longest length of the stack: that’s our depth.

> Note: we are told that the input string is a **valid parentheses string.** So we don’t have to worry about the ordering of the parentheses.
> 

# Code:

### Python

```python
class Solution:
    def maxDepth(self, s: str) -> int:
        paren = []

        res = 0

        for c in s:
            if c == '(':
                paren.append(c)
            elif c == ')':
                if paren[0] == '(':
                    paren.pop()
            
            res = max(len(paren),res)
        
        return res
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the array atleast once.
    
- Memory
    
    The memory usage is `O(N)` since we use a stack to keep track of characters.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)