---
title: 680 Valid Palindrome II
tags:
    - medium
---



Interesting problem with an interesting approach. Well, the problem statement is regular but the approach is nice.

We iterate over half the string and check if characters at the opposite ends are equal. If so, we shrink the window.

If we come across a mismatch, we divide the string into two parts. From `start` to `i`, and from `i` to `end`.

Now, our solution need to make a several choices.

A) Either both substrings are palindromes, in which case all is good. That was the single mismatch in the entire string, which is allowed.

B) Either left substring is a palindrome and the right is not. In this case, it works too - because we can allow only one mismatch - which is in the right partition.

C) Either right substring is a palindrome and the left is not. This works because the same logic as point B.

D) Both are not palindromes, this case does not work obviously because we are allowed only one mismatch throughout the string, and now there are two mismatches, so we return `False`.

# Code:

Python

```python
class Solution:
    def validPalindrome(self, s: str) -> bool:
        for i in range(len(s) // 2):
            if s[i] != s[~i]:
                l = s[i:~i]; r = s[i+1 : len(s) - i]

                return l == l[::-1] or r == r[::-1]
        
        return True
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N) \; where \; n=len(s)$.
    
- Memory
    
    Constant space, we aren’t using any extra data structures.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)